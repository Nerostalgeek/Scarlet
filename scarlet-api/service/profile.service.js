const Profile = require("../model/profile.model");

exports.getAll = async () => {
  try {
    return await Profile.find({});
  } catch (e) {
    throw Error("Error fetching profiles " + e);
  }
};

exports.getById = async query => {
  try {
    return await Profile.findById(query);
  } catch (e) {
    throw Error("Error fetching profile " + e);
  }
};

exports.addCar = async query => {
  try {
    const profile = new Profile(query);
    return await profile.save();
  } catch (e) {
    throw Error("Error registering profile " + e);
  }
};
