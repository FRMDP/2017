<template>
    <div class="template">
        <zp-error v-if="error"></zp-error>
        <div v-else>
            <h1>Canciones de: {{name.replace(/\%20/g, " ")}} </h1>
            <zp-alert v-if="showA" :messageAlert="messageFav" :classAlert="'alert-success'"></zp-alert>
            <div v-if="pbar" class="paddings">
                <md-progress class="md-accent" md-indeterminate></md-progress>
                <h3 >Aguarde mientras se cargan los resultados. Esta operación puede demorar...</h3 >
            </div>
            <div v-else class="paddings">
                <md-input-container>
                    <label>Filtrar por título</label>
                    <md-input v-model="filter"></md-input>
                </md-input-container>
            </div>
            <zp-alert v-if="trackFilter.length == 0 && !pbar" :messageAlert="messageAlert" :classAlert="classAlert"></zp-alert>
            <div v-else-if="!pbar">
                <div style="padding-left:100px">
                    Resultados: {{trackFilter.length}}
                </div>
                <paginate name="tracks" :list="trackFilter" :per="50" class="row">
                    <div v-for="c in paginated('tracks')" :key="c.id" class="three columns margins">
                        <zp-littlecard :track="c" @showAlert="showAlert"></zp-littlecard>
                    </div>
                </paginate>
                <div class="row">
                    <paginate-links for="tracks" :async="true" :show-step-links="true" :step-links="{next: '<<', prev: '>>'}" class="pag" ></paginate-links>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import zpAlert from './zp-alert.vue'
import zpLittlecard from './zp-littlecard.vue'
import zpError from './zp-error.vue'
export default {
    components: {
        zpAlert,
        zpLittlecard,
        zpError,
    },
    data() {
        return {
            pbar: false,
            filter: '',
            messageAlert: 'No hay resultados en la busqueda',
            classAlert: 'alert-info',
            messageFav: '',
            paginate: ["tracks"],
            tracks: [],
            error: false,
            showA: false,
        }
    },
    computed: {
        params(){
            return this.$route.params;
        },
        id(){
            return this.$route.params.id;
        },
        name(){
            return this.$route.params.name;
        },
        trackFilter(){
            return this.tracks.filter( t => 
                                        (t.title.toUpperCase().indexOf(this.filter.toUpperCase()) >= 0) ||
                                        (t.album.toUpperCase().indexOf(this.filter.toUpperCase())>=0)
                                    )
        }
    },
    methods: {
        getPromises(){
            let arrayTemp = [];
            const st = this.$apiRoutes.getRoutes('trackSearch',{name: 'artistId', value: this.id}, {name: 'pageSize', value: '100'});
            this.$http.get(st)
                .then(response => {
                    const aux = response.data.message;
                    const results = aux.header.available;
                    arrayTemp = this.castSong(aux.body.track_list);
                    let pages = Math.trunc(results / 100);
                    if(results%100 != 0 || results < 100)
                        pages++;
                    let prms = [];
                    for(let i = 2; i<=pages; i++){
                        prms.push(this.$http.get(this.$apiRoutes.getRoutes('trackSearch',{name: 'artistId', value: this.id}, {name: 'pageSize', value: '100'}, {name: 'page', value: i})));
                    }
                    if(prms){
                        Promise.all(prms)
                            .then(values => {
                                values.forEach( t =>{
                                    const aux = t.data.message.body.track_list;
                                    arrayTemp = arrayTemp.concat(this.castSong(aux));
                                })
                                this.changeStates(arrayTemp);

                                this.pbar = false;
                            })
                    }
                })  
                .catch(msg => console.log(msg)); 
        },
        castSong(list){
            let arrayTemp = [];
            if(list){
                list.forEach(s => {
                    const aux = s.track;
                    let date = aux.first_release_date.split('T')[0];
                    if(!date)
                        date = 'Sin informacion';
                    if(aux.has_lyrics == 1){
                        const ob = {
                            id: aux.track_id,
                            title: aux.track_name,
                            album: aux.album_name,
                            artist: aux.artist_name,
                            release: date,
                        }
                        if(this.$session.has('login')){
                            if(this.$tracks.checkTrack(ob.id, this.$session.get('login').id)){
                                ob.userId = this.$session.get('login').id;
                            }
                         }
                        arrayTemp.push(Object.assign({}, ob));
                    }
                });
            }
            return arrayTemp;
        },
        changeStates(arrayTemp){
            this.$store.commit('putSongs', arrayTemp);
            this.tracks = arrayTemp;
            this.$store.commit('putBackPath', this.$route.path);
            this.pbar = false;
        },
        showAlert(payload){
            this.messageFav = payload;
            this.showA = true;
            setTimeout(() => {
                this.showA = false;
            }, 3500);
        }
    },
    created(){
        this.pbar = true;
        this.getPromises();
    }
}
</script>
<style scoped>
.paddings{
    margin-left: 100px;
    margin-right: 100px;
    padding-right: 150px;
}
.template{
    margin-left: 10px;
}
.margins{
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 10px;
}
</style>



