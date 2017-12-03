const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 5000;
let likes = 0;

io.on('connection',(socket)=>{
	console.log('new client connected');

	socket.on('updateLikes', (updateLikes)=>{
		io.emit('updateLikes', updateLikes);
	})

	socket.on('like', (likes)=>{
		likes++;
		console.log(likes);
		io.emit('like', likes);
	})


});
server.listen(port, () => {
	console.log('listening on *:' + port);
});

