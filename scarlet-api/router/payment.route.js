const Payment = require("../model/rentOffer.model");

const express = require("express"),
  payment = express.Router();

// Route for ALL CARS
payment.get("/", (req, res) => {
  Payment.find(function(err, listProfiles) {
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
payment.get("/:id", (req, res) => {
  const id = req.params.id;
  Payment.findById(id, (err, car) => {
    res.json(car);
  });
});

payment.route("/add").post(async function(req, res) {
  try {
    const payment = new Payment(req.body);
    const result = await payment.save();
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = payment;
