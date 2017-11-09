<template>
    <div class="padd">
        <h1>Busqueda de canciones</h1>
        <div>
            <md-radio v-model="radio" id="my-test4" name="my-test-group2" md-value="0" class="md-primary">Por artista</md-radio>
            <md-radio v-model="radio" id="my-test5" name="my-test-group2" md-value="1" class="md-primary">Por canción</md-radio>
            <md-radio v-model="radio" id="my-test6" name="my-test-group2" md-value="2" class="md-primary">Por País</md-radio>
        </div> 
        <div v-if="radio != ''">
        <form novalidate>
            <md-input-container>
                <label v-if="radio==0">Nombre artista</label>
                <label v-if="radio==1">Nombre canción</label>
                <label v-if="radio==2">País</label>
                <md-input v-model="search"></md-input>
            </md-input-container>
            <md-button class="md-raised md-primary" @click.prevent="send">Buscar</md-button>    
        </form>
    </div>
    </div>
</template>
<script>
import zpSartist from './zp-sartist.vue'
export default {
    components: {
        zpSartist,
    },
    data(){
        return {
            radio: '',
            search: '',
            str: ['nameArtist', 'nameTrack','country']
        }
    },
    computed: {
    
    },
    methods: {
        send(){
            const string = this.search.replace(/\s/g, "%20");
            this.$router.push({ name: 'result', params: { name: string} })
            this.$store.commit('putTypeSearch', this.str[this.radio]);
        }
    },
    watch:{ 

    }

}
</script>
<style scoped>
.padd{
    padding-left: 200px;
    padding-right: 200px;
}
</style>


