<template>
  <div>
      <div v-if='!this.news.length'><label>there are not news</label></div>
      <rm-card v-else v-for="aux in news" :aux='aux' :isParticular='isParticular'></rm-card>
  </div>
</template>
<script>
  import rmCard from './rm-card.vue';

  export default{
    name: 'rmCategoryNews',
    components:{
      rmCard
    },
    data(){
      return{
        news: [],
        isParticular: false
      }

    },
    computed: {
        	params() {
        		return this.$route.params;
        	},
        	name() {
        		return this.$route.params.name;
        	}
        },
        watch: {
        	'$route.params.name': function() {
        		this.news = this.$newsService.categoryNews(this.name);
        	}
        },
    mounted(){
    
    },
    created() {
      this.news = this.$newsService.categoryNews(this.name);
    }
}

</script>
<style>

</style>
