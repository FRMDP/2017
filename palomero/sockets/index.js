const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

messages=[{
	text: "mensaje de prueba",
	autor:"yo"
}];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
		socket.emit('messages',messages);

		socket.on('new-message',function(MessagesRecieved){
			console.log(MessagesRecieved);
			messages.push(MessagesRecieved);
		});
});

server.listen(port, () => {
  console.log('listening on *:' + port);
});
