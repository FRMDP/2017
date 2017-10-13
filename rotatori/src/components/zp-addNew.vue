<template>
    <div class="paddings">
        <h1>Agregar nueva noticia</h1> 
        <form novalidate @submit.stop.prevent="submit">
            <md-input-container>
                <label>Titulo de la noticia</label>
                <md-input v-model="New.title"></md-input>
            </md-input-container>

            <md-input-container>
                <label>Subtítulo</label>
                <md-textarea v-model="New.subtitle"></md-textarea>
            </md-input-container>

            <md-input-container>
                <label>Cuerpo de la noticia</label>
                <md-textarea v-model="New.body"></md-textarea>
            </md-input-container>

            <div class="field-group">
                <div class="row">
                    <div class="six columns">
                        <md-input-container>
                            <label for="category">Categoria</label>
                            <md-select name="caletogia" id="categoria" v-model="catId">
                            <md-option v-for="c in Categories" :key="c.id" :value="c.id">{{ c.name }} </md-option>
                            </md-select>
                        </md-input-container>
                    </div>
                    <div class="six columns">
                        <md-input-container>
                            <label for="reporter">Reportero</label>
                            <md-select name="reportero" id="reportero" v-model="reporterId">
                            <md-option v-for="r in Reporters" :key="r.id" :value="r.id">{{ r.name }} </md-option>
                            </md-select>
                        </md-input-container>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="six columns">
                    <md-button :disabled="!formOk" class="md-raised md-primary" @click="addNew">Guardar
                        <md-icon>save</md-icon>
                    </md-button>
                </div>
                <div class="six columns">
                    <md-button class="md-raised md-accent" @click="clearForm">Limpiar
                        <md-icon>close</md-icon>
                    </md-button>                    
                </div>
            </div>    
        </form>
    </div>
    
</template>
<script>
    import categoriesService from '../services/categoriesServices'
    import reporterService from '../services/reporterService'
    import storageService from '../services/storageService'

    export default {
        components:{
        
        },
        data(){
            return {
                New: {
                    id:'',
                    title: '',
                    subtitle: '',
                    body: '',
                    category: {},
                    reporter: {},
                    date: ''
                },
                reporterId: '',
                catId: '',
                Reporters: [],
                Categories: [] 
            }
        },
        computed:{
            formOk(){
                return this.New.title && this.New.subtitle && this.New.body && this.reporterId;
            }
        },
        methods:{
            getDate(){
                const months = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
                let dt = new Date();
                return dt.getDate() + ' de ' + months[dt.getMonth()] + ' de ' + dt.getFullYear();
            },
            addNew(){
                this.New.id = storageService.getLastId();
                this.New.date = this.getDate();
                storageService.addNew(this.New);
                this.clearForm();
            },
            clearForm(){
                this.New.title = '';
                this.New.subtitle = '';
                this.New.body = '';
                this.New.category = {};
                this.New.reporter = {};
                this.New.date = '';
                this.catId = '';
                this.reporterId = '';
            }
        },
        watch: {
            catId(){
                this.New.category = categoriesService.getCatById(this.catId);
            },
            reporterId(){
                this.New.reporter = reporterService.getReporterById(this.reporterId);
            }
        },
        created() {
            this.Categories = categoriesService.getAllCat();
            this.Reporters = reporterService.getAllReporters();
        }
    }
</script>