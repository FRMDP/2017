<template>
    <div class="paddAdd">
        <zp-alert v-if="alert" @hideAlert="hideAlert" :messageAlert='messageAlert' :classAlert='classAlert'></zp-alert>
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
                            <md-option v-for="c in Categories" :key="c.uid" :value="c.uid">{{ c.name }} </md-option>
                            </md-select>
                        </md-input-container>
                    </div>
                    <div class="six columns">
                        <md-input-container>
                            <label for="reporter">Reportero</label>
                            <md-select name="reportero" id="reportero" v-model="reporterId">
                            <md-option v-for="r in Reporters" :key="r.uid" :value="r.uid">{{ r.name }} </md-option>
                            </md-select>
                        </md-input-container>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="six columns">
                    <!--<md-button :disabled="!formOk" class="md-raised md-primary" @click="addNew">Guardar -->
                        <md-button class="md-raised md-primary" @click="addNew">Guardar
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
    import zpAlert from '../components/zp-alert.vue'

    export default {
        components:{
            zpAlert
        },
        data(){
            return {
                New: {
                    id: '',
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
                Categories: {},
                alert: false,
                messageAlert: 'Noticia agregada con éxito',
                classAlert: 'alert-success' 
            }
        },
        computed:{
            /*formOk(){
                return this.New.title && this.New.subtitle && this.New.body && this.reporterId;
            }*/
        },
        methods:{
            getDate(){
                const months = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
                let dt = new Date();
                return dt.getDate() + ' de ' + months[dt.getMonth()] + ' de ' + dt.getFullYear();
            },
            showAlert(){
                this.alert = true;
                setTimeout( () => this.hideAlert(),4000);

            },
            hideAlert(){
                this.alert = false;
            },
            addNew(){
                console.log(this.catId);
                /*this.New.id = storageService.getLastId();
                this.New.date = this.getDate();
                storageService.addNew(this.New);
                this.clearForm();
                this.showAlert();*/
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
            },
            getAllCat(){
                this.$http.get('http://192.168.99.100:8080/categories')
                .then((response) => {
                    this.Categories =  response.data._embedded.categories;
                   
                    /*const idCatAux = response.data._embedded.categories[0]._links.category.href
                    console.log('link cat', idCatAux);
                    console.log('length string', idCatAux[idCatAux.length -1]);//muestra id categoria*/
                })
                .catch((msg) => console.log('Error: ', msg));
            },
            getAllReporters(){
                this.$http.get('http://192.168.99.100:8080/reporters')
                .then((response) => {
                    this.Reporters = response.data._embedded.reporters;
                })
                .catch((msg) => console.log('Error', msg));
            },
            getCatById(){
                id = 0;
                i = 0;
                Categories.forEach( c => {
                    if(c.uid == this.catId){
                        id = i;
                    }
                    i++;
                });
                return id;
            }
        },
        watch: {
            catId(){
                //this.New.category = categoriesService.getCatById(this.catId);
            },
            reporterId(){
                //this.New.reporter = reporterService.getReporterById(this.reporterId);
            }
        },
        created() {
            this.getAllCat();
            this.getAllReporters();
        }
    }
</script>