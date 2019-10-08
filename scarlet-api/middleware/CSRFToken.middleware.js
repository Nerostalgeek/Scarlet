const CSRFTokenService = require("../service/CSRFToken.service");

module.exports = async function checkCsrfToken (req, res, next)  {
    CSRFToken = JSON.stringify(req.body.CSRFTokenObject);
    try {

        const deletedToken = await CSRFTokenService.deleteToken(CSRFToken);
    console.log('req -->', req.body.CSRFTokenObject)

        return res.status(200).json({
          deletedToken
        });
      } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
      }
    next();
}