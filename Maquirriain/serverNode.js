const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;


server.listen(port, function () {
    console.log('Server listening at port %d', port);
});


let messages = [];

io.on('connection', (socket) => {
    socket.on('sendMessage', (message) => {
        messages.push(message);
        io.emit('updateMessages', messages);
    });

    socket.on('loadMessages', () => {
    	socket.emit('updateMessages', messages);
    });
});
