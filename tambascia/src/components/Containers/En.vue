<template>
  <div class="fixAll">
    <navigation @showSideBar="showSideBar"></navigation>
    <sources :show="this.showSide" @changeSource="changeSource"></sources>
    <router-view :class="{'toggled': this.showSide}"></router-view>
    <div class="row">
      <coFooter class="align-bottom"></coFooter>
    </div>

  </div>
</template>

<script>
  import navigation from '@/components/co-navigationEn.vue';
  import sources from '@/components/co-sourcesEn.vue';
  import coFooter from '@/components/co-footer.vue';
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
          },
          changeSource(source){
            this.$run('setArticles', source);
          }
        },
      components: {
        navigation,
        sources,
        coFooter
      }
    }
</script>

<style scoped>
  .fixAll{
    margin: 0;
    height: 100%;
  }
  .toggled {
    padding-left: 250px;
    transition: padding 0.5s;
  }
</style>
