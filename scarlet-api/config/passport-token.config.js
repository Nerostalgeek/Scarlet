//passport-config.js
//Let's import some things!
//this is using ES6 Destructuring. If you're not using a build step,
const { Strategy, ExtractJwt } = require("passport-jwt");
//this could cause issues and is equivalent to
// const pp-jwt = require('passport-jwt');
// const Strategy = pp-jwt.Strategy;
// const ExtractJwt = pp-jwt.ExtractJwt;
const config = require("../../config.default");
const secret = config.jwtSecret;
const mongoose = require("mongoose");
const User = require("../model/user.model");
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret
};
//this sets how we handle tokens coming from the requests that come
// and also defines the key to be used when verifying the token.
module.exports = passport => {
  passport.use(
    new Strategy(opts, (payload, done) => {
      User.findById(payload.id)
        .then(user => {
          if (user) {
            return done(null, {
              user: user.id
            });
          } else if (!user) {
            return done(null, {
              user: null
            });
          }
          return done(null, false);
        })
        .catch(err => console.error(err));
    })
  );
};
