const RentContract = require("../model/rentContract.model");

const express = require("express"),
  rentContract = express.Router();

// Route for ALL CARS
rentContract.get("/", (req, res) => {
  RentContract.find(function(err, listProfiles) {
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
rentContract.get("/:id", (req, res) => {
  const id = req.params.id;
  RentContract.findById(id, (err, car) => {
    res.json(car);
  });
});

rentContract.route("/add").post(async function(req, res) {
  try {
    const rentContract = new RentContract(req.body);
    const result = await rentContract.save();
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = rentContract;
