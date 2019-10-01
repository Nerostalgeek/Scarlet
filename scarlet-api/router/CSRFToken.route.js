const CSRFTokenController = require("../controller/CSRFToken.controller");

const express = require("express");
const passport = require("passport");
require("../config/passport-token.config")(passport);

CSRFToken = express.Router();
//imports our configuration file which holds our verification callbacks and things like the secret for signing.

// CSRFToken.get("/:id", CSRFTokenController.getById);

CSRFToken.route("/create").get(CSRFTokenController.getToken);

CSRFToken.route("/remove").post(CSRFTokenController.deleteToken);

module.exports = CSRFToken;
