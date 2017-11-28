import axios from 'axios'

const ENDPOINT = '/steam_appdetails'
/*
const API_KEY = ''
const TIMEOUT = 10000
*/

export default {
  getGame (id) {
    return axios({
      baseURL: ENDPOINT,

      url: '/api/appdetails?appids=' + id + '&cc=us',

      method: 'get'
    })
  }
}
