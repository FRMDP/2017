<template>
  <div class="layout-padding">
    <div class="row justify-center">
      <div class="col-12" style="max-width: 1800px">
        <div class="row justify-center">
          <h4 class="text-primary">Games' News</h4>
        </div>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-12" style="max-width: 1800px">
        <div class="row justify-center">
          <q-infinite-scroll
            :handler="loadMore"
          >
            <div class="row md-gutter justify-center items-start content-start">
              <div
                class="col-xs-12 col-sm-6 col-md-4"
                v-for="(pulse, index) in pulses"
                :data="pulse"
                :key="pulse.id"
                v-if="'title' in pulse"
              >
                <hr>
                <div class="row justify-center">
                  <h6 class="text-bold pulse-title">
                    {{ pulse.title.length >= 75 ? pulse.title.slice(0, 75) + '...' : pulse.title }}
                  </h6>
                </div>
                <q-parallax
                  class="shadow-10"
                  :src="('image' in pulse) ?
                    pulse.image :
                     'http://via.placeholder.com/500x250'"
                  :height="250"
                  :speed="0"
                >
                  <div slot="loading">
                    <q-spinner-dots color="green"/>
                  </div>
                </q-parallax>
                <p v-if="'author' in pulse" class="text-muted text-tertiary" style="padding-bottom: 0; margin-bottom: 0;">by {{ pulse.author }}</p>
                <p v-if="'summary' in pulse">
                  <span v-if="!(/<[a-z][\s\S]*>/i.test(pulse.summary))">
                    {{ pulse.summary.length >= 150 ? pulse.summary.slice(0, 150) + '...' : pulse.summary }}
                  </span>
                </p>
                <div class="row justify-center relative-position">
                  <a v-if="'url' in pulse" :href="pulse.url" target="_blank" class="absolute-center">
                    Read the article
                  </a>
                </div>
              </div>
            </div>
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
    QSpinnerDots,
    QParallax
  } from 'quasar'

  import igdb from './../api/igdb'

  export default {
    name: 'WasdNews',

    components: {
      QInfiniteScroll,
      QSpinnerDots,
      QParallax
    },

    data () {
      return {
        pulses: [],
        pulsesLoaded: false
      }
    },

    beforeRouteEnter (to, from, next) {
      igdb.getPulses(0)
        .then((response) => {
          next(vm => vm.setGameEngines(response.data))
        })
        .catch((error) => {
          console.error(error)
        })
    },

    beforeRouteUpdate (to, from, next) {
      igdb.getPulses(0)
        .then((response) => {
          this.setGameEngines(response.data)
          next()
        })
        .catch((error) => {
          console.error(error)
        })
    },

    methods: {
      setGameEngines (newsList) {
        this.pulses = newsList
        this.pulsesLoaded = true
      },

      loadMore: function (index, done) {
        // Entries are not yet initially loaded, can not fetch next chunk
        if (!this.pulsesLoaded) {
          done()
          return
        }

        // index - called for nth time
        // done - Function to call when you made all necessary updates.
        //        DO NOT forget to call it otherwise your loading message
        //        will continue to be displayed
        // make some Ajax call then call done()
        igdb.getPulses(50 * index)
          .then((response) => {
            response.data.forEach((currentPulse) => {
              this.pulses.push(currentPulse)
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

<style scoped>
  .pulse-title {
    color: #4caf50 !important;
  }
</style>
