let myWeather = [];
let weatherByLL = [];
const forecastKey = "f9b98ef845fb7dfdee68cfe534dae19a";

export default {
  getMyWeather(coordinates) {
    myWeather = [];
    axios.get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/' + forecastKey + '/' + coordinates.coords.latitude + ',' + coordinates.coords.longitude)
      .then(response => myWeather.push(response.data))
      .catch(error => console.log('There was the following error loading your forecast: ' + error));
    return myWeather;
  },
  getWeatherFromLL(latitude, longitude) {
    weatherByLL = [];
    axios.get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/' + forecastKey + '/' + latitude + ',' + longitude)
      .then(response => weatherByLL.push(response.data))
      .catch(error => console.log('There was the following error loading your forecast: ' + error));
    return weatherByLL;
  }
}
