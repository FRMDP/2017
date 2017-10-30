<style>



</style>

<template>

<div class="todas">
    <div width="auto" class="grid-wrapper" id="contenedor">
        <div class="grid-item" id="noticia" v-if="!listaNoticias.length">
            <p class="title is-4" id="titulo">No hay noticias</p>
        </div>
        <div class="grid-item" id="noticia" v-else v-for="noticia in listaNoticias">
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
                                <p class="subtitle is-6"><i>Fecha: {{noticia.date.substr(0,10)}}</i></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="botones">
                    <button class="button" @click="verNoticia(noticia._links.self.href.substr(noticia._links.self.href.lastIndexOf('/')+1))">Ver Noticia</button>
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
            category: '',
            noticias: '',
            categorias: ''
        }
    },
    methods: {
        notixCategoria(cat) {
                let link = this.categorias.find(c => c._links.self.href.substr(c._links.self.href.lastIndexOf('/')+1) == cat)._links.news.href;
                if(link)
                {
                  storageService.noticiasCategoria(link)
                      .then((response) => {
                          this.noticias = response.data._embedded.news;
                      })
                      .catch((error) => {
                          console.log(error);
                      })
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
            id() {
                return this.$route.params.cat;
            },
            listaNoticias() {
                return this.noticias;
            },
            listaCategorias() {
                return this.categorias;
            }
    },
    watch: {
        '$route.params.cat': function() {
            if (this.id) {
                this.notixCategoria(this.id);
            } else {
                storageService.traerNoticias()
                    .then((response) => {
                        this.noticias = response.data._embedded.news;
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        }
    },
    created() {
        storageService.traerCategorias()
            .then((response) => {
                this.categorias = response.data._embedded.categories;
            })
            .then((response) => {
                if (this.id) {
                    this.notixCategoria(this.id);
                } else {
                    storageService.traerNoticias()
                        .then((response) => {
                            this.noticias = response.data._embedded.news;
                        });
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

</script>
