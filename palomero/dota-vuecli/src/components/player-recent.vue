<template>
  <b-card class="text-center">
  <h1>Recent Matches</h1>
    <h3 v-if="loading">LOADING PAGE</h3>
  	<h3 v-if="matches.lenght<1">Looks like you were not playing recently</h3>
    <div v-else>
      <transition-group name="bounce">
        <b-card v-for="m in this.matches" :key="m.match_id" bg-variant="dark" text-variant="white">
          <h4 v-if="m.radiant_win">Match Won</h4>
          <h4 v-else>Match Lost</h4>
          <h4>KILLS: {{m.kills}}</h4>
          <h4>DEATHS: {{m.deaths}}</h4>
          <h4>ASSISTS: {{m.assists}}</h4>
          <h4>PARTY SIZE: {{m.party_size}}</h4>
          <h4>DURATION: {{m.duration}}</h4>
          <h4>CLUSTER: {{m.cluster}}</h4>
          <h4 v-if="m.leaver_status">Left the game</h4>
          <b-button :href="'/#/matches/' + m.match_id">See details</b-button>
        </b-card>
      </transition-group>
    </div>
  </b-card>
</template>
<script>
import playerService from '../services/playerService';
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
     this.getPeers();
   }
  },	

  created() {
   this.getPeers();
  },

  methods: {

    getPeers(){
      this.loading=true;
      playerService.getRecentMatchesByPlayerId(this.id)
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