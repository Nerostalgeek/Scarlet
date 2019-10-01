const ProfileController = require('../controller/profile.controller');

const express = require("express"),
  profile = express.Router();

// Route for ALL CARS
profile.get("/", ProfileController.getAll);

// Route for a specific car
profile.get("/:id", ProfileController.getById);

profile.route("/add").post(ProfileController.addProfile);

module.exports = profile;
