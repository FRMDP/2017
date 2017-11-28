<template>
  <b-card class="text-center">
    <h1>Recently played with</h1>
    <h3 v-if="loading">LOADING PAGE</h3>
    <h3 v-if="peers.lenght<1">Looks like you are alone in this world</h3>
    <div v-else>
      <transition-group name="bounce"> 
        <b-card v-for="p in this.peers" :key="p.account_id" bg-variant="dark" text-variant="white">
          <b-img right :src="p.avatarfull" alt="Thumbnail" />
          <h4>Name: {{p.personaname}}</h4>
          <h4>Games: {{p.games}}</h4>
          <h4>Wins: {{p.win}}</h4>
          <h4>Las played: {{p.last_played}}</h4>
          <b-button :href="'#/player/'+ p.account_id +'/peers'" >Discover Peers</b-button>
          <b-button :href="'#/player/'+ p.account_id + '/rmatches/'" >See Recent Matches</b-button>
          <b-button :href="'/#/player/' + p.account_id">See profile</b-button>
          <b-button :href="'#/player/'+ p.account_id + '/heroes/'" >Discover Heroes</b-button>
        </b-card>
      </transition-group>
    </div>
  </b-card>
</template>
<script>
    import playerService from '../services/playerService';
    export default {
     name: 'playerPeers',
     props: ['vista'],
     data() {
      return {   			
     	    peers:[],
          loading:false
    }
  }, 

  computed:{
    params() {
      return this.$route.params;
    },
    id() {
      return this.$route.params.id;
    }

  },

  watch: {
   '$route.params.id': function() {
     this.id = this.$route.params.id;
     this.getPeers(this.id);
   }
  },	

  created() {
   this.getPeers(this.id);
  },

  methods: {

    getPeers(){
      this.loading=true;
      playerService.getPeersByPlayerId(this.id)
      .then((response) => {
                      this.peers = response.data;
                      this.loading=false;
                  })
                  .catch((error) => {
                      this.peers=null;
                      this.loading=false;
                  })
                }
    },


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