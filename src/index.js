var express = require("express");
var app = express();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

const port = 3000;

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
    console.log(msg);
  });
});

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/index.html");
});

http.listen(port, () => {
  console.log(`Started chatting server at http://localhost:${port}`);
});
