<template>
    <div class="template">
        <h1>Resultados de: {{ nameSearch }} </h1>
        <div v-if="pbar" class="paddings">
            <md-progress class="md-accent"  md-indeterminate></md-progress>
            <h3 >Aguarde mientras se cargan los resultados. Esta operación puede demorar...</h3 >
        </div>
        <div v-else class="paddings">
            <md-input-container>
                <label>Filtrar por título, artista o album</label>
                <md-input v-model="filter"></md-input>
            </md-input-container>
        </div>
        <zp-alert v-if="trackFilter.length ==0 && !pbar" :messageAlert="messageAlert" :classAlert="classAlert"></zp-alert>
        <div v-if="songs.length != 0">
            <div style="padding-left:100px">Resultados: {{trackFilter.length}} 
            </div>
            <paginate name="tracks" :list="trackFilter" :per="50" v-if="shown" class="row">
                <div v-for="c in paginated('tracks')" :key="c.id" class="three columns margins">
                    <zp-littlecard :track="c"></zp-littlecard>
                </div>
            </paginate>
            <div class="row">
                <paginate-links for="tracks" :async="true" :show-step-links="true" :step-links="{next: '<<', prev: '>>'}" class="pag" ></paginate-links>
            </div>
        </div>
    </div>
</template>
<script>
import zpLittlecard from './zp-littlecard.vue'
import zpAlert from './zp-alert.vue'
export default {
    components:{
        zpLittlecard,
        zpAlert,
    },
    data(){
        return {
            result: '',
            songs: [],
            paginate: ["tracks"],
            shown: false,
            filter: '',
            pbar: false,
            messageAlert: 'No hay resultados en la busqueda',
            classAlert: 'alert-info',
            nameSearch: '',
        }
    },
    computed: {
        params() {
            return this.$route.params;
        },
        name() {
            return this.$route.params.name;
        },
        search(){
            return this.$route.params.search;
        },
        endpoint(){
            return this.$route.params.endpoint;
        },
        trackFilter(){
            return this.songs.filter( c => 
                                        (c.title.toUpperCase().indexOf(this.filter.toUpperCase()) >= 0) ||
                                        (c.artist.toUpperCase().indexOf(this.filter.toUpperCase()) >= 0) ||
                                        (c.album.toUpperCase().indexOf(this.filter.toUpperCase())>=0)
                                    )
        }
    },
    methods: {
        getPromisesCountry(){
            let arrayTemp = [];
            this.checkStore()
            this.$http.get(this.$apiRoutes.getRoutes(this.endpoint, {name: this.search, value: this.name}, {name: 'pageSize', value: '100'},{name: 'hasLyrics', value: '1'}))
                .then(response => {
                    const list = response.data.message.body.track_list;
                    arrayTemp = this.castSongs(list);
                    this.changeStates(arrayTemp); 
                })
                .catch(msg => console.log(mgs));
        },
        getPromises(){
            let arrayTemp = [];
            if(this.checkStore())
                this.pbar = true;
            this.$http.get(this.$apiRoutes.getRoutes(this.endpoint, {name: this.search, value: this.name})+'&page_size=1')
                .then(response => {
                    const result = response.data.message.header.available;
                    this.result = result;
                    let paginas =Math.trunc(result / 50);
                    if(paginas%50 != 0 || result < 50){
                        paginas++;
                    }
                    let prms=[];
                    for(let i = 1; i<=paginas || i<=10; i++){
                        prms.push(this.$http.get(this.$apiRoutes.getRoutes('trackSearch', {name: this.search, value: this.name}, {name:'page', value: i},{name:'pageSize', value: 100}, {name:'trackRating', value:'DESC'})))
                    }
                    Promise.all(prms)
                        .then(values =>{
                            values.forEach( list => {
                                const array = list.data.message.body.track_list;
                                arrayTemp = arrayTemp.concat(this.castSongs(array));
                            });
                            this.changeStates(arrayTemp);
                        })
                        .catch(msg => console.log(msg));
                })     
                .catch(msg => console.log(msg));
        },
        checkStore(){
            if(this.$store.state.songs.length == 0)
                this.pbar = true;
        },
        execPromises(){
            if(this.endpoint != 'tracksCountry')
                this.getPromises();
            else
                this.getPromisesCountry();
        },
        changeStates(arrayTemp){
            this.$store.commit('putSongs', arrayTemp);
            this.songs = arrayTemp;
            this.shown = true;
            this.pbar = false;
        },
        castSongs(list){
            let arrayTemp = [];
            if(list){
                if(list.length > 1){
                    list.forEach(t => {
                        const tr = t.track;
                        if(tr.has_lyrics == 1){
                            let date = tr.first_release_date.split('T')[0];
                            if(!date)
                                date = 'Sin informacion'
                            const ob= {
                                id: tr.track_id,
                                title: tr.track_name,
                                artist: tr.artist_name,
                                album: tr.album_name,
                                release: date.split("T")[0],
                            }
                            arrayTemp.push(Object.assign({}, ob));
                        }
                    });
                }else
                    arrayTemp = list;
            }
            return arrayTemp;
        }
    },
    watch: {
        '$route.params.name': function() {
            this.getPromises();
        },
    },
    created(){
        debugger;
        if(this.$store.state.songs.length != 0)
            this.songs = this.$store.state.songs;
        this.execPromises();
        this.nameSearch = this.name.replace(/%20/g, " "); 
        this.$store.commit('putBackPath', this.$route.path);
    },
    mounted () {
        
    },
}
</script>
<style scoped>
.margins{
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 10px;
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

