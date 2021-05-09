const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RentOffer = new Schema(
  {
    beginningAvailability: {
      type: Date,
      required: true
    },
    endingAvailability: {
      type: Date,
      required: true
    },
    localization: {
      type: Object,
      required: true
    },
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car",
      required: true
    },
    renter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("RentOffer", RentOffer);
