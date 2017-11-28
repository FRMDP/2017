<template>
  <div class="containter topFixFixed changeFont">
    <div class="row">
      <div class="mx-auto">
        <form>
          <div class="form-group">
            <label for="latitude">Latitude</label>
            <input type="number" step="any" class="form-control" id="latitude" v-model="latitude" aria-describedby="latitude"
                   placeholder="Enter city latitude">
          </div>
          <div class="form-group">
            <label for="longitude">Longitude</label>
            <input type="number" step="any" class="form-control" id="longitude" v-model="longitude" placeholder="Enter city longitude">
          </div>
          <small class="form-text text-muted">Dont know the latitude and longitude of the city you are searching?. Try this <a href="https://www.latlong.net/">page</a> </small>
          <button :disabled="checkLL()" @click="searchForecast" type="submit" class="btn btn-outline-primary customMarginTopButton">Search</button>
        </form>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="mx-auto" v-if="forecastData === null  || forecastData === undefined">
          <div class="alert alert-danger" role="alert">
            <h4 class="alert-heading">Do oh!</h4>
            <p>There was a problem while loading the forecast, please a different location</p>
            <hr>
          </div>
      </div>
      <div v-else v-for="(actualData, index) in (forecastData? forecastData : [])" :key="index">
        <div class="col-md-12">
          <h3 class="changeMarginButton text-center customColorFont">{{ validateNameOfCity(actualData.timezone)}}</h3>
          <!-- lo que me retorna la api como 'icon' lo concateno con el directorio donde almaceno las imagenes que descargue yo-->
          <img class="mx-auto d-block" :src="'../../static/wetherIcons/' +actualData.currently.icon+ '.png'" alt="Summary icon day">
          <table class="table table-hover customMarginTop customBackColorTable">
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

          <table class="table table-hover customMarginTop customBackColorTable">
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
      },
      validateNameOfCity(badCityName) {
        let newName = null;
        if(badCityName!= null  || badCityName!= undefined){
          let idx = badCityName.indexOf("/");
          let idxZ = badCityName.indexOf("_");
          let replacement = "-";
          let replacementZ = " ";
          newName = badCityName.substr(0, idx) + replacement + badCityName.substr(idx + replacement.length);
          newName = newName.substr(0, idxZ) + replacementZ + badCityName.substr(idxZ + replacementZ.length);
        }
        return newName;
      }
    },
    created(){
      this.forecastData = weatherService.getWeatherFromLL(22.396428, 114.109497);
    }
  }
</script>

<style>
  .changeFont {
    font-family: 'Roboto', sans-serif;
  }
  .topFixFixed {
    margin-top: 68px;
  }
  .customMarginTopButton{
    margin-top:5px;
  }
  .customBackColorTable{
    background-color: rgba( 255,255,255, 0.7);
  }
  .customColorFont {
    color: #999999;
  }


</style>
