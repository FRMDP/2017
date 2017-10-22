<template>
    <div class="paddings">
        <h1>Noticias destacadas</h1>
            <div class="three columns" v-for="ne in news" :key="ne.id">
                <zp-littlenew :ne="ne"></zp-littlenew>
            </div>
    </div>
   
</template>
<script>
    import zpLittlenew from './zp-littlenew.vue'
    import storageService from '../services/storageService'

    export default {
        components:{
            zpLittlenew
        },
        data(){
            return {
                news: [],
            }
        },
        methods: {
            getNews(){
                this.$http.get('http://192.168.99.100:8080/news')
                    .then((response) => {
                        this.news = response.data._embedded.news;
                    })
                    .catch((msg) => console.log('Error: ', msg));
            },
        },
        created() {
            this.news = this.getNews();
        }
    }
</script>
