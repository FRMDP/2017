<template>
    <div class="container">
      <h3> {{ news.title }} </h3>
      <p> {{ news.body }} </p>
      {{ news.category.name }}
      {{ news.reporter.name }}
      Published: {{ news.date }}
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
