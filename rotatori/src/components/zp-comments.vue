<template>
    <div class="paddings">
        <div>
             <md-input-container>
                <label>Mensaje</label>
                <md-input v-model="message.text"></md-input>
            </md-input-container>
            <md-button @click="addMessage">send</md-button>
        </div>
        <h3>Comentarios:</h3>
        <div class="texto" v-for="(m, index) in messages" :key="m.id">
            <h4>{{m.author}} - {{m.date}}</h4>
            <p>{{m.text}}</p>
        </div>
    </div>
</template>
<script>
import io from 'socket.io-client'
export default {
    data(){
        return {
            message: {
                author: '',
                text: '',
                id: '',
                date: '',
            },
            socket: '',
            messages: [],

        }
    },
    methods: {
        getUpdate(){
            const aux = [];
            this.socket.on('messages', data => {
                for(let sub in data){
                    aux.push(data[sub]);
                }
            });
            this.messages = aux;
        },
        addMessage(){
            let d = new Date();
            this.message.date = d.getDate() + '/' + parseInt(d.getMonth()) + 1 + '/' + d.getFullYear() + ' - ' + d.getHours() + ':' + d.getMinutes();
            this.message.author = this.author();
            this.message.id = this.messages[this.messages.length -1].id + 1;
            this.socket.emit('newMessage', this.message);
            this.getUpdate();
        },
        author(){
            if(this.$session.has('login'))
                return this.$session.get('login').name;
            else
                return 'Anonimo';
        }
    },
    created(){
        this.socket = io('http://localhost:3000');
        this.getUpdate();
        /*setInterval( ()=>{
            console.log('actualizo');
            this.getUpdate()
        },5000);*/
    },
    mounted(){
        
    }
}
</script>
<style scoped>
.scroll{
    height: 300px;
	width: 200px;
	border: 1px solid #ddd;
	background: #f1f1f1;
	overflow-y: scroll;
}
.texto{
    border-bottom: 1px solid #ddd
}
</style>

