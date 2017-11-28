<template>
   <div>
     <b-row>
       <b-col>
       </br>
           <label>Since 1950 to 2017 </label>
           <br>
     <b-form-input id="exampleInput1"
                   type="number" v-model="season"
                   placeholder='Please set the season'
     ></b-form-input>
     <br/>
     <b-button type="submit" :disabled='!checkInPut' variant="primary" @click='getDrivers' >Search</b-button>
   </b-col>
 </b-row>
    <rm-spinner v-if='loading'></rm-spinner>
    <b-row>
      <b-col>
      <div v-if='!error'>
      <div v-for='d in drivers'>

          <b-card
          :title="d.surname"
          bg-variant="dark"
          :img-src="d.img"
          img-alt="Image"
          img-top
          tag="article"
          text-variant="white"
          class="mb-2">
          <p class="card-text">
            {{d.surname}},{{d.name}}
            <br/>
            {{d.dateOfBirth}}
            <br/>
            {{d.nationality}}
          </p>
          </b-card>
          <br>
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
    name: 'rmDrivers',
    components:{
      rmSpinner
    },
    data(){
      return{
        loading: false,
        season: '',
        driver:{
          name:'',
          surname:'',
          dateOfBirth:'',
          nationality:'',
          img: ''
        },
        drivers:[],
        error : false
      }
    },
    computed:{
      checkInPut(){
        return this.season >= 1950 && this.season <= 2017;
      }
    },
    methods:{
      getDrivers(){
        this.drivers = [];
        this.loading = true;
        this.$http.get('http://ergast.com/api/f1/'+this.season+'/drivers.json?limit=60')
        .then((response) => {
          const aux = response.data.MRData.DriverTable.Drivers;

          aux.forEach((n) => {
            this.driver.name = n.givenName;
            this.driver.surname = n.familyName;
            this.driver.dateOfBirth = n.dateOfBirth;
            this.driver.nationality = n.nationality;
            this.drivers.push(Object.assign({},this.driver));

            this.loading = false;
          });

          for(let i = 0; i < this.drivers.length; i++){

            let name = this.drivers[i].name+'_'+this.drivers[i].surname;

            this.searchImg(name,i);

          };
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        })
      },

      searchImg(name,index){
        this.$http.get("https://www.googleapis.com/customsearch/v1?key=AIzaSyCESbb8aksvTXgiGEaTZ4Ev9Mw2lOCpI40&cx=008826416416088798084:ria9zrnc1gk&q="+name)
        .then((response) => {

          if(response.data.items[0].pagemap.cse_image){
            this.drivers[index].img = response.data.items[0].pagemap.cse_image[0].src;
          }
        else{
            return undefined;
          }
        })
        .catch((error) => {
          this.error = true;;
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
