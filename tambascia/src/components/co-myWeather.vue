<template>
  <div class="container topFixFixed changeFont">
    <div v-show="loading" class="mx-auto loader"></div>
    <div class="row justify-content-md-center">
      <div class="col-md-12" v-if="forecastData === null  || forecastData === undefined && loading === false">
        <div class="alert alert-danger" role="alert">
          <h4 class="alert-heading">Do oh!</h4>
          <p>There was a problem while loading the forecast, please try later</p>
          <hr>
          <p>
            If the problem psersists please make sure you allow location access to your browser like in the image below</p>
          <img src="../../static/locationAccessNotAllowed.png" alt="Image ralated to the error">
          <hr>
          <router-link :to="{ name: 'ppalEn'}">Go home</router-link>
        </div>
      </div>
      <div v-else>
        <div v-for="(actualData, index) in (forecastData? forecastData : [])" :key="index">
          <div class="col-md-12">
            <!-- lo que me retorna la api como 'icon' lo concateno con el directorio donde almaceno las imagenes que descargue yo-->
            <img class="mx-auto d-block" :src="'../../static/wetherIcons/' +actualData.currently.icon+ '.png'"
                 alt="Summary icon day">
            <table class="table table-hover customMarginTop customBackColorTable">
              <thead>
              <tr class="table-info">
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

            <table class="table table-hover customMarginTop customBackColorTable">
              <thead>
              <tr class="table-info">
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
        <div class="row">
          <div class="col-md-6 text-center">
            <router-link class="btn btn-outline-primary buttonRight changeMarginButton centerButton" :to="{ name: 'forecastDaily'}">Daily
            </router-link>
          </div>
          <div class="col-md-6 text-center">
            <router-link class="btn btn-outline-primary changeMarginButton buttonRight centerButton" :to="{ name: 'forecastHourly'}">Hourly
            </router-link>
          </div>
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
        forecastData: {},
        loading: false
      }
    },
    methods: {
      getLocation(position) {
        this.loading = true;
        this.forecastData = weatherService.getMyWeather(position);
        this.loading = false;
      }
    },
    created() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getLocation);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    }
  }
</script>

<style>
  .topFixFixed {
    margin-top: 68px;
  }

  .customMarginTop {
    margin: 13px;
  }
  .changeMarginButton {
    margin-top: 10px;
  }

  .loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .changeFont {
    font-family: 'Roboto', sans-serif;
  }
  .customBackColorTable{
    background-color: rgba( 255,255,255, 0.7);
  }

</style>
