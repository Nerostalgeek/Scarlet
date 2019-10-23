const CSRFTokenService = require("../service/CSRFToken.service");

exports.checkCsrfToken = async (req, res, next) => {
  if (req.url.includes("/users/auth")) {
    return next();
  } else {
    CSRFToken = req.body.CSRFTokenObject;
    try {
      await CSRFTokenService.deleteToken({ CSRFToken });
      next();
    } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
    }
  }
};
