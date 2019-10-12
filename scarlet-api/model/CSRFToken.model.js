const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CSRFToken = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false
    },
    token: {
      type: String,
      required: true
    }
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("Csrftoken", CSRFToken);
