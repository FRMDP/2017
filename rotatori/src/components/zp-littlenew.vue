<template>
    <div>
        <md-card class="cardDimension paddBottom" style="margin-bottom : 10px"> <!-- No puedo solucionar que deje un espacio entre cada fila de tarjetas -->
            <md-card-media-cover md-solid>
                <md-card-media md-ratio="1:1">
                <img src="img/deportes.jpg" alt="Skyscraper" v-if="cat.name == 'sports'">
                <img src="img/local.jpg" alt="Skyscraper" v-if="cat.name == 'local'">
                <img src="img/mundo.jpg" alt="Skyscraper" v-if="cat.name == 'world'">
                <img src="img/economia.jpg" alt="Skyscraper" v-if="cat.name == 'economy'">
                <img src="img/politica.jpg" alt="Skyscraper" v-if="cat.name == 'politics'">
                <img src="img/entretenimiento.jpg" alt="Skyscraper" v-if="cat.name == 'entertainment'">
                </md-card-media>

                <md-card-area>
                <md-card-header>
                    <div class="md-title"> {{ ne.title }} </div>
                    <div class="md-subhead"> {{ ne.date }} </div>
                </md-card-header>

                <md-card-actions>
                    <md-button class="md-accent bold" @click="$router.push({ name: 'newById', params: { id: id }})">Ver completo</md-button>
                    <md-button class="md-warn bold" @click="$router.push({ name: 'catById', params: { id: cat.name }})"> {{ cat.name }} </md-button>
                </md-card-actions>
                </md-card-area>
            </md-card-media-cover>
        </md-card>
    </div>
</template>
<script>
    
    export default {
        props: ['ne'],
        data(){
            return {
                cat: {},
                id: '',
            }
        },
        methods: {
            getCatNew(){
                this.$http.get (this.ne._links.category.href)
                    .then((response) => {
                        this.cat = response.data;
                        //console.log('tarjeta', this.cat);
                        const link = this.ne._links.self.href;
                        this.id = link[link.length -1];
                    })
                    .catch((msg) => console.log('Error: ', msg));
            },
            
        },
        created(){
            this.getCatNew();
        }
    }
</script>
