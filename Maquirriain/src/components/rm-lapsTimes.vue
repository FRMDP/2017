<template>
   <div>
     <b-row>
       <b-col>
         <br>
         <label>Since 1996 to 2017 </label>
         <b-form-input id="exampleInput1"
                       type="number" v-model="season"
                       placeholder='Please set the season'
         ></b-form-input>

         <label>from 1 to 20</label>
         <b-form-input id="exampleInput1"
                       type="number" v-model="stage"
                       placeholder='Please set the stage'
         ></b-form-input>

         <label>from 1 to 70</label>
         <b-form-input id="exampleInput1"
                       type="number" v-model="lap"
                       placeholder='Please set the lap'
         ></b-form-input>
         <br/>
         <b-button type="submit" :disabled='!checkInPuts' variant="primary" @click='searchLap' >Search</b-button>
       </b-col>
     </b-row>
    <rm-spinner v-if='loading'></rm-spinner>
    <b-row>
      <b-col>
        <div v-if='!error'>
        <label>Season {{season}} stage {{stage}} lap {{lap}}</label>
        <br>
        <label> {{circuit}} </label>
        <br>
        <label> {{date}} </label>
        <br>
        <label> {{time}} </label>
        <br>

        <div v-if='times.length'>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">Driver</th>
              <th scope="col">Position Lap</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody v-for='time in times'>
            <tr>
              <th scope="row">{{time.driverId}}</th>
              <td>{{time.position}}</td>
              <td>{{time.time}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-else>
      <label>SOME ARE WRONG</label>
    </div>
      </b-col>
    </b-row>
   </div>
</template>
<script>
  import rmSpinner from './rm-spinner.vue';
  export default{
    name: 'rmLapsTimes',
    components:{
      rmSpinner
    },
    data(){
      return{
        loading: false,
        season: '',
        stage:'',
        lap:'',
        circuit: '',
        date: '',
        time: '',
        times: [],
        error:false
      }
    },
    computed:{
      checkInPuts(){
       return this.season >= 1996 && this.season <= 2017 && this.stage > 0 && this.stage < 21 && this.lap > 0 && this.lap < 71;
      }
    },
    methods:{
        searchLap(){
          this.circuit = '';
          this.date = '';
          this.time = '';
          //this.times = [];
          this.loading = true;
          this.$http.get("http://ergast.com/api/f1/"+this.season+"/"+this.stage+"/laps/"+this.lap+".json")
          .then((response) => {
            const aux = response.data.MRData.RaceTable.Races[0];
            this.circuit = aux.raceName;
            this.date = aux.date;
            this.time = aux.time;
            this.times = aux.Laps[0].Timings;
            this.loading = false;
          })
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
