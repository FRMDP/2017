<template>
  <div>
    <b-row>
      <b-col>
      <br>
      <label>Since 2003 to 2017 </label>
      <b-form-input id="exampleInput1"
                  type="number" v-model="season"
                  placeholder='Please set the season'
      ></b-form-input>
     <label>From 1 to 20</label>
     <b-form-input id="exampleInput1"
                  type="number" v-model="stage"
                  placeholder='Please set the stage'
     ></b-form-input>
     <br/>
    <b-button type="submit" :disabled='!checkInPuts' variant="primary" @click='search' >Search</b-button>
  </b-col>
  </b-row>
    <rm-spinner v-if='loading'></rm-spinner>
  <b-row>
    <div v-if='!error'>
    <div v-if='qualifying.length'>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">Position</th>
          <th scope="col">Driver</th>
          <th scope="col">Team</th>
          <th scope="col">Q1</th>
        </tr>
      </thead>
      <tbody v-for='quali in qualifying'>
        <tr>
          <th scope="row">{{quali.position}}</th>
          <td>{{quali.Driver.familyName}}</td>
          <td>{{quali.Constructor.name}}</td>
          <td>{{quali.Q1}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
<div v-else>
  <label>SOME ARE WRONG</label>
</div>
</b-row>
  </div>
</template>
<script>
  import rmSpinner from './rm-spinner.vue';
  export default{
    name: 'rmQualifying',
    components:{
      rmSpinner
    },
    data(){
      return{
        loading: false,
        season:'',
        stage:'',
        qualifying:[],
        raceName: '',
        date: '',
        error:false
      }
    },
    computed:{
      checkInPuts(){
       return this.season >= 2003 && this.season <= 2017 && this.stage > 0 && this.stage < 21;
      }
    },
    methods:{
      search(){
        this.loading = true;
        this.$http.get("http://ergast.com/api/f1/"+this.season+"/"+this.stage+"/qualifying.json")
          .then((response) =>{
            this.qualifying = response.data.MRData.RaceTable.Races[0].QualifyingResults;
            this.loading = false;
          })
          .catch((error) => {
            this.error = true;
          });
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
