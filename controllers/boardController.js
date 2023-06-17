const io = require("socket.io");

exports.getboard = (req, res, next) => {
  res.render("index");
};
