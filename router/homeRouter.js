const express = require("express");

const Router = express.Router();
const homeController = require("../controllers/homeController");
console.log("router");

Router.route("/").get(homeController.getLandingPage);

module.exports = Router;
