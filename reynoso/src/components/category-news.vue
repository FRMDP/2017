<template>
    <div class="container">
        <div class="row">
        <span v-if="category.name=='local'" class="md-display-2">Locales</span>
        <span v-if="category.name=='entertainment'" class="md-display-2">Entretenimiento</span>
        <span v-if="category.name=='sports'" class="md-display-2">Deportes</span>
        <span v-if="category.name=='politics'" class="md-display-2">Politica</span>
        <span v-if="category.name=='world'" class="md-display-2">Mundo</span>
        <span v-if="category.name=='economy'" class="md-display-2">Economia</span>
        </div>
        <div v-if="News.length > 0">
            <span class="md-display-2"></span>
            <div v-for="(New,key) in News" :key="New.id">
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
    export default{
        name:'categoryNews',
        components:{
          newsCard
        },
        data(){
            return{
                News:[],
                category:{},
            }
        },
        computed: {
            params() {
                this.$route.params;
            },
            name() {
                return this.$route.params.name;
            }
        },
        watch: {
            '$route.params.name': function() {
                this.category= this.$CategoryService.getCategory(this.name);
                this.News=this.$NewService.getNewByCategoryName(this.category.name);
            }
        },
        created(){
            this.category = this.$CategoryService.getCategory(this.name);
            this.News=this.$NewService.getNewByCategoryName(this.category.name);
        }
    }
</script>

<style>
</style>