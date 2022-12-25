
const express  = require("express")
const route = require("./routes");
const http = require("http");
const app = express()
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

route.route(app);

io.on('connection', (socket) => {
    socket.on('message', (msg) => {
        console.log('message: ' + msg);
        socket.broadcast.emit("message",msg)
      });
      socket.on('message2', (msg2) => {
        console.log('message2: ' + msg2);
        socket.broadcast.emit("message2",msg2)
      });
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

server.listen(3000,()=>{
    console.log("connecting succes :3000")
})
