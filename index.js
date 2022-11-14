
//Node.JS entry point
const express = require('express');
const app = express();
const http = require('http');
//HTTP server object
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

//Node.JS grabs HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

/*io.on('connection', (socket) => {
    /*log disconnects on console
    console.log('a user connected');
    socket.on('disconnect', () => {
      //console.log('user disconnected');
    });*/

    //show message text on console
    /*socket.on('Chat message', (msg)=>{
      console.log('message: '+ msg);
    });
    
    socket.on('Chat message', (msg) =>{
      io.emit('Chat message', msg);
    });
    
}); */

//Socket object - server side (message handler in/out)
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

//Server side HTTP listener (waits for client requests localhost:PortNumber)
server.listen(3000, () => {
  console.log('listening on *:3000');
});