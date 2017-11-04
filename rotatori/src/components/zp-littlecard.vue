<template>
    <div>
        <md-card class="cardDimension paddBottom" style="margin-bottom : 10px">
            <md-card-media-cover md-solid>
                <md-card-media md-ratio="1:1">
                </md-card-media>

                <md-card-area>
                <md-card-header>
                    <div class="md-title"> </div>
                    <div class="md-subhead"> </div>
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
        props: [],
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
