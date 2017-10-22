<template>
    <div>
        <div>
            <sb-navbar></sb-navbar>

            <div class="container">
                <br>
                <div class="column is-10-desktop is-offset-1-desktop">
                    <p class="title has-text-primary is-size-2-desktop">All News</p>
                </div>
            </div>

            <div class="container">
                <section class="section">
                    <div class="columns">
                        <div class="column is-10-desktop is-offset-1-desktop">
                            <div v-if="!articles.length">
                                <p class="title is-size-2">No News have been found!</p>
                                <a class="button is-primary" href="/#/categories">Jump to Categories</a>
                            </div>
                            <div v-else>
                                <sbNewsCards v-for="article in articles" :data="article"
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
    import newsService from "./../services/newsService";

    export default {
        name: 'sbNews',
        components: {
            sbNewsCards: sbNewsCards,
            sbNavbar: sbNavbar,
            sbFooter: sbFooter
        },
        data() {
            return {
                articles: []
            }
        },
        created() {
            this.articles = newsService.getNews();
        }
    }
</script>
