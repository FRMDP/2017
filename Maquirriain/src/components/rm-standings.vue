<template>
  <div>
    <b-row>
      <b-col>
        <br>
        <label>Since 1950 to 2017 </label>
    <b-form-input id="exampleInput1"
                  type="number" v-model="season"
                  placeholder='Please set the season'
    ></b-form-input>
    <br/>
    <b-button type="submit" :disabled='!checkInPuts' variant="primary" @click='getAllInformationApiStandings' >Search</b-button>
  </b-col>
</b-row>
<b-row>
  <rm-spinner v-if='loading'></rm-spinner>
  <b-col>
    <div v-if='!error'>
    <label>Drivers</label>
    <b-card v-for='driver in drivers' :key='driver.id'
          bg-variant="dark"
          text-variant="white"
          :title="driver.Driver.familyName"
          tag="article"
          class="mb-2">
    <p class="card-text">
      Points: {{driver.points}}
      <br/>
      Wins: {{driver.wins}}
    </p>

  </b-card>
</div>
<div v-else>
  <label>SOME ARE WRONG</label>
</div>
  </b-col>
  <b-col>
    <label>Teams</label>
    <b-card v-for='team in teams' :key='team.id'
          bg-variant="dark"
          text-variant="white"
          :title="team.Constructor.name"
          tag="article"
          class="mb-2">
    <p class="card-text">
    Points: {{team.points}}
    <br/>
    Wins: {{team.wins}}
    </p>
  </b-card>
  </b-col>
</b-row>
  </div>
</template>
<script>
  import rmSpinner from './rm-spinner.vue';
  export default{
    name: 'rmStandings',
    components:{
      rmSpinner
    },
    data(){
      return{
        loading: false,
        season:'',
        stages: '',
        teams:[],
        drivers:[],
        error:false
      }
    },
    computed:{
      checkInPuts(){
       return this.season >= 1950 && this.season <= 2017;
      }
    },
    methods:{
      getDrivers(){
        return this.$http.get('http://ergast.com/api/f1/'+this.season+'/driverStandings.json?limit=100')
      },
      getTeam(){
        return this.$http.get('http://ergast.com/api/f1/'+this.season+'/constructorStandings.json')
      },
      getAllInformationApiStandings(){
        this.loading = true;
        this.teams = [];
        this.drivers = [];
        this.$http.all([this.getDrivers(),this.getTeam()])
        .then(this.$http.spread((driver,team) => {
          this.drivers = driver.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
          this.stages = driver.data.MRData.StandingsTable.StandingsLists[0].round;
          if(team){
            this.teams = team.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
          }

          this.loading = false;
        }))
        .catch((error) => {
          this.loading = false;
          this.error = true;
          console.log(error);
        })
      }
    },
    mounted(){
    }
  }
</script>
<style>
label{
  color:rgb(233, 148, 58);
  font-style:italic;
  font-weight: bold;
}

</style>
