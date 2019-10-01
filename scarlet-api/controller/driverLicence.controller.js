const DriverLicenceService = require("../service/driverLicence.service");

exports.getAll = async (req, res) => {
  try {
    const driverLicenceList = await DriverLicenceService.getAll();
    return res.status(200).json({
      driverLicenceList
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getById = async (req, res) => {
  const id = req.params.id;
  try {
    const driverLicence = await DriverLicenceService.getById(id);
    return res.status(200).json({
      driverLicence
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.addDriverLicence = async (req, res) => {
  const driverLicenceData = req.body;
  try {
    const driverLicence = await DriverLicenceService.addDriverLicence(
      driverLicenceData
    );
    return res.status(200).json({
      driverLicence
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
