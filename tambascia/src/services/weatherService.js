let myWetather= [];
const forecastKey = "f9b98ef845fb7dfdee68cfe534dae19a";

export default {
  getMyWeather(coordinates) {
    myWetather = [];
    axios.get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/' +forecastKey+ '/' +coordinates.coords.latitude+ ',' +coordinates.coords.longitude)
      .then(response =>myWetather.push(response.data))
      .catch(error => console.log('There was the following error loading your forecast: ' + error));
    return myWetather;
  }
}
