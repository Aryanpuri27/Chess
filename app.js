const express = require("express");
const homeRoute = require("./router/homeRouter");
const boardRoute = require("./router/boardRouter");
const app = express();

app.use(express.static(__dirname + "/static"));
app.use(express.json());
app.set("view engine", "ejs");

app.use("/", homeRoute);
app.use("/home", homeRoute);
app.use("/board", boardRoute);
module.exports = app;
