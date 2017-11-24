<template>
  <div class="containter topFixFixed">
    <div class="row">
      <div class="mx-auto">
        <form>
          <div class="form-group">
            <label for="latitude">Latitude</label>
            <input type="number" class="form-control" id="latitude" v-model="latitude" aria-describedby="latitude"
                   placeholder="Enter city latitude">
          </div>
          <div class="form-group">
            <label for="longitude">Longitude</label>
            <input type="number" class="form-control" id="longitude" v-model="longitude" placeholder="Enter city longitude">
          </div>
          <small class="form-text text-muted">Dont know the latitude and longitude of the city you are searching?. Try this <a href="https://www.latlong.net/">page</a> </small>
          <button :disabled="checkLL()" @click="searchForecast" type="submit" class="btn btn-primary customMarginTopButton">Search</button>
        </form>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="mx-auto" v-if="forecastData === null  || forecastData === undefined && loading === false">
          <div class="alert alert-danger" role="alert">
            <h4 class="alert-heading">Do oh!</h4>
            <p>There was a problem while loading the forecast, please a different location</p>
            <hr>
          </div>
      </div>
      <div v-else v-for="(actualData, index) in (forecastData? forecastData : [])" :key="index">
        <div class="col-md-12">
          <!-- lo que me retorna la api como 'icon' lo concateno con el directorio donde almaceno las imagenes que descargue yo-->
          <img class="mx-auto d-block" :src="'../../static/wetherIcons/' +actualData.currently.icon+ '.png'" alt="Summary icon day">
          <table class="table table-hover customMarginTop">
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

          <table class="table table-hover customMarginTop">
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
    name: 'forecastByLL',
    data() {
      return {
        forecastData: {},
        loading: false,
        latitude: 0,
        longitude: 0
      }
    },
    methods: {
      checkLL(){
        let isFull = false;
        if(this.latitude === 0 && this.longitude === 0){
          isFull = true;
        }
        return isFull;
      },
      searchForecast(){
        this.loading = true;
        this.forecastData = weatherService.getWeatherFromLL(this.latitude, this.longitude);
        this.loading = false;
      }

    }
  }
</script>

<style>
  .topFixFixed {
    margin-top: 68px;
  }
  .customMarginTopButton{
    margin-top:5px;
  }

</style>
