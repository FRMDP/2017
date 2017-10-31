const app    = require('express')();
const server = require('http').createServer(app);
const io     = require('socket.io')(server);
const port   = process.env.PORT || 3000;

server.listen(port, () => {
    console.log('Server listening at port %d', port);
});

io.on('connection', (socket) => {
	console.log('A user has been connected');
	
    socket.on('page.comment', (comment) => {
        io.emit('page.comment', comment);
    });
});