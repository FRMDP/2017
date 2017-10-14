<template>
    <div class="paddings">
        <h1>Noticias destacadas</h1>
            <zp-littlenew v-for="ne in news" :key="ne.id" :ne="ne"></zp-littlenew>
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
        methods:{
            
        },
        created() {
            this.news = storageService.getNews();
        }
    }
</script>
