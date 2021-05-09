const mongooseIntlPhoneNumber = require("mongoose-intl-phone-number");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const Profile = new Schema(
  {
    photo: {
      type: String,
      required: false
    },
    address: {
      type: String,
      required: false
    },
    addressSecondLine: {
      type: String,
      required: false
    },
    postalCode: {
      type: String,
      required: false
    },
    city: {
      type: String,
      required: false
    },
    birthDate: {
      type: Date,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    aboutMe: {
      type: String,
      required: false
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    review: {
      type: Schema.Types.ObjectId,
      ref: "Review"
    }
  },
  { timestamps: { createdAt: "created_at" } }
);

Profile.plugin(mongooseIntlPhoneNumber, {
  hook: "validate",
  phoneNumberField: "phoneNumber",
  nationalFormatField: "nationalFormat",
  internationalFormat: "internationalFormat",
  countryCodeField: "countryCode"
});

Profile.pre("save", function(next) {
  mongoose.models["Profile"].findOne(
    { phoneNumber: this.phoneNumber },
    function(err, profile) {
      if (!profile) {
        next();
      } else {
        const err = new Error("Phone is already used");
        next(err);
      }
    }
  );
});

module.exports = mongoose.model("Profile", Profile);
