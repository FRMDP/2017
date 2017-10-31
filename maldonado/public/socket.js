const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;


server.listen(port, () => {
  console.log('Server is listening on *:' + port);
});

io.on('connection', (socket) => {
	socket.on('add.comment', function(data) {
		io.emit('add.comment', data);
	});
});