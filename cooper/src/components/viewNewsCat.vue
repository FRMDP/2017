<template>
  <div class="negrita container">
  <h1> {{ cat_name }}</h1>
  <div v-if="!news_list"><h3>There are no news. Nothing interesting happened recently. You can go
  and <b>kill</b> somebody or yourself so we have something to publish.</h3></div>
  <newsCard key="newsCat" v-else v-for="newsForCard in news_list" :newsForCard='newsForCard'></newsCard>

  </div>
</template>

<script>
  import newsCard from './newsCard.vue';
    export default {
        data() {
          return {
            news_list: [],
            categories: []
          }
        },
        components:{
          newsCard
        }, 
        computed: {
          params() {
            return this.$route.params;
          },
          cat_name() {
            return this.$route.params.name;
          }
        },
        methods: {
          getCategories(){
            this.$http.get('http://localhost:8080/categories')
                  .then((response) => {
                      this.categories = response.data._embedded.categories;
                      this.getNews();
                  })
                  .catch((error) => {
                      console.log(error);
                  })
          },
          getNews(){
            const auxCategories = this.categories.find(cat => cat.name == this.cat_name);
            this.$http.get(auxCategories._links.news.href)
              .then((response) => {
                if(response.data._embedded.news.length > 0){
                  this.news_list = response.data._embedded.news;
                }
              })
              .catch((error) => {
                console.log(error);
              })
          }
        },
        watch: {
          '$route.params.name': function() {
            this.news_list = this.getNews();
          }
        },
        mounted(){
          this.getCategories();
        }
    }
</script>

<style>

</style>
