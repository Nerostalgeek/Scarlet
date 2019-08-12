const Car = require("../model/car.model");

const express = require("express"),
    car = express.Router();


// Route for ALL CARS
car.get("/", (req, res) => {
    Car.find(function (err, listCars) {
        if (err) {
            return err;
        } else {
            res.json(listCars);
        }
    })
        .populate('User')
        .select('User')

});

// Route for a specific car
car.get("/:id", (req, res) => {
    const id = req.params.id;
    Car.findById(id, (err, car) => {
        res.json(car);
    });
});

car.route("/add").post(async function (req, res) {
    try {
        const car = new Car(req.body);
        const result = await car.save();
        res.send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = car;
