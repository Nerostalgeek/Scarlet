const DriverLicence = require("../model/driverLicence.model");

const express = require("express"),
  driverLicence = express.Router();

// Route for ALL CARS
driverLicence.get("/", (req, res) => {
  DriverLicence.find(function(err, listProfiles) {
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
driverLicence.get("/:id", (req, res) => {
  const id = req.params.id;
  DriverLicence.findById(id, (err, car) => {
    res.json(car);
  });
});

driverLicence.route("/add").post(async function(req, res) {
  try {
    const rentContract = new DriverLicence(req.body);
    const result = await rentContract.save();
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = driverLicence;
