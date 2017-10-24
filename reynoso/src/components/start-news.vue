<template>
    <div class="container">
        <div class="row">
            <div v-if="News.length > 0">
                <div v-for="(New,key) in News" :key="New.uid">
                    <div class="six columns">
                        <div class="ten columns">
                            <news-card :New="New"></news-card>
                        </div>
                    </div>
                </div>
            </div>
        <div v-else><span class="md-display-4">No hay noticias</span></div>
        </div>
    </div>
</template>

<script>
    import newsCard from './news-card.vue'
    export default{
        name:'startNews',
        components:{
          newsCard
        },
        data(){
            return{
                News:[],
            }
        },
        methods:{
            httpGetNews(){
                this.$http('http://localhost:8080/news').then((response)=>this.News = response.data._embedded.news)
                    .catch((error)=> console.log(error))
            }
        },
        mounted(){
            this.httpGetNews();
        },
    }
</script>

<style>
</style>