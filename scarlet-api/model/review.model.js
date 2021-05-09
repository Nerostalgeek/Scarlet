const mongoose = require("mongoose");

// Get the Schema constructor
const Schema = mongoose.Schema;

const ReviewSchema = new Schema(
  {
    stars: {
      type: Number,
      required: true
    },
    review: {
      type: String,
      required: true
    }
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("Review", ReviewSchema);
