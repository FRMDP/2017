<template>
    <div class="container" id="players">
        <div class="row">
            <div class="col-sm-8 offset-sm-2">
                <b-button-group style="margin-top: 20px;margin-bottom: 20px;">
                    <b-button v-b-tooltip.hover title="Show the last 20 matches" @click="see('playerRecentmatches')">Recent Matches</b-button>
                    <b-button v-b-tooltip.hover title="Show player performance" @click="see('playerHeroes')">Heroes</b-button>
                    <b-button v-b-tooltip.hover title="Show player partners" @click="see('playerPeers')">Peers</b-button>
                    <b-button v-b-tooltip.hover title="Show professional partners" @click="see('playerPros')">Pros</b-button>
                    <b-button v-b-tooltip.hover title="Show detailed statistics" @click="see('playerTotals')">Totals</b-button>
                </b-button-group>
            </div>
        </div>
        <div class="row">
            <player-overview :id="id"></player-overview>
            <player-recentmatches v-if="showme=='playerRecentmatches'" :id="id" :heroStats="heroStats"></player-recentmatches>
            <player-heroes v-if="showme=='playerHeroes'" :id="id" :heroStats="heroStats"></player-heroes>
            <player-peers v-if="showme=='playerPeers'" :id="id"></player-peers>
            <player-pros v-if="showme=='playerPros'" :id="id"></player-pros>
            <player-totals v-if="showme=='playerTotals'" :id="id"></player-totals>
        </div>
    </div>
</template>

<script>
  import playerOverview from './player-overview.vue'
  import playerRecentmatches from './player-recentmatches.vue'
  import playerHeroes from './player-heroes.vue'
  import playerPeers from './player-peers.vue'
  import playerPros from './player-pros.vue'
  import playerTotals from './player-totals.vue'
  export default{
    name:'viewPlayers',
    components:{
      playerOverview,
      playerRecentmatches,
      playerHeroes,
      playerPeers,
      playerPros,
      playerTotals,
    },
      props:['id'],
      data(){
          return{
            showme:'playerRecentmatches',
            heroStats:[]
        }
    },
    methods:{
      see(view){
        this.showme=view;
    }
    },
    mounted(){
        
    },
    created(){
        this.loading=true;
        this.$http("https://api.opendota.com/api/heroes")
            .then((response)=>{
            this.heroStats=response.data;
            this.loading=false;
        })
            .catch((error)=>{
            console.log(error);
            this.loading=false;
        })
    }
}
</script>

<style>
#players{
  background-color: #263238;
}
</style>
