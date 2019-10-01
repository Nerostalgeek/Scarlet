const ProfileService = require("../service/profile.service");

exports.getAll = async (req, res) => {
  try {
    const profileList = await ProfileService.getAll();
    return res.status(200).json({
      profileList
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getById = async (req, res) => {
  const id = req.params.id;
  try {
    const profile = await ProfileService.getById(id);
    return res.status(200).json({
      profile
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.addProfile = async (req, res) => {
  const profileData = req.body;
  try {
    const profile = await ProfileService.addCar(profileData);
    return res.status(200).json({
      profile
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
