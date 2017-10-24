<template>
    <div>
        <div>
            <sb-navbar></sb-navbar>

            <div class="container">
                <br>
                <div v-if="mapOk" class="column is-10-desktop is-offset-1-desktop">
                    <p class="title has-text-primary is-size-2-desktop">{{this.$stringHelper.firstCharToUpper(filteredCategory.name)}}</p>
                </div>
            </div>

            <div class="container has-text-centered">
                <section class="section">
                    <div class="columns">
                        <div class="column is-10-desktop is-offset-1-desktop">
                            <div v-if="!mapOk">
                                <p class="title is-size-2">No News have been found!</p>
                                <a class="button is-primary" href="/#/categories">Back to Categories</a>
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
    import categoriesService from "./../services/categoriesService";
    import newsService from "./../services/newsService";
    import reportersService from "./../services/reportersService";

    export default {
        name: 'sbNewsByCategory',
        components: {
            sbNewsCards: sbNewsCards,
            sbNavbar: sbNavbar,
            sbFooter: sbFooter
        },
        data() {
            return {
                categories: [],
                articles: [],
                filteredCategory: {},
                mapOk: false
            }
        },
        computed: {
            params() {
                return this.$route.params;
            },
            uid() {
                return this.$route.params.uid;
            }
        },
        methods: {
            getCategories() {
              categoriesService.getCategories()
                .then((response) => {
                  this.categories = response.data._embedded.categories;
                  this.getCategoryWithNewsLink(this.uid);
                  this.getArticles();
                })
                .catch((error) => {
                  console.log(error)
                });
            },
            getCategoryWithNewsLink(uid) {
              this.filteredCategory = this.categories.find(c => c.uid == uid);
            },
            getArticles() {
              newsService.getArticle(this.filteredCategory._links.news.href)
                .then((response) => {
                  return this.articleMapper(response.data._embedded.news);
                })
                  .then((response) => {
                    this.articles = response;
                    this.mapOk = true;
                  })
                .catch((error) => {
                  console.log(error)
                });
            },
            articleMapper(articles) {
              const promises = articles.map((article) => {
              return categoriesService.getCategory(article._links.category.href)
                      .then((response) => {
                          article.category = response.data;
                          return reportersService.getReporter(article._links.reporter.href);
                      })
                      .then((response) => {
                          article.reporter = response.data;
                          return article;
                      });
              });
              return Promise.all(promises);
            }
        },
        watch: {
            '$route.params.uid': function () {
                this.categories = this.getCategories();
                if (this.filteredCategory === undefined) {
                    this.$router.push({path: `/notFound`});
                }
            }
        },
        created() {
            this.getCategories();
        }
    }
</script>
