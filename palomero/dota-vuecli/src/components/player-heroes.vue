<template>
	<b-card class="text-center">
    <h1>Player Stats with this hero</h1>
      <h3 v-if="loading">LOADING PAGE</h3>
	    <h3 v-if="heroes.lenght<1">Looks like you need to start playing</h3>
      <div v-else>
        <transition-group name="bounce">
    	    <b-card v-for="h in this.heroes" :key="h.hero_id" bg-variant="dark" text-variant="white">
    	    	<h4>ID: {{h.hero_id}}</h4>
    	    	<h4>GAMES: {{h.games}}</h4>
    	    	<h4>WINS :{{h.win}}</h4>
    	    	<h4>LAST PLAYED: {{h.last_played}}</h4>
            <b-button :href="'#/heroes/'+ h.hero_id + '/matches/'" >Discover Matches</b-button>
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
   	    heroes:[],
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
     this.getHeroes(this.id);
   }
  },	

  created() {
   this.getHeroes(this.id);
  },

  methods: {

    getHeroes(){
      this.loading=true;
      playerService.getWinLosesByPlayerIdPerHeroe(this.id)
      .then((response) => {
                      this.heroes = response.data;
                      this.loading=false;
                  })
                  .catch((error) => {
                      this.heroes=null;
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