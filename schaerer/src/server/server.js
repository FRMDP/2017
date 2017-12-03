const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;


server.listen(port, function () {
    console.log('Server listening at port %d', port);
});


let heartNews = {};

io.on('connection', (socket) => {
    socket.on('heartNews', (uid) => {
    	if(heartNews[uid]){
    		heartNews[uid]++;
    	}else{
    		heartNews[uid] = 1;
    	}
        socket.emit('heartNews', heartNews[uid]);
    });
    socket.on('loadHearts', (uid) => {
    	socket.emit('loadHearts', heartNews[uid]);
    });
});