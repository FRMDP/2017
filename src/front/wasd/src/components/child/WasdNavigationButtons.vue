<template>
  <p class="text-center group">
    <q-btn
      v-if="canGoBack"
      color="tertiary"
      push
      @click.prevent="goBack"
      icon="keyboard_arrow_left"
      :class="isDisabledButtons ? 'disabled' : ''"
    >
      Go back
    </q-btn>
    <q-btn
      color="tertiary"
      push
      @click.prevent="goHome"
      icon-right="home"
      :class="isDisabledButtons ? 'disabled' : ''"
    >
      Go home
    </q-btn>
  </p>
</template>

<script>
  import {
    QBtn
  } from 'quasar'

  export default {
    name: 'WasdNavigationButtons',

    components: {
      QBtn
    },

    data () {
      return {
        canGoBack: window.history.length > 1,
        isDisabledButtons: false
      }
    },

    methods: {
      goBack () {
        this.isDisabledButtons = true
        window.history.go(-1)
      },

      goHome () {
        this.isDisabledButtons = true
        this.$router.replace('/')
      }
    }
  }
</script>

<style>

</style>
