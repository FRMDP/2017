<template>
    <div class="paddings">
        <h1> {{ New.title }} </h1>
        <div class="row">
            <div class="two columns">
                <img src="img/deportes.jpg" alt="Skyscraper" v-if="New.category.name == 'sports'">
                <img src="img/local.jpg" alt="Skyscraper" v-if="New.category.name == 'local'">
                <img src="img/mundo.jpg" alt="Skyscraper" v-if="New.category.name == 'world'">
                <img src="img/economia.jpg" alt="Skyscraper" v-if="New.category.name == 'economy'">
                <img src="img/politica.jpg" alt="Skyscraper" v-if="New.category.name == 'politics'">
                <img src="img/entretenimiento.jpg" alt="Skyscraper" v-if="New.category.name == 'entertainment'">
            </div>
            <div class="ten columns">
                <h5>Fecha: {{ New.date }}</h5>
                <h5>Por: {{ New.reporter.name }}</h5>
                <h2> {{ New.subtitle }} </h2>
            </div>
            <div class="twelve columns">
                <p> {{ New.body }} </p>
            </div>
            <div class="twelve columns">
                <md-button class="md-accent" @click="$router.push({ name: 'catById', params: { id: New.category.id }})"> {{ New.category.name }} </md-button>
            </div>
        
        </div>
    </div>
</template>
<script>
import storageService from '../services/storageService'
export default {
    props: [],
    data() {
        return {
            New: {}
        }
    },
    computed: {
        params() {
            return this.$route.params;
        },
        id() {
            return this.$route.params.id;
        }
    },
    watch: {
        '$route.params.id': function() {
            this.New = storageService.getNewById(this.id);
        }
    },
    created() {
        this.New = storageService.getNewById(this.id);
    }
}
</script>
