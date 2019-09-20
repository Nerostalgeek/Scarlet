const User = require("../model/user.model");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const config = require("../../config.default");

const secret = config.secretPassport;

user = express.Router();

// Route for ALL USERS
user.get("/", (req, res) => {
  User.find(function(err, listUsers) {
    if (err) {
      console.log(err);
    } else {
      res.json(listUsers);
    }
  });
});

// Route for a specific user
user.get("/:id", (req, res) => {
  let id = req.params.id;
  User.findById(id, (err, user) => {
    res.json(user);
  });
});

user.route("/register").post(async function(req, res) {
  try {
    const user = new User(req.body);
    const result = await user.save();
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

user.route("/login").post(async (req, res) => {
  const email = await req.body.email;
  const password = await req.body.password;
  User.findOne({ email })
    .then(user => {
      bcrypt
        .compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              id: user._id,
              lastName: user.lastName,
              firstName: user.firstName
            };
            jwt.sign(payload, secret, { expiresIn: 36000 }, (err, token) => {
              if (err)
                res.status(500).json({
                  error: "Error signing token",
                  raw: err
                });
              res.json({
                success: true,
                token: `Bearer ${token}`
              });
            });
          } else {
            throw new Error("Invalid credentials");
          }
        })
        .catch(err => {
          err = "Email or password is incorrect";
          return res.status(400).json(err);
        });
    })
    .catch(errors => {
      errors.email = "No Account Found";
      return res.status(404).json(errors);
    });
});

module.exports = user;
