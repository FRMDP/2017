<template>
    <div class="container">
        <div class="row">
            <div v-if="News.length > 0">
                <div v-for="(New,key) in News" :key="New.id">
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
        mounted(){
          this.News=this.$NewService.getNews();
          this.News.reverse();
        },
    }
</script>

<style>
</style>