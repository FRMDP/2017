<template>
    <div >

    </br>
        <label>Since 1950 to 2017</label>

        <b-form-input  id="exampleInput1"
                      type="text" v-model="date"
                      placeholder='Please set the date'
        ></b-form-input>

        <br>
        <b-button type="submit" variant="primary" @click='search' :disabled="!dateOk" >Search</b-button>
        <br>
        <rm-spinner v-if='loading' ></rm-spinner>

      <div v-if='!error'>

        <div v-for='c in calendar'>
           <transition name="bounce">
              <b-card bg-variant="dark"
                      text-variant="white"
                      :img-src="c.img"
                      img-alt="Image"
                      img-top
                       style="max-width: 40rem;"
                      :header="c.raceName"
                      header-tag="header"
                      :footer="c.locality"
                      footer-tag="footer"
                      :title="c.circuitName">

                      <p class="card-text">The race was in {{c.date}}</p>

                      <b-button :href="c.url"
                            variant="primary">More Info In wikipedia</b-button>
              </b-card>
            </transition>
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
    name: 'rmSchedule',
    components:{
      rmSpinner
    },
    data(){
      return{
        calendarObj: {
          img: '',
          raceName: '',
          locality:'',
          circuitName: '',
          url:'',
          date: ''

        },
        date: '',
        calendar: [],
        loading: false,
        error : false
      }
    },
    computed:{
      dateOk(){
        return true;//this.date >= 1950 && this.date <= 2017;
      }
    },
    methods:{

      search(){
        this.calendar = [];
        this.loading = true;
        this.$http.get("http://ergast.com/api/f1/"+this.date+".json?callback=")
        .then((response) => {
          const aux = response.data.MRData.RaceTable.Races;

        aux.forEach((n) => {
            this.calendarObj.raceName = n.raceName;
            this.calendarObj.date = n.date;
            this.calendarObj.locality = n.Circuit.Location.locality;
            this.calendarObj.circuitName = n.Circuit.circuitName;
            this.calendarObj.url = n.Circuit.url;
            //this.searchPhotografy(n.Circuit.Location.country);
            this.calendar.push(Object.assign({}, this.calendarObj));
            //this.clearObject();
            this.loading = false;
          });

        }).catch((error) => {
          this.loading = false;
          console.log(error);
          this.error = true;
        });
      },

      clearObject(){
        this.calendarObj.raceName = '',
        this.calendarObj.locality = '',
        this.calendarObj.circuitName = '',
        this.calendarObj.url = '',
        this.calendarObj.img = ''
      }
    },
  mounted(){

  }
}

</script>
<style>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
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
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}

label{
  color:rgb(233, 148, 58);
  font-style:italic;
  font-weight: bold;
}
</style>
