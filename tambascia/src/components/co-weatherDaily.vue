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
          <h3 class="changeMarginButton">{{ forecastData[0].daily.summary}}</h3>
          <!-- lo que me retorna la api como 'icon' lo concateno con el directorio donde almaceno las imagenes que descargue yo-->
          <!--<img class="mx-auto d-block" :src="'../../static/wetherIcons/' +actualData.icon+ '.png'"
               alt="Summary icon day">-->
          <table class="table table-hover customMarginTop">
            <thead>
            <tr class="table-info">
              <th class="text-center">Days </th>
              <th class="text-center">Max Temp</th>
              <th class="text-center">Min Temp</th>
              <th class="text-center">Cloud Cover</th>
              <th class="text-center">Precip. Prob.</th>
              <th class="text-center">Ozone</th>
              <th class="text-center">Summary</th>
            </tr>
            </thead>
            <tbody v-for="(actualData, index) in (forecastData[0].daily.data ? forecastData[0].daily.data : [])"
                   :key="index">
            <tr>
              <th scope="row" class="text-center">{{ GetDates()[index]}}</th>
              <th scope="row" class="text-center">{{actualData.apparentTemperatureHigh}} ºF</th>
              <th scope="row" class="text-center">{{actualData.apparentTemperatureLow}} ºF</th>
              <th scope="row" class="text-center">{{actualData.cloudCover}} %</th>
              <th scope="row" class="text-center">{{actualData.precipProbability}} %</th>
              <th scope="row" class="text-center">{{actualData.ozone}} %</th>
              <th scope="row" class="text-center">{{actualData.summary}}</th>
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
    name: 'forecastDaily',
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
      MonthAsString(monthIndex) {
        var d = new Date();
        var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

        return month[monthIndex];
      },
      DayAsString(dayIndex) {
        var weekdays = new Array(7);
        weekdays[0] = "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";

        return weekdays[dayIndex];
      },
      GetDates() {
        var aryDates = [];
        let daysToAdd = 7;
        let startDate = new Date();

        for (var i = 0; i <= daysToAdd; i++) {
          var currentDate = new Date();
          currentDate.setDate(startDate.getDate() + i);
          aryDates.push(this.DayAsString(currentDate.getDay()) + ", " + currentDate.getDate() + " " + this.MonthAsString(currentDate.getMonth()) + " " + currentDate.getFullYear());
        }
          debugger;
        return aryDates;
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

</style>
