const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

server.listen(port, function () {
    console.log('Server listening at port %d', port);
});

io.on('connection', function (socket) {
    socket.on('notificate', function (data) {
        socket.broadcast.emit('notificate', {
            message: data
        });
    });
});
