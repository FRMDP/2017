<template>
  <div>
    <b-row class="text-center">
          <b-col></b-col>
          <b-col  lg="8">
      <div v-if='!this.allNews.length'><label>there are not news</label></div>
      <rm-card v-else v-for="(aux,key) in allNews" :aux='aux' :isParticular='isParticular' :key='aux.id'></rm-card>
    </b-col>  
  </b-row>
  </div>
</template>
<script>
  import rmCard from './rm-card.vue';

  export default{
    name: 'rmAllNews',
    components:{
      rmCard
    },
    data(){
      return{
        allNews: [],
        isParticular: false,
      }
    },
    mounted(){
      this.$http.get('http://localhost:8080/news')
           .then((news) => {

           this.allNews = news.data._embedded.news;
         })
           .catch((error) => {
            console.log(error);
          })
    }
  }
</script>
<style>

</style>
