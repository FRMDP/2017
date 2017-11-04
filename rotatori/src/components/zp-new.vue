<template>
    <div class="paddings">
        <h1> {{ New.title }} </h1>
        <div class="row">
            <div class="two columns">
                <img src="img/deportes.jpg" alt="Skyscraper" v-if="cat.name == 'sports'">
                <img src="img/local.jpg" alt="Skyscraper" v-if="cat.name == 'local'">
                <img src="img/mundo.jpg" alt="Skyscraper" v-if="cat.name == 'world'">
                <img src="img/economia.jpg" alt="Skyscraper" v-if="cat.name == 'economy'">
                <img src="img/politica.jpg" alt="Skyscraper" v-if="cat.name == 'politics'">
                <img src="img/entretenimiento.jpg" alt="Skyscraper" v-if="cat.name == 'entertainment'">
            </div>
            <div class="ten columns">
                <h5>Fecha: {{ New.date }}</h5>
                <h5>Por: {{ reporter.name }}</h5>
            </div>
            <div class="twelve columns">
                <p> {{ New.body }} </p>
            </div>
            <div class="twelve columns">
                <md-button class="md-accent" @click="$router.push({ name: 'catById', params: { id: cat.name }})"> {{ cat.name }} </md-button>
            </div>
        
        </div>
    </div>
</template>
<script>

export default {
    props: [],
    data() {
        return {
            New: {},
            cat: {},
            reporter: {}
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
    methods: {
        getNewById(){
            const url = 'http://192.168.99.100:8080/news/' + this.id;
            this.$http.get(url)
                .then((response) => {
                    this.New = response.data;
                    this.getCatByNew();
                    this.getReporterByNew();
                })
                .catch((msg) => console.log('Error: ', msg));
        },
        getCatByNew(){
            this.$http.get(this.New._links.category.href)
                .then((response) => {
                    this.cat = response.data;
                })
                .catch(msg => console.log('Error: ', msg));
        },
        getReporterByNew(){
            this.$http.get(this.New._links.reporter.href)
                .then((response) => {
                    this.reporter = response.data;
                })
                .catch(msg => console.log('Error: ', msg));
        }
    },
    watch: {
        '$route.params.id': function() {
            this.getNewById();
        }
    },
    created() {
        this.getNewById();
    }
}
</script>
