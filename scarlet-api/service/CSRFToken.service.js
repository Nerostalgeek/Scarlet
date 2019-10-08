const CSRFToken = require("../model/CSRFToken.model");

exports.getAll = async () => {
  try {
    return await CSRFToken.find({});
  } catch (e) {
    throw Error("Error fetching CSRF Token list " + e);
  }
};

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
  const token = query.CSRFToken.token;
  const user = query.CSRFToken.user;
  console.log('query: ', query.CSRFToken._id);
  try {
    const tokenToDelete = CSRFToken.find({token: token}).where('user', user)
    return await tokenToDelete.deleteOne();
  } catch (e) {
    throw Error("Error deleting CSRF Token " + e);
  }
};
