const UserController = require("../controller/user.controller");

const express = require("express");

const passport = require("passport");
require("../config/passport-config")(passport);

user = express.Router();

user.get("/", UserController.getAll);

user.get("/check-reset-token", UserController.checkResetToken);

user.get("/check-validation-token", UserController.checkValidationToken);

user.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  UserController.getById
);

user.route("/register").post(UserController.register);

user.route("/login").post(UserController.login);

user.route("/reset-password").post(UserController.resetPassword);

user.route("/update-password").put(UserController.updatePassword);

user
  .route("/resend-validation-token")
  .put(UserController.resendValidationEmail);

user.route("/validate-account").put(UserController.validateAccount);

module.exports = user;
