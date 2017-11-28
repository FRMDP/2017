<template>
  <div class="layout-padding">
    <div class="row justify-center">
      <div class="col-12" style="max-width: 1800px">
        <div class="row justify-center">
          <h4>{{ engineDetails.name }}</h4>
        </div>
        <div class="row justify-center">
          <div class="col-xs-12">
            <div v-if="loading" class="row justify-center" style="margin-top: 32px; margin-bottom: 32px;">
              <q-spinner-ball color="secondary" :size="52"></q-spinner-ball>
            </div>
            <div v-if="!loading && !gameListLoaded && !platformsListLoaded && !companiesListLoaded" style="margin-top: 32px; margin-bottom: 32px;">
              <div class="row justify-center">
                <h4>No content to display</h4>
              </div>
            </div>
            <dl v-if="engineLoaded && !loading">
              <div v-if="('companies' in engineDetails)">
                <dt class="capitalize">company</dt>
                <dd class="emphasize text-justify text-secondary">
                  <span v-if="companiesListLoaded === true" v-for="(company, index) in companiesList" :data="company" :key="company.id">
                    {{ company.name }}
                    <span v-if="(index + 1) < companiesList.length">
                      ,
                    </span>
                    &nbsp;
                  </span>
                </dd>
              </div>
              <div v-if="('platforms' in engineDetails)">
                <dt class="capitalize">platforms</dt>
                <dd class="emphasize text-justify text-amber">
                  <span v-if="platformsListLoaded === true" v-for="(platform, index) in platformsList" :data="platform" :key="platform.id">
                    {{ platform.name }}
                    <span v-if="(index + 1) < platformsList.length">
                      ,
                    </span>
                    &nbsp;
                  </span>
                </dd>
              </div>
              <div v-if="('games' in engineDetails)">
                <dt class="capitalize">games</dt>
                <dd class="emphasize text-justify text-green">
                  <span v-if="gameListLoaded === true">
                    <wasd-card v-for="(game, index) in gameList" :data="game" :key="game.id" :game="game"></wasd-card>
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <hr style="margin-bottom: 32px; margin-top: 32px;">
        <wasd-navigation-buttons></wasd-navigation-buttons>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    QSpinnerBall
  } from 'quasar'

  import igdb from '../api/igdb'

  import WasdCard from './child/WasdCard.vue'

  import WasdNavigationButtons from './child/WasdNavigationButtons.vue'

  export default {
    name: 'WasdGameEngineInfosite',

    components: {
      WasdNavigationButtons,
      WasdCard,
      QSpinnerBall
    },

    data () {
      return {
        engineDetails: '',
        engineLoaded: false,
        gameList: [],
        gameListLoaded: false,
        platformsList: [],
        platformsListLoaded: false,
        companiesList: [],
        companiesListLoaded: false,
        loading: true
      }
    },

    beforeRouteEnter (to, from, next) {
      igdb.getEngine(to.params.id)
        .then((response) => {
          next(vm => {
            let getGamesPromise
            let getPlatformsPromise
            let getCompaniesPromise
            if ('games' in response.data[0]) {
              getGamesPromise = igdb.getGames(response.data[0].games)
            }
            if ('platforms' in response.data[0]) {
              getPlatformsPromise = igdb.getPlatforms(response.data[0].platforms)
            }
            if ('companies' in response.data[0]) {
              getCompaniesPromise = igdb.getCompanies(response.data[0].companies)
            }
            Promise.all([getGamesPromise, getPlatformsPromise, getCompaniesPromise])
              .then((response) => {
                if (response[0]) {
                  vm.setGameList(response[0].data)
                }
                if (response[1]) {
                  vm.setPlatformsList(response[1].data)
                }
                if (response[2]) {
                  vm.setCompaniesList(response[2].data)
                }
              })
            if (!getGamesPromise && !getPlatformsPromise && !getCompaniesPromise) {
              vm.loading = false
            }
            vm.setEngine(response.data[0])
          })
        })
        .catch((error) => {
          console.error(error)
        })
    },

    beforeRouteUpdate (to, from, next) {
      igdb.getEngine(to.params.id)
        .then((response) => {
          this.setEngine(response.data[0])
          let getGamesPromise
          let getPlatformsPromise
          let getCompaniesPromise
          if ('games' in response.data[0]) {
            getGamesPromise = igdb.getGames(response.data[0].games)
          }
          if ('platforms' in response.data[0]) {
            getPlatformsPromise = igdb.getPlatforms(response.data[0].platforms)
          }
          if ('companies' in response.data[0]) {
            getCompaniesPromise = igdb.getCompanies(response.data[0].companies)
          }
          Promise.all([getGamesPromise, getPlatformsPromise, getCompaniesPromise])
            .then((response) => {
              if (response[0]) {
                this.setGameList(response[0].data)
              }
              if (response[1]) {
                this.setPlatformsList(response[1].data)
              }
              if (response[2]) {
                this.setCompaniesList(response[2].data)
              }
            })
          if (!getGamesPromise && !getPlatformsPromise && !getCompaniesPromise) {
            this.loading = false
          }
          next()
        })
        .catch((error) => {
          console.error(error)
        })
    },

    methods: {
      setEngine (engine) {
        this.engineDetails = engine
        this.engineLoaded = true
      },

      setGameList (gameList) {
        this.gameList = gameList
        this.gameListLoaded = true
        this.loading = false
      },

      setPlatformsList (platformsList) {
        this.platformsList = platformsList
        this.platformsListLoaded = true
        this.loading = false
      },

      setCompaniesList (companiesList) {
        this.companiesList = companiesList
        this.companiesListLoaded = true
        this.loading = false
      }
    }
  }
</script>

<style>
</style>
