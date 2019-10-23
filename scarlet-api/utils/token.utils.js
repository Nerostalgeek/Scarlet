const jwt = require("jsonwebtoken");

const createJwtToken = function(auth) {
  return jwt.sign(
    {
      id: auth.id
    },
    process.env.JWT_SECRET,
    {
      expiresIn: 60 * 120
    }
  );
};

module.exports = {
  generateJwtToken: function(req, res, next) {
    req.token = createJwtToken(req.auth);
    return next();
  },
  sendJwtToken: function(req, res) {
    res.setHeader("x-auth-token", req.token);
    return res.status(200).json({
      token: `Bearer ${req.token}`,
      id: req.user.id,
      isVerified: req.user.isVerified
    });
  }
};
