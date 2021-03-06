const CarService = require("../service/car.service");

exports.getAll = async (req, res) => {
  try {
    const carList = await CarService.getAll();
    return res.status(200).json({
      carList
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
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
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.register = async (req, res) => {
  const carData = req.body.car;

  try {
    const car = await CarService.register(carData);
    return res.status(200).json({
      car
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getVehicles = async (req, res) => {
  try {
    const vehicles = await CarService.getVehicles();
    return res.status(200).json({
      vehicles
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
