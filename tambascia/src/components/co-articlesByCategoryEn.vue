<template>
  <div class="container">
    <navigation></navigation>
    <div class="row">
      <div class="col-md-4" v-for="actualArticle in articles[0].sources">
        <div class="card">
          <!--<div class="card-header">
              <h5 class="changeFont">{{actualArticle.country}}</h5>
          </div>-->
          <div class="card-body">
            <p class="card-text changeFont">{{actualArticle.description.substring(0, 100)}}</p>
            <!--<a :href="actualArticle.url" class="card-link">Show More</a>-->
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
      getCategoryNews() {
        return articleService.getArticlesByCategory(this.id);
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

</style>
