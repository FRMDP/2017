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
                        <md-button class="md-warn bold" @click="ruteGo()">Ver lyric</md-button>
                        <md-button class="md-icon-button md-accent" @click="changeFavorite">
                            <md-icon v-if="!agregado">favorite</md-icon>
                            <md-tooltip md-direction="right" v-if="!agregado">Agregar a Favorito</md-tooltip>
                            <md-icon v-if="agregado">favorite_border</md-icon>
                            <md-tooltip md-direction="right" v-if="agregado">Quitar Favorito</md-tooltip>
                        </md-button>
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
            agregado: false,
        }
    },
    methods: {
        ruteGo(){
            const st = this.track.title.replace(/\s/g, "%20");
            this.$router.push({name: 'lyric', params:{id: this.track.id, name: st}});
        },
        changeFavorite(){
            if(this.$session.has('login')){
                if(this.track.userId){
                    this.quitTrack();
                    this.showAlert('Quitado de favoritos correctamente');
                    delete this.track.userId;
                    this.agregado = false;
                }else{
                    this.track.userId = this.$session.get('login').id;
                    this.$tracks.saveTrack(this.track);
                    this.showAlert('Agregado a favoritos correctamente');
                    this.agregado = true;
                }
            }else{
                this.showAlert('Debe estar logueado para agregar a favoritos');
            }
        },
        showAlert(message){
            this.$emit('showAlert', message);
        },
        quitTrack(){
            this.$emit('quitTrack', this.track);
        }
    },
    created(){
        if(this.track.userId)
            this.agregado = true;
    }
}
</script>
