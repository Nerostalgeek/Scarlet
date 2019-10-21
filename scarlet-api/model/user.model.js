const jwt = require("jsonwebtoken");
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
      trim: true,
      unique: true,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      required: true
    },
    password: {
      type: String
        },
    admin: {
      type: Boolean,
      required: true
    },
    resetPasswordToken: {
      type: String,
      required: false
    },
    resetPasswordExpires: {
      type: Date,
      required: false
    },
    confirmAccountToken: {
      type: String,
      required: false
    },
    confirmAccountExpires: {
      type: Date,
      required: false
    },
    isVerified: {
      type: Boolean,
      required: true,
      default: false
    },
    facebookProvider: {
      type: {
        id: String,
        token: String
      },
      select: false
    },
    googleProvider: {
      type: {
        id: String,
        token: String
      },
      select: false
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

User.statics.upsertFbUser = function(accessToken, refreshToken, profile, cb) {
  let that = this;

  return this.findOne(
    {
      "facebookProvider.id": profile.id
    },
    function(err, user) {
      // no user was found, lets create a new one
      if (!user) {
        const newUser = new that({
          firstName: profile.name.familyName,
          lastName: profile.name.givenName,
          email: profile.emails[0].value,
          admin: false,
          isVerified: true,
          facebookProvider: {
            id: profile.id,
            token: accessToken
          }
        });

        newUser.save(function(error, savedUser) {
          if (error) {
            console.log(error);
          }
          return cb(error, savedUser);
        });
      } else {
        return cb(err, user);
      }
    }
  );
};

User.statics.upsertGoogleUser = function(
  accessToken,
  refreshToken,
  profile,
  cb
) {
  let that = this;
  return this.findOne(
    {
      "googleProvider.id": profile.id
    },
    function(err, user) {
      // no user was found, lets create a new one
      if (!user) {
        const newUser = new that({
          firstName: profile.name.familyName,
          lastName: profile.name.givenName,
          email: profile.emails[0].value,
          admin: false,
          isVerified: true,
          facebookProvider: {
            id: profile.id,
            token: accessToken
          }
        });

        newUser.save(function(error, savedUser) {
          if (error) {
            console.log(error);
          }
          return cb(error, savedUser);
        });
      } else {
        return cb(err, user);
      }
    }
  );
};
module.exports = mongoose.model("User", User);
