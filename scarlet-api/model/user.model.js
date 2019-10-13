const jwt = require("jsonwebtoken");
const validator = require("validator");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      validate: {
        validator: validator.isEmail,
        message: "{VALUE} is not a valid email",
        isAsync: false
      },
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    resetPasswordToken: {
      type: String,
      required: false
    },
    resetPasswordExpires: {
      type: Date,
      required: false
    }
  },
  { timestamps: { createdAt: "created_at" } }
);

User.pre("save", function(next) {
  mongoose.models["User"].findOne({ email: this.email }, function(err, user) {
    if (!user) {
      next();
    } else {
      const err = new Error("Email is already used");
      next(err);
    }
  });
});
User.pre("save", function(next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 12);
  next();
});
User.methods.comparePassword = function(plaintext, callback) {
  return callback(null, bcrypt.compareSync(plaintext, this.password));
};

User.methods.getToken = function() {
  return jwt.encode(config.secret);
};

module.exports = mongoose.model("User", User);
