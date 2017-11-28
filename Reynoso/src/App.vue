<template>
  <div id="app">
    <menu-bar></menu-bar>
    <router-view/>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
  import menuBar from './components/menu-bar.vue'
  import footerBar from './components/footer-bar.vue'
export default {
  name: 'app',
  components: {
      menuBar,
      footerBar
  },
  data(){
      return{}
  }
}
</script>

<style>
  #app{
      background-color: #263238;
      color : whitesmoke;
  }
  @import 'assets/micss.css';
</style>
