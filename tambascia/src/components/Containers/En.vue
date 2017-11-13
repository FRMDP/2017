<template>
  <div >
    <navigation @showSideBar="showSideBar"></navigation>
    <sources v-if="this.showSide"></sources>
    <router-view></router-view>
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

<style>

</style>
