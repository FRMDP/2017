const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;


io.on('connection', (socket) => {
	socket.on('notiComentario', (com) => {
		io.emit('notiComentario', com);
	})

  socket.on('comentMegusta', (id) => {
    io.emit('comentMegusta', id);
    })
});


server.listen(port, () => {
  console.log('listening on *:' + port);
});
