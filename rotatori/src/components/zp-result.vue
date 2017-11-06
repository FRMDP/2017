<template>
    <div class="template">
        <h1>Resultados</h1>
        <div v-if="pbar">
            <md-progress class="md-accent"  md-indeterminate></md-progress>
            <h3 >Aguarde mientras se carga la página...</h3 >
        </div>
        <div v-else>
            <div>Resultados: {{songs.length}} </div>
            <paginate name="tracks" :list="songs" :per="50" v-if="shown" class="row">
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
export default {
    components:{
        zpLittlecard,
    },
    data(){
        return {
            result: '',
            songs: [],
            paginate: ["tracks"],
            shown: false,
            aux: {
                id: '',
                title: '',
                artist: '',
                album: '',
                release: '',
            },
            pbar: false,
        }
    },
    computed: {
        params() {
            return this.$route.params;
        },
        name() {
            return this.$route.params.name;
        }
    },
    methods: {
        getArtist(){
            this.pbar = true;
            const st = this.$apiRoutes.getRoutes('trackSearch', {name: 'nameArtist', value: this.name});
             this.$http.get(st+'&page_size=1')
                .then(response => {
                    const result = response.data.message.header.available;
                    this.result = result;
                    let paginas =Math.trunc( result / 50);
                    if(paginas%50 != 0 || result < 50){
                        paginas++;
                    }
                    let prms=[];
                    for(let i = 1; i<=paginas; i++){
                        const st1 =this.$apiRoutes.getRoutes('trackSearch', {name: 'NameArtist', value: this.name}, {name:'page', value: i},{name:'pageSize', value: 50})
                        prms.push(this.$http.get(st1))
                    }
                    Promise.all(prms)
                        .then(values =>{
                            values.forEach( list => {
                                const array = list.data.message.body.track_list;
                                array.forEach( t => {
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
                                        this.songs.push(Object.assign({}, ob));
                                    }
                                });
                            })
                        })
                        .catch(msg => console.log(msg));
                    this.pbar = false;   
                })     
                .catch(msg => console.log(msg));
          
           
        },
    },
    watch: {
        '$route.params.name': function() {
            this.getArtist();
        },
    },
    created(){
        this.getArtist();
        
    },
    mounted () {
        setTimeout(() => {
        this.shown = true
        }, 1000)
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
</style>

