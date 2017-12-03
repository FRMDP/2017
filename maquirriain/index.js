const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

let visits = {};

server.listen(port,() => {
  console.log('you are connected at port: '+ port);
});

io.on('connection', (socket) => {
  socket.on('notificate', (uid) => {
    if(visits[uid]){
      visits[uid]++;
    }
    else{
      visits[uid] = 1;
    }
    socket.emit('notificate',visits);
    socket.broadcast.emit('notificate',visits);
  });
});
