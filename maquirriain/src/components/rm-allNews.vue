<template>
  <div>
      <div v-if='!this.allNews.length'><label>there are not news</label></div>
      <rm-card v-else v-for="aux in allNews" :aux='aux' :isParticular='isParticular'></rm-card>
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
      this.allNews =   this.$newsService.allNews();
    }
  }
</script>
<style>

</style>
