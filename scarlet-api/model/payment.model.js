const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Payment = new Schema(
  {
    cardNumber: String,
    creditCardYear: String,
    creditCardMonth: String,
    cws: String,
    paymentType: String
  },
  { _id: false }
);

module.exports = mongoose.model("Payment", Payment);
