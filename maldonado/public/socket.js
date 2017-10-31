const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

let comments = [];

server.listen(port, () => {
  console.log('Server is listening on *:' + port);
});

io.on('connection', (socket) => {
	socket.on('add.comment', (compComments) => {
		comments.push(compComments);
		socket.emit('add.comment', comments);
	});
	socket.on('get.comments', (componentComments) => {
		//let auxComments = comments.filter(com => componentComments.id == com.id)
		socket.emit('get.comments', componentComments);
	});
});