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
    import serviceNews from '../services/serviceNews';

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
            return serviceNews.getNews(this.id);
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
