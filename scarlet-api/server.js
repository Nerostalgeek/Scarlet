const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { log, ExpressAPILogMiddleware } = require("@rama41222/node-logger");

// Import mongoose
const mongoose = require("mongoose");
const userRoute = require("./router/user.route");

const config = {
  name: "scarlet-api",
  port: 6200,
  host: "0.0.0.0"
};

const app = express();
const logger = log({ console: true, file: false, label: config.name });

//Body Parser
var urlencodedParser = bodyParser.urlencoded({
  extended: true
});
app.use(urlencodedParser);
app.use(bodyParser.json());
app.use(cors());
app.use(ExpressAPILogMiddleware(logger, { request: true }));

// Setup MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/scarlet", {
  useNewUrlParser: true
});
const connection = mongoose.connection;
connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

app.get("/", function(req, res) {
  res.send("Main index");
});

app.use("/users", userRoute);

app.listen(config.port, config.host, e => {
  if (e) {
    throw new Error("Internal Server Error");
  }
  logger.info(`${config.name} running on ${config.host}:${config.port}`);
});
