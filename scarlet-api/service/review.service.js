const Review = require("../model/review.model");

exports.getAll = async () => {
  try {
    return await Review.find({});
  } catch (e) {
    throw Error("Error fetching reviews " + e);
  }
};

exports.getById = async query => {
  try {
    return await Review.findById(query);
  } catch (e) {
    throw Error("Error fetching review " + e);
  }
};

exports.addReview = async query => {
  try {
    const review = new Review(query);
    return await review.save();
  } catch (e) {
    throw Error("Error registering review " + e);
  }
};
