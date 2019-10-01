const CarService = require('../service/car.service');

exports.getAll = async (req, res) => {
    try {
        const carList = await CarService.getAll();
        return res.status(200).json({
            carList
        })
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.getById = async (req, res) => {
    const id = req.params.id;
    try {
        const car = await CarService.getById(id);
        return res.status(200).json({
           car
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.addCar = async (req, res) => {
    const carData = req.body;
    try {
        const car = await CarService.addCar(carData);
        return res.status(200).json({
            car
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};