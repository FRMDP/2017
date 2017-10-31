<template>
    <md-layout md-gutter>
        <md-layout md-flex="60" md-flex-offset="20">
                <md-input-container>
                    <label>Titulo</label>
                    <md-input v-model="New.title" maxlength="50"></md-input>
                </md-input-container>
                <md-input-container>
                    <label>Cuerpo</label>
                    <md-input v-model="New.body" maxlength="200"></md-input>
                </md-input-container>
                <md-input-container>
                    <label>Categoria</label>
                    <md-select v-model="New.category.name">
                        <md-option v-for="category in Categories" :key="category.uid" v-bind:value="category.name" >{{category.name}}</md-option>
                    </md-select>
                </md-input-container>
                <md-input-container>
                    <label>Reportero</label>
                    <md-select v-model="New.reporter.name">
                        <md-option v-for="reporter in Reporters" :key="reporter.uid" v-bind:value="reporter.name">{{reporter.name}}</md-option>
                    </md-select>
                </md-input-container>
                <md-button class="md-raised md-primary" :disabled="!formOk" type="submit" @click="httpPostNews">Guardar Noticia</md-button>
        </md-layout>
        <md-layout v-if="loading" md-flex="60" md-flex-offset="20">
            <md-progress md-indeterminate></md-progress>
            <br>
            <md-progress md-indeterminate></md-progress>
            <br>
            <md-progress md-indeterminate></md-progress>
        </md-layout>
    </md-layout>
</template>

<script>

    export default{
        name: 'addNews',
        data(){
            return{
                Categories:[],
                Reporters:[],
                News:[],
                New: {
                    title: '',
                    body: '',
                    category: {
                        id: '',
                        name: ''
                    },
                    reporter: {
                        id: '',
                        name: ''
                    },
                    date: ''
                },
                loading:false,
            }
        },
        computed:{
            formOk(){
                return this.New.title && this.New.body && this.New.category.name && this.New.reporter.name;
            }
        },
        methods:{
            cleanForm(){
                this.New.title='';
                this.New.body='';
                this.New.category.id= '';
                this.New.category.name='';
                this.New.reporter.name='';
                this.New.reporter.id='';
                this.New.date='';

            },
            httpGetCategories(){
                this.$http('http://localhost:8080/categories').then((response)=>this.Categories=response.data._embedded.categories)
                    .catch((error)=>console.log("categories"+error))
            },
            httpGetReporters(){
                this.$http('http://localhost:8080/reporters').then((response)=>this.Reporters=response.data._embedded.reporters)
                    .catch((error)=>console.log("reporters"+error))
            },
            httpPostNews(){
                this.loading=true;
                this.$http.post('http://localhost:8080/news',{
                    "title": this.New.title,
                    "body": this.New.body,
                    "category": this.Categories.find(cat => cat.name == this.New.category.name)._links.self.href,
                    "reporter": this.Reporters.find(rep => rep.name == this.New.reporter.name)._links.self.href,
                    "date": new Date().toJSON().slice(0, 10)
                })
                    .then((response) => {
                        this.cleanForm();
                        this.httpGetCategories();
                        this.httpGetReporters();
                        this.loading=false;
                    })
                    .catch((error) => {
                        this.loading=false;
                        console.log(error);
                    })
            }
        },
        mounted(){
            this.httpGetCategories();
            this.httpGetReporters();
        }
    }
</script>

<style>
</style>