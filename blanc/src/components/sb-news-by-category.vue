<template>
    <div>
        <div>
            <sb-navbar></sb-navbar>

            <div class="container">
                <br>
                <div class="column is-10-desktop is-offset-1-desktop">
                    <p class="title has-text-primary is-size-2-desktop">{{this.$stringHelper.firstCharToUpper(category.name)}}</p>
                </div>
            </div>

            <div class="container has-text-centered">
                <section class="section">
                    <div class="columns">
                        <div class="column is-10-desktop is-offset-1-desktop">
                            <div v-if="!categoryArticles.length">
                                <p class="title is-size-2">No News have been found!</p>
                                <a class="button is-primary" href="/#/categories">Back to Categories</a>
                            </div>
                            <div v-else>
                            <sbNewsCards v-for="article in categoryArticles" :data="article"
                                         :key="article.id" :article="article" :shortVersion="true"></sbNewsCards>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <sb-footer></sb-footer>
        </div>
    </div>
</template>

<script>
    import sbNavbar from "./sb-navbar.vue";
    import sbFooter from "./sb-footer.vue";
    import sbNewsCards from "./sb-news-card.vue";
    import categoriesService from "./../services/categoriesService";
    import newsService from "./../services/newsService";

    export default {
        name: 'sbNewsByCategory',
        components: {
            sbNewsCards: sbNewsCards,
            sbNavbar: sbNavbar,
            sbFooter: sbFooter
        },
        data() {
            return {
                category: {},
                categoryArticles: []
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
            getCategory() {
                return categoriesService.getCategory(this.id);
            },
            getCategoryName() {
                return this.category.name;
            },
            getNews() {
                return newsService.getNews();
            },
            filterArticles() {
                let articles = this.getNews();
                let filter = this.getCategoryName();
                return articles.filter(a => a.category.name.indexOf(filter) >= 0);
            }
        },
        watch: {
            '$route.params.id': function () {
                this.category = this.getCategory();
                this.categoryArticles = this.filterArticles();
                if (this.category === undefined) {
                    this.$router.push({path: `/notFound`});
                }
            }
        },
        created() {
            this.category = this.getCategory();
            this.categoryArticles = this.filterArticles();
        }
    }
</script>
