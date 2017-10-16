<template>
    <md-layout>
    <form>
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
            <md-select v-model="New.category.id">
                <md-option v-for="category in Categories" v-bind:value="category.id" >{{category.name}}</md-option>
            </md-select>
        </md-input-container>
        <md-input-container>
            <label>Reportero</label>
            <md-select v-model="New.reporter.id">
                <md-option v-for="reporter in Reporters" v-bind:value="reporter.id">{{reporter.name}}</md-option>
            </md-select>
        </md-input-container>
        <md-button class="md-raised md-primary" :disabled="!formOk" type="submit" @click="setNew">Guardar Noticia</md-button>
    </form>
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
                    id: '',
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
            }
        },
        computed:{
            formOk(){
                return this.New.title && this.New.body && this.New.category.id && this.New.reporter.id;
            }
        },
        methods:{
            setNew(){
                this.New.date= new Date().toJSON().slice(0,10);
                this.New.category= this.Categories.find(cat => cat.id== this.New.category.id);
                this.New.reporter= this.Reporters.find(rep => rep.id== this.New.reporter.id);
                this.News= this.$NewService.getNews();
                console.log(this.New);
                if (this.News.length>0) this.New.id = this.News[(this.News.length - 1)].id + 1; else this.New.id = 1;
                this.$NewService.saveNew(this.New)

            },
            cleanForm(){
                this.New.id='';
                this.New.title='';
                this.New.body='';
                this.New.category.id='';
                this.New.category.name='';
                this.New.reporter.id='';
                this.New.reporter.name='';
                this.New.date='';
            }
        },
        mounted(){
            this.Categories= this.$CategoryService.getCategories();
            this.Reporters= this.$ReporterService.getReporters();
        }
    }
</script>

<style>
</style>