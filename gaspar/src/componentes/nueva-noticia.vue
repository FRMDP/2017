<style>



</style>

<template>

<div class="noticia">
    <div class="titulo">
        <h1 class="title" id="title">
       Nueva Noticia
     </h1>
    </div>
    <div class="contenedor">
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Reportero</label>
            </div>
            <div class="field-body">
                <div class="field is-narrow">
                    <div class="control">
                        <div class="select is-fullwidth">
                            <select v-model="New.reporter">
                                <option selected disabled value="">Seleccione reportero</option>
                                <option v-for="repos in listarepos" :value="repos._links.self.href">{{ repos.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Titulo</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <p class="control is-expanded has-icons-left">
                        <input class="input" type="text" placeholder="Titulo de la Noticia" v-model="New.title">
                        <span class="icon is-small is-left">
            <i class="fa fa-user"></i>
          </span>
                    </p>
                </div>
            </div>
        </div>


        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Contenido</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <textarea id="contenido" class="textarea" placeholder="Contenido de la Noticia" v-model="New.body"></textarea>
                    </div>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Categoria</label>
            </div>
            <div class="field-body">
                <div class="field is-narrow">
                    <div class="control">
                        <div class="select is-fullwidth">
                            <select v-model="New.category">
                                <option selected disabled value="">Seleccione Categoria</option>
                                <option v-for="cat in listacats" :value="cat._links.self.href">{{ cat.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label">

            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <button class="button" :disabled="!formOk" type="submit" @click.prevent="guardaNoticia">
                            Subir Noticia
                        </button>
                        <div v-show="mensaje=='guardado'" class="modal">
                            <div class="modal-content">
                                <button class="delete" @click="cerrarMensaje"></button>
                                <p>Noticia Agregada</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>

import storageService from '../services/storageService';
//importo mi clase objNoticia diseñada segun el patron Revealing Module
import objNoticia from '../utils/objNoticia';
export default {
    name: 'nuevaNoticia',
    data() {
        return {
            New: {
                title: '',
                body: '',
                date: '',
                category: '',
                reporter: ''

            },
            Noticia:null,
            reporters: [],
            categories: [],
            mensaje: false
        }
    },
    methods: {
        guardaNoticia() {
                const nowDate = new Date();
                this.New.date = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate();
                this.creaNoticia();
                storageService.cargarNoticia(this.Noticia)
                    .then((response) => {
                        this.mensaje = 'guardado';
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            creaNoticia(){
              this.Noticia.setTitle(this.New.title);
              this.Noticia.setBody(this.New.body);
              this.Noticia.setFecha(this.New.date);
              this.Noticia.setReporter(this.New.reporter);
              this.Noticia.setCategory(this.New.category);
            },
            cerrarMensaje() {
                this.mensaje = false;
                this.$router.push('/news');
            }
    },
    computed: {
        listarepos() {
                return this.reporters;
            },
            listacats() {
                return this.categories;
            },
            formOk() {
                return this.New.reporter && this.New.title && this.New.body && this.New.category;
            }
    },
    created() {
        storageService.traerCategorias()
            .then((response) => {
                this.categories = response.data._embedded.categories;
            })
            .catch((error) => {
                console.log(error);
            })
        storageService.traerReporteros()
            .then((response) => {
                this.reporters = response.data._embedded.reporters;
            }).catch((error) => {
                console.log(error);
            })
        //Asigno a mi atributo Noticia de la data el metodo de la clase importada que me permite manejar variable y metodos con alcance privado y publico
        this.Noticia = new objNoticia();
    }
}

</script>
