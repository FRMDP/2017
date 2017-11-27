<template>
  <div class="layout-padding">
    <div class="row justify-center">
      <div class="col-12" style="max-width: 1800px">
        <div class="row justify-center">
          <h4 class="text-primary">Popular Games Right Now</h4>
        </div>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-12" style="max-width: 1800px">
        <div class="row justify-center">
          <q-infinite-scroll
            :handler="loadMore"
          >
            <wasd-card v-for="(game, index) in popularGames" :data="game" :key="game.id" :game="game"></wasd-card>
            <div class="row justify-center" style="margin-bottom: 50px;">
              <q-spinner-dots slot="message" :size="40" />
            </div>
          </q-infinite-scroll>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    QInfiniteScroll,
    QSpinnerDots
  } from 'quasar'

  import igdb from './../api/igdb.js'

  import WasdCard from './child/WasdCard.vue'

  export default {
    name: 'WasdDiscover',

    components: {
      WasdCard,
      QInfiniteScroll,
      QSpinnerDots
    },

    data () {
      return {
        popularGames: [],
        popularGamesLoaded: false
      }
    },

    beforeRouteEnter (to, from, next) {
      igdb.getPopularGames(0)
        .then((response) => {
          next(vm => vm.setPopularGames(response.data))
        })
        .catch((error) => {
          console.error(error)
        })
    },

    beforeRouteUpdate (to, from, next) {
      igdb.getPopularGames(0)
        .then((response) => {
          this.setPopularGames(response.data)
          next()
        })
        .catch((error) => {
          console.error(error)
        })
    },

    methods: {
      setPopularGames (gamesList) {
        this.popularGames = gamesList
        this.popularGamesLoaded = true
      },

      loadMore: function (index, done) {
        // Entries are not yet initially loaded, can not fetch next chunk
        if (!this.popularGamesLoaded) {
          done()
          return
        }

        // index - called for nth time
        // done - Function to call when you made all necessary updates.
        //        DO NOT forget to call it otherwise your loading message
        //        will continue to be displayed
        // make some Ajax call then call done()
        igdb.getPopularGames(50 * index)
          .then((response) => {
            response.data.forEach((currentGame) => {
              this.popularGames.push(currentGame)
            })
            done()
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },

    created () {

    }
  }
</script>

<style>
</style>
