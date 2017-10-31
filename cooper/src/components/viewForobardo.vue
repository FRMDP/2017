<template>
    <div class="container">
        <h2>Foro bardo</h2>
        <div class="card blue-grey darken-1">

            <div class="card-content">
              <h5> {{ showUser }} </h5>
              <div class="chatbox"> 
                  <ul>
                    <li v-for="message in messages" class="chip"> 
                      <b>{{ message.userP }}<label>:</label></b> {{ message.newMessageP }} 
                    </li>
                  </ul>
              </div>
              <br>
              <form class="align-bottom">
                  <input v-model="user" type='text' placeholder="User name"/>
                  <input v-model="newMessage" autocomplete="off" placeholder="Your message..." />
                  <button :disabled="!formOk" class="btn pad" @click.prevent="sendMessage">Send</button>
              </form>
            </div>

        </div>
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
          showUser: ''
        }
      },
        sockets: {
          connect: function(){
            console.log('Sockete connected')
          },
          receiveMessage(message) {
            this.messages.push(message/*message.userP + ": " + message.newMessageP*/);
          }
        },
        methods: {
          sendMessage() {
            const payload = {
              userP : this.user,
              newMessageP : this.newMessage
            }
            this.socket.emit('chat_message', payload);
            this.newMessage = '';
            this.showUser = 'You are ' + this.user;
          }
        },
        computed:{
          formOk() {
            return this.newMessage && this.user;
          }
        },
        watch: {
          '$route.params.id': function() {
          }
        },
        created() {
          this.socket = io('http://localhost:3000');
        }
    }
</script>

<style>

</style>
