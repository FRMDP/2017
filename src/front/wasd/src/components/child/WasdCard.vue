<template>
  <q-card inline class="animated fadeIn">
    <q-card-media
      style="height: 250px; width: 210px;" overlay-position="full"
      class="cursor-pointer"
      @click="$router.push({ name: 'game', params: { id: game.id }})">
      <q-parallax
        :src="('cover' in game) ?
                    game.cover.url.replace('t_thumb','t_cover_uniform') :
                  ('screenshots' in game) ?
                    game.screenshots[0].url.replace('t_thumb','t_cover_uniform') :
                  'http://via.placeholder.com/210x250'"
        :width="210"
        :height="250"
      >
        <div slot="loading">
          <q-spinner-facebook color="secondary"></q-spinner-facebook>
        </div>
      </q-parallax>
      <q-card-title slot="overlay">
        <div class="text-secondary absolute-center"><strong>See More</strong></div>
      </q-card-title>
    </q-card-media>
    <q-card-title style="max-width: 210px;">
      <p class="no-padding no-margin" style="max-height: 40px;">{{ game.name.length >= 22 ? game.name.slice(0, 20) + '...' : game.name }}</p>
    </q-card-title>
  </q-card>
</template>

<script>
  import {
    QCard,
    QCardMedia,
    QCardTitle,
    QSpinnerFacebook,
    QParallax
  } from 'quasar'

  export default {
    name: 'WasdCard',

    props: ['game'],

    components: {
      QCard,
      QCardMedia,
      QCardTitle,
      QSpinnerFacebook,
      QParallax
    },

    data () {
      return {
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
