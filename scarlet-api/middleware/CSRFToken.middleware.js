const CSRFTokenService = require("../service/CSRFToken.service");

exports.checkCsrfToken = async (req, res, next) => {
  CSRFToken = req.body.CSRFTokenObject;
  try {
    await CSRFTokenService.deleteToken({ CSRFToken });
    next();
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
