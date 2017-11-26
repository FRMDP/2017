<template>
    <transition-group name="fade">
        <div :key="artist.id">
            <md-card class="cardDimension paddBottom" style="margin-bottom : 10px">
                <md-card-media-cover md-solid>
                    <md-card-media md-ratio="1:1">
                        <img src="img/microphone.jpg" alt="Skyscraper">
                    </md-card-media>

                    <md-card-area>
                    <md-card-header>
                        <div class="md-title"> {{artist.name}} </div>
                        <div class="md-subhead"> {{artist.country.name}} </div>
                    </md-card-header>

                    <md-card-actions>
                        <md-button class="md-raised md-accent bold" @click="routeGoInfo">Info</md-button>
                        <md-button class="md-raised md-primary bold" @click="routeGoSong">Canciones</md-button>
                    </md-card-actions>
                    </md-card-area>
                </md-card-media-cover>
            </md-card>
        </div>
    </transition-group>
</template>
<script>
export default {
    props: ['artist'],
    data(){
        return {
            
        }
    },
    methods: {
        routeGoInfo(){
            this.$router.push({name: 'infoAr', params: {id: this.artist.id}});
        },
        routeGoSong(){
            const st = this.artist.name.replace(/\s/g, "%20");
            this.$router.push({name: 'lyricsId', params: {id: this.artist.id, name: st}});
        }
    },
    created(){

    }
}
</script>

