<template>
  <div class="row justify-content-md-center changeFont">
    <div v-show="loading" class="mx-auto loader"></div>
    <div class="col-md-12" v-if="articles === null || articles === undefined">
      <div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Do oh!</h4>
        <p>There was a problem while loading news, please try later</p>
        <hr>
        <router-link :to="{ name: 'ppalEn'}">Go home</router-link>
      </div>
    </div>
    <div v-else v-for="(actualArticle, index) in (getArticles? getArticles.articles : [])" :key="index">
      <div class="col-md-4">
        <div class="card">
          <img class="card-img-top" v-if=(!dataIsNull(actualArticle.urlToImage)) :src="actualArticle.urlToImage" alt="Image of the article">
          <div class="card-header" v-if=(!dataIsNull(actualArticle.title))>
            <h5 >{{actualArticle.title.substring(0, 30)}}</h5>
          </div>
          <div class="card-body">
            <p class="card-text" v-if=(!dataIsNull(actualArticle.description))>{{actualArticle.description.substring(0, 200)}}</p>
            <p class="card-text" v-if="(validateDate(actualArticle.publishedAt))!= null ">
              <small  class="text-muted">Published at: {{validateDate(actualArticle.publishedAt)}}</small>
            </p>
          </div>
          <div class="card-footer">
            <a :href="actualArticle.url" class="btn btn-outline-primary buttonRight centerButton" role="button">Show More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import articleService from '../services/articlesService';
  import sources from './co-sourcesEn.vue';
  import  articles from '../store/modules/articles/index.js';
  import { mapGetters } from 'vuex';

  export default {
    name: 'allArticlesEn',
    props: ['source'],
    data() {
      return {
        articles: {},
        loading: false
      }
    },
    computed: {
      // mix the getters into computed with object spread operator
      ...mapGetters([
        'getArticles'
      ])
    },
    methods: {
      dataIsNull(data){
        let itIs = false;
        if(data=== null || data === undefined){
          itIs = true;
        }
        return itIs;
      },
      changeSource(source) {
        this.loading = true;
        this.articles = articleService.getArticlesBySource(source);
        this.loading = false;
      },
      validateDate(badDate) {
        let newDate = null;
        if(badDate!= null  || badDate!= undefined){
          let idx = badDate.indexOf("T");
          let idxZ = badDate.indexOf("Z");
          let replacement = "-";
          let replacementZ = " ";
          newDate = badDate.substr(0, idx) + replacement + badDate.substr(idx + replacement.length);
          newDate = newDate.substr(0, idxZ) + replacementZ + badDate.substr(idxZ + replacementZ.length);
        }
        return newDate;
      }
    },
    created() {
      this.loading  = true;
      this.$run('setArticles', "espn");
      this.loading = false;
    },

  }
</script>

<style>
  .buttonLeft {
    margin-left: 47px;
  }

  .buttonRight {
    margin-left: 12px;
  }

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

  .centerButton {
    margin-left: 90px;
  }

  .alert {
    margin-top: 30px;
    margin-left: 30px;
    margin-right: 30px;
  }
  .loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  }

  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

</style>
