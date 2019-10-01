const ReviewService = require('../service/review.service');

exports.getAll = async (req, res) => {
    try {
        const reviewList = await ReviewService.getAll();
        return res.status(200).json({
            reviewList
        })
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.getById = async (req, res) => {
    const id = req.params.id;
    try {
        const review = await ReviewService.getById(id);
        return res.status(200).json({
            review
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.addReview = async (req, res) => {
    const reviewData = req.body;
    try {
        const review = await ReviewService.addReview(reviewData);
        return res.status(200).json({
            review
        });
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
};