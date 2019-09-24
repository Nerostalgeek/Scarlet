const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let Car = new Schema(
  {
    description: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    firstRegistrationYear: {
      type: Number,
      required: true
    },
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
    kilometer: {
      type: Number,
      required: true
    },
    engine: {
      type: String,
      required: true
    },
    transmission: {
      type: String,
      required: true
    },
    seatsNumber: {
      type: Number,
      required: true
    },
    doorsNumber: {
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
    registrationCountry: {
      type: String,
      required: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("Car", Car);
