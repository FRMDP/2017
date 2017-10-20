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
        created() {
            this.news = storageService.getNews();
        }
    }
</script>
