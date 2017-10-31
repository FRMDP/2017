const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

const news = {};

server.listen(port, function () {
    console.log('Server listening at port %d', port);
});

io.on('connection', function (socket) {
  socket.on('visited', function (uid) {
    if (news[uid]) {
    	news[uid]++;
    } else {
    	news[uid] = 1;
    }
    io.emit('update', {
	  	id: uid,
	  	count: news[uid]
  	});
  });
});
