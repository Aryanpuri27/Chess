const hash = window.location.hash;
console.log(hash);
const socket = io();
// socket.on("socketid", (id) => {
//   const div = document.createElement("div");
//   div.className = "messageid";
//   div.innerText = id;

//   document.getElementById("chatcontainer").append(div);
// });

function NewSelfChat() {
  const text = document.getElementById("text");
  const messageee = text.value;
  // socket.emit("chat message", messageee);
  socket.emit("chat message", messageee, hash);
  console.log(messageee);
  document.getElementById("text").value = "";

  const div = document.createElement("div");
  div.className = "messageself";
  div.innerText = messageee;

  document.getElementById("chatcontainer").append(div);
}
const joinRoom = (roomName) => {
  socket.emit("join", roomName);
};
joinRoom(hash);

const send = document.getElementById("send");
send.addEventListener("click", NewSelfChat);

function newchat(chat) {
  console.log(chat);
  const div = document.createElement("div");
  div.className = "message";
  div.innerText = chat;

  document.getElementById("chatcontainer").append(div);
}

socket.on("chat message", (msg) => {
  if (msg.senderId !== socket.id) {
    newchat(msg.message);
  }
});

// console.log(URL);
