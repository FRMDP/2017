<style>



</style>

<template>

<div class="noticia">
    <div v-if="!New" class="box">
        <h3>La noticia no existe</h3>
    </div>
    <div v-else class="box">
        <div class="post-header has-text-centered">
            <img src="">
            <h4 class="title is-8"><i>{{New.title}}</i></h4>
            <h4 class="title is-4">{{New.subtitle}}</h4>
        </div>
        <hr>
        <div class="post-content-short">
            <p>{{New.body}}</p>
            <div class="post-content-details">
                <div class="is-pulled-left">
                    <i>Fecha: {{New.date}} by <i>{{reporter}}</i></i>
                </div>
                <div class="is-pulled-right">
                    <i>{{category}}</i>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>

import storageService from '../services/storageService';
export default {
    name: 'verNoticia',
    data() {
        return {
            New: '',
            reporter: '',
            category: ''
        }
    },
    methods: {
        verNoticia() {
                storageService.traerNoticia('http://localhost:8080/news/' + this.id)
                    .then((response) => {
                        this.New = response.data;
                        this.New.date = this.New.date.substr(0, 10);
                        const promesa1 = storageService.traerReportero(this.New._links.reporter.href);
                        const promesa2 = storageService.traerCategoria(this.New._links.category.href);
                        Promise.all([promesa1, promesa2])
                            .then((values) => {
                                this.reporter = values[0].data.name;
                                this.category = values[1].data.name;
                            })
                            .catch((values) => console.log(values));
                    })
                    .catch((error) => {
                        console.log(error);
                        this.New ='';
                    })
            },
            verCategoria(id) {
                this.$router.push('/category/' + id);
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
            this.verNoticia();
        }
    },
    created() {
        this.verNoticia();
    }
}

</script>
