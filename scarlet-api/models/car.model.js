const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let Car = new Schema({
  type: {
    type: String
  },
  brand: {
    type: String
  },
  model: {
    type: String
  },
  color: {
    type: String
  },
  transmission: {
    type: String
  },
  seats: {
    type: Number
  },
  options: {
    type: Array
  },
  price: {
    type: Number
  },
});

module.exports = mongoose.model("Car", Car);
