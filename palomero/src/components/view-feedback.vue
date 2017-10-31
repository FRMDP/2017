<template>
	<div class="card">
	    <div class="card-content">
	    	<h3>Leave us some feedback</h3>
	    	<input v-model="mes.autor" id="autorInput" autocomplete="off" placeholder="Enter your name..." />
	        <input v-model="mes.text" id="messageInput" autocomplete="off" placeholder="Enter your opinion..." />
	        <button :disabled="!formOk" @click="addMessage" class="btn waves-effect waves-light" type="submit" id="send">Enviar</button>
	        <h3 v-if="mensaje==true">Succesfully added</h3>
            <h3 v-if="!mensajes.length">Looks so empty</h3>
		        <div class="card blue-grey darken-1" v-else v-for ="(m,index) in mensajes">
					<div class="card-content white-text">
						<span class="card-title">Author:{{m.autor}}</span>
						<p>Message:{{m.text}}</p>
					</div>
		        </div>
	    </div>
	</div>
</template>
<script>
	import io from "socket.io-client";
	export default {
        name: 'viewFeedback',
        data(){
          return{
          	mes:{
          		autor:'',
          		text:''
          	},
			sock:'',
			newMessage: '',
			send: '',
			mensajes: [],
			mensaje:false
          }
        },
		computed:{
			formOk() {
			return this.mes.autor && this.mes.text;
			}
		},
        methods: {

        	getUpdate(){
        		let listaAux=[];
					this.sock.on('messages',function(data){
					console.log(data);
					for(let objMensaje in data){
						let aux=data[objMensaje];
						listaAux.push(aux);
					}
				});
				return listaAux;	
        	},

        	addMessage(){
        		this.sock.emit('new-message',this.mes);
        		this.mensaje=true;
        		this.clear();
        	},

			clear () {
				this.mes.autor='';
				this.mes.text='';
			}
        },

        mounted(){
        	this.mensajes=this.getUpdate();
        },

        created() {
			this.sock = io("http://localhost:3000");
			this.mensajes=this.getUpdate();
		}
    }

</script>