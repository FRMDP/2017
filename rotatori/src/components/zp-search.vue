<template>
    <div>
        <h1>Busqueda de canciones/artistas/albumes</h1>
        <div>
            <md-radio v-model="radio" id="my-test4" name="my-test-group2" md-value="1" class="md-primary">Por artista</md-radio>
            <md-radio v-model="radio" id="my-test5" name="my-test-group2" md-value="2" class="md-primary">Por canción</md-radio>
            <md-radio v-model="radio" id="my-test6" name="my-test-group2" md-value="3" class="md-primary">Por nombre album</md-radio>
        </div> 
        <zp-sartist v-if="radio == '1'" class="padd"></zp-sartist> 
    </div>
</template>
<script>
import zpSartist from './zp-sartist.vue'
export default {
    components: {
        zpSartist,
    },
    data(){
        return {
            radio: '',
            result: [],
        }
    },
    computed: {
    },
    methods: {
        click(){
            const st = this.$apiRoutes.getRtArtistSearch('1', 'soda stereo');
            this.$http.get(st)
                .then(response => {
                    this.result = response.data.message.body.artist_list;
                })
        },
        click2(id){
            const st = this.$apiRoutes.getRtArtist(id);
            this.$http.get(st)
                .then(response => {
                    console.log(response);
                    const stt = this.$apiRoutes.getRtTrackSearchByArtist(id);
                    this.$http.get(stt)
                        .then(response2 => {
                            console.log(response2);
                        })
                })
        }
    },
    watch:{
        radio(){
            console.log(this.radio);
            

        }
    }

}
</script>
<style scoped>
.padd{
    padding-left: 200px;
    padding-right: 200px;
}
</style>


