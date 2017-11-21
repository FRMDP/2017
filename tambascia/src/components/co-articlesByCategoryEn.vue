<template>
  <div class="container-fluid topFixFixed">
    <div class="row justify-content-center">
      <div class="col-md-12" v-if="articles === null || articles === undefined">
        <div class="alert alert-danger" role="alert" >
          <h4 class="alert-heading">Do oh!</h4>
          <p>There was a problem while loading news, please try later</p>
          <hr>
          <a href="/#/">Go home</a>
        </div>
      </div>
      <div  v-else="" v-for="actualArticle in (articles[0] ? articles[0].sources : [])">
        <div  class="col-md-4">
          <div class="card">
            <div class="card-header cardTitle">
                <h5 class="changeFont customFont" v-if=(!dataIsNull(actualArticle.country))>{{validateCountryAb(actualArticle.country)}}</h5>
            </div>
            <div class="card-body">
              <p class="card-text changeFont" v-if=(!dataIsNull(actualArticle.description))>{{actualArticle.description.substring(0, 100)}}</p>
              <p class="card-text" v-if=(!dataIsNull(actualArticle.name))><small class="text-muted">{{actualArticle.name}}</small></p>
            </div>
            <div class="card-footer">
              <a v-if=(!dataIsNull(actualArticle.url)) :href="actualArticle.url" class="btn btn-outline-primary buttonRight buttonLeft" role="button">Show More</a>
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
      dataIsNull(data){
        let itIs = false;
        if(data=== null || data === undefined){
          itIs = true;
        }
        return itIs;
      },
      resetArticles(){
        this.articles = null;
      },
      getCategoryNews() {
        this.resetArticles();
        return articleService.getArticlesByCategory(this.id);
      },
      validateCountryAb(countryAb){
        switch(countryAb) {
          case "ar":
            return "Argentina";
          case "au":
            return "Australia";
          case "br":
            return "Brasil";
          case "ca":
            return "Canada";
          case "cn":
            return "China";
          case "es":
            return "Spain";
          case "fr":
            return "France";
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
          case "hk":
            return "Hong Kong";
          case "ie":
            return "Irland";
          case "is":
            return "Island";
          case "nl":
            return "Holand";
          case "no":
            return "Norway";
          case "pk":
            return "Pakistan";
          case "ru":
            return "Rusia";
          case "sa":
            return "Saudi Arabia";
          case "sv":
            return "Salvador";
          case "za":
            return "South Africa";
          case "":
            return "";
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
  .topFixFixed {
    margin-top: 68px;
  }

  body{
    overflow: auto;
  }
  .buttonLeft {
    margin-left:73px;
  }
  .cardTitle{
    text-align: center;
  }
  .card {
    width: 20rem;
    margin: 10px;
  }

  .changeFont {
    font-family: 'Roboto', sans-serif;
  }

  .customFont{
    font-weight: 300;
  }

</style>
