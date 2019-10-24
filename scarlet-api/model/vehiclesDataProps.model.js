const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const VehiclesDataProp = new Schema(
  {
    fuelType: {
      type: String,
    },
    fuelType1: {
      type: String,
    },
    make: {
      type: String,
    },
    model: {
      type: String,
    },
    trany: {
      type: String,
    },
    VClass: {
      type: String
    },
    year: {
      type: Number
    }
  });

module.exports = mongoose.model("vehiclesDataProp", VehiclesDataProp);
