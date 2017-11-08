<template>
    <div class="row">
        <div class="col-md-4" v-for="actualArticle in articles[0].articles">
            <div class="card">
                <img class="card-img-top" :src="actualArticle.urlToImage" alt="Image of the article">
                <div class="card-header">
                    <h5 class="changeFont">{{actualArticle.title.substring(0, 30)}}</h5>
                </div>
                <div class="card-body">
                    <p class="card-text changeFont">{{actualArticle.description.substring(0, 100)}}</p>
                    <a :href="actualArticle.url" class="card-link">Show More</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import articleService from '../services/articlesService';

    export default {
        name: 'allArticlesEn',
        data() {
            return {
                articles: {}
            }
        },
        methods: {},
        created() {
            this.articles = articleService.getAllArticles("latest");
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