const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

let visitedNews = {};

server.listen(port, function () {
    console.log('Server listening at port %d', port);
});

io.on('connection', (socket) => {
    socket.on('countingReads', (uid) => {
    	if(visitedNews[uid]) {
    		visitedNews[uid]++;
    	} else {
    		visitedNews[uid] = 1;
    	}
        socket.broadcast.emit('countingReads', visitedNews);
    });
    socket.on('giveMe' ,(nothing) => {
    	socket.broadcast.emit('giveMe', visitedNews);
    });
});

