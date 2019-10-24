const CarController = require("../controller/car.controller");

const express = require("express");

car = express.Router();

// Route for ALL CARS
car.get("/", CarController.getAll);

car.route("/get-vehicles").get(CarController.getVehicles);


// Route for a specific car
car.get("/:id", CarController.getById);

car.route("/register").post(CarController.addCar);

module.exports = car;
