const config = require("../config.default");
const express = require("express");
const bodyParser = require("body-parser");
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const { log, ExpressAPILogMiddleware } = require("@rama41222/node-logger");
const mongoose = require("mongoose");
const passport = require("passport");

// ********* ROUTE IMPORTS *********
const router = require("./router");
// *********************************
const app = express();
app.use(
  cors({
    origin: config.NonApiServerUrl
  })
);

const logger = log({ console: true, file: false, label: config.settings.name });

// CSRF Token protection
const csrfMiddleware = csurf({
  cookie: true
});
//Body Parser
const urlencodedParser = bodyParser.urlencoded({
  extended: true
});
app.use(urlencodedParser);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(csrfMiddleware);

app.use(ExpressAPILogMiddleware(logger, { request: true }));

//initializes the passport configuration.
app.use(passport.initialize());
require("./config/passport-config")(passport);
//imports our configuration file which holds our verification callbacks and things like the secret for signing.

// Setup MongoDB connection
mongoose.connect(config.mongodbUrl, {
  useNewUrlParser: true
});

const connection = mongoose.connection;
connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

    // ********* USER ROUTE *********
app.use("/users", router.User);

// ********* CAR ROUTE *********
app.use("/cars", router.Car);

// ********* PROFILE ROUTE *********
app.use("/profiles", router.Profile);

// ********* DRIVER LICENCE ROUTE *********
app.use("/driver-licences", router.DriverLicence);

// ********* RENT OFFER ROUTE *********
app.use("/rent-offers", router.RentOffer);

// ********* RENT CONTRACT ROUTE *********
app.use("/rent-contracts", router.RentContract);

// ********* REVIEW ROUTE *********
app.use("/reviews", router.Review);

app.listen(config.settings.port, config.settings.host, e => {
  if (e) {
    throw new Error("Internal Server Error");
  }
  logger.info(
    `${config.settings.name} running on ${config.settings.host}:${config.settings.port}`
  );
});
