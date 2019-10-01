const config = require("../config.default");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {log, ExpressAPILogMiddleware} = require("@rama41222/node-logger");

const mongoose = require("mongoose");
const passport = require("passport");

// ********* ROUTE IMPORTS *********
const userRoute = require("./router/user.route");
const carRoute = require("./router/car.route");
const profileRoute = require("./router/profile.route");
const driverLicenceRoute = require("./router/driverLicence.route");
const rentOfferRoute = require("./router/rentOffer.route");
const rentContractRoute = require("./router/rentContract.route");
const reviewRoute = require("./router/review.route");
// *********************************

const app = express();
app.use(cors());

const logger = log({console: true, file: false, label: config.settings.name});

//Body Parser
const urlencodedParser = bodyParser.urlencoded({
    extended: true
});
app.use(urlencodedParser);
app.use(bodyParser.json());
app.use(ExpressAPILogMiddleware(logger, {request: true}));

//initializes the passport configuration.
app.use(passport.initialize());
require("./config/passport-config")(passport);
//imports our configuration file which holds our verification callbacks and things like the secret for signing.

// Setup MongoDB connection
mongoose.connect(config.mongodbUrl, {
    useNewUrlParser: true
});

const connection = mongoose.connection;
connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
});

// ********* USER ROUTE *********
app.use("/users", userRoute);

// ********* CAR ROUTE *********
app.use("/cars", carRoute);

// ********* PROFILE ROUTE *********
app.use("/profiles", profileRoute);

// ********* DRIVER LICENCE ROUTE *********
app.use("/driver-licences", driverLicenceRoute);

// ********* RENT OFFER ROUTE *********
app.use("/rent-offers", rentOfferRoute);

// ********* RENT CONTRACT ROUTE *********
app.use("/rent-contracts", rentContractRoute);

// ********* REVIEW ROUTE *********
app.use("/reviews", reviewRoute);


app.listen(config.settings.port, config.settings.host, e => {
    if (e) {
        throw new Error("Internal Server Error");
    }
    logger.info(
        `${config.settings.name} running on ${config.settings.host}:${config.settings.port}`
    );
});
