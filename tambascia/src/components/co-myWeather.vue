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
          <h1 class="text-center customMarginTop">{{ actualData.currently.summary }}</h1>
            <table class="table table-hover">
              <thead>
              <tr  class="table-info">
                <th class="text-center">Apparent Temperature</th>
                <th class="text-center">Cloud Cover</th>
                <th class="text-center">Dew Point</th>
                <th class="text-center">Humidity</th>
                <th class="text-center">Ozone</th>
                <th class="text-center">Precipitation Intensity</th>
                <th class="text-center">Precipitation Probability</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <th scope="row" class="text-center">{{actualData.currently.apparentTemperature}} ºF</th>
                <th scope="row" class="text-center">{{actualData.currently.cloudCover}} %</th>
                <th scope="row" class="text-center">{{actualData.currently.dewPoint}} ºF</th>
                <th scope="row" class="text-center">{{actualData.currently.humidity}} %</th>
                <th scope="row" class="text-center">{{actualData.currently.ozone}} DU</th>
                <th scope="row" class="text-center">{{actualData.currently.precipIntensity}} %</th>
                <th scope="row" class="text-center">{{actualData.currently.precipProbability}} %</th>
              </tr>
              </tbody>
            </table>

          <table class="table table-hover">
            <thead>
            <tr  class="table-info">
              <th class="text-center">Pressure</th>
              <th class="text-center">Temperature</th>
              <th class="text-center">Visibility</th>
              <th class="text-center">Wind Bearing</th>
              <th class="text-center">WindGust</th>
              <th class="text-center">Wind Speed</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row" class="text-center">{{actualData.currently.pressure}} MB</th>
              <th scope="row" class="text-center">{{actualData.currently.temperature}} ºF</th>
              <th scope="row" class="text-center">{{actualData.currently.visibility}} MI</th>
              <th scope="row" class="text-center">{{actualData.currently.windBearing}} ºF</th>
              <th scope="row" class="text-center">{{actualData.currently.windGust}} MPH</th>
              <th scope="row" class="text-center">{{actualData.currently.windSpeed}} MPH</th>
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
  .customMarginTop {
    margin-top: 13px;
  }


</style>
