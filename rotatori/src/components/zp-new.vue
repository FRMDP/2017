<template>
    <div class="paddings">
        <h1> {{ New.title }} </h1>

        <h5>Fecha: {{ New.date }}</h5>

        <h5>Por: {{ New.reporter.name }}</h5>

        <h2> {{ New.subtitle }} </h2>

        <p> {{ New.body }} </p>

        <md-button class="md-accent" @click="$router.push({ name: 'catById', params: { id: New.category.id }})"> {{ New.category.name }} </md-button>
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
    methods: {

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
