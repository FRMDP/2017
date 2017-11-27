const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const allowedOrigins = "http://localhost:* http:127.0.0.1:*"
const port = process.env.PORT || 3000;

messages = [{
    text: 'HOLA MUNDO SOCKET',
    author: 'Programmer',
    id: '1',
    date: 'fecha hoy',
}]

app.get('/', (req, res) =>{
    res.writeHead(200, {'Access-Control-Allow-Origin' : '*'});
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) =>{
    socket.emit('messages', messages);

    socket.on('newMessage', msg =>{
        messages.push(msg);
        console.log(msg);
        socket.emit('messages', messages);
    })
});

server.listen(port, ()=>{
    console.log('listening on *:' + port);
})