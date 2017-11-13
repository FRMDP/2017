<template>
  <div class="container-fluid">
    <navigation></navigation>
    <div class="row">
      <div class="col-md-12" v-if="articles === null || articles === undefined">
        <div class="alert alert-danger" role="alert" >
          <h4 class="alert-heading">Do oh!</h4>
          <p>There was a problem while loading news, please try later</p>
          <hr>
          <a href="/#/">Go home</a>
        </div>
      </div>
      <div  v-else="" v-for="actualArticle in articles[0].sources">
        <!--<h1 v-="id()"></h1>-->
        <div  class="col-md-4">
          <div class="card">
            <div class="card-header">
                <h5 class="changeFont customFont">{{validateCountryAb(actualArticle.country)}}</h5>
            </div>
            <div class="card-body">
              <p class="card-text changeFont">{{actualArticle.description.substring(0, 100)}}</p>
              <a :href="actualArticle.url" class="card-link">Go To</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import articleService from '../services/articlesService';
  import navigation from './co-navigationEn.vue';
  export default {
    name: 'categoriesEn',
    data() {
      return {
        articles: {}
      }
    },
    methods: {
      resetArticles(){
        this.articles = null;
      },
      getCategoryNews() {
        this.resetArticles();
        return articleService.getArticlesByCategory(this.id);
      },
      validateCountryAb(countryAb){
        switch(countryAb) {
          case "au":
            return "Australia";
          case "de":
            return "Germany";
          case "gb":
            return "England";
          case "in":
            return "India";
          case "it":
            return "Italy";
          case "us":
            return "United States";
        }
      }
    },
    components: {
      navigation,
    },
    computed: {
      id() {
        return this.$route.params.id;
      }
    },
    watch: {
      '$route.params.id'() {
        this.articles = this.getCategoryNews(this.id);
      }
    },
    created() {
      this.resetArticles();
      this.articles = this.getCategoryNews(this.id);
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

  .customFont{
    font-weight: 300;
  }

</style>
