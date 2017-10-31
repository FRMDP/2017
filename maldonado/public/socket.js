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
		if(compComments){
			comments.push(compComments);
		}
		socket.emit('add.comment', comments);
	});
	socket.on('get.comments', (uidReporter) => {
		//console.log(comments);
		//let commentsFiltered = comments.filter(comp => uidReporter == comments.id);
		/*El filtro esta comentado, porque al usar "comments" esta vacio,
			pero al momento de devolverlo aca abajo, devuelve el array.
			Lo deje asi para que devuelva algo */
		socket.emit('get.comments', comments);
	});
});