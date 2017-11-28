<template>
  <div class="layout-padding">
    <div class="row justify-center">
      <div class="col-12" style="max-width: 1800px">
        <div class="row justify-center">
          <h4 class="text-primary">Game Engines</h4>
        </div>
      </div>
    </div>
    <div class="row justify-center">
      <q-field>
        <q-input v-model="searchString" />
      </q-field>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <q-btn color="secondary" icon="search" @click.prevent="searchEngine">Search</q-btn>
    </div>
    <hr>
    <div class="row justify-center">
      <div class="col-12" style="max-width: 1800px">
        <div class="row justify-center">
          <div class="col-12" v-if="!searching">
            <q-infinite-scroll
              :handler="loadMore"
            >
              <div class="row md-gutter justify-center items-start content-start">
                <div
                  v-for="(engine, index) in gameEngines"
                  :data="engine"
                  :key="engine.id"
                  v-if="'name' in engine"
                  class="col-xs-12 col-sm-6 col-md-4"
                >
                  <div class="row justify-center engine-element" @click="$router.push({ name: 'engine', params: { id: engine.id }})">
                    <div class="col-2">
                      <q-parallax
                        :src="('logo' in engine) ? engine.logo.url : 'http://via.placeholder.com/90x90'"
                        :height="90"
                        :speed="0"
                      >
                        <div slot="loading">
                          <q-spinner-dots color="green"/>
                        </div>
                      </q-parallax>
                    </div>
                    <div class="col-10 relative-position" v-ripple>
                      <span class="absolute-center">
                        <router-link :to="{ name: 'engine', params: { id: engine.id }}" color="green">{{ engine.name }}</router-link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row justify-center" style="margin-bottom: 50px;">
                <q-spinner-dots slot="message" :size="40" />
              </div>
            </q-infinite-scroll>
          </div>
          <div class="col-12" v-if="searching">
            <div class="row md-gutter justify-center items-start content-start" v-if="searchResults.length">
              <div
                v-for="(engine, index) in searchResults"
                :data="engine"
                :key="engine.id"
                v-if="'name' in engine"
                class="col-xs-12 col-sm-6 col-md-4"
              >
                <div class="row justify-center engine-element" @click="$router.push({ name: 'engine', params: { id: engine.id }})">
                  <div class="col-2">
                    <q-parallax
                      :src="('logo' in engine) ? engine.logo.url : 'http://via.placeholder.com/90x90'"
                      :height="90"
                      :speed="0"
                    >
                      <div slot="loading">
                        <q-spinner-dots color="green"/>
                      </div>
                    </q-parallax>
                  </div>
                  <div class="col-10 relative-position" v-ripple>
                      <span class="absolute-center">
                        <router-link :to="{ name: 'engine', params: { id: engine.id }}" color="green">{{ engine.name }}</router-link>
                      </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row md-gutter justify-center items-start content-start" v-else>
              <div class="row justify-center">
                <div class="col-12" style="max-width: 1800px">
                  <div class="row justify-center">
                    <h4 class="text-primary">Not Found!</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    QDataTable,
    QTooltip,
    QBtn,
    QParallax,
    QSpinnerDots,
    QInfiniteScroll,
    Ripple,
    QField,
    QInput
  } from 'quasar'

  import igdb from './../api/igdb'

  export default {
    directives: {
      Ripple
    },

    name: 'WasdGameEngines',

    components: {
      QDataTable,
      QTooltip,
      QBtn,
      QParallax,
      QSpinnerDots,
      QInfiniteScroll,
      QField,
      QInput
    },

    data () {
      return {
        gameEngines: [],
        gameEnginesLoaded: false,
        searchString: '',
        searchResults: [],
        searchResultsLoaded: false,
        searching: false
      }
    },

    beforeRouteEnter (to, from, next) {
      igdb.getGameEngines(0)
        .then((response) => {
          next(vm => vm.setGameEngines(response.data))
        })
        .catch((error) => {
          console.error(error)
        })
    },

    beforeRouteUpdate (to, from, next) {
      igdb.getGameEngines(0)
        .then((response) => {
          this.setGameEngines(response.data)
          next()
        })
        .catch((error) => {
          console.error(error)
        })
    },

    methods: {
      setGameEngines (gameEngineList) {
        this.gameEngines = gameEngineList
        this.gameEnginesLoaded = true
      },

      setGameEnginesSearchResults (engine) {
        this.searchResults = engine
        this.searchResultsLoaded = true
        this.searching = true
      },

      searchEngine () {
        this.searchResultsLoaded = false
        igdb.searchGameEngine(this.searchString)
          .then((response) => {
            this.setGameEnginesSearchResults(response.data)
          })
          .catch((error) => {
            console.error(error)
          })
      },

      loadMore: function (index, done) {
        // Entries are not yet initially loaded, can not fetch next chunk
        if (!this.gameEnginesLoaded) {
          done()
          return
        }

        // index - called for nth time
        // done - Function to call when you made all necessary updates.
        //        DO NOT forget to call it otherwise your loading message
        //        will continue to be displayed
        // make some Ajax call then call done()
        igdb.getGameEngines(50 * index)
          .then((response) => {
            response.data.forEach((currentGameEngine) => {
              this.gameEngines.push(currentGameEngine)
            })
            done()
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }
</script>

<style lang="styl">
  @import '~variables'

  .engine-element
    cursor pointer
    transition background 1.5s
    box-shadow $shadow-5
</style>
