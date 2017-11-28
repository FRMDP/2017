<template>
    <div>
        <zp-error v-if="error"></zp-error>
        <div v-else>
            <div v-if="pbar" class="paddings">
                    <md-progress class="md-accent" md-indeterminate></md-progress>
                    <h3 >Aguarde mientras se cargan los resultados. Esta operación puede demorar...</h3 >
            </div>
            <div v-else>
                <div class="row">
                    <div class="one columns">
                        <md-button class="md-fab md-warn" @click="goBack()">
                            <md-icon>reply</md-icon>
                            <md-tooltip md-direction="right">{{ title }}</md-tooltip>
                        </md-button>
                    </div>
                    <div class="eleven columns">
                        <h1>Información sobre: {{artist.name}} </h1>
                    </div>
                </div>
                <div class="padd">
                    <h3>Pais: {{artist.country.name}} </h3> <img :src="artist.country.flag" width="40px" height="40px"/>
                    <h3>Genero primario: {{artist.primaryGen}} </h3>
                    <h3>Genero secundario: {{artist.secondGen}} </h3>
                    <a :href="artist.twitter" target="_blank"><img v-if="artist.twitter!='Sin datos'" src="/img/twitter.png" width="50" height="50"></a>
                    <md-button class="md-raised md-primary bold" @click="routeGoSong">Canciones</md-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import zpError from "./zp-error.vue";
export default {
    components: {
        zpError,
    },
    data() {
        return {
            countries: [],
            artist: {
                name: '',
                primaryGen: '',
                secondGen: '',
                country:{},
            },
            title: 'volver al resultado',
            prms:[],
            pbar: false,
            error: false,
        }
    },
    computed: {
        params(){
            return this.$route.params;
        },
        id(){
            return this.$route.params.id;
        },
    },
    methods: {
        goBack(){
            const st = this.$store.state.backPathSearch;
            if(st != '')
                this.$router.push(st);
            else
                this.title = 'No se puede acceder a la pagina de resultados'
        },
        getPromises(){
            const st = this.$apiRoutes.getRoutes('artistGet',{name: 'artistId', value: this.id});
            this.$http.get(st)
                .then(response => {
                    const aux = response.data.message.body.artist;
                    this.artist = this.castArtist(aux);
                    this.pbar = false;
                })
                .catch(msg => {
                    this.pbar = false;
                    this.error = true;
                });
        },
        routeGoSong(){
            const st = this.artist.name.replace(/\s/g, "%20");
            this.$router.push({name: 'lyricsId', params: {id: this.artist.id, name: st}});
        },
        castArtist(artist){
            let countr = {name: 'Sin datos'};
            const con = this.countries.find( c => c.code.toUpperCase() == artist.artist_country.toUpperCase());
            if(con)
                countr = con;
            let primG = 'Sin datos';
            if(artist.primary_genres.music_genre_list.length > 0)
                primG = artist.primary_genres.music_genre_list[0].music_genre.music_genre_name;
            let secG = 'Sin datos';
            if(artist.secondary_genres.music_genre_list.length > 0)
                secG = artist.secondary_genres.music_genre_list[0].music_genre.music_genre_name;
            let twit = 'Sin datos';
            if(artist.artist_twitter_url != '')
                twit = artist.artist_twitter_url;
            const ob = {
                id: artist.artist_id,
                name: artist.artist_name,
                country: countr,
                primaryGen: primG,
                secondGen: secG,
                twitter: twit,
            }
            return ob;
        },
        putCountries(){
            this.countries = this.$store.getters.getCountries;
        }
    },
    created(){
        this.pbar = true;
        
        setTimeout(() => {  
            this.putCountries();
            this.getPromises();    
        }, 2000);
           
    }
}
</script>
<style scoped>
.padd{
    padding-left: 200px;
}
</style>


