//passport-config.js
const passport = require("passport");

//Let's import some things!
//this is using ES6 Destructuring. If you're not using a build step,
const { Strategy, ExtractJwt } = require("passport-jwt");
//this could cause issues and is equivalent to
// const pp-jwt = require('passport-jwt');
// const Strategy = pp-jwt.Strategy;
// const ExtractJwt = pp-jwt.ExtractJwt;
const secret = process.env.JWT_SECRET;
const FacebookTokenStrategy = require("passport-facebook-token");
const GoogleTokenStrategy = require("passport-google-token").Strategy;
const User = require("../model/user.model");
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret
};
module.exports = function() {
  passport.use(
    new Strategy(opts, (payload, done) => {
      User.findById(payload.id)
        .then(user => {
          if (user) {
            return done(null, {
              id: user.id,
              firstName: user.firstName,
              email: user.email
            });
          }
          return done(null, false);
        })
        .catch(err => console.error(err));
    })
  );

  passport.use(
    new FacebookTokenStrategy(
      {
        clientID: process.env.FACEBOOK_AUTH_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_AUTH_CLIENT_SECRET
      },
      function(accessToken, refreshToken, profile, done) {
        User.upsertFbUser(accessToken, refreshToken, profile, function(
          err,
          user
        ) {
          return done(err, user);
        });
      }
    )
  );

  passport.use(
    new GoogleTokenStrategy(
      {
        clientID: process.env.GOOGLE_AUTH_CLIENT_ID,
        clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET
      },
      function(accessToken, refreshToken, profile, done) {
        User.upsertGoogleUser(accessToken, refreshToken, profile, function(
          err,
          user
        ) {
          return done(err, user);
        });
      }
    )
  );
};
