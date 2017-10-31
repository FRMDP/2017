<template>
	<div class="card">
	    <div class="card-content">
	    	<input v-model="mes.autor" id="autorInput" autocomplete="off" placeholder="Enter your name..." />
	        <input v-model="mes.message" id="messageInput" autocomplete="off" placeholder="Enter your opinion..." />
	        <button :disabled="!formOk" @click="addMessage" class="btn waves-effect waves-light" type="submit" id="send">Enviar</button>
	        <h3 v-if="mensaje==true">Succesfully added</h3>
            <h3 v-if="!messages.length">Looks so empty</h3>
		        <div class="card blue-grey darken-1" v-else v-for ="(m,index) in messages">
					<div class="card-content white-text">
						<span class="card-title">{{m.autor}}</span>
						<p>Mensaje:{{m.text}}</p>
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
          		message:''
          	},
			sock:'',
			newMessage: '',
			send: '',
			messages: [],
			mensaje:false
          }
        },
		computed:{
			formOk() {
			return this.mes.autor && this.mes.message;
			}
		},
        methods: {

        	getUpdate(){
				this.sock.on('messages',function(data){
				console.log(data);
				this.messages=data;
				});
        	},

        	addMessage(){
        		this.sock.emit('new-message',this.mes);
        		this.mensaje=true;
        		this.clear();
        	},

			clear () {
				this.mes.autor='';
				this.mes.message='';
			}
        },

        created() {
			this.sock = io("http://localhost:3000");
			this.getUpdate();
		}
    }

</script>