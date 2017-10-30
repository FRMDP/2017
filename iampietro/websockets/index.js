const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(port, function () {
    console.log('Server listening at port %d', port);
});

io.on('connection', (socket) => {
    socket.on('countingReads', (data) => {
        socket.broadcast.emit('countingReads', {
            message: data,
            console.log(data);
        });
    });
});
