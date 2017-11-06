const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
	socket.on('notiComentario', (msg) => {
		io.emit('notiComentario', msg);
	});
});

server.listen(port, () => {
  console.log('listening on *:' + port);
});
