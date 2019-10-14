const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const UserService = require("../service/user.service");
const nodemailer = require("nodemailer");
const config = require("../../config.default");
const jwtSecret = config.jwtSecret;

exports.getAll = async (req, res) => {
  try {
    const userList = await UserService.getAll();
    return res.status(200).json({
      userList
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserService.getById(id);
    return res.status(200).json({
      firstName: user.firstName,
      lastName: user.lastName
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.register = async (req, res) => {
  const user = req.body.user;
  const validationToken = crypto.randomBytes(20).toString("hex");
  user.role = "user";
  user.confirmAccountToken = validationToken;
  user.confirmAccountExpires = Date.now() + 3600000;

  console.log("user   ", user);

  try {
    await UserService.register(user).then(user => {
      if (user === null) {
        console.error(
          "Error processing request after register, please try again"
        );
        res.json("Error processing request after register, please try again");
      } else {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: `${config.emailSender}`,
            pass: `${config.passwordEmail}`
          }
        });

        const mailOptions = {
          from: `${config.emailSender}`,
          to: `${user.email}`,
          subject: "Scarlet - Confirm your account!",
          text:
            `You are receiving this because you have registered into Scarlet's services. \n\n` +
            `Please click on the following link to activate your account, or paste it into your browser to complete the process within one hour of receiving it: \n\n` +
            `${config.NonApiServerUrl}/validate-account/${validationToken}\n\n` +
            `We hope that you will enjoy our services!. \n`
        };

        console.log("Sending email");

        transporter.sendMail(mailOptions, (err, response) => {
          if (err) {
            res.status(500).send({
              message:
                "A problem occurred while sending the validation account's Link. Please try again or contact us to solve this problem"
            });
          } else {
            console.log("response from email => ", response);
            res.status(200).send({
              email: user.email,
              message: "Email sent"
            });
          }
        });
      }
    });
  } catch (e) {
    res.status(500).send({
      email: user.email,
      message: "Error sending email, please try again "
    });
  }
};

exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    await UserService.login({ email }).then(user => {
      bcrypt
        .compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              id: user._id,
              lastName: user.lastName,
              firstName: user.firstName
            };
            jwt.sign(payload, jwtSecret, { expiresIn: 36000 }, (err, token) => {
              if (err)
                res.status(500).json({
                  error: "Error signing token",
                  raw: err
                });
              res.json({
                success: true,
                token: `Bearer ${token}`,
                id: user._id
              });
            });
          } else {
            throw new Error("Invalid credentials");
          }
        })
        .catch(errors => {
          errors.email = "No Account Found";
          return res.status(404).json(errors);
        });
    });
  } catch (e) {
    e.login = "Wrong credentials";
    return res.status(403).json(e);
  }
};

exports.resetPassword = async (req, res) => {
  const email = req.body.email;
  const resetToken = crypto.randomBytes(20).toString("hex");
  const update = {
    resetPasswordToken: resetToken,
    resetPasswordExpires: Date.now() + 3600000
  };
  try {
    await UserService.resetPassword({ email, update }).then(user => {
      if (user === null) {
        console.error("Email not in database");
        res.json("Email was not found in the database");
      } else {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: `${config.emailSender}`,
            pass: `${config.passwordEmail}`
          }
        });

        const mailOptions = {
          from: `${config.emailSender}`,
          to: `${user.email}`,
          subject: "Scarlet - Reset your password",
          text:
            `You are receiving this because you (or someone else) have requested the reset of the password for your account. \n\n` +
            `Please click on the following link, or paste it into your browser to complete the process within one hour of receiving it: \n\n` +
            `${config.NonApiServerUrl}/reset-password/${resetToken}\n\n` +
            `If you did not request this, please ignore this email and your password will remain unchanged. \n`
        };

        console.log("Sending email");

        transporter.sendMail(mailOptions, (err, response) => {
          if (err) {
            res.status(500).send({
              message:
                "A problem occurred while sending the reset Link. Please try again or contact us to solve this problem"
            });
          } else {
            console.log("response from email => ", response);
            res.status(200).send({
              email: user.email,
              message: "Email sent"
            });
          }
        });
      }
    });
  } catch (e) {
    res.status(500).send({
      email: user.email,
      message: "Error sending email, please try again "
    });
  }
};

exports.checkResetToken = async (req, res) => {
  const resetToken = req.query.resetToken;
  try {
    await UserService.checkResetToken({ resetToken }).then(user => {
      console.log("user :: ", user);
      if (user === null) {
        res.status(403).send({
          message: "The Reset password token is no longer valid"
        });
        console.error("Reset token is no longer valid");
      } else {
        res.status(200).send({
          email: user.email,
          message: "Password reset link a-ok"
        });
      }
    });
  } catch (e) {
    console.log("error in checkresetToken controller => ", e);
  }
};

exports.updatePassword = async (req, res) => {
  const BCRYPT_SALT_ROUNDS = 12;
  const email = req.body.email;
  const password = req.body.password;
  const saltedPassword = bcrypt.hashSync(password, BCRYPT_SALT_ROUNDS);
  const update = {
    password: saltedPassword,
    resetPasswordToken: null,
    resetPasswordExpires: null
  };
  if (email) {
    await UserService.updatePassword({ email, update }).then(
      res.status(200).send({
        message: "Password successfully reset"
      })
    );
  }
};

exports.checkValidationToken = async (req, res) => {
  const validationToken = req.query.validationToken;
  try {
    await UserService.checkValidationToken({ validationToken }).then(user => {
      console.log("user :: ", user);
      if (user === null) {
        res.status(403).send({
          message: "The Validation account token is no longer valid"
        });
        console.error("Validation account token is no longer valid");
      } else {
        res.status(200).send({
          email: user.email,
          message: "Validation account link a-ok"
        });
      }
    });
  } catch (e) {
    console.log("error in checkValidationTokenController  => ", e);
  }
};

exports.validateAccount = async (req, res) => {
  const email = req.body.email;
  const update = {
    isVerified: true,
    confirmAccountToken: null,
    confirmAccountExpires: null
  };
  if (email) {
    await UserService.validateAccount({ email, update }).then(
      res.status(200).send({
        message: "Password successfully reset"
      })
    );
  }
};

//Check to make sure header is not undefined, if so, return Forbidden (403)
exports.checkJwtToken = (req, res, next) => {
  const header = req.headers["authorization"];

  if (typeof header !== "undefined") {
    const bearer = header.split(" ");
    req.token = bearer[1];
    next();
  } else {
    //If header is undefined return Forbidden (403)
    res.sendStatus(403);
  }
};
