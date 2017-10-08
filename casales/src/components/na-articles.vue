<template>
    <div>
        <div v-if="!filteredArticles.length">
            <p class="title is-1 custom-info animated zoomIn">Couldn't find anything !</p>
            <a href="/#/categories"><p class="custom-info-sub animated fadeIn">Go back to categories?</p></a>
        </div>
        <div class="box animated fadeInUp" v-for="(article, index) in filteredArticles">
            <h1 class="title is-1">{{ article.title }}</h1>
            <hr>
            <span class="tag" :class="isColor(article.category.name)">{{ article.category.name.toUpperCase() }}</span>
            <section class="section">
                <div class="content">
                    <p class="has-text-right has-text-muted">published on {{ article.date }}</p>
                    <p>
                        {{ article.body }}
                    </p>
                </div>
                <b-collapse class="card is-fullwidth" :open.sync="isOpen">
                    <div slot="trigger" class="card-header">
                        <p class="card-header-title">About the author</p>
                        <a class="card-header-icon">
                            <b-icon :icon="isOpen ? 'angle-down' : 'angle-up'"></b-icon>
                        </a>
                    </div>
                    <div class="card-content">
                        <article class="media">
                            <div class="media-left">
                                <figure class="image is-64x64">
                                    <img src="http://placehold.it/128x128" alt="Image">
                                </figure>
                            </div>
                            <div class="media-content">
                                <div class="content">
                                    <p>
                                        <strong>{{ article.reporter.name }}</strong>
                                        <br>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </b-collapse>
            </section>
        </div>
    </div>
</template>

<script>
    import articlesService from "./../services/articlesService";

    export default {
        name: 'naArticles',
        props: ['filter'],
        data() {
            return {
                articles: [],
                isOpen: false
            }
        },
        computed: {
            filteredArticles() {
                return this.articles.filter(a => a.category.name.indexOf(this.filter) >= 0);
            }
        },
        methods: {
            isColor(category){
                switch (category) {
                    case 'sports':
                        return 'is-primary';
                    case 'local':
                        return 'is-info';
                    case 'world':
                        return 'is-success';
                    case 'economy':
                        return 'is-warning';
                    case 'politics':
                        return 'is-danger';
                    case 'entertainment':
                        return 'is-dark';
                    default:
                        return 'is-primary';
                }
            }
        },
        created() {
            this.articles = articlesService.getArticles();
        }
    }
</script>

<style src="../assets/css/na-article.css">

</style>
