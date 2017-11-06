<template>
    <div class="template">
        <div>Resultados: {{cancion.length}} </div>
        <paginate name="tracks" :list="cancion" :per="50" v-if="shown" class="row">
            <div v-for="c in paginated('tracks')" :key="c.id" class="three columns margins">
                <zp-littlecard :track="c"></zp-littlecard>
            </div>
        </paginate>
        <div class="row">
            <paginate-links for="tracks" :async="true" :show-step-links="true" :step-links="{next: '<<', prev: '>>'}" class="pag" ></paginate-links>
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
            resultados: '',
            cancion: [],
            paginate: ["tracks"],
            shown: false,
            aux: {
                id: '',
                title: '',
                artist: '',
                album: '',
                release: '',
                snippet: '',
            }
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
            
            const st = this.$apiRoutes.getRoutes('trackSearch', {name: 'nameArtist', value: this.name});
             this.$http.get(st+'&page_size=1')
                .then(response => {
                    const resultados = response.data.message.header.available;
                    this.resultados = resultados;
                    let paginas =Math.trunc( resultados / 50);
                    if(paginas%50 != 0 || resultados < 50){
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
                                    let snippet= '';
                                    let date = tr.first_release_date.split('T')[0];
                                    if(!date)
                                        date = 'Sin informacion'
                                    this.aux.id= tr.track_id,
                                    this.aux.title= tr.track_name,
                                    this.aux.artist= tr.artist_name,
                                    this.aux.album= tr.album_name,
                                    this.aux.release= date.split("T")[0],
                                    console.log(this.aux.title);
                                    this.$http.get(this.$apiRoutes.getRoutes('trackSnippet', {name: 'trackId', value: tr.track_id}))
                                        .then(resp => {
                                            snippet = resp.data.message.body.snippet.snippet_body;
                                            console.log(snippet);
                                            this.aux.snippet= snippet,
                                            this.cancion.push(Object.assign({}, this.aux));
                                        })
                                        .catch(msg => {
                                            console.log(msg)
                                            this.aux.snippet = 'Sin fragmento',
                                            this.cancion.push(Object.assign({}, this.aux))    
                                        });
                                })
                            })
                        })
                        .catch(msg => console.log(msg));
                })     
                .catch(msg => console.log(msg));
          
           
        },
    },
    watch: {
        '$route.params.name': function() {
            this.getArtist();
        },
        algo(){
            console.log(this.algo);
        }
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

