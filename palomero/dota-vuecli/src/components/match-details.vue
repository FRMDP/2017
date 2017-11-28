<template>
	<b-card class="text-center">
    <h1>Match details</h1>
      <h3 v-if="loading">LOADING PAGE</h3>
	    <h3 v-if="match==null">Looks so empty</h3>
      <div v-else>
        <transition name="bounce">
    	    <b-card bg-variant="dark" text-variant="white">
    	    	<h3>Dire Score: {{match.dire_score}}</h3>
    	    	<h3>Radiant Score: {{match.radiant_score}}</h3>
    	    	<h3>Human Players: {{match.human_players}}</h3>
      	    	<b-card v-for="p in match.players" :key="p.account_id" bg-variant="dark" text-variant="white">
        				<h4>Name: {{p.personaname}}</h4>
        				<h4>Kills: {{p.kills}}</h4>
        				<h4>Deaths: {{p.deaths}}</h4>
        				<h4>Assists: {{p.assists}}</h4>
        				<h4>Gold: {{p.gold}}</h4>
        				<h4>Gold per Min: {{p.gold_per_min}}</h4>
  	  	      	<b-button :href="'/#/player/' + p.account_id">See profile</b-button>
          		</b-card>
    		  </b-card>
        </transition>
      </div>
  	</b-card>
</template>

<script>
	import matchService from '../services/matchService';
    export default {
     data() {
      return {   			
   	    match:'',
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
     this.getMatch(this.id);
   }
  },	

  created() {
   this.getMatch(this.id);
  },

  methods: {

    getMatch(){
      this.loading=true;
      matchService.getMatchById(this.id)
      .then((response) => {
                      this.match = response.data;
                      this.loading=false;
                  })
                  .catch((error) => {
                      this.match=null;
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