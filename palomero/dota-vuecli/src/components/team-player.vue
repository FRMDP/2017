<template>
<b-card class="text-center">
  <h1>Team players</h1>
    <h3 v-if="loading">LOADING PAGE</h3>
    <div v-else>
      <transition-group name="bounce">
	        <b-card v-for="p in this.players" :key="p.account_id" bg-variant="dark" text-variant="white">
	          <h4>Name: {{p.name}}</h4>
	          <h4>Games played: {{p.games_played}}</h4>
	          <h4>Wins: {{p.wins}}</h4>
	          <h4 v-if="p.is_current_team_member">Is member</h4>
	          <h4 v-else>Left the team</h4>
	          <b-button :href="'/#/player/' + p.account_id">See profile</b-button>
	        </b-card>
      </transition-group>
    </div>
  </b-card>
</template>

<script>
import teamService from '../services/teamService';
export default {
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
     this.getPlayers();
   }
  },	

  created() {
   this.getPlayers();
  },

  methods: {

    getPlayers(){
      this.loading=true;
      teamService.getTeamPlayersById(this.id)
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