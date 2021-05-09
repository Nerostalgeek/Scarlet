const RentContractController = require("../controller/rentContract.controller");

const express = require("express");

rentContract = express.Router();

rentContract.get("/", RentContractController.getAll);

rentContract.get("/:id", RentContractController.getById);

rentContract.route("/add").post(RentContractController.addRentContract);

module.exports = rentContract;
