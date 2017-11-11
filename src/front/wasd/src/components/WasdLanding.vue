<template>
  <div>
    <div class="background"></div>


    <div class="row">
      <div class="absolute-center">
        <div class="col-12">
          <div>
            <q-transition
              appear
              enter="fadeInUp"
              leave="fadeOut"
            >
              <h2 class="text-bold text-white">Know Your Games.</h2>
            </q-transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    QTransition
  } from 'quasar'

  import 'quasar-extras/animate/fadeInUp.css'
  import 'quasar-extras/animate/fadeOut.css'

  export default {
    name: 'WasdLanding',

    components: {
      QTransition
    },

    data () {
      return {}
    }
  }
</script>

<style scoped>
  .background {
    background: linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.2)
    ),
    url('/statics/bg-home.jpg') no-repeat;
    background-attachment: fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
</style>
