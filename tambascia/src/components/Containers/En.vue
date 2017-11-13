<template>
  <div >
    <navigation @showSideBar="showSideBar"></navigation>
    <sources :show="this.showSide"></sources>
    <router-view :class="{'toggled': this.showSide}"></router-view>
  </div>
</template>

<script>
  import navigation from '@/components/co-navigationEn.vue';
  import sources from '@/components/co-sourcesEn.vue'
    export default {
        name: 'En',
        data() {
            return {
              showSide: false,
            }
        },
        methods: {
          showSideBar(){
            this.showSide = !this.showSide;
          }
        },
      components: {
        navigation,
        sources
      }
    }
</script>

<style scoped>
  .toggled {
    padding-left: 250px;
    transition: padding 0.5s;
  }
</style>
