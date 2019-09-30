const User = require("../model/user.model");
const UserController = require('../controller/user.controller');

const express = require("express");

const passport = require("passport");



user = express.Router();



// Route for ALL USERS
user.get("/", (req, res) => {
    User.find(function (err, listUsers) {
        if (err) {
            console.log(err);
        } else {
            res.json(listUsers);
        }
    });
});

// Route for a specific user
user.get("/:id", passport.authenticate("jwt", {session: false}), UserController.getById);

user.route("/register").post(UserController.register);

user.route("/login").post(UserController.login);

module.exports = user;
