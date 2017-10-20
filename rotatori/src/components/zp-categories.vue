<template>
    <div class="paddings">
        <h1>Noticias Categoria: {{ cat.name }} </h1>
            <div class="three columns" v-for="ne in New" :key="ne.id">
                <zp-littlenew :ne="ne"></zp-littlenew>
            </div>
        <zp-alert v-if="emptyNews" @changeAlert="changeAlert" :messageAlert='messageAlert' :classAlert='classAlert'></zp-alert>
    </div>
</template>
<script>
    import storageService from '../services/storageService'
    import categoriesService from '../services/categoriesServices'
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
                classAlert: 'alert-info'
            }
        },
        methods:{
            changeAlert(){
                this.alert = !this.alert;
            }
        },
        computed: {
            params() {
                return this.$route.params;
            },
            id() {
                return this.$route.params.id;
            },
            emptyNews(){
                return this.New.length == 0;
            },
        },
        watch: {
            '$route.params.id': function() {
                this.New = storageService.getNewsByCatId(this.id);
                this.cat = categoriesService.getCatById(this.id);
            }
        },
        created() {
            this.cat = categoriesService.getCatById(this.id);
            if(this.cat == undefined){
                this.$router.push('/404');
            }else{
                this.New = storageService.getNewsByCatId(this.id);
            }
        }
    }
</script>
