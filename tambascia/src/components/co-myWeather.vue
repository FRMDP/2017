<template>
  <div class="container topFixFixed">
    <div class="row justify-content-md-center">
      <div class="col-md-12" v-if="forecastData === null  || forecastData === undefined">
        <div class="alert alert-danger" role="alert">
          <h4 class="alert-heading">Do oh!</h4>
          <p>There was a problem while loading news, please try later</p>
          <hr>
          <router-link :to="{ name: 'ppalEn'}">Go home</router-link>
        </div>
      </div>
      <div v-else v-for="(actualData, index) in (forecastData? forecastData : [])" :key="index">
        <div class="col-md-12">
          <h1>{{ actualData.currently.summary }}</h1>
            <table class="table table-hover">
              <thead>
              <tr>
                <th>Apparent Temperature</th>
                <th>Dew Point</th>
                <th>humidity</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th scope="row">{{actualData.currently.apparentTemperature}}</th>
              </tr>
              <tr>

              </tr>

              </tbody>
            </table>
          </div>

        </div>
      </div>
  </div>

</template>

<script>
  import weatherService from '../services/weatherService';
    export default {
        name: 'myWeather',
        data() {
            return {
              forecastData: {}
            }
        },
        methods: {
          getLocation(position){
            this.forecastData = weatherService.getMyWeather(position);
          }

        },
      created (){
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.getLocation);
        } else {
          console.log("Geolocation is not supported by this browser.");
        }
      }
    }
</script>

<style>
  .topFixFixed {
    margin-top: 68px;
  }


</style>
