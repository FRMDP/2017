<<template>
   <div>
     <b-row>
       <b-col>
         <label>Since 2011 to 2017 </label>
         <b-form-input id="exampleInput1"
                       type="number" v-model="season"
                       placeholder='Please set the season'
         ></b-form-input>
        <label>from 1 to 20</label>
         <b-form-input id="exampleInput1"
                       type="number" v-model="stage"
                       placeholder='Please set the stage'
         ></b-form-input>
         <br/>
         <b-button type="submit" :disabled='!checkInPuts' variant="primary" @click='searchLap' >Search</b-button>
       </b-col>
     </b-row>
    <rm-spinner v-if='loading'></rm-spinner>
    <b-row>
      <b-col>
        <div v-if='!error'>
        <label>Season {{season}} stage {{stage}}</label>
        <br>
        <label> {{circuit}} </label>
        <br>
        <label> {{date}} </label>
        <br>
        <label> {{time}} </label>
        <br>

          <div v-if='pitStop.length'>
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">Driver</th>
                <th scope="col">Lap</th>
                <th scope="col">Stop</th>
                <th scope="col">Time</th>
                <th scope="col">Duration</th>
              </tr>
            </thead>
            <tbody v-for='pit in pitStop'>
              <tr>
                <th scope="row">{{pit.driverId}}</th>
                <td>{{pit.lap}}</td>
                <td>{{pit.stop}}</td>
                <td>{{pit.time}}</td>
                <td>{{pit.duration}}</td>
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
    name: 'rmPitStop',
    components:{
      rmSpinner
    },
    data(){
      return{
        loading: false,
        season: '',
        stage:'',
        circuit: '',
        date: '',
        time: '',
        pitStop: [],
        error: false
      }
    },
    computed:{
      checkInPuts(){
       return this.season >= 2011 && this.season <= 2017 && this.stage > 0 && this.stage < 21;
      }
    },
    methods:{
      searchLap(){
        this.circuit = '';
        this.date = '';
        this.time = '';
        //this.times = [];
        this.loading = true;
        this.$http.get("http://ergast.com/api/f1/"+this.season+"/"+this.stage+"/pitstops.json?limit=150")
        .then((response) => {
          const aux = response.data.MRData.RaceTable.Races[0];
          this.circuit = aux.raceName;
          this.date = aux.date;
          this.time = aux.time;
          this.pitStop = aux.PitStops;
          this.loading = false;
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
