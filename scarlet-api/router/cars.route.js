const CarModel = require("../models/car.model");

const mongoose = require("mongoose");

const express = require("express"),
  carRoute = express.Router();

// CAR ROUTER

// Route for ALL CARS
carRoute.get("/", (req, res) => {
  CarModel.find(function(err, listCars) {
    if (err) {
      console.log(err);
    } else {
      res.json(listCars);
    }
  });
});

// Route for a specific car
carRoute.get("/:id", (req, res) => {
  let id = req.params.id;
  CarModel.findById(id, (err, car) => {
    res.json(car);
  });
});

carRoute.route("/add").post(function(req, res) {
  let carInfos = req.body;
  console.log(carInfos);
  let newCar = new CarModel({
    firstName: carInfos.firstName,
    lastName: carInfos.lastName,
    email: carInfos.email,
    role: carInfos.role
  });
  newCar
    .save()
    .then(car => {
      console.log("car => => =>", car);
      res.status(200).json({ car: `car ${car.id} added successfully` });
    })
    .catch(err => {
      res.status(400).send("Error adding new car");
      console.log("err => =>", err);
    });
});

module.exports = carRoute;
