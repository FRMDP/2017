const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

messages = []

app.get('/', (req, res) =>{
    res.writeHead(200, {'Access-Control-Allow-Origin' : '*'});
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) =>{
    socket.emit('messages', messages);
    socket.on('newMessage', msg =>{
        messages.unshift(msg);
        io.emit('messages', messages);
    })
});

server.listen(port, ()=>{
    console.log('listening on *:' + port);
})