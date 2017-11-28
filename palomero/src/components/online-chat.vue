<template>
	<div>
   <transition name="bounce">
      <b-card class="text-center" border-variant="dark" align="center">
        <h1 align="left">Leave a massage'!</h1>
        <b-form inline >
          <b-input class="mb-2 mr-sm-2 mb-sm-0" v-model="user" placeholder="Username" />
          <b-input class="mb-2 mr-sm-2 mb-sm-0" v-model="newMessage" placeholder="Type your message" />
          <b-button type="submit" :disabled="!formOk" @click="sendMessage">Submit</b-button>
        </b-form>
          <b-list-group>
            <b-list-group-item v-for="(message,index) in messages" :key=index>
              {{ message.user }} : {{ message.newMessage }}
            </b-list-group-item>
        </b-list-group>
      </b-card>
   </transition>
  </div>	
</template>
<script>
import io from "socket.io-client";

export default {
  data() {
    return {
      socket: {},
      newMessage: '',
      user: '',
      send: {},
      messages: [],
    }
  },
    sockets: {
      connect: function(){
        console.log('Socket connected')
      },
      receiveMessage(message) {
        this.messages.push(message);
      }
    },

    methods: {
      sendMessage() {
        const payload = {
          user : this.user,
          newMessage : this.newMessage
        }
        this.socket.emit('chat_message', payload);
        this.newMessage = '';
      }
    },

    computed:{
      formOk() {
        return this.newMessage && this.user;
      }
    },

    created() {
      this.socket = io('http://localhost:3000');
    }
}
</script>
<style>
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>