import axios from 'axios'

const ENDPOINT = '/igdb'
const API_KEY = 'api-key'
const TIMEOUT = 10000

const randomDate = () => {
  const begin = new Date()
  let end = new Date()
  end.setFullYear(begin.getFullYear() - 5)
  const date = new Date(+begin + Math.random() * (end - begin))
  return date.getTime()
}

export default {
  getPopularGames (offset) {
    return axios({
      baseURL: ENDPOINT,

      url: '/games/?fields=id,cover,name,popularity&order=popularity:desc&limit=50&offset=' + offset,

      method: 'get',

      headers: {
        'user-key': API_KEY,
        'Accept': 'application/json'
      },

      timeout: TIMEOUT
    })
  },

  getGame (id) {
    return axios({
      baseURL: ENDPOINT,

      url: '/games/' + id + '/?fields=*',

      method: 'get',

      headers: {
        'user-key': API_KEY,
        'Accept': 'application/json'
      },

      timeout: TIMEOUT
    })
  },

  getPlatform (ids) {
    return axios({
      baseURL: ENDPOINT,

      url: '/platforms/' + ids + '/?fields=id,name',

      method: 'get',

      headers: {
        'user-key': API_KEY,
        'Accept': 'application/json'
      },

      timeout: TIMEOUT
    })
  },

  getGenres (ids) {
    return axios({
      baseURL: ENDPOINT,

      url: '/genres/' + ids + '/?fields=id,name',

      method: 'get',

      headers: {
        'user-key': API_KEY,
        'Accept': 'application/json'
      },

      timeout: TIMEOUT
    })
  },

  getAllGenres () {
    return axios({
      baseURL: ENDPOINT,

      url: '/genres/?fields=id,name&limit=50&offset=0',

      method: 'get',

      headers: {
        'user-key': API_KEY,
        'Accept': 'application/json'
      },

      timeout: TIMEOUT
    })
  },

  getRandomGames () {
    return axios({
      baseURL: ENDPOINT,

      url: '/games/?fields=*&limit=4&filter[popularity][gt]=5&filter[created_at][gt]=' + randomDate(),

      method: 'get',

      headers: {
        'user-key': API_KEY,
        'Accept': 'application/json'
      },

      timeout: TIMEOUT
    })
  },

  getRandomGamesByGenre (genreId, quantity) {
    return axios({
      baseURL: ENDPOINT,

      url: '/games/?fields=*' +
            '&limit=' + quantity +
            '&filter[genres][eq]=' + genreId +
            '&filter[created_at][gt]=' + randomDate(),

      method: 'get',

      headers: {
        'user-key': API_KEY,
        'Accept': 'application/json'
      },

      timeout: TIMEOUT
    })
  },

  getGamesByPlatform (platformId, offset) {
    return axios({
      baseURL: ENDPOINT,

      url: '/games/?fields=*&limit=50&filter[platforms][eq]=' + platformId + '&offset=' + offset,

      method: 'get',

      headers: {
        'user-key': API_KEY,
        'Accept': 'application/json'
      },

      timeout: TIMEOUT
    })
  },

  getRandomGamesByPlatform (platformId) {
    return axios({
      baseURL: ENDPOINT,

      url: '/games/?fields=*&limit=12&filter[popularity][gt]=3&filter[platforms][eq]=' + platformId +
      '&filter[created_at][gt]=' + randomDate(),

      method: 'get',

      headers: {
        'user-key': API_KEY,
        'Accept': 'application/json'
      },

      timeout: TIMEOUT
    })
  },

  getPulses (offset) {
    return axios({
      baseURL: ENDPOINT,

      url: '/pulses/?fields=id,title,image,author,summary,url&limit=50&offset=' + offset,

      method: 'get',

      headers: {
        'user-key': API_KEY,
        'Accept': 'application/json'
      },

      timeout: TIMEOUT
    })
  },

  getGameEngines (offset) {
    return axios({
      baseURL: ENDPOINT,

      url: '/game_engines/?fields=id,name,logo&limit=50&offset=' + offset,

      method: 'get',

      headers: {
        'user-key': API_KEY,
        'Accept': 'application/json'
      },

      timeout: TIMEOUT
    })
  },

  getEngine (id) {
    return axios({
      baseURL: ENDPOINT,

      url: '/game_engines/' + id + '/?fields=*',

      method: 'get',

      headers: {
        'user-key': API_KEY,
        'Accept': 'application/json'
      },

      timeout: TIMEOUT
    })
  },

  getGames (gameList) {
    return axios({
      baseURL: ENDPOINT,

      url: '/games/' + gameList.join() + '/?fields=*',

      method: 'get',

      headers: {
        'user-key': API_KEY,
        'Accept': 'application/json'
      },

      timeout: TIMEOUT
    })
  },

  getPlatforms (platformsList) {
    return axios({
      baseURL: ENDPOINT,

      url: '/platforms/' + platformsList.join() + '/?fields=*',

      method: 'get',

      headers: {
        'user-key': API_KEY,
        'Accept': 'application/json'
      },

      timeout: TIMEOUT
    })
  },

  getCompanies (companiesList) {
    return axios({
      baseURL: ENDPOINT,

      url: '/companies/' + companiesList.join() + '/?fields=*',

      method: 'get',

      headers: {
        'user-key': API_KEY,
        'Accept': 'application/json'
      },

      timeout: TIMEOUT
    })
  }
}
