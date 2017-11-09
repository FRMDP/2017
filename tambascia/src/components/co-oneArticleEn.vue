<template>
  <div class="row">
    <div class="col-md-12">
      <div class="col-md-4">

      </div>
      <div class="col-md-8">

      </div>
    </div>
  </div>
</template>

<script>
  import articleService from '../services/articlesService';

  export default {
    name: 'oneArticleEn',
    data() {
      return {
        articles: {

        }
      }
    },
    methods: {},
    created() {
      this.articles = articleService.getArticleById();
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
