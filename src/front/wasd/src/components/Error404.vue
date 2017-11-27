<template>
  <div class="error-page window-width column items-center no-wrap">
    <div class="error-code bg-tertiary flex items-center content-center justify-center">
      404
    </div>
    <div>
      <div class="error-card shadow-4 bg-white column items-center justify-center no-wrap">
        <q-icon name="error_outline" color="grey-5"/>
        <p class="caption text-center">Oops. Nothing here...</p>
        <wasd-navigation-buttons></wasd-navigation-buttons>
      </div>
    </div>
  </div>
</template>

<script>
  import {QIcon} from 'quasar'

  import WasdNavigationButtons from './child/WasdNavigationButtons.vue'

  export default {
    components: {
      WasdNavigationButtons,
      QIcon
    },

    data () {
      return {
      }
    }
  }
</script>

<style lang="stylus">
  .error-page
    .error-code
      height 50vh
      width 100%
      padding-top 15vh
      @media (orientation: landscape) {
        font-size 30vw
      }
      @media (orientation: portrait) {
        font-size 30vh
      }
      color rgba(255, 255, 255, .2)
      overflow hidden
    .error-card
      border-radius 2px
      margin-top -50px
      width 80vw
      max-width 600px
      padding 25px
      > i
        font-size 5rem
</style>
