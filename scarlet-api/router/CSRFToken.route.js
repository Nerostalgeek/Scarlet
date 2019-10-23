const CSRFTokenController = require("../controller/CSRFToken.controller");
const customMiddleware = require("../middleware/CSRFToken.middleware");

const express = require("express");

CSRFToken = express.Router();
//imports our configuration file which holds our verification callbacks and things like the secret for signing.

CSRFToken.get("/", CSRFTokenController.getAll);

CSRFToken.post("/create", CSRFTokenController.getToken);

CSRFToken.get("/:id", CSRFTokenController.getById);

CSRFToken.delete("/remove", customMiddleware.checkCsrfToken);

module.exports = CSRFToken;
