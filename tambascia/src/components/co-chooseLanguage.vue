<template>
    <div class="container">
      <div class="row">
        <div class="mx-auto">
          <h1 class="customPpalFont">
            <br class="lightSpeedOut">Your favourite
            <br class="lightSpeedIn">news site</h1>
        </div>
      </div>
      <div class="row">
        <div class="mx-auto">
          <router-link class="btn btn-outline-primary buttonRight centerButton" role="button" :to="{ name: 'ppalEn'}">Lets Go!</router-link>
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
        methods: {
        }
    }
</script>

<style lang="scss">
  body {
    background-image: url('../../static/fondoImagen.jpeg');
    background-size: 1920px 1080px;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
.marginTopCustom {
    margin-top: 100px;
}
.marginTopFlags {
    margin-top : 50px;
}
.customPpalFont{
    font-family: 'Lobster', cursive;
    font-weight: 300;
    font-size: 100px;
}
</style>
