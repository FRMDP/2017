<template>
   <div>
     <b-row>
         <div align-h="center" v-if="!nickB">
    			<b-col>
    				<label>Choose your nick</label>
            <b-form-input id="exampleInput1"
                          type="text"
                          v-model="nick"
                          placeholder='Please set your nick'
                          @keyup.enter="setNick"
              ></b-form-input>
            <b-button type="submit" :disabled='!checkInPut' variant="primary" @click='setNick' >Save Nick</b-button>
    			</b-col>
    		</div>
          <b-col cols="8" md="10" lg="10" v-else>
              <br>
              <br>
              <div class='chat'>
                <div v-for='message in messages'>
                    <label>{{message.nick}}: {{message.message}}</label>
                </div>
              </div>
              <br>
              <b-form-input id="exampleInput1"
                          class='rmWidth'
                          type="text"
                          v-model="message.message"
                          placeholder='Add comment'
                          @keyup.enter="sendMessage"
              ></b-form-input>
              <br>
              <b-button type="submit"  variant="primary" @click='sendMessage'>Send message</b-button>
            </b-col>
    </b-row>
   </div>
</template>
<script>
  import rmSpinner from './rm-spinner.vue';
  export default{
    name: 'rmChat',

    data(){
      return{
        nick:'',
        nickB: false,
        message:{
          nick: '',
          message:''
        },
        messages:[]
      }
    },
    computed:{
        checkInPut(){
          return this.nick;
        }
    },
    methods:{
      setNick(){
        this.nickB = true;
        this.$store.commit('saveNameChat',this.nick)
      },
      sendMessage(){
        this.message.nick = this.nick;
        this.socket.emit('sendMessage',this.message);
        this.cleanInput();
      },
      cleanInput(){
        this.message.message = '';
      }
    },
    mounted(){
        this.nick = this.$store.state.name;
        if(this.nick){
          this.nickB = true;
        }
    },
    created(){
      this.socket = this.$socket('http://localhost:3000');
      this.socket.on('updateMessages', (messages) => {this.messages = messages; });
    }
  }
</script>
<style>
.chat{
  background-color: white;
  overflow-y: scroll;
  height:  500px;
  width: 80%;

}
.rmWidth{
  width: 80%;
}
label{
  color:rgb(233, 148, 58);
  font-style:italic;
  font-weight: bold;
}
</style>
