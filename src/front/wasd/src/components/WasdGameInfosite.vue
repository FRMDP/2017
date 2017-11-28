<template>
  <div class="layout-padding">
    <div class="row justify-center">
      <div class="col-12" style="max-width: 1800px">
        <q-parallax
          :src="('screenshots' in gameDetails) ?
           gameDetails.screenshots[0].url.replace('t_thumb','t_screenshot_big') :
            'http://via.placeholder.com/1020x250'"
          :height="300"
          :speed="0.3"
        >
          <div slot="loading">
            <q-spinner color="secondary"/>
          </div>
        </q-parallax>
        <h4>{{ gameDetails.name }}</h4>
        <div class="row justify-center">
          <q-card class="shadow-10" style="max-height: 250px;">
            <q-card-media>
              <img
                :src="('cover' in gameDetails) ?
                 gameDetails.cover.url.replace('t_thumb','t_cover_uniform') :
                  'http://via.placeholder.com/210x250'"
              >
              <q-card-title slot="overlay">
                Cover
              </q-card-title>
            </q-card-media>
          </q-card>
          <div class="col-xs-12 col-sm-9">
            <div class="row">
              <div class="col-12">
                <dl class="horizontal">
                  <div v-if="('genres' in gameDetails)">
                    <dt class="capitalize">genres</dt>
                    <dd class="emphasize text-justify text-green">
                      <span v-if="genresLoading">Loading ...</span>
                      <span v-for="(genre, index) in gameGenres" :data="genre" :key="genre.id" style="display: inline-block;">
                        {{ genre.name }}
                        <span v-if="(index + 1) < gameGenres.length">
                          ,
                        </span>
                        &nbsp;
                      </span>
                    </dd>
                  </div>
                  <div v-if="('category' in gameDetails)">
                    <dt class="capitalize">type</dt>
                    <dd class="text-justify text-amber">{{ getGameCategory(gameDetails.category) }}</dd>
                  </div>
                  <div v-if="('platforms' in gameDetails)">
                    <dt class="capitalize">platforms</dt>
                    <dd class="emphasize text-justify text-secondary">
                      <span v-if="platformsLoading">Loading ...</span>
                      <span v-for="(platform, index) in gamePlatforms" :data="platform" :key="platform.id" style="display: inline-block;">
                        {{ platform.name }}
                        <span v-if="(index + 1) < gamePlatforms.length">
                          ,
                        </span>
                        &nbsp;
                      </span>
                    </dd>
                  </div>
                  <div v-if="('summary' in gameDetails)">
                    <dt class="capitalize">summary</dt>
                    <dd class="text-justify thin-paragraph">{{ gameDetails.summary }}</dd>
                  </div>
                  <div v-if="('websites' in gameDetails)">
                    <br>
                    <dt class="capitalize"> </dt>
                    <dd>
                      <a
                        v-for="(website, index) in gameDetails.websites"
                        :data="website"
                        :key="website.category"
                        :href="website.url"
                        target="_blank"
                      >
                        <span style="display: inline-block; padding: 5px;">
                          <q-icon :name="getExternalWebsiteIcon(website.category)" style="font-size: 25px"/>
                          {{ getExternalWebsiteDetails(website.category) }}
                          &nbsp;
                        </span>
                      </a>
                    </dd>
                  </div>
                  <div v-if="gamePrice">
                    <dt class="capitalize">current steam price</dt>
                    <dd class="text-justify text-bold text-secondary">
                      {{ gamePrice.currency }}&nbsp;{{ getGamePrice(gamePrice.final.toString()) }}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
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
    QParallax,
    QSpinner,
    QIcon,
    QBtn,
    QCard,
    QCardMedia,
    QCardTitle
  } from 'quasar'

  import { mapGetters, mapActions } from 'vuex'

  import igdb from './../api/igdb.js'

  import websitesEnum from './../utils/igdb/websites'

  import gameCategoryEnum from './../utils/igdb/game-categories'

  import WasdNavigationButtons from './child/WasdNavigationButtons.vue'

  import steam from './../api/steam'

  export default {
    name: 'WasdGameInfosite',

    components: {
      WasdNavigationButtons,
      QParallax,
      QSpinner,
      QIcon,
      QBtn,
      QCard,
      QCardMedia,
      QCardTitle
    },

    data () {
      return {
        gameDetails: [],
        gameDetailsLoaded: false,
        gamePlatforms: [],
        platformsLoading: true,
        gameGenres: [],
        genresLoading: true,
        gamePrice: ''
      }
    },

    beforeRouteEnter (to, from, next) {
      igdb.getGame(to.params.id)
        .then((response) => {
          next(vm => {
            let getGamePricePromise
            let steamid
            if ('external' in response.data[0]) {
              if ('steam' in response.data[0].external) {
                steamid = response.data[0].external.steam
                getGamePricePromise = steam.getGame(response.data[0].external.steam)
              }
            }
            Promise.all([getGamePricePromise])
              .then((response) => {
                if (response[0]) {
                  vm.setGamePrice(response[0].data[steamid].data.price_overview)
                }
              })
            vm.setGame(response.data[0])
          })
        })
        .catch((error) => {
          console.error(error)
        })
    },

    beforeRouteUpdate (to, from, next) {
      igdb.getGame(to.params.id)
        .then((response) => {
          this.setGame(response.data[0])
          let steamid
          let getGamePricePromise
          if ('external' in response.data[0]) {
            if ('steam' in response.data[0].external) {
              steamid = response.data[0].external.steam
              getGamePricePromise = steam.getGame(response.data[0].external.steam)
            }
          }
          Promise.all([getGamePricePromise])
            .then((response) => {
              if (response[0]) {
                this.setGamePrice(response[0].data[steamid].data.price_overview)
              }
            })
          next()
        })
        .catch((error) => {
          console.error(error)
        })
    },

    computed: {
      ...mapGetters({
        platforms: 'allPlatforms',
        genres: 'allGenres'
      })
    },

    methods: {
      ...mapActions({
        loadPlatforms: 'loadPlatforms',
        loadGenres: 'loadGenres'
      }),

      setGame (game) {
        this.gameDetails = game
        this.gameDetailsLoaded = true
        if ('platforms' in game) {
          this.loadPlatforms(this.gameDetails.platforms)
            .then(() => {
              this.gamePlatforms = this.gameDetails.platforms.map((id) => {
                return this.platforms.filter(all => (all.id === id))[0]
              })
              this.platformsLoading = false
            })
            .catch((error) => {
              console.error('WASD Games | ERROR Retrieving Platforms.', error)
            })
        }
        if ('genres' in game) {
          this.loadGenres(this.gameDetails.genres)
            .then(() => {
              this.gameGenres = this.gameDetails.genres.map((id) => {
                return this.genres.filter(all => (all.id === id))[0]
              })
              this.genresLoading = false
            })
            .catch((error) => {
              console.error('WASD Games | ERROR Retrieving Genres.', error)
            })
        }
      },

      setGamePrice (data) {
        this.gamePrice = data
      },

      getGamePrice (num) {
        return num.slice(0, -2) + ',' + num.slice(-2)
      },

      getExternalWebsiteIcon (category) {
        switch (category) {
          case websitesEnum.category.official:
            return 'fa-external-link'
          case websitesEnum.category.wikia:
            return 'fa-external-link'
          case websitesEnum.category.wikipedia:
            return 'fa-wikipedia-w'
          case websitesEnum.category.facebook:
            return 'fa-facebook-official'
          case websitesEnum.category.twitter:
            return 'fa-twitter'
          case websitesEnum.category.twitch:
            return 'fa-twitch'
          case websitesEnum.category.instagram:
            return 'fa-instagram'
          case websitesEnum.category.youtube:
            return 'fa-youtube-play'
          case websitesEnum.category.iphone:
            return 'fa-mobile'
          case websitesEnum.category.ipad:
            return 'fa-tablet'
          case websitesEnum.category.android:
            return 'fa-mobile'
          case websitesEnum.category.steam:
            return 'fa-steam'
          default:
            return 'fa-external-link'
        }
      },

      getExternalWebsiteDetails (category) {
        switch (category) {
          case websitesEnum.category.official:
            return 'Official'
          case websitesEnum.category.wikia:
            return 'Wiki'
          case websitesEnum.category.wikipedia:
            return 'Wikipedia'
          case websitesEnum.category.facebook:
            return 'Facebook'
          case websitesEnum.category.twitter:
            return 'Twitter'
          case websitesEnum.category.twitch:
            return 'Twitch.tv'
          case websitesEnum.category.instagram:
            return 'Instagram'
          case websitesEnum.category.youtube:
            return 'Youtube'
          case websitesEnum.category.iphone:
            return 'iPhone'
          case websitesEnum.category.ipad:
            return 'iPad'
          case websitesEnum.category.android:
            return 'Android'
          case websitesEnum.category.steam:
            return 'Steam'
          default:
            return 'Link'
        }
      },

      getGameCategory (category) {
        switch (category) {
          case gameCategoryEnum.main:
            return 'Game'
          case gameCategoryEnum.dlc:
            return 'DLC / Addon'
          case gameCategoryEnum.expansion:
            return 'Expansion'
          case gameCategoryEnum.bundle:
            return 'Bundle'
          case gameCategoryEnum.standalone:
            return 'Standalone Expansion'
          default:
            return 'Game'
        }
      }
    },

    created () {

    }
  }
</script>

<style>
</style>
