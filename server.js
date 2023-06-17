const app = require("./app");
const http = require("http").Server(app);
const io = require("socket.io")(http);

// Socket.IO connection handler
io.on("connection", (socket) => {
  console.log("A user connected " + socket.id);

  io.to(socket.id).emit("socketid", socket.id);

  // Listen for chat messages
  socket.on("chat message", (message, room) => {
    if (room == "") {
      io.emit("chat message", { message, senderId: socket.id });
    } else {
      socket.to(room).emit("chat message", { message, senderId: socket.id });
    }
  });

  socket.on("join", (roomName) => {
    socket.join(roomName);
    console.log(`User ${socket.id} joined room ${roomName}`);
  });

  socket.on("sendData", (room, data) => {
    socket.to(room).emit("Board", data);
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

// Start the server
const port = 3300;
http.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
