<template>
  <div>
    <b-row class="text-center">
          <b-col></b-col>
          <b-col  lg="8">
      <div v-if='!this.news.length'><label>there are not news</label></div>
      <rm-card v-else v-for="aux in news" :aux='aux' :isParticular='isParticular' :key='aux.id'></rm-card>
    </b-col>

  </b-row>
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
        categories:[],
        socket: '',
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
        methods: {
          getCategories(){
            this.$http.get('http://localhost:8080/categories')
                  .then((categories) => {
                      this.categories = categories.data._embedded.categories;
                      this.getNews();
                  })
                  .catch((error) => {
                      console.log(error);
                  })
          },
          getNews(){
               const auxCategories = this.categories.filter(cat => cat.name == this.name);
                this.$http.get(auxCategories[0]._links.news.href)
                     .then((response) => {
                         this.news = response.data._embedded.news;
                     })
                     .catch((error) => {
                        console.log(error);
                     })
            }
        },
        watch: {
        	'$route.params.name': function() {
              this.getNews();
        	 }
         },
        mounted() {
          this.getCategories();
        },
        created(){

        }
}

</script>
<style>

</style>
