const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const visits = [];
const v={};

server.listen(3000, () =>{
  console.log('welcolme to socketito 3000');
});


io.on('connection', (socket) => {

    socket.on('addvisit', (path) => {
    // si no existe un contador para ese path, lo crea
   		if(!v[path]){ 
            v[path]=1;
		}
		else{
   		    v[path]++;
        }
    // emit + broadcast.emit, para actualizar las demas paginas
		socket.emit('getvisit',v);
    socket.broadcast.emit('getvisit',v);
    });

});

