const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let DriverLicence = new Schema(
  {
    licenceNumber: {
      type: String,
      required: true
    },
    validFromDate: {
      type: Date,
      required: true
    },
    issuingCountry: {
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

module.exports = mongoose.model("DriverLicence", DriverLicence);
