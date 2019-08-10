const Car = require("../models/car.model");

const express = require("express"),
    car = express.Router();


// Route for ALL CARS
car.get("/", (req, res) => {
    Car.find(function (err, listCars) {
        if (err) {
            console.log(err);
        } else {
            res.json(listCars);
        }
    });
});

// Route for a specific car
car.get("/:id", (req, res) => {
    let id = req.params.id;
    Car.findById(id, (err, car) => {
        res.json(car);
    });
});

car.route("/add").post(function (req, res) {
    let carInfos = req.body;
    let newCar = new Car({
        type: carInfos.type,
        brand: carInfos.brand,
        model: carInfos.model,
        color: carInfos.color,
        transmission: carInfos.transmission,
        seats: carInfos.seats,
        options: carInfos.options,
        price: carInfos.price
    });
    newCar.save()
        .then(car => {
            res.status(200).json({car: `car ${car.id} added successfully`});
        })
        .catch(err => {
            res.status(400).send("Error adding new car");
        });
});

module.exports = car;
