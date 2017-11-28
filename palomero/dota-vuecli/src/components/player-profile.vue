<template>
  <b-card class="text-center">
    <h1>Player Profile</h1>
    <h3 v-if="loading">LOADING PAGE</h3>
    <h3 v-if="player==null">Looks so empty</h3>
    <div v-else>
      <transition name="bounce">
        <b-card bg-variant="dark" text-variant="white">
          <b-img right :src="this.player.profile.avatarfull" alt="Thumbnail" />
          <h3 class="Card Title">{{this.player.profile.personaname}} {{this.player.profile.loccountrycode}}</h3>
          <h4>Solo Rank: {{this.player.solo_competitive_rank}}</h4>
          <h4>MMR points: {{this.player.mmr_estimate.estimate}}</h4>
          <h4>Competitive Rank: {{this.player.competitive_rank}}</h4>
          <h4>Rank tier: {{this.player.rank_tier}}</h4>
          <b-button :href="'#/player/'+ this.player.profile.account_id +'/peers'" >Discover Peers</b-button>
          <b-button :href="'#/player/'+ this.player.profile.account_id + '/rmatches/'" >See Recent Matches</b-button>
          <b-button :href="'#/player/'+ this.player.profile.account_id + '/heroes/'" >Discover Heroes</b-button>
        </b-card>
      </transition>
    </div>
  </b-card>
</template>

<script>
    import playerService from '../services/playerService';
    export default {
     data() {
      return {			
        player :{},
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
     this.player=this.getPlayer();
   }
  },	

  created() {
    this.player=this.getPlayer();
  },

  methods: {

    getPlayer(){
      this.loading=true;
      playerService.getPlayerById(this.id)
      .then((response) => {
                      this.player = response.data;
                      this.loading=false;
                  })
                  .catch((error) => {
                      this.player='';
                      this.loading=false;
                  })
                }
    }
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