<template>
    <div class="container">
      <div class="row">
        <div class="col l10">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <h2> {{ news.title }} </h2>
              <p> {{ news.body }} </p>
              <i class="right">Publicado por {{ news.reporter.name }} el {{ news.date }}</i>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

    export default {
      data() {
        return {
          news: {
            id: '',
            title: '',
            body: '',
            category: {
              name: '',
              id: ''
            },
            reporter: {
              name: '',
              id: ''
            },
            date: ''
          }
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
          getNews() {
            const url = 'http://localhost:8080/news/' + this.id;
            this.$http.get(url)
                .then((response) => {
                    this.news = response.data;
                    this.getCatByNew();
                    this.getReporterByNew();
                })
                .catch((msg) => console.log('Error: ', msg));
          },
          getCatByNew(){
            this.$http.get(this.news._links.category.href)
                .then((response) => {
                    this.cat = response.data;
                })
                .catch(msg => console.log('Error: ', msg));
          },
          getReporterByNew(){
              this.$http.get(this.news._links.reporter.href)
                  .then((response) => {
                      this.reporter = response.data;
                  })
                  .catch(msg => console.log('Error: ', msg));
          }
        },
        watch: {
          '$route.params.id': function() {
            this.news = this.getNews();
          }
        },
        created() {
          this.news = this.getNews();
        }
    }
</script>

<style>

</style>
