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
                <label>Cuerpo de la noticia</label>
                <md-textarea v-model="New.body"></md-textarea>
            </md-input-container>

            <div class="field-group">
                <div class="row">
                    <div class="six columns">
                        <md-input-container>
                            <label for="category">Categoria</label>
                            <md-select name="caletogia" id="categoria" v-model="catId">
                            <md-option v-for="c in Categories" :key="c.uid" :value="c._links.self.href[c._links.self.href.length -1]">{{ c.name }} </md-option>
                            </md-select>
                        </md-input-container>
                    </div>
                    <div class="six columns">
                        <md-input-container>
                            <label for="reporter">Reportero</label>
                            <md-select name="reportero" id="reportero" v-model="reporterId">
                            <md-option v-for="r in Reporters" :key="r.uid" :value="r._links.self.href[r._links.self.href.length -1]">{{ r.name }} </md-option>
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
    import zpAlert from '../components/zp-alert.vue'

    export default {
        components:{
            zpAlert
        },
        data(){
            return {
                New: {
                    title: '',
                    body: '',
                    reporter: '',
                    category: '',
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
            formOk(){
                return this.New.title &&  this.New.body && this.reporterId && this.catId;
            }
        },
        methods:{
            getDate(){
                const months = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
                let dt = new Date();
                //return dt.getDate() + ' de ' + months[dt.getMonth()] + ' de ' + dt.getFullYear();
                return dt.getFullYear() + '-' + (dt.getMonth() +1) + '-' + dt.getDate();
            },
            showAlert(){
                this.alert = true;
                setTimeout( () => this.hideAlert(),4000);

            },
            hideAlert(){
                this.alert = false;
            },
            addNew(){
                this.New.date = this.getDate();
                this.New.category = 'http://192.168.99.100:8080/categories/' + this.catId;
                this.New.reporter = 'http://192.168.99.100:8080/reporters/' + this.reporterId;
                this.$http.post('http://192.168.99.100:8080/news', {
                    title: this.New.title,
                    body: this.New.body,
                    date: this.New.date,
                    reporter: this.New.reporter,
                    category: this.New.category
                })
                    .then(response => {
                        this.clearForm();
                        this.showAlert();
                    })
                    .catch(msg => console.log('Error: ', msg));
            },
            clearForm(){
                this.New.title = '';
                this.New.body = '';
                this.New.date = '';
                this.catId = '';
                this.reporterId = '';
                this.reporter = '';
                this.category = '';
            },
            getAllCat(){
                this.$http.get('http://192.168.99.100:8080/categories')
                .then((response) => {
                    this.Categories =  response.data._embedded.categories;
                })
                .catch((msg) => console.log('Error: ', msg));
            },
            getAllReporters(){
                this.$http.get('http://192.168.99.100:8080/reporters')
                .then((response) => {
                    this.Reporters = response.data._embedded.reporters;
                })
                .catch((msg) => console.log('Error', msg));
            }
        },
        created() {
            this.getAllCat();
            this.getAllReporters();
        }
    }
</script>