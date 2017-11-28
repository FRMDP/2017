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
        <div class="col-md-12">
          <!-- lo que me retorna la api como 'icon' lo concateno con el directorio donde almaceno las imagenes que descargue yo-->
          <!--<img class="mx-auto d-block" :src="'../../static/wetherIcons/' +{{ forecastData[0].hourly.icon}} + '.png'"
               alt="Summary icon day">-->
          <h3 class="changeMarginButton text-center customColorFont">{{ forecastData[0].hourly.summary}}</h3>

          <table class="table table-hover customMarginTop customBackColorTable">
            <thead>
            <tr class="table-info">
              <th class="text-center">Hour </th>
              <th class="text-center">Temperature</th>
              <th class="text-center">Humidity</th>
              <th class="text-center">Cloud Cover</th>
              <th class="text-center">Precip. Prob.</th>
              <th class="text-center">Ozone</th>
              <th class="text-center">Summary</th>
            </tr>
            </thead>
            <tbody v-for="(actualData, index) in (forecastData[0].hourly.data ? forecastData[0].hourly.data : [])"
                   :key="index">
            <tr>
              <th scope="row" class="text-center">{{ index}} hs</th>
              <th scope="row" class="text-center">{{actualData.temperature}} ºF</th>
              <th scope="row" class="text-center">{{actualData.humidity}} ºF</th>
              <th scope="row" class="text-center">{{actualData.cloudCover}} %</th>
              <th scope="row" class="text-center">{{actualData.precipProbability}} %</th>
              <th scope="row" class="text-center">{{actualData.ozone}} %</th>
              <th scope="row" class="text-center">{{actualData.summary}}</th>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="row">
          <div class="col-md-6 text-center">
            <router-link class="btn btn-outline-primary buttonRight changeMarginButton centerButton" :to="{ name: 'myWeather'}">Today
            </router-link>
          </div>
          <div class="col-md-6 text-center">
            <router-link class="btn btn-outline-primary changeMarginButton buttonRight centerButton" :to="{ name: 'forecastDaily'}">Daily
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
        name: 'forecastHourly',
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
        },
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
  .changeFont {
    font-family: 'Roboto', sans-serif;
  }
  .customBackColorTable{
    background-color: rgba( 255,255,255, 0.7);
  }

  .topFixFixed {
    margin-top: 68px;
  }

  .customMarginTop {
    margin: 13px;
  }
  .changeMarginButton {
    margin-top: 10px;
  }
  .customColorFont {
    color: #999999;
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
</style>
