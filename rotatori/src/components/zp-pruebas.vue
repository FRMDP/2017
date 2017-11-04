<template>
    <div>
        <div><md-button>clickme</md-button></div>
        <paginate name="tracks" :list="cancion" :per="10" v-if="shown">
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
            const st = this.$apiRoutes.getRtTrackSearchByArtist(this.name);
            console.log(st);
            this.$http.get(st+'&page_size=100')
                .then(response => {
                    console.log(response);
                    const ava = response.data.message.header.available;
                    console.log(ava);
                    const array = response.data.message.body.track_list; 
                    console.log(array);
                    array.forEach( l =>{
                        const track = l.track;
                        let date = track.first_release_date.split("T")[0];
                        if(!date){
                            date = 'Sin informacion';
                        }
                        const ob = {
                            id: track.track_id,
                            title: track.track_name,
                            artist: track.artist_name,
                            album: track.album_name,
                            release: date.split("T")[0],
                        }
                        this.cancion.push(Object.assign({}, ob));
                        
                    })
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
        this.$apiRoutes.getRoutes('hola', 5, {name:'teodor'}, 8);
    },
    mounted () {
        setTimeout(() => {
        this.shown = true
        }, 1000)
    },
}
</script>
