const CSRFTokenService = require("../service/CSRFToken.service");

exports.getById = async (req, res) => {
  const id = req.params.id;
  try {
    const CSRFToken = await CSRFTokenService.getById(id);
    return res.status(200).json({
      CSRFToken
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.getToken = async (req, res) => {
  const rand = () => {
    return Math.random()
      .toString(36)
      .substr(2); // remove `0.`
  };

  const token = () => {
    return rand() + rand(); // to make it longer
  };
  const getCSRFToken = { user: null, token: token() };
  try {
    const CSRFToken = await CSRFTokenService.getToken(getCSRFToken);
    return res.status(200).json({
      CSRFToken
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.deleteToken = async (req, res) => {
  const CSRFToken = req.body;
  try {
    const CSRFToken = await CSRFTokenService.deleteToken(CSRFToken);
    return res.status(200).json({
      CSRFToken
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
