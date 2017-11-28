<template>
    <div class="padd">
        <h1>Busqueda de Artistas</h1>
          <form novalidate>
            <md-input-container>
                <label>Nombre artista</label>
                <md-input v-model="search"></md-input>
            </md-input-container>
            <md-button class="md-raised md-primary" @click.prevent="send">Buscar</md-button>    
        </form>
    </div>
</template>
<script>
export default {
    components: {

    },
    data(){
        return {
            search: '',
        }
    },
    computed: {

    },
    methods: {
        send(){
            const string = this.search.replace(/\s/g, "%20");
            this.$store.commit('clearArray');
            if(this.search){
                this.$router.push({name: 'resultArtist', params: {endpoint: 'artistSearch', search: 'artistName', name: string}});
            }
        }
    },
    created(){

    }
}
</script>
<style scoped>
.padd{
    padding-left: 200px;
    padding-right: 200px;
}
</style>


