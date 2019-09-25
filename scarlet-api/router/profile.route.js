const Profile = require("../model/profile.model");

const express = require("express"),
  profile = express.Router();

// Route for ALL CARS
profile.get("/", (req, res) => {
  Profile.find(function(err, listProfiles) {
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
profile.get("/:id", (req, res) => {
  const id = req.params.id;
  Profile.findById(id, (err, car) => {
    res.json(car);
  });
});

profile.route("/add").post(async function(req, res) {
  try {
    const profile = new Profile(req.body);
    const result = await profile.save();
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = profile;
