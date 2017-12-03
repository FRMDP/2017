<template>
	<div class="negrita container">
    <div v-if="!news_list.length"><h3>There are no news. Nothing interesting happened recently. You can go
    and <b>kill</b> somebody or yourself so we have something to publish.</h3></div>
    <newsCard key="newsHome" v-else v-for="newsForCard in news_list" :newsForCard='newsForCard'></newsCard>
  </div>
</template>

<script>
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
        this.getAllNews();
      },
      created() {
        this.getAllNews();
      },
      methods: {
        getAllNews(){
          this.$http.get('http://localhost:8080/news')
                .then((response) => {
                    this.news_list =  response.data._embedded.news;
                })
                .catch((msg) => console.log('Error: ', msg));
        }
      }
    }
</script>

<style>

</style>