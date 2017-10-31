<template>
    <div class="container">
        <div class="row">
            <span class="md-display-2">{{category[0].name}} </span>
            <div class="md-title">visitas:{{visit[this.$route.path]}}</div>
        </div>
        <div v-if="News.length > 0">
            <span class="md-display-2"></span>
            <div v-for="(New,key) in News" :key="New.uid">
                <div class="six columns">
                    <div class="ten columns">
                        <news-card :New="New"></news-card>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="twelve columns"><span class="md-display-2">No hay noticias de esta categoria</span></div>
    </div>
</template>

<script>
    import newsCard from './news-card.vue'
    import io from 'socket.io-client'
    export default{
        name:'categoryNews',
        components:{
          newsCard
        },
        data(){
            return{
                News:[],
                category:{},
                Categories:[],
                visit:''
            }
        },
        methods: {
            httpGetCategories(){
                this.$http('http://localhost:8080/categories').then((response) => {
                    this.Categories = response.data._embedded.categories;
                    this.httpGetNews()})
                    .catch((error) => console.log(error))
            },
            httpGetNews(){
                this.category = this.Categories.filter(cat => cat.name === this.name)
                this.$http(this.category[0]._links.news.href).then((response)=>this.News=response.data._embedded.news).catch((error)=>console.log(error))
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
                console.log(this.name);
                this.$socket.emit('addvisit',this.$route.path);
                this.$socket.on('getvisit',(data)=> this.visit=data);
                this.httpGetNews();
            }
        },
        mounted(){

            this.httpGetCategories();
        },
        created(){
            this.$socket.emit('addvisit',this.$route.path);
            this.$socket.on('getvisit',(data)=> this.visit = data);


        }
    }
</script>

<style>
</style>