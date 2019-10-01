const ReviewController = require("../controller/review.controller");

const express = require("express"),
  review = express.Router();

review.get("/", ReviewController.getAll);

review.get("/:id", ReviewController.getById);

review.route("/add").post(ReviewController.addReview);

module.exports = review;
