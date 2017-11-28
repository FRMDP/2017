<template>
	<b-card class="text-center">
    <h1>Recent Matches with this Hero</h1>
      <h3 v-if="loading">LOADING PAGE</h3>
	    <h3 v-if="matches.lenght<1">Looks so empty</h3>
      <div v-else>
        <transition-group name="bounce">
    	    <b-card v-for="m in this.matches" :key="m.match_id" bg-variant="dark" text-variant="white">
    	    	<h4>ID: {{m.match_id}}</h4>
    	    	<h4>League Name: {{m.league_name}}</h4>
    	    	<h4>Radiant Win: {{m.radiant_win}}</h4>
    	    	<h4>Play for Radiant: {{m.radiant}}</h4>
    	    	<h4>Kills: {{m.kills}}</h4>
    	    	<h4>Deaths: {{m.deaths}}</h4>
    	    	<h4>Assists: {{m.assists}}</h4>
    	    	<b-button :href="'/#/matches/' + m.match_id">See details</b-button>
    	    	<b-button :href="'/#/player/' + m.account_id">Who picked up this hero?</b-button>
    		  </b-card>
        </transition-group>
      </div>
  </b-card>
</template>

<script>
	import heroeService from '../services/heroeService';
    export default {
     data() {
      return {   			
   	    matches:[],
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
     this.getMatches(this.id);
   }
  },	

  created() {
   this.getMatches(this.id);
  },

  methods: {

    getMatches(){
      this.loading=true;
      heroeService.getMatchHeroeById(this.id)
      .then((response) => {
                      this.matches = response.data;
                      this.loading=false;
                  })
                  .catch((error) => {
                      this.matches=null;
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