// const socket = io();
// let socketId;
// socket.on("socketid", (id) => {
//   socketId = id;
// });
function getboard() {
  console.log("click");
  const room = document.getElementById("room");
  const roomId = room.value;

  // const queryParams = new URLSearchParams(roomId);

  window.location.href =
    "https://chess-online-c29k.onrender.com/board?roomId=" + roomId + `#${roomId}`;
  // fetch("http://127.0.0.1:3200/board?" + queryParams);
  // fetch("http://127.0.0.1:3200/board?" + queryParams)
  //   .then((response) => {
  //     // indicates whether the response is successful (status code 200-299) or not
  //     if (!response.ok) {
  //       throw new Error(`Request failed with status ${reponse.status}`);
  //     }
  //     return response.text();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => console.log(error));
}

const button = document.getElementById("join");
button.addEventListener("click", getboard);
