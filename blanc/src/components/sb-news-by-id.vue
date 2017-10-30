<template>
    <div>
        <div>
            <sb-navbar></sb-navbar>

            <div class="container">
                <br>
                <div v-if="mapOk" class="column is-10-desktop is-offset-1-desktop">
                    <p class="title has-text-primary is-size-2-desktop">{{this.$stringHelper.firstCharToUpper(article.category.name)}} Article</p>
                </div>
            </div>

            <div v-if="mapOk" class="container has-text-centered">
                <section class="section">
                    <div class="columns">
                        <div class="column is-10-desktop is-offset-1-desktop">
                            <sbNewsCards :article="article" :shortVersion="false"></sbNewsCards>
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
    import io from "socket.io-client";

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
            article: {},
            filteredArticle: {},
            mapOk: false,
            socket: ''
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
              })
              .then((response) => {
                this.getArticleById();
                this.socket.emit('visited',this.uid);
              })
              .catch((error) => {
                console.log(error)
              });
          },
          getArticleWithNewsLink(uid) {
            this.filteredArticle = this.articles.find(a => a.uid == uid);
          },
          getArticleById() {
              const auxArticle = this.filteredArticle;
              const promises = [
                    reportersService.getReporter(auxArticle._links.reporter.href),
                    categoriesService.getCategory(auxArticle._links.category.href)
                ];

              Promise.all(promises).then((response) => {
                this.article = {
                      uid: auxArticle.uid,
                      body: auxArticle.body,
                      title: auxArticle.title,
                      date: auxArticle.date,
                      reporter: {
                          uid: response[0].data.uid,
                          name: response[0].data.name
                      },
                      category: {
                          uid: response[1].data.uid,
                          name: response[1].data.name
                      }
                  };
                  this.mapOk = true;
              })
              .catch((error) => {
                console.log(error)
              });
          }
        },
        watch: {
            '$route.params.uid': function () {
                this.article = this.getArticles();
                if (this.article === undefined) {
                    this.$router.push({path: `/notFound`});
                }
            }
        },
        created() {
          this.socket = io('http://localhost:3000/');
          this.socket.on();
          this.getArticles();
        }
    }
</script>
