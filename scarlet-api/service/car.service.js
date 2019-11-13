const Car = require("../model/car.model");
const Vehicle = require("../model/vehicle.model");

exports.getAll = async () => {
  try {
    return await Car.find({});
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

exports.register = async query => {
  console.log("QUERY =>=>=>=>=>", query);
  try {
    const car = new Car(query);
    return await car.save();
  } catch (e) {
    throw Error("Error registering car " + e);
  }
};
