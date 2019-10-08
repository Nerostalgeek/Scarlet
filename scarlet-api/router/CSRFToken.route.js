const CSRFTokenController = require("../controller/CSRFToken.controller");
const customMiddleware = require("../middleware")

const express = require("express");
const passport = require("passport");
require("../config/passport-token.config")(passport);

CSRFToken = express.Router();
//imports our configuration file which holds our verification callbacks and things like the secret for signing.

CSRFToken.get("/", CSRFTokenController.getAll);

CSRFToken.get("/create", CSRFTokenController.getToken);

CSRFToken.get("/:id", CSRFTokenController.getById);

CSRFToken.route("/remove").delete(() => customMiddleware.CSRFToken.checkCsrfToken);

module.exports = CSRFToken;
