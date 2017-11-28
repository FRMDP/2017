<template>
	<b-card class="text-center">
    	<h1>Player Profile</h1>
    	<h3 v-if="loading">LOADING PAGE</h3>
    	<h3 v-if="team==null">Looks so empty</h3>
    	<div v-else>
    		<transition name="bounce">
    			<b-card bg-variant="dark" text-variant="white">
    				<h3 class="Card Title">{{this.team.name}}</h3>
    				<h4>Tag: {{this.team.tag}}</h4>
    				<h4>Rating: {{this.team.rating}}</h4>
    				<h4>Wins: {{this.team.wins}}</h4>
    				<h4>Losses: {{this.team.losses}}</h4>
    			</b-card>
    		</transition>
    	</div>
	</b-card>
</template>

<script>
import teamService from '../services/teamService';
export default {
     data() {
      return {   			
        	team:{},
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
     this.getTeam();
   }
  },	

  created() {
   this.getTeam();
  },

  methods: {

    getTeam(){
      this.loading=true;
      teamService.getTeamById(this.id)
      .then((response) => {
                      this.team = response.data;
                      this.loading=false;
                  })
                  .catch((error) => {
                      this.team=null;
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