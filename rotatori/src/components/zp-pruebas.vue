<template>
    <div>
        <div>Resultados: {{resultados}} </div>
        <paginate name="tracks" :list="cancion" :per="50" v-if="shown">
            <div v-for="c in paginated('tracks')" :key="c.id">
                <h3>Titulo: {{ c.title }}</h3>
                <div>Artista/Grupo: {{ c.artist }}</div>
                <div>Album: {{ c.album }}</div>
                <div>Lanzamiento: {{ c.release }}</div>
            </div>
        </paginate>
        <paginate-links for="tracks" :async="true" :show-step-links="true" :step-links="{next: 'N', prev: 'P'}" v-model="algo"></paginate-links>
    </div>
</template>
<script>
export default {
    data(){
        return {
            resultados: '',
            cancion: [],
            paginate: ["tracks"],
            shown: false,
            algo:'',
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
                    if(paginas%50 != 0){
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
                                    let date = tr.first_release_date.split('T')[0];
                                    if(!date)
                                        date = 'Sin informacion'
                                    const obj = {
                                        id: tr.track_id,
                                        title: tr.track_name,
                                        artist: tr.artist_name,
                                        album: tr.album_name,
                                        release: date.split("T")[0],
                                    }
                                    this.cancion.push(Object.assign({}, obj));
                                })
                            })
                            console.log(this.cancion);
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
