<template>
<div>
    <div v-for="(m, index) in mensajes" :key="m.id">
        {{m}}
    </div>
</div>
</template>
<script>
import io from 'socket.io-client'
export default {
    data(){
        return {
            mensajes: [],
            sock: '',
        }
    },
    methods:{
        getUpdate(){
            this.sock.on('messages', data =>{
                for(let msg in data){
                    this.mensajes.push(data[msg]);
                }
            })
        }
    },
    created(){
        this.sock = io('http://127.0.0.1:3000');
        this.getUpdate();
    }
}
</script>

