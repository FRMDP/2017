<template>
  <div class="container">
    <div class="row">
      <div class="mx-auto">
        <h1 class="customPpalFont lightSpeedIn">
          <br>Your favourite
          <br>news site</h1>
      </div>
    </div>
    <div class="row">
      <div class="mx-auto">
        <router-link class="btn btn-outline-primary buttonRight centerButton" role="button" :to="{ name: 'ppalEn'}">
          Lets Go!
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'chooseLanguage',
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss">
  .marginTopCustom {
    margin-top: 100px;
  }

  .marginTopFlags {
    margin-top: 50px;
  }

  .customPpalFont {
    font-family: 'Lobster', cursive;
    font-weight: 300;
    font-size: 100px;
  }
</style>
