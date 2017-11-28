<template>
  <div class="layout-padding">
    <div class="row justify-center">
      <div class="col-12" style="max-width: 1800px">
        <h4 class="text-primary">Games by genre</h4>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-12" style="max-width: 1800px">
        <!--<h5 class="emphasize text-amber" v-if="pc.length > 0">PC ></h5>-->
        <div>
          <div class="row justify-center">
            <!--<q-card inline v-if="pc.length > 0" v-for="(game, index) in pc" :data="game" :key="game.id">
              <q-card-media style="max-height: 250px;" overlay-position="full" class="cursor-pointer"
                            @click="$router.push({ name: 'game', params: { id: game.id }})">
                <img
                  :src="('cover' in game) ?
                    game.cover.url.replace('t_thumb','t_cover_uniform') :
                  ('screenshots' in game) ?
                    game.screenshots[0].url.replace('t_thumb','t_cover_uniform') :
                  'http://via.placeholder.com/210x250'"
                >

                <q-card-title slot="overlay">
                  <div class="text-secondary absolute-center"><strong>See More</strong></div>
                </q-card-title>
              </q-card-media>
              <q-card-title style="max-width: 210px;">
                <p class="no-padding no-margin" style="max-height: 40px;">
                  {{ game.name.length >= 22 ? game.name.slice(0, 20) + '...' : game.name }}</p>
              </q-card-title>
            </q-card>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    QCard,
    QCardMedia,
    QCardTitle,
    QIcon,
    QCardMain,
    QCardSeparator,
    QCardActions,
    QBtn
  } from 'quasar'

  import { mapGetters, mapActions } from 'vuex'

  /* import igdb from './../api/igdb.js' */

  export default {
    name: 'WasdGenres',

    components: {
      QCard,
      QCardMedia,
      QCardTitle,
      QIcon,
      QCardMain,
      QCardSeparator,
      QCardActions,
      QBtn
    },

    data () {
      return {
        genres: [],
        games: []
      }
    },

    beforeRouteEnter (to, from, next) {
      /* igdb.getAllGenres()
        .then((response) => {
          let promises = []
          let genres = response.data
          genres.forEach((value) => {
            promises.push(igdb.getRandomGamesByGenre(value.id, 5))
          })
          Promise.all(promises)
            .then((responses) => {
              next(vm => {
                vm.setGenres(genres)
                responses.forEach((response) => {
                  vm.setGames(response.data.map((value) => {
                    return {
                      id: value.id,
                      name: value.name,
                      cover: value.cover,
                      genres: value.genres.map((gameValue) => {
                        return genres.find(value => value.id === gameValue.id)
                      })
                    }
                  }))
                })
              })
            })
            .catch((error) => {
              console.error(error)
            })
        })
        .catch((error) => {
          console.log(error)
        }) */
    },

    beforeRouteUpdate (to, from, next) {
      /* Promise.all([
      ])
        .then((response) => {
          next()
        })
        .catch((error) => {
          console.error(error)
        }) */
    },

    computed: {
      ...mapGetters({
        allGenres: 'allGenres'
      })
    },

    methods: {
      ...mapActions({
        loadAllGenres: 'loadAllGenres'
      }),

      setGenres (genres) {
        this.genres = genres
      },

      setGames (games) {
        this.games = games
      }
    }
  }
</script>

<style>
</style>
