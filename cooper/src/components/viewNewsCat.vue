<template>
  <div class="negrita container">

    <div v-for="singleNews in news_list">
      <h3> {{ singleNews.title }} </h3>
      {{ singleNews.body }}
      {{ singleNews.category.name }}
    </div>

  </div>
</template>

<script>
  import serviceNews from '../services/serviceNews';

    export default {
      data() {
        return {
          news_list: []
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
          getNewsCat() {
            return serviceNews.getNewsCat(this.id);
          }
        },
        watch: {
          '$route.params.id': function() {
            this.news_list = serviceNews.getNewsCat(this.id);
          }
        },
        created() {
          this.news_list = serviceNews.getNewsCat(this.id);
        }
    }
</script>

<style>

</style>
