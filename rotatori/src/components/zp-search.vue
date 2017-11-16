<template>
    <div class="padd">
        <h1>Busqueda de canciones</h1>
        <zp-alert v-if="alert" :messageAlert="messageAlert" :classAlert="classAlert"></zp-alert>
        <div>
            <md-radio v-model="radio" id="my-test4" name="my-test-group2" md-value="0" class="md-primary">Por artista</md-radio>
            <md-radio v-model="radio" id="my-test5" name="my-test-group2" md-value="1" class="md-primary">Por canción</md-radio>
            <md-radio v-model="radio" id="my-test6" name="my-test-group2" md-value="2" class="md-primary">Por País</md-radio>
        </div> 
        <div v-if="radio != ''">
        <form novalidate>
            <md-input-container v-if="radio == '0' || radio =='1'">
                <label v-if="radio==0">Nombre artista</label>
                <label v-if="radio==1">Nombre canción</label>
                <md-input v-model="search"></md-input>
            </md-input-container>
            <div v-if="radio == '2'" class="row">
                <div class="six columns">
                    <md-input-container>
                        <label for="country">Country</label>
                        <md-select name="country" id="country" v-model="search">
                            <md-option v-for="c in filterCountry" :value="c.code" :key="c.code"> {{c.name}} </md-option>
                        </md-select>
                    </md-input-container>
                </div>
                <div class="six columns">
                    <md-input-container>
                        <label>Filtrar país (nombre en inglés)</label>
                        <md-input v-model="filCountry"></md-input>
                    </md-input-container>
                    <h4>* Trae el top 100 de canciones mas escuchadas (no necesariamente canciones de ese país)</h4>                    
                </div>
            </div>
            <md-button class="md-raised md-primary" @click.prevent="send">Buscar</md-button>    
        </form>
    </div>
    </div>
</template>
<script>
import zpAlert from './zp-alert.vue'
export default {
    components: {
        zpAlert,
    },
    data(){
        return {
            radio: '',
            search: '',
            str: [
                {endpoint: 'trackSearch', search: 'nameArtist'}, 
                {endpoint: 'trackSearch' , search: 'nameTrack'},
                {endpoint: 'tracksCountry', search: 'country'}
            ],
            countries: [],
            filCountry: '',
            messageAlert: 'Debe escribir algo para buscar',
            classAlert: 'alert-info',
            alert: false,
        }
    },
    computed: {
        filterCountry(){
            return this.countries.filter( c => (c.name.toUpperCase().indexOf(this.filCountry.toUpperCase()) >= 0));
        },
    },
    methods: {
        send(){
            const string = this.search.replace(/\s/g, "%20");
            this.$store.commit('clearArray');
            if(this.search)
                this.$router.push({ name: 'result', params: { endpoint: this.str[this.radio].endpoint, search: this.str[this.radio].search, name: string} })
            else
                this.changeAlert();
        },
        changeAlert(){
            this.alert = true;
            setTimeout(() => {
                this.alert = false;
            }, 3000);
        }
    },
    watch:{ 

    },
    created(){
        this.countries = this.$store.state.countries;
    }

}
</script>
<style scoped>
.padd{
    padding-left: 200px;
    padding-right: 200px;
}
</style>


