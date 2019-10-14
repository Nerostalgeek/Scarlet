const User = require("../model/user.model");

exports.getAll = async () => {
  try {
    return await User.find({});
  } catch (e) {
    throw Error("Error fetching userList " + e);
  }
};

exports.getById = async query => {
  try {
    return await User.findById(query);
  } catch (e) {
    throw Error("Error fetching user " + e);
  }
};

exports.register = async query => {
  try {
    const user = new User(query);
    return await user.save();
  } catch (e) {
    throw Error("Error registering user " + e);
  }
};

exports.login = async query => {
  try {
    return await User.findOne(query);
  } catch (e) {
    throw Error("Error login user " + e);
  }
};

exports.resetPassword = async query => {
  try {
    const email = query.email;
    const updateData = query.update;

    return await User.findOneAndUpdate(
      { email },
      { $set: updateData },
      { useFindAndModify: false }
    );
  } catch (e) {
    throw Error("Error resetting password " + e);
  }
};

exports.checkResetToken = async query => {
  try {
    console.log(
      "query in checkReset:   ",
      query,
      "date now -> -> ->",
      Date.now()
    );
    return await User.findOne({ resetPasswordToken: query.resetToken }).where(
      "resetPasswordExpires",
      {
        $gte: Date.now()
      }
    );
  } catch (e) {
    throw Error("Error checking Reset token " + e);
  }
};

exports.updatePassword = async query => {
  try {
    const email = query.email;
    const updateData = query.update;
    console.log("query in update password service", query);
    return await User.findOneAndUpdate(
      { email },
      { $set: updateData },
      { useFindAndModify: false }
    );
  } catch (e) {
    throw Error("Error updating password " + e);
  }
};

exports.setValidationToken = async query => {
  try {
    const email = query.email;
    const updateData = query.update;

    return await User.findOneAndUpdate(
      { email },
      { $set: updateData },
      { useFindAndModify: false }
    );
  } catch (e) {
    throw Error("Error setting validation token " + e);
  }
};

exports.checkValidationToken = async query => {
  try {
    return await User.findOne({
      confirmEmailToken: query.validationToken
    }).where("confirmEmailExpires", {
      $gte: Date.now()
    });
  } catch (e) {
    throw Error("Error checking validation token " + e);
  }
};

exports.validateEmail = async query => {
  try {
    const email = query.email;
    const updateData = query.update;
    console.log("query in update password service", query);
    return await User.findOneAndUpdate(
      { email },
      { $set: updateData },
      { useFindAndModify: false }
    );
  } catch (e) {
    throw Error("Error while validating email  " + e);
  }
};
