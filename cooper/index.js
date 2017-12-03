const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;
/*
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/src/components/viewForobardo.vue');
});
*/
io.on('connection', function(socket) {
	socket.on('chat_message', function(payload) {
		socket.broadcast.emit('receiveMessage', payload);
	});
});

server.listen(port, () => {
  console.log('listening on *:' + port);
});