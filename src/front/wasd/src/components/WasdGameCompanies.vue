<template>
  <div class="layout-padding">
    <div class="row justify-center">
      <div class="col-12" style="max-width: 1800px">
        <div class="row justify-center">
          <h4 class="text-primary">Game Companies List</h4>
        </div>
      </div>
    </div>
    <hr>
    <div class="row justify-center">
      <div class="col-12" style="max-width: 1800px">
        <div class="row justify-center">
          <div class="col-12">
            <q-infinite-scroll
              :handler="loadMore"
            >
              <div class="row md-gutter justify-center items-start content-start">
                <div
                  v-for="(company, index) in gameCompanies"
                  :data="company"
                  :key="company.id"
                  v-if="'name' in company"
                  class="col-xs-12 col-sm-6 col-md-4"
                >
                  <div class="row justify-center">
                    <div class="col-12">
                      <span>
                        <router-link :to="{ name: 'company', params: { id: company.id }}" color="green">{{ company.name }}</router-link>
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
    Ripple
  } from 'quasar'

  import igdb from './../api/igdb'

  export default {
    directives: {
      Ripple
    },

    name: 'WasdGameCompanies',

    components: {
      QDataTable,
      QTooltip,
      QBtn,
      QParallax,
      QSpinnerDots,
      QInfiniteScroll
    },

    data () {
      return {
        gameCompanies: [],
        gameCompaniesLoaded: false
      }
    },

    beforeRouteEnter (to, from, next) {
      igdb.getGameCompanies(0)
        .then((response) => {
          next(vm => vm.setGameCompanies(response.data))
        })
        .catch((error) => {
          console.error(error)
        })
    },

    getGameCompanies (to, from, next) {
      igdb.getGameCompanies(0)
        .then((response) => {
          this.setGameCompanies(response.data)
          next()
        })
        .catch((error) => {
          console.error(error)
        })
    },

    methods: {
      setGameCompanies (gameCompanies) {
        this.gameCompanies = gameCompanies
        this.gameCompaniesLoaded = true
      },

      loadMore: function (index, done) {
        // Entries are not yet initially loaded, can not fetch next chunk
        if (!this.gameCompaniesLoaded) {
          done()
          return
        }

        // index - called for nth time
        // done - Function to call when you made all necessary updates.
        //        DO NOT forget to call it otherwise your loading message
        //        will continue to be displayed
        // make some Ajax call then call done()
        igdb.getGameCompanies(50 * index)
          .then((response) => {
            response.data.forEach((gameCompany) => {
              this.gameCompanies.push(gameCompany)
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

<style>
</style>
