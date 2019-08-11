const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let Car = new Schema({
  type: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  transmission: {
    type: String,
    required: true
  },
  seats: {
    type: Number,
    required: true
  },
  options: {
    type: Array
  },
  price: {
    type: Number,
    required: true
  },
});

module.exports = mongoose.model("Car", Car);
