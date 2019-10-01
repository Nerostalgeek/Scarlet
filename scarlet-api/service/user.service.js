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

//Check to make sure header is not undefined, if so, return Forbidden (403)
exports.checkToken = (req, res, next) => {
  const header = req.headers["authorization"];

  if (typeof header !== "undefined") {
    const bearer = header.split(" ");
    req.token = bearer[1];
    next();
  } else {
    //If header is undefined return Forbidden (403)
    res.sendStatus(403);
  }
};
