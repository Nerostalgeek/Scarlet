const Car = require("../model/car.model");
const VehiclesDataProp = require("../model/vehiclesDataProps.model")

exports.getVehicles = async () => {
  try {
    return await VehiclesDataProp.find({});
  } catch (e) {
    throw Error("Error fetching car " + e);
  }
};

exports.getById = async query => {
  try {
    return await Car.findById(query);
  } catch (e) {
    throw Error("Error fetching car " + e);
  }
};

exports.addCar = async query => {
  try {
    const car = new Car(query);
    return await car.save();
  } catch (e) {
    throw Error("Error registering car " + e);
  }
};
