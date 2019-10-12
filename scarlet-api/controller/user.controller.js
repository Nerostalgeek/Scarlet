const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserService = require("../service/user.service");
const crypto = require("crypto");
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
  const userData = req.body;
  try {
    const user = await UserService.register(userData);
    return res.status(200).json({
      user
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
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
  console.log("email blabla -> ", email);
  try {
    console.log("email -> ", email);
    await UserService.resetPassword({ email }).then(user => {
      if (user === null) {
        console.error("Email not in database");
        res.json("Email was not found in the database");
      } else {
        const resetToken = crypto.randomBytes(20).toString("hex");
        console.log("token crypto -> ", resetToken, user);
        user.update({
          resetPasswordToken: resetToken,
          resetPasswordExpires: Date.now() + 360000
        });

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
            `You are receiving this because you (or someone else) have requested the reset of te password for your account. \n\n` +
            `Please click on the following link, or paste it into your browser to complete the process within one hour of receiving it: \n\n` +
            `${config.NonApiServerUrl}/reset/${resetToken}\n\n` +
            `If you did not request this, please ignore this email and your password will remain unchanged. \n`
        };

        console.log("Sending email");

        transporter.sendMail(mailOptions, (err, response) => {
          if (err) {
          } else {
            console.log("response from email => ", response);
          }
        });
      }
    });
  } catch (e) {}
};
