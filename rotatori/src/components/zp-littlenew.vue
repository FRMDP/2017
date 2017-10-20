<template>
    <div>
        <md-card class="cardDimension paddBottom" style="margin-bottom : 10px"> <!-- No puedo solucionar que deje un espacio entre cada fila de tarjetas -->
            <md-card-media-cover md-solid>
                <md-card-media md-ratio="1:1">
                <img src="img/deportes.jpg" alt="Skyscraper" v-if="ne.category.name == 'sports'">
                <img src="img/local.jpg" alt="Skyscraper" v-if="ne.category.name == 'local'">
                <img src="img/mundo.jpg" alt="Skyscraper" v-if="ne.category.name == 'world'">
                <img src="img/economia.jpg" alt="Skyscraper" v-if="ne.category.name == 'economy'">
                <img src="img/politica.jpg" alt="Skyscraper" v-if="ne.category.name == 'politics'">
                <img src="img/entretenimiento.jpg" alt="Skyscraper" v-if="ne.category.name == 'entertainment'">
                </md-card-media>

                <md-card-area>
                <md-card-header>
                    <div class="md-title"> {{ ne.title }} </div>
                    <div class="md-subhead"> {{ ne.date }} </div>
                </md-card-header>

                <md-card-actions>
                    <md-button class="md-accent" @click="$router.push({ name: 'newById', params: { id: ne.id }})">Ver completo</md-button>
                    <md-button class="md-warn" @click="$router.push({ name: 'catById', params: { id: ne.category.id }})"> {{ ne.category.name }} </md-button>
                </md-card-actions>
                </md-card-area>
            </md-card-media-cover>
        </md-card>
    </div>
</template>
<script>
    
    export default {
        props: ['ne']
    }
</script>
