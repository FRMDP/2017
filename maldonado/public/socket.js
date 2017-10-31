const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

let comments = [];

server.listen(port, () => {
  console.log('Server is listening on *:' + port);
});

io.on('connection', (socket) => {
	socket.on('add.comment', (data) => {
		comments.push(data);
		io.emit('add.comment', comments);
	});
	socket.on('get.comments', (componentComments) => {
		socket.emit('get.comments', comments)
	});
});