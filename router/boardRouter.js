const express = require("express");

const Router = express.Router();
const boardController = require("../controllers/boardController");
console.log("router");

Router.route("/:id").get(boardController.getboard);
Router.route("/").get(boardController.getboard);

module.exports = Router;
