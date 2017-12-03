<template>
  <div>
    <b-badge variant="primary">La noticia fue leida {{count}} veces</b-badge>
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
    name:'rmOneNews',
    components:{
      rmCard
    },
    data(){
      return{
        news: [],
        count: '',
        isParticular: true
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
        methods:{
            getOneNews(){
              this.$http.get('http://localhost:8080/news')
                   .then((news) => {

                   this.news = news.data._embedded.news.filter(n =>  this.id == n.uid);;
                 })
                   .catch((error) => {
                    console.log(error);
                  })
            }
        },
        watch: {
        	'$route.params.id': function() {
              this.getOneNews();
        	}
        },
    created() {
      this.getOneNews();
      this.socket = this.$socket('http://localhost:3000');

      this.socket.emit('notificate',this.id);
      this.socket.on('notificate',(data) => { this.count = data[this.id]});
    }
  }
</script>
<style>

</style>
