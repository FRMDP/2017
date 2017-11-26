<template>
    <div>
        <h1>Mi track list</h1>
        <div class="paddings">
            <md-input-container>
                <label>Filtrar por título</label>
                <md-input v-model="filter"></md-input>
            </md-input-container>
        </div>
        <zp-alert v-if="filterTracks.length == 0" :messageAlert="messageAlert" :classAlert="classAlert"></zp-alert>
        <div v-if="filterTracks.length != 0">
            <div style="padding-left: 100px">
                resultados: {{filterTracks.length}}
            </div>
            <paginate name="tracks" :list="filterTracks" :per="50" class="row">
                <div v-for="c in paginated('tracks')" :key="c.id" class="three columns margins">
                    <zp-littlecard :track="c" @quitTrack="quitTrack"></zp-littlecard>
                </div>
            </paginate>
            <div class="row" style="justify-content:center;">
                <paginate-links for="tracks" :async="true" :show-step-links="true" :step-links="{next: '<<', prev: '>>'}"/>
            </div>
        </div>
    </div>
</template>
<script>
import zpAlert from './zp-alert.vue'
import zpLittlecard from './zp-littlecard.vue'
export default {
    components:{
        zpAlert,
        zpLittlecard,
    },
    data(){
        return {
            myTracks: [],
            filter: '',
            paginate: ['tracks'],
            showA: false,
            messageAlert: 'No hay resultados',
            classAlert: 'alert-info'
        }
    },
    computed: {
        filterTracks(){
            return this.myTracks.filter(t => (t.title.toUpperCase().indexOf(this.filter.toUpperCase()) >= 0) ||
                                            (t.artist.toUpperCase().indexOf(this.filter.toUpperCase()) >= 0) ||
                                            (t.album.toUpperCase().indexOf(this.filter.toUpperCase()) >= 0))
        }
    },
    methods:{
        quitTrack(track){
            this.myTracks = this.$tracks.quitTrack(track);
        }
    },
    created() {
        if (!this.$session.has('login')) {
            this.$router.push({ name: "index" });
        }else{
            this.myTracks = this.$tracks.getTracksById(this.$session.get('login').id);
            this.$store.commit('putBackPath', this.$route.path);
        }
    }
}
</script>
<style scoped>
.margins{
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 10px;
}
</style>


