const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CsrfToken = new Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        token: {
            type: String,
            required: true
        }
    },
    { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("Csrftoken", CsrfToken);
