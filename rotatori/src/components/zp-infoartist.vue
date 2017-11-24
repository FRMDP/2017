<template>
    <div>
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
            <h3>Pais: {{artist.country}} </h3>
            <h3>Genero primario: {{artist.primaryGen}} </h3>
            <h3>Genero secundario: {{artist.secondGen}} </h3>
            <a :href="artist.twitter" target="_blank"><img v-if="artist.twitter!='Sin datos'" src="/img/twitter.png" width="50" height="50"></a>
        </div>
    </div>
</template>
<script>
export default {
    components: {

    },
    data() {
        return {
            countries: [],
            artist: {},
            title: 'volver al resultado',
            prms:[],
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
                this.title = 'no se puede acceder a la pagina de resultados'
        },
        getPromises(){
            const st = this.$apiRoutes.getRoutes('artistGet',{name: 'artistId', value: this.id});
            this.prms.push(this.$http.get(st))

            Promise.all(this.prms)
                .then(values => {
                    if(values[0].status == 403)
                        console.log('no funciona api');
                    else
                        this.countries = values[0].data
                    const aux = values[1].data.message.body.artist;
                    this.artist = this.castArtist(aux);
                })
                .catch(msg => console.log(msg));
        },
        castArtist(artist){
            let countr = 'Sin datos';
            const con = this.countries.find( c => c.code.toUpperCase() == artist.artist_country.toUpperCase());
            if(con)
                countr = con.name;
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
        }
    },
    created(){
        this.prms.push(this.$http.get('https://battuta.medunes.net/api/country/all/?key=2bd3a0ab3aeea1156c6649766caa2373'));
        this.getPromises();   
    }
}
</script>
<style scoped>
.padd{
    padding-left: 200px;
}
</style>


