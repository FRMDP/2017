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
    <div class="box content">
        <div class="post-header has-text-centered">
            <h4 class="title is-8"><i>Comentarios</i></h4>
        </div>
        <article class="media" v-for="com in listaComentarios">
            <figure class="media-left">
                <p class="image is-32x32">
                    <img src="css/person.png">
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong>{{com.usuario}}</strong>
                        <br>{{com.cuerpo}}
                        <br>
                        <small><a type="submit" @click.prevent="meGusta(com.idc)">Me gusta {{com.mg}}</a> · {{tiempo(com.date)}}</small>
                    </p>
                </div>
            </div>
        </article>
        <article id="comment1" class="media">
            <div id="comment2" class="field is-horizontal">
                <div class="field-label is-normal">
                    <label class="label">Nombre</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <p class="control is-expanded has-icons-left">
                            <input class="input" type="text" placeholder="Ingrese su nombre..." v-model="comentario.usuario">
                            <span class="icon is-small is-left">
        <i class="fa fa-user"></i>
      </span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="media-content">
                <div class="field">
                    <p class="control">
                        <textarea class="textarea" placeholder="Agregar comentario..." v-model="comentario.cuerpo"></textarea>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button class="button" :disabled="!formOk" type="submit" @click.prevent="guardaComentario">Enviar Comentario</button>
                    </p>
                </div>
            </div>
        </article>
    </div>

</div>

</template>

<script>

import storageService from '../services/storageService';
import moment from 'moment';
export default {
    name: 'verNoticia',
    data() {
        return {
            New: '',
            reporter: '',
            category: '',
            comentario: {
                usuario: '',
                cuerpo: '',
                id: '',
                date: '',
                mg: 0,
                idc: ''
            },
            lista: []
        }
    },
    sockets: {
        connect: function() {
            console.log('socket connected');
        },
        notiComentario: function(val) {
            this.cargaComentario(val);
            storageService.storeComentario(this.lista);
        },
        comentMegusta: function(val) {
            this.lista.find(c => c.idc == val).mg++;
            storageService.storeComentario(this.lista);
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
                        this.New = '';
                    })
            },
            verCategoria(id) {
                this.$router.push('/category/' + id);
            },
            limpiarComentario() {
                this.comentario.usuario = '';
                this.comentario.cuerpo = '';
                this.comentario.id = '';
            },
            cargaComentario(comm) {
                comm.idc = this.lista.length;
                this.lista.push(Object.assign({}, comm));
            },
            guardaComentario() {
                this.comentario.id = this.New.uid;
                this.comentario.date = new Date();
                this.$socket.emit('notiComentario', this.comentario);
                this.limpiarComentario();
            },
            tiempo(date) {
                moment.locale('es');
                return moment(date).fromNow();
            },
            meGusta(id) {
                this.$socket.emit('comentMegusta', id);
            }
    },
    computed: {
        params() {
                return this.$route.params;
            },
            id() {
                return this.$route.params.id;
            },
            formOk() {
                return this.comentario.usuario && this.comentario.cuerpo;
            },
            listaComentarios() {
                return this.lista.filter(c => c.id == this.New.uid);
            }
    },
    watch: {
        '$route.params.id': function() {
            this.verNoticia();
        }
    },
    created() {
        this.verNoticia();
        this.lista = storageService.traerComentarios();
    }
}

</script>
