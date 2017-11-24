<template>
    <div class="template">
        <h1>Resultados de: {{ name.replace(/\%20/g," ") }} </h1>
        <div v-if="pbar" class="paddings">
            <md-progress class="md-accent" md-indeterminate></md-progress>
            <h3 >Aguarde mientras se cargan los resultados. Esta operación puede demorar...</h3 >
        </div>
        <div v-else class="paddings">
            <md-input-container>
                <label>Filtrar por Nombre o Pais (inglés)</label>
                <md-input v-model="filter"></md-input>
            </md-input-container>
        </div>
        <zp-alert v-if="artistFilter.length == 0 && !pbar" :messageAlert="messageAlert" :classAlert="classAlert"></zp-alert>
        <div v-if="artist.length != 0">
            <div style="padding-left:100px">
                Resultados: {{artistFilter.length}} 
            </div>
            <paginate name="artists" :list="artistFilter" :per="50" v-if="shown" class="row">
                <div v-for="a in paginated('artists')" :key="a.id" class="three columns margins">
                    <zp-artistcard :artist="a"></zp-artistcard>
                </div>
            </paginate>
            <div class="center">
                <paginate-links for="artists" :async="true" :show-step-links="true" :step-links="{next: '<<', prev: '>>'}" class="pag" ></paginate-links>
            </div>
        </div>
    </div>
</template>
<script>
import zpArtistcard from './zp-artistcard.vue'
import zpAlert from './zp-alert.vue'
export default {
    components: {
        zpArtistcard,
        zpAlert,
    },
    data(){
        return {
            artist: [],
            countries: [],
            pbar: false,
            paginate: ['artists'],
            shown: true,
            filter: '',
            messageAlert: 'No hay resultados en la busqueda',
            classAlert: 'alert-info',
        }
    },
    computed: {
        params(){
            return this.$route.params;
        },
        name(){
            return this.$route.params.name;
        },
        search(){
            return this.$route.params.search;
        },
        endpoint(){
            return this.$route.params.endpoint;
        },
        artistFilter(){
            return this.artist.filter( a => 
                                        (a.name.toUpperCase().indexOf(this.filter.toUpperCase()) >= 0) ||
                                        (a.country.toUpperCase().indexOf(this.filter.toUpperCase()) >= 0)
                                    )
        }
    },
    methods: {
        getPromises(){
            this.pbar = true;
            let st = this.$apiRoutes.getRoutes(this.endpoint, {name: this.search, value: this.name},{name: 'pageSize', value: '100'});
            this.$http.get(st)
                .then(response =>{
                    this.countries = this.$store.getters.getCountries;
                    const result = response.data.message.header.available;
                    const array = response.data.message.body.artist_list;
                    this.artist = this.cast(array);
                    let pages = Math.trunc(result / 100);
                    if(result%100 != 0 || result < 100){
                        pages++;
                    }
                    let prms = [];
                    for(let i = 2; i<=pages; i++){
                        let st = this.$apiRoutes.getRoutes(this.endpoint, {name: this.search, value: this.name}, {name: 'pageSize', value: '100'}, {name: 'page', value: i});
                        prms.push(this.$http.get(st));
                    }
                    if(prms){
                        Promise.all(prms)
                            .then(values => {
                                values.forEach(list => {
                                    const array = list.data.message.body.artist_list;
                                    this.artist = this.artist.concat(this.cast(array))
                                })
                            })
                            .catch(msg => console.log(msg));
                    }
                    this.pbar = false;
                })
                .catch(msg => console.log(msg));
        },
        cast(list){
            let arrayTemp = [];
            if(list){
                list.forEach(ar =>{
                    const aux = ar.artist;
                    if(aux.artist_name.length < 80){
                        const count = this.countries.find( c => c.code.toUpperCase() == aux.artist_country.toUpperCase());
                        let country = 'Sin datos';
                        if(count)
                            country = count.name;
                        const ob = {
                            id : aux.artist_id,
                            country: country,
                            name: aux.artist_name,
                        }
                        arrayTemp.push(Object.assign({}, ob));
                    }
                })
                return arrayTemp;
            }
        }
    },
    watch: {

    },
    created(){
        //this.countries = this.$store.state.countries; no se porque no me deja levantarlo del store, me devuelve un array vacio
        this.pbar = true;
        /*this.$http.get('https://battuta.medunes.net/api/country/all/?key=2bd3a0ab3aeea1156c6649766caa2373')
            .then( response => {
                    this.countries = response.data;
            })
            .catch(msg => console.log(msg));
        this.$store.commit('putBackPath', this.$route.path);*/
        /*console.log(this.$store.state.countries);
        console.log(this.$store.getters.getCountries);*/
        setTimeout(() => {
            this.getPromises();
        }, 2000);        
    },
}
</script>
<style scoped>
.margins{
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 10px;
}
.center{
    margin-left: auto;
    margin-right: auto;
}
.template{
    margin-left: 10px;
}
.pag{
    float: left;
    width: 20%;
    list-style-type:none;
}
.paddings{
    margin-left: 100px;
    margin-right: 100px;
    padding-right: 150px;
}
</style>


