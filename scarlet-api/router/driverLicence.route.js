const DriverLicenceController = require("../controller/driverLicence.controller");

const express = require("express"),
  driverLicence = express.Router();

driverLicence.get("/", DriverLicenceController.getAll);

driverLicence.get("/:id", DriverLicenceController.getById);

driverLicence.route("/add").post(DriverLicenceController.addDriverLicence);

module.exports = driverLicence;
