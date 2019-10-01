const Review = require("../model/rentOffer.model");

const express = require("express"),
  review = express.Router();

review.get("/", (req, res) => {
  Review.find(function(err, listProfiles) {
    if (err) {
      return err;
    } else {
      res.json(listProfiles);
    }
  })
    .populate("User")
    .select("User");
});

review.get("/:id", (req, res) => {
  const id = req.params.id;
  Review.findById(id, (err, car) => {
    res.json(car);
  });
});

review.route("/add").post(async function(req, res) {
  try {
    const review = new Review(req.body);
    const result = await review.save();
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = review;
