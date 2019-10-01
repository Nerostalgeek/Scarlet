const CarController = require("../controller/car.controller");

const express = require("express");

car = express.Router();

// Route for ALL CARS
car.get("/", CarController.getAll);

// Route for a specific car
car.get("/:id", CarController.getById);

car.route("/add").post(CarController.addCar);

module.exports = car;
