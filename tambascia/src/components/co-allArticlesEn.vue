<template>
  <div class="row">
    <div class="col-md-12" v-if="articles === null || articles === undefined">
      <div class="alert alert-danger" role="alert" >
        <h4 class="alert-heading">Do oh!</h4>
        <p>There was a problem while loading news, please try later</p>
        <hr>
        <a href="/#/">Go home</a>
      </div>
    </div>
    <div v-else="" v-for="(actualArticle, index) in articles[0].articles" :key="index">
      <div class="col-md-4">
        <div class="card">
          <img class="card-img-top" :src="actualArticle.urlToImage" alt="Image of the article">
          <div class="card-header">
            <h5 class="changeFont">{{actualArticle.title.substring(0, 30)}}</h5>
          </div>
          <div class="card-body">
            <p class="card-text changeFont">{{actualArticle.description.substring(0, 100)}}</p>
            <button @click="this.showMore = true" type="button" class="btn btn-outline-info">Show More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import articleService from '../services/articlesService';
  import sources from './co-sourcesEn.vue';

  export default {
    name: 'allArticlesEn',
    data() {
      return {
        articles: {}
      }
    },
    methods: {
      changeSource(source){
        this.articles = articlesService.getArticlesBySource(source);
      }
    },
    created() {
      this.articles = articleService.getArticlesBySource("abc-news-au");
    }
  }
</script>

<style>
  .card {
    width: 20rem;
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
  }

  .changeFont {
    font-family: 'Roboto', sans-serif;
  }
  .alert{
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 30px;
  }

</style>
