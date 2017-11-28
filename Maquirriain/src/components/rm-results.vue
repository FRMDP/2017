<template>
  <div>
    </br>
    <label>Since 1950 to 2017 </label>
    <b-form-input id="exampleInput1"
                  type="number" v-model="season"
                  placeholder='Please set the season'
    ></b-form-input>
    <br>
    <label>The stage from 1 to 20 </label>
    <b-form-input id="exampleInput1"
                  type="number" v-model="stage"
                  placeholder='Please set the stage'
    ></b-form-input>
    <br/>
    <b-button type="submit" :disabled='!checkInPuts' variant="primary" @click='searchResults' >Search</b-button>

    <rm-spinner v-if='loading'></rm-spinner>
    <div v-if='!error'>
    <div v-for='(r,index) in resultsArray'>

      <b-card
                bg-variant="dark"
                text-variant="white"
                :title="r.position"
                :sub-title="r.driverSurename">
            <p class="card-text">
                Laps: {{r.laps}}
                <br/>
                Time: {{r.time}}
            </p>
             <router-link v-bind:to="'results/'+r.season+'/'+r.stage+'/'+r.position"><a href="#"
           class="card-link">More Info of this</a></router-link>
        </b-card>
    </div>
  </div>
  <div v-else>
    <label>SOME ARE WRONG</label>
  </div>
  </div>
</template>
<script>
    import rmSpinner from './rm-spinner.vue';
    export default{
      name: "rmResults",
      components:{
        rmSpinner
      },
      data(){
        return{
          resultsObject:{
            position: '',
            points: '',
            driverName: '',
            driverSurename: '',
            team: '',
            laps: '',
            status: '',
            time: '',
            millis: '',
            fastLap: '',
            fastTime: '',
            averageSpeed: '',
            season: '',
            stage: ''
          },
          resultsArray: [],
          grandPrix: '',
          season: '',
          stage: '',
          loading: false,
          error:false
        }
      },
      computed:{
          checkInPuts(){
            return this.season >= 1950 && this.season <= 2017 && this.stage > 0 && this.stage <= 20;
          }
      },
      methods:{
        searchResults(){
          this.loading = true;
          this.$http.get('http://ergast.com/api/f1/'+this.season+'/'+this.stage+'/results.json')
          .then((response) => {

            this.resultsArray = [];
            this.grandPrix = '';
            const information = response.data.MRData.RaceTable.Races[0];

            this.grandPrix = information.raceName;

            information.Results.forEach((aux) => {
              this.resultsObject.season = this.season;
              this.resultsObject.stage = this.stage;
              this.resultsObject.position = aux.position;
              this.resultsObject.points = aux.points;
              this.resultsObject.driverName = aux.Driver.givenName;
              this.resultsObject.driverSurename = aux.Driver.familyName;
              this.resultsObject.team = aux.Constructor.name;
              this.resultsObject.laps = aux.laps;
              this.resultsObject.status = aux.status;
              if(aux.status == 'Finished')
              {
                this.resultsObject.time = aux.Time.time;
                this.resultsObject.millis = aux.Time.millis;
              }
              if(aux.FastestLap)
              {
                this.resultsObject.fastLap = aux.FastestLap.lap;
                this.resultsObject.fastTime = aux.FastestLap.Time.time;
                this.resultsObject.averageSpeed = aux.FastestLap.AverageSpeed.speed;
              }

              this.resultsArray.push(Object.assign({},this.resultsObject));

            });
            this.loading = false;
            this.$store.commit('addResultDriver',this.resultsArray);
          })
          .catch((error) => {
            this.loading = false;
            this.error = true;
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
