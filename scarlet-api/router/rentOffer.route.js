const RentOfferController = require("../controller/rentOffer.controller");

const express = require("express"),
  rentOffer = express.Router();

// Route for ALL CARS
rentOffer.get("/", RentOfferController.getAll);

// Route for a specific car
rentOffer.get("/:id", RentOfferController.getById);

rentOffer.route("/add").post(RentOfferController.addRentOffer);

module.exports = rentOffer;
