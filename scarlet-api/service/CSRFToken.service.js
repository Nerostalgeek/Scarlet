const CSRFToken = require("../model/CSRFToken.model");

exports.getById = async query => {
  try {
    return await CSRFToken.findById(query);
  } catch (e) {
    throw Error("Error fetching CSRF Token " + e);
  }
};

exports.getToken = async query => {
  try {
    const csrfToken = new CSRFToken(query);
    return await csrfToken.save();
  } catch (e) {
    throw Error("Error creating CSRF Token " + e);
  }
};

exports.deleteToken = async query => {
  try {
    return await CSRFToken.deleteOne(query);
  } catch (e) {
    throw Error("Error deleting CSRF Token " + e);
  }
};
