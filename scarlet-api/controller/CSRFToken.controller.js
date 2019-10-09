const CSRFTokenService = require("../service/CSRFToken.service");

exports.getAll = async (req, res) => {
  try {
    const CsrfTokenList = await CSRFTokenService.getAll();
    return res.status(200).json({
      CsrfTokenList
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

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
  const user = req.body.user;
  const rand = () => {
    return Math.random()
      .toString(36)
      .substr(2); // remove `0.`
  };

  const token = () => {
    return rand() + rand() + rand(); // to make it longer
  };

  const getCSRFToken = { user: user, token: token() };
  try {
    const CSRFToken = await CSRFTokenService.getToken(getCSRFToken);
    return res.status(200).json({
      CSRFToken
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
