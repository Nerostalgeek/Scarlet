const config = require('../config.default');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {log, ExpressAPILogMiddleware} = require("@rama41222/node-logger");

// Import mongoose
const mongoose = require("mongoose");
const passport = require('passport');
const userRoute = require("./router/user.route");
const carRoute = require("./router/car.route");


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

// Setup MongoDB connection
mongoose.connect(config.mongodbUrl, {
    useNewUrlParser: true
});

const connection = mongoose.connection;
connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
});

//initializes the passport configuration.
app.use(passport.initialize());
//imports our configuration file which holds our verification callbacks and things like the secret for signing.
require('./config/passport-config')(passport);

app.get("/", function (req, res) {
    res.send("Main index");
});

app.use("/users", userRoute);
app.use("/cars", carRoute);

app.listen(config.settings.port, config.settings.host, e => {
    if (e) {
        throw new Error("Internal Server Error");
    }
    logger.info(`${config.settings.name} running on ${config.settings.host}:${config.settings.port}`);
});
