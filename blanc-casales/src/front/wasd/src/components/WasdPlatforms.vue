<template>
  <div class="layout-padding">
    <div class="row justify-center">
      <div class="col-12" style="max-width: 1800px">
        <div class="row justify-center">
          <h4 class="text-primary">Most Popular Platforms</h4>
        </div>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-12" style="max-width: 1800px">
        <h5 class="emphasize text-amber" v-if="pc.length > 0">PC >
          <router-link :to="{ name: 'platforms', params: { id: 6 }}" class="text-muted">See more</router-link>
        </h5>
        <div>
          <div class="row justify-center">
            <wasd-card
              v-if="pc.length > 0"
              v-for="(game, index) in pc"
              :data="game"
              :key="game.id"
              :game="game"
            >
            </wasd-card>
          </div>
        </div>
        <h5 class="emphasize text-amber" v-if="ps4.length > 0">Play Station 4 >
          <router-link :to="{ name: 'platforms', params: { id: 48 }}" class="text-muted">See more</router-link>
        </h5>
        <div>
          <div class="row justify-center">
            <wasd-card
              v-if="ps4.length > 0"
              v-for="(game, index) in ps4"
              :data="game"
              :key="game.id"
              :game="game"
            >
            </wasd-card>
          </div>
        </div>
        <h5 class="emphasize text-amber" v-if="xboxOne.length > 0">Xbox One >
          <router-link :to="{ name: 'platforms', params: { id: 49 }}" class="text-muted">See more</router-link>
        </h5>
        <div>
          <div class="row justify-center">
            <wasd-card
              v-if="xboxOne.length > 0"
              v-for="(game, index) in xboxOne"
              :data="game"
              :key="game.id"
              :game="game"
            >
            </wasd-card>
          </div>
        </div>
        <h5 class="emphasize text-amber" v-if="nintendoSwitch.length > 0">Nintendo Switch >
          <router-link :to="{ name: 'platforms', params: { id: 130 }}" class="text-muted">See more</router-link>
        </h5>
        <div>
          <div class="row justify-center">
            <wasd-card
              v-if="nintendoSwitch.length > 0"
              v-for="(game, index) in nintendoSwitch"
              :data="game"
              :key="game.id"
              :game="game"
            >
            </wasd-card>
          </div>
        </div>
        <hr>
        <div>
          <div class="row justify-center">
            <wasd-navigation-buttons></wasd-navigation-buttons>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    QIcon,
    QBtn
  } from 'quasar'

  import platformsEnum from './../utils/igdb/platforms'

  import igdb from './../api/igdb.js'

  import WasdCard from './child/WasdCard.vue'

  import WasdNavigationButtons from './child/WasdNavigationButtons.vue'

  export default {
    name: 'WasdPlatforms',

    components: {
      WasdNavigationButtons,
      WasdCard,
      QIcon,
      QBtn
    },

    data () {
      return {
        platforms: [6, 48, 49, 130],
        pc: [],
        pcLoaded: false,
        ps4: [],
        ps4Loaded: false,
        xboxOne: [],
        xboxOneLoaded: false,
        nintendoSwitch: [],
        nintendoSwitchLoaded: false
      }
    },

    beforeRouteEnter (to, from, next) {
      Promise.all([
        igdb.getRandomGamesByPlatform(6),
        igdb.getRandomGamesByPlatform(48),
        igdb.getRandomGamesByPlatform(49),
        igdb.getRandomGamesByPlatform(130)
      ])
        .then((response) => {
          next(vm => {
            vm.setPcGames(response[0].data)
            vm.setPs4Games(response[1].data)
            vm.setXboxOneGames(response[2].data)
            vm.setSwitchGames(response[3].data)
          })
        })
        .catch((error) => {
          console.error(error)
        })
    },

    beforeRouteUpdate (to, from, next) {
      Promise.all([
        igdb.getRandomGamesByPlatform(6),
        igdb.getRandomGamesByPlatform(48),
        igdb.getRandomGamesByPlatform(49),
        igdb.getRandomGamesByPlatform(130)
      ])
        .then((response) => {
          this.setPcGames(response[0].data)
          this.setPs4Games(response[1].data)
          this.setXboxOneGames(response[2].data)
          this.setSwitchGames(response[3].data)
          next()
        })
        .catch((error) => {
          console.error(error)
        })
    },

    methods: {
      setPcGames (gamesList) {
        this.pc = gamesList
        this.pcLoaded = true
      },

      setPs4Games (gamesList) {
        this.ps4 = gamesList
        this.ps4Loaded = true
      },

      setXboxOneGames (gamesList) {
        this.xboxOne = gamesList
        this.xboxOneLoaded = true
      },

      setSwitchGames (gamesList) {
        this.nintendoSwitch = gamesList
        this.nintendoSwitchLoaded = true
      },

      getPlatformName (code) {
        switch (code) {
          case platformsEnum.linux:
            return 'Linux PC'
          case platformsEnum.pc:
            return 'PC'
          case platformsEnum.ps3:
            return 'Play Station 3'
          case platformsEnum.xbox_360:
            return 'Xbox 360'
          case platformsEnum.mac:
            return 'Mac'
          case platformsEnum.ps4:
            return 'Play Station 4'
          case platformsEnum.xbox_one:
            return 'Xbox One'
          case platformsEnum.nintendo_switch:
            return 'Nintendo Switch'
          default:
            return 'Unknown'
        }
      }
    }
  }
</script>

<style scoped>
  .q-card-media-overlay {
    opacity: 0;
    -webkit-transition: opacity 1s;
    -moz-transition: opacity 1s;
    -o-transition: opacity 1s;
    transition: opacity 1s;
  }

  .q-card-media-overlay:hover {
    opacity: 1;
  }
</style>
