<template>
    <div>
        <md-card class="cardDimension paddBottom" style="margin-bottom : 10px">
            <md-card-media-cover md-solid>
                <md-card-media md-ratio="1:1">
                    <img src="img/microphone.jpg" alt="Skyscraper">
                </md-card-media>

                <md-card-area>
                <md-card-header>
                    <div class="md-title"> {{artist.name}} </div>
                    <div class="md-subhead"> {{artist.country}} </div>
                </md-card-header>

                <md-card-actions>
                    <md-button class="md-accent bold" @click="$router.push()"> </md-button>
                    <md-button class="md-warn bold" @click="$router.push()"> </md-button>
                </md-card-actions>
                </md-card-area>
            </md-card-media-cover>
        </md-card>
    </div>
</template>
<script>
export default {
    props: ['artist'],
    data(){
        return {
            
        }
    },
    methods: {

    },
    created(){

    }
}
</script>

