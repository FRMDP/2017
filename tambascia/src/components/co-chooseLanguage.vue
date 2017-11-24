<template>
    <div class="container bgimg">
      <div class="row">
        <div class="mx-auto">
          <router-link :to="{ name: 'ppalEn'}">Enter</router-link>
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
  }
.marginTopCustom {
    margin-top: 100px;
}
.marginTopFlags {
    margin-top : 50px;
}
.changeFont{
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
}
</style>
