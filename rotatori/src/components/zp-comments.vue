<template>
    <div class="paddings">
        <h3>Comentarios: {{messages.length}} </h3>
        <md-input-container>
            <label>Mensaje</label>
            <md-input v-model="message.text"></md-input>
        </md-input-container>
        <md-button class="md-raised md-primary md-dense" @click="addMessage" :disabled="!formOk">
            <md-icon>send</md-icon>
        </md-button>
        <div class="scroll">
            <div class="texto" v-for="(m, index) in messages" :key="m.id">
                <h4>{{m.author}} - {{m.date}}</h4>
                <p>{{m.text}}</p>
            </div>
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
    computed: {
        formOk(){
            return this.message.text;
        }
    },
    methods: {
        getUpdate(){
            const aux = [];
            this.socket.on('messages', data => {
                this.messages = data;
            });
        },
        clearInput(){
            this.message.text = '';
        },
        getDate(){
            const d = new Date();
            let min;
            if(d.getMinutes()<10)
                min = '0' + d.getMinutes();
            else
                min = d.getMinutes();
            return d.getDate() + '/' + (parseInt(d.getMonth()) + 1) + '/' + d.getFullYear() + ' - ' + d.getHours() + ':' + min;
        },
        getId(){
            if(this.messages.length == 0)
                return 1;
            else
                return this.messages[this.messages.length - 1].id + 1;
        },
        addMessage(){
            this.message.date = this.getDate();
            this.message.author = this.author();
            this.message.id = this.getId();
            this.socket.emit('newMessage', this.message);
            this.getUpdate();
            this.clearInput();
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
    },
}
</script>
<style scoped>
.scroll{
    height: 300px;
	width: 95%;
	overflow-y: scroll;
}
.texto{
    border-bottom: 1px solid #3f51b5
}
</style>

