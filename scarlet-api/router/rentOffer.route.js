const RentOffer = require("../model/rentOffer.model");

const express = require("express"),
  rentOffer = express.Router();

// Route for ALL CARS
rentOffer.get("/", (req, res) => {
  RentOffer.find(function(err, listProfiles) {
    if (err) {
      return err;
    } else {
      res.json(listProfiles);
    }
  })
    .populate("User")
    .select("User");
});

// Route for a specific car
rentOffer.get("/:id", (req, res) => {
  const id = req.params.id;
  RentOffer.findById(id, (err, car) => {
    res.json(car);
  });
});

rentOffer.route("/add").post(async function(req, res) {
  try {
    const rentContract = new RentOffer(req.body);
    const result = await rentContract.save();
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = rentOffer;
