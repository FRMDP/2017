<template>
	<b-card class="text-center">
    <h1>Top players with this hero</h1>
      <h3 v-if="loading">LOADING PAGE</h3>
	    <h3 v-if="ranking==null">Looks so empty</h3>
      <div v-else>
        <transition-group name="bounce">
	         <b-card v-for="r in ranking.rankings" :key="r.account_id" bg-variant="dark" text-variant="white">
  	    		<b-img right :src="r.avatar" alt="Thumbnail" />
  				    <h4>Name: {{r.personaname}}</h4>
  				    <h4>Score: {{r.score}}</h4>
  				    <h4>Last Login: {{r.last_login}}</h4>
  				    <h4>Rank: {{r.solo_competitive_rank}}</h4>
	  	      	<b-button :href="'/#/player/' + r.account_id">See profile</b-button>
      		</b-card>
        </transition-group>
      </div>
		</b-card>
  	</b-card>
</template>
<script>
	import heroeService from '../services/heroeService';
    export default {
     data() {
      return {   			
   	    ranking:'',
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
      heroeService.getRankingPlayerByHero(this.id)
      .then((response) => {
                      this.ranking = response.data;
                      this.loading=false;
                  })
                  .catch((error) => {
                      this.ranking=null;
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