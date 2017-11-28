<template>
  <div class="layout-padding">
    <div class="row justify-center">
      <div class="col-12" style="max-width: 1800px">
        <div class="row justify-center">
          <h4>{{ companyDetails.name }}</h4>
        </div>
        <div class="row justify-center">
          <div class="col-xs-12">
            <div v-if="loading" class="row justify-center" style="margin-top: 32px; margin-bottom: 32px;">
              <q-spinner-ball color="secondary" :size="52"></q-spinner-ball>
            </div>
            <div v-if="!loading && !gameListLoaded" style="margin-top: 32px; margin-bottom: 32px;">
              <div class="row justify-center">
                <h4>No content to display</h4>
              </div>
            </div>
            <dl v-if="companyLoaded && !loading">
              <div v-if="('published' in companyDetails)">
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
        <hr>
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
        companyDetails: '',
        companyLoaded: false,
        gameList: [],
        gameListLoaded: false,
        loading: true
      }
    },

    beforeRouteEnter (to, from, next) {
      igdb.getCompany(to.params.id)
        .then((response) => {
          next(vm => {
            let getGamesPromise
            if ('published' in response.data[0]) {
              getGamesPromise = igdb.getGames(response.data[0].published)
            }
            Promise.all([getGamesPromise])
              .then((response) => {
                if (response[0]) {
                  vm.setGameList(response[0].data)
                }
              })
            if (!getGamesPromise) {
              vm.loading = false
            }
            vm.setCompany(response.data[0])
          })
        })
        .catch((error) => {
          console.error(error)
        })
    },

    beforeRouteUpdate (to, from, next) {
      igdb.getCompany(to.params.id)
        .then((response) => {
          this.setCompany(response.data[0])
          let getGamesPromise
          if ('published' in response.data[0]) {
            getGamesPromise = igdb.getGames(response.data[0].published)
          }
          Promise.all([getGamesPromise])
            .then((response) => {
              if (response[0]) {
                this.setGameList(response[0].data)
              }
            })
          if (!getGamesPromise) {
            this.loading = false
          }
          next()
        })
        .catch((error) => {
          console.error(error)
        })
    },

    methods: {
      setCompany (company) {
        this.companyDetails = company
        this.companyLoaded = true
      },

      setGameList (gameList) {
        this.gameList = gameList
        this.gameListLoaded = true
        this.loading = false
      }
    }
  }
</script>

<style>
</style>
