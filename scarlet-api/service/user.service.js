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
    return await User.findOneAndUpdate(
      { email },
      { $set: updateData },
      { useFindAndModify: false }
    );
  } catch (e) {
    throw Error("Error while updating password " + e);
  }
};

exports.checkValidationToken = async query => {
  try {
    return await User.findOne({
      confirmAccountToken: query.validationToken
    }).where("confirmAccountExpires", {
      $gte: Date.now()
    });
  } catch (e) {
    throw Error("Error while checking validation token " + e);
  }
};

exports.validateAccount = async query => {
  try {
    const email = query.email;
    const updateData = query.update;
    return await User.findOneAndUpdate(
      { email },
      { $set: updateData },
      { useFindAndModify: false }
    );
  } catch (e) {
    throw Error("Error while validating account  " + e);
  }
};

exports.resendValidationEmail = async query => {
  try {
    const email = query.email;
    const updateData = query.update;
    return await User.findOneAndUpdate(
      { email },
      { $set: updateData },
      { useFindAndModify: false }
    );
  } catch (e) {
    throw Error("Error while resending validation email  " + e);
  }
};
