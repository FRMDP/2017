<template>
    <div class="row">
        <div class="mx-auto">
            <h2>Agregar una noticia nueva</h2>
            <form>
                <div class="form-group maginOfForms">
                    <input v-model="newToAdd.title" type="text" class="form-control" placeholder="Titulo">
                </div>
                <div class="form-group">
                    <input v-model="newToAdd.body" type="text" class="form-control" placeholder="Descripcion">
                </div>
                <div class="form-group">
                    <select class="form-control" v-model="newToAdd.reporter.id">
                        <option v-for="reporter in reporters" :value="reporter.id"
                                :key="reporter.id"> {{ reporter.name }}</option>
                    </select>
                </div>
                <div class="form-group">
                    <select class="form-control" v-model="newToAdd.category.id">
                        <option v-for="category in categories" :value="category.id"
                                :key="category.id"> {{ category.name }}</option>
                    </select>
                </div>
                <button :disabled="!formOk" type="submit" @click.prevent="saveNew"
                        class="btn btn-success marginOfCards">Ingresar
                </button>
            </form>
        </div>
    </div>
</template>

<script>
    import categoriesService from '../services/categoriesService';
    import reportersService from '../services/reportersService';
    import newsService from '../services/newsService';

    export default {
        name: 'addNew',
        data() {
            return {
                newToAdd: {
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
                },
                reporters: [],
                categories: []
            }
        },
        computed:{
            formOk(){
                return this.newToAdd.title && this.newToAdd.body && this.newToAdd.category.id && this.newToAdd.reporter.id;
            }

        },
        methods:{
            saveNew(){
                newsService.addNew(this.newToAdd);
                this.cleanForm();
            },
            cleanForm(){

                this.newToAdd.title = '';
                this.newToAdd.body = '';
                this.newToAdd.category  = '';
                this.newToAdd.reporter = '';
            }

        },
        created() {
            this.categories = categoriesService.getAllCategories();
            this.reporters = reportersService.getAllReporters();
        }
    }

</script>

<style>
    h2{
        margin-top: 10px;
    }
    .marginOfCards{
        margin-top: 10px;
    }
</style>