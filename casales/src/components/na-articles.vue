<template>
    <div>
        <div v-if="!filteredArticles.length">
            <p class="title is-1 custom-info animated zoomIn">Couldn't find anything !</p>
            <a href="/#/categories"><p class="custom-info-sub animated fadeIn">Go back to categories?</p></a>
        </div>
        <na-articles-item v-for="(article, index) in filteredArticles" :data="article"
                          :key="article.id" :article="article"></na-articles-item>
    </div>
</template>

<script>
    import articlesService from "./../services/articlesService";
    import naArticlesItem from "./na-articles-item.vue";

    export default {
        name: 'naArticles',
        props: ['filter'],
        components: {
            naArticlesItem: naArticlesItem
        },
        data() {
            return {
                articles: []
            }
        },
        computed: {
            filteredArticles() {
                return this.articles.filter(a => a.category.name.indexOf(this.filter) >= 0);
            }
        },
        created() {
            this.articles = articlesService.getArticles();
        }
    }
</script>

<style src="../assets/css/na-article.css">

</style>
