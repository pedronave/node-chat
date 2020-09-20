var socket = io();
const chatLog = document.getElementById("messages");
const chatBox = document.getElementById("box");

document.getElementById("chat-form").addEventListener("submit", sendMessage);

function sendMessage(e) {
  e.preventDefault(); // prevents page reloading
  socket.emit("chat message", chatBox.value);
  chatBox.value = "";
}

socket.on("chat message", function (msg) {
  let li = document.createElement("li");
  li.textContent = msg;
  chatLog.appendChild(li);
});
