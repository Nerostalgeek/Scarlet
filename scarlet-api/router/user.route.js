const UserController = require('../controller/user.controller');

const express = require("express");

const passport = require("passport");


user = express.Router();

user.get("/", UserController.getAll);

user.get("/:id", passport.authenticate("jwt", {session: false}), UserController.getById);

user.route("/register").post(UserController.register);

user.route("/login").post(UserController.login);

module.exports = user;
