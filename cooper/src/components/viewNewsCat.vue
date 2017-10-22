<template>
  <div class="negrita container">
  <h1> {{ news_cat }}</h1>
  <div v-if="!news_list.length"><h3>There are no news. Nothing interesting happened recently. You can go
  and <b>kill</b> somebody or yourself so we have something to publish.</h3></div>
    <newsCard v-else v-for="newsForCard in news_list" :newsForCard='newsForCard'></newsCard>

  </div>
</template>

<script>
  import serviceNews from '../services/serviceNews';
  import serviceCategory from '../services/serviceCategory';
  import newsCard from './newsCard.vue';
    export default {
        data() {
          return {
            news_list: [],
            news_cat: ''
          }
        },
        components:{
          newsCard
        }, 
        computed: {
          params() {
            return this.$route.params;
          },
          id() {
            return this.$route.params.id;
          }
        },
        methods: {
          getNewsCat() {
            return serviceNews.getNewsCat(this.id);
          },
          getNewsCatName(){
            return serviceCategory.getCategory(this.id); 
          }
        },
        watch: {
          '$route.params.id': function() {
            this.news_list = serviceNews.getNewsCat(this.id);
          }
        },
        created() {
          this.news_list = this.getNewsCat();
          this.news_cat = this.getNewsCatName().name;
        }
    }
</script>

<style>

</style>
