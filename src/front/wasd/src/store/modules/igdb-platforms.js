import igdb from './../../api/igdb'
import * as types from './../mutation-types'

const state = {
  all: []
}

const getters = {
  allPlatforms: state => state.all
}

const actions = {
  loadPlatforms ({ commit }, ids) {
    return new Promise((resolve, reject) => {
      const findList = []
      ids.forEach((id) => {
        if (state.all.filter(all => (all.id === id)).length <= 0) {
          findList.push(id)
        }
      })
      if (findList.length > 0) {
        igdb.getPlatform(findList.toString())
          .then((response) => {
            commit(types.LOAD_PLATFORMS, { platforms: response.data })
            resolve()
          })
          .catch((error) => {
            console.error('WASD Games | ERROR Retrieving Platforms.', error)
            reject(error)
          })
      }
      else {
        resolve()
      }
    })
  }
}

const mutations = {
  [types.LOAD_PLATFORMS] (state, { platforms }) {
    platforms.forEach((current) => {
      state.all.push(current)
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
