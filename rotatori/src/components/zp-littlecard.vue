<template>
    <transition-group name="fade">
        <div :key="track.id">
            <md-card class="cardDimension paddBottom" style="margin-bottom : 10px">
                <md-card-media-cover md-solid>
                    <md-card-media md-ratio="1:1">
                        <img src="img/cover.jpg" alt="Skyscraper">
                    </md-card-media>

                    <md-card-area>
                    <md-card-header>
                        <div class="md-title">{{track.title}} </div>
                        <div class="md-subhead"> {{track.artist}} - {{track.album}} </div>
                        <div class="md-subhead">Lanzamiento: {{ track.release }} </div>
                    </md-card-header>

                    <md-card-actions>
                        <md-button class="md-accent bold" @click="ruteGo()">Ver lyric</md-button>
                        <md-button class="md-warn bold" @click="$router.push()"> </md-button>
                    </md-card-actions>
                    </md-card-area>
                </md-card-media-cover>
            </md-card>
        </div>
    </transition-group>
</template>
<script>
    
    export default {
        props: ['track'],
        data(){
            return {
                
            }
        },
        methods: {
            ruteGo(){
                const st = this.track.title.replace(/\s/g, "%20");
                this.$router.push({name: 'lyric', params:{id: this.track.id, name: st}});
            }
        },
        created(){

        }
    }
</script>
