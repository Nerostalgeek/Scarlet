const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RentContract = new Schema(
  {
    beginningAvailability: {
      type: Date,
      required: true
    },
    validFromDate: {
      type: Date,
      required: true
    },
    totalPrice: {
      type: Number,
      required: true
    },
    isConfirmed: {
      type: Boolean,
      required: false
    },
    localization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RentOffer",
      required: true
    },
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car",
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    renter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RentOffer",
      required: true
    }
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("RentContract", RentContract);
