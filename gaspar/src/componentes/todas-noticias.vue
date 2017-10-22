<style>



</style>

<template>

<div class="todas">
    <div width="auto" class="grid-wrapper" id="contenedor">
        <div class="grid-item" id="noticia" v-for="(noticia, index) in listaNoticias">
            <div class="card">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="css/new.png" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4" id="titulo">{{noticia.title}}</p>
                            <p class="title is-6">{{noticia.subtitle}}</p>
                            <div class="content">
                                <p class="subtitle is-6" id="cuerpo">{{noticia.body}}</p>
                                <p class="subtitle is-6">Reportero: {{noticia.reporter.name}}</p>
                                <p class="subtitle is-6">Categoria: {{noticia.category.name}}</p>
                                <p class="subtitle is-6">Fecha: {{noticia.date}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="botones">
                    <button class="button" @click="verNoticia(noticia.id)">Ver Noticia</button>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>

import storageService from '../services/storageService';
export default {
    name: 'todasNoticias',
    data() {
        return {
            category: ''
        }
    },
    methods: {
        verCategoria() {
                if (this.id) {
                    return storageService.traerCategoria(this.id);
                }
            },
            verNoticia(id) {
                this.$router.push('/news/' + id);
            }
    },
    computed: {
        params() {
                return this.$route.params;
            },
            listaNoticias() {
                if (this.category) {
                    return storageService.filtrarNoticias(this.category);
                } else {
                    return storageService.traerNoticias();
                }
            },
            id() {
                return this.$route.params.cat;
            }
    },
    watch: {
        '$route.params.cat': function() {
            this.category = this.verCategoria();
        }
    },
    created() {
        this.category = this.verCategoria();
    }
}

</script>
