<template>
    <div class="paddings">
        <h1>Noticias Categoria: {{ cat.name }} </h1>
        <md-progress md-indeterminate v-if="pBar"></md-progress>
            <div class="three columns" v-for="ne in New" :key="ne.id">
                <zp-littlenew :ne="ne"></zp-littlenew>
            </div>
        <zp-alert v-if="emptyNews && !pBar" @changeAlert="changeAlert" :messageAlert='messageAlert' :classAlert='classAlert'></zp-alert>
    </div>
</template>
<script>
    import zpLittlenew from '../components/zp-littlenew.vue'
    import zpAlert from '../components/zp-alert.vue'

    export default {
        components:{
            zpLittlenew,
            zpAlert
        },
        data(){
            return {
                New: [],
                cat: {},        
                messageAlert: 'No hay noticias en esta categoria',
                classAlert: 'alert-info',
                Categories: {},
                pBar: true,
            }
        },
        methods:{
            changeAlert(){
                this.alert = !this.alert;
            },
            getNewsByCat(){
                this.$http.get('http://192.168.99.100:8080/categories')
                    .then((response) => {
                        this.Categories =  response.data._embedded.categories;
                        this.cat = this.Categories.find( c => c.name == this.name);
                        const url = this.cat._links.news.href;
                        this.getNews(url);
                    })
                    .catch((msg) => console.log('Error', msg));
            },
            getNews(url){
                this.$http.get( url )
                    .then((response) => {
                        this.New = response.data._embedded.news;
                    })
                    .catch((msg) => console.log('Error', msg));
            }
        },
        computed: {
            params() {
                return this.$route.params;
            },
            name() {
                return this.$route.params.id;
            },
            emptyNews(){
                return this.New.length == 0;
            },
        },
        watch: {
            '$route.params.id': function() {
                this.getNewsByCat();
                
            }
        },
        created() {
            setTimeout(() => this.pBar = !this.pBar , 500);
            this.getNewsByCat();
        }
    }
</script>
