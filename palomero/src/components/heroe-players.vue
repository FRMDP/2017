<template>
	<b-card class="text-center">
      <h3>Players who recently played with {{this.hero}}</h3>
      <h3 v-if="loading">LOADING PAGE</h3>
	    <h3 v-if="players.lenght<1">Looks so empty</h3>
      <div v-else>
        <transition-group name="bounce">
    	    <b-card v-for="p in this.players" :key="p.account_id" bg-variant="dark" text-variant="white">
    	    	<h4>ID: {{p.account_id}}</h4>
    	    	<h4>GAMES: {{p.games_played}}</h4>
    	    	<h4>WINS :{{p.wins}}</h4>
    	    	<b-button :href="'/#/player/' + p.account_id">See profile</b-button>
    		  </b-card>
        </transition-group>
      </div>
  </b-card>
</template>

<script>
	import heroeService from '../services/heroeService';
    export default {
      props:['hero'],
      data() {
      return {   			
   	    players:[],
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
     this.getPlayers(this.id);
   }
  },	

  created() {
   this.getPlayers(this.id);
  },

  methods: {

    getPlayers(){
      this.loading=true;
      heroeService.getPlayersByHeroes(this.id)
      .then((response) => {
                      this.players = response.data;
                      this.loading=false;
                  })
                  .catch((error) => {
                      this.players=null;
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