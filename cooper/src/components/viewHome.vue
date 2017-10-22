<template>
	<div class="negrita container">
  <div v-if="!news_list.length"><h3>There are no news. Nothing interesting happened recently. You can go
  and <b>kill</b> somebody or yourself so we have something to publish.</h3></div>
  <newsCard v-else v-for="newsForCard in news_list" :newsForCard='newsForCard'></newsCard>

  </div>
</template>

<script>
  import $serviceNews from '../services/serviceNews';
  import newsCard from './newsCard.vue';
    export default {
    	name: 'viewHome',
      components:{
        newsCard
      }, 
      data(){ 
        return {
          news_list: []
        }
      },
      mounted() {
        this.news_list = $serviceNews.getAllNews();
      },
      created() {
        this.news_list = $serviceNews.getAllNews();
      }
    }
</script>

<style>

</style>