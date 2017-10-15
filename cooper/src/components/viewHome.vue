<template>
	<div class="negrita container">

    <div v-for="singleNews in news_list">
      <h3> {{ singleNews.title }} </h3>
      {{ singleNews.body }}
      {{ singleNews.category.name }}
    </div>

  </div>
</template>

<script>
  import $serviceNews from '../services/serviceNews';

    export default {
    	name: 'viewHome',
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
