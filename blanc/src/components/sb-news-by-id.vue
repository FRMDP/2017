<template>
    <div>
        <div>
            <sb-navbar></sb-navbar>

            <div class="container">
                <br>
                <div class="column is-10-desktop is-offset-1-desktop">
                    <p class="title has-text-primary is-size-2-desktop">{{this.$stringHelper.firstCharToUpper(article.category.name)}} Article #{{article.id}}</p>
                </div>
            </div>

            <div class="container has-text-centered">
                <section class="section">
                    <div class="columns">
                        <div class="column is-10-desktop is-offset-1-desktop">
                            <sbNewsCards :data="article" :key="article.id" :article="article" :shortVersion="false"></sbNewsCards>
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
    import newsService from "./../services/newsService";

    export default {
        name: 'newsById',
        components: {
            sbNewsCards: sbNewsCards,
            sbNavbar: sbNavbar,
            sbFooter: sbFooter,
        },
        data () {
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
            },
        },
        methods: {
            getArticle() {
                return newsService.getArticle(this.id);
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
