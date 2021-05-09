const RentOfferService = require("../service/rentOffer.service");

exports.getAll = async (req, res) => {
  try {
    const rentOfferList = await RentOfferService.getAll();
    return res.status(200).json({
      rentOfferList
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getById = async (req, res) => {
  const id = req.params.id;
  try {
    const rentOffer = await RentOfferService.getById(id);
    return res.status(200).json({
      rentOffer
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.addRentOffer = async (req, res) => {
  const rentOfferData = req.body;
  try {
    const rentOffer = await RentOfferService.addRentOffer(rentOfferData);
    return res.status(200).json({
      rentOffer
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
