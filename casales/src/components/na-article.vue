<template>
    <div>
        <div class="bg-news"></div>
        <div>
            <div class="container is-fluid">
                <na-navigation class="drop-shadow" :logo="'dark'" :subtitle="'News'"></na-navigation>
            </div>

            <div class="container">
                <section class="section">
                    <div class="columns">
                        <div class="column is-8-desktop is-offset-2-desktop">
                            <na-articles-item :data="article" :key="article.id" :article="article"
                                              :wrappedText="false"></na-articles-item>
                        </div>
                    </div>
                </section>
            </div>

            <na-footer></na-footer>
        </div>
    </div>
</template>

<script>
    import naNavigation from "./na-navigation.vue";
    import naFooter from "./na-footer.vue";
    import naArticlesItem from "./na-articles-item.vue";
    import articlesService from "../services/articlesService";

    export default {
        name: 'naArticle',
        components: {
            naNavigation: naNavigation,
            naFooter: naFooter,
            naArticlesItem: naArticlesItem
        },
        data() {
            return {
                article: {}
            }
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
            getArticle() {
                return articlesService.getArticle(this.id);
            }
        },
        watch: {
            '$route.params.id': function () {
                this.article = this.getArticle();
                if (this.article === undefined) {
                    this.$router.push({path: `/notFound`});
                }
            }
        },
        created() {
            this.article = this.getArticle();
        }
    }
</script>

<style src="../assets/css/na-news.css">

</style>
