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

car.route("/add").post(async function (req, res) {
    let car = new Car(req.body);
    const result = await car.save();
    res.send(result)
        .then(car => {
            res.status(200).json({car: `car ${car.id} added successfully`});
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

module.exports = car;
