<template>
    <div>
        <div>
            <sb-navbar></sb-navbar>

            <div class="container">
                <br>
                <div v-if="mapOk" class="column is-10-desktop is-offset-1-desktop">
                    <p class="title has-text-primary is-size-2-desktop">{{this.$stringHelper.firstCharToUpper(article.category.name)}} Article #{{article.id}}</p>
                </div>
            </div>

            <div class="container has-text-centered">
                <section class="section">
                    <div class="columns">
                        <div class="column is-10-desktop is-offset-1-desktop">
                            <sbNewsCards :data="articleById" :key="articleById.uid" :article="articleById" :shortVersion="false"></sbNewsCards>
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
    import reportersService from "./../services/reportersService";

    export default {
        name: 'newsById',
        components: {
            sbNewsCards: sbNewsCards,
            sbNavbar: sbNavbar,
            sbFooter: sbFooter,
        },
        data () {
          return {
            articles: [],
            articleById: {},
            filteredArticle: {},
            mapOk: false
          }
        },
        computed: {
            params() {
                return this.$route.params;
            },
            uid() {
                return this.$route.params.uid;
            },
        },
        methods: {
          getArticles() {
            newsService.getNews()
              .then((response) => {
                this.articles = response.data._embedded.news;
                this.getArticleWithNewsLink(this.uid);
                this.getArticleById();
              })
              .catch((error) => {
                console.log(error)
              });
          },
          getArticleWithNewsLink(uid) {
            this.filteredArticle = this.articles.find(a => a.uid == uid);
          },
          getArticleById() {
            newsService.getArticle(this.filteredArticle._links.self.href)
              .then((response) => {
                return this.articleMapper(response.data);
              })
                .then((response) => {
                  this.articleById = response;
                  this.mapOk = true;
                })
              .catch((error) => {
                console.log(error)
              });
          },
          articleMapper(article) {
            debugger;
            const promises =
             categoriesService.getCategory(article._links.category.href)
                    .then((response) => {
                        article.category = response.data;
                        return reportersService.getReporter(article._links.reporter.href);
                    })
                    .then((response) => {
                        article.reporter = response.data;
                        return article;
                    });
            return Promise.all(promises);
          }
        },
        watch: {
            '$route.params.id': function () {
                this.articleById = this.getArticles();
                if (this.articleById === undefined) {
                    this.$router.push({path: `/notFound`});
                }
            }
        },
        created() {
            this.getArticles();
        }
    }
</script>
