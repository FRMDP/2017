<template>
  <div class="card">
    <div class="card-content">
      <div class="row">
        <h3 align="center">Add News</h3>
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
             <input v-model="news.title" type="text" placeholder="Title">
           </div>
           <div class="input-field col s6">
             <input v-model="news.body" type="text" placeholder="Body">
           </div>
         </div>
        <div class="row">
         <div class="input-field col s12">
          <form action="#">
            <div v-for="category in categories">
              <input name="group1" type="radio" id="test1" />
            </div>
          </form>
        </div>
      </div>
      <form action="#">
        <div class="row">
          <div class="input-field col s6">
            <h4>Select the reporter</h4>
            <div v-for="reporter in reporters">
              <p>
                <input name="group2" type="radio" id="test2" v-bind:value="reporter.name" v-model="news.reporter.name"/>
                <label for="test2">{{ reporter.name }}</label>
              </p>
            </div>
          </div>
          <div class="input-field col s6">
            <h4>Select the category</h4>
            <div v-for="category in categories">
              <p>
                <input name="group1" type="radio" id="test1" v-bind:value="category.name" v-model="news.category.name"/>
                <label for="test1">{{ category.name }}</label>
              </p>
            </div>
          </div>
        </div>
      </form>
      <div class="row" align="left">
        <button :disabled="!formOk" @click="submit" class="btn waves-effect waves-light" type="submit">Add </button>
        <h3 v-if="mensaje==true">Succesfully added</h3>
      </div>
    </form>
  </div> 
</div>
</div>

</template>

<script>
import reportersService from '../services/reportersService';
import categoriesService from '../services/categoriesService';
import storageService from '../services/storageService';
		export default {
      name: 'addNew',

       data () {
      return {
        mensaje: false,
        news: {
          id: 0,
          title: '',
          body: '',
          category: {
            id: 0,
            name: ''
          },
          reporter: {
            id: 0,
            name: ''
          },
          date: 0
        },

        titleRules: [
          (v) => !!v || 'Title is required',
          (v) => v.length <= 50 || 'Title must be less than 50 characters'
        ],

        bodyRules: [
          (v) => !!v || 'body is required',
          (v) => v.length <= 500 || 'Body must be less than 500 characters'
        ],

        categories:[],
        reporters:[],
        noticias:[]
      }
    },

    computed:{
      formOk() {
      return this.news.title && this.news.body && this.news.category.name && this.news.reporter.name;
    }
    },

    methods: {
      submit () {
        this.news.category.id=this.categories.find(category => category.name == this.news.category.name).id;
        this.news.reporter.id=this.reporters.find(reporter =>reporter.name==this.news.reporter.name).id;
        this.addNews(this.news);

      },
      clear () {
        this.news.title='';
        this.news.body='';
        this.news.category.name='';
        this.news.reporter.name='';
      },
      getNoticias(){
        storageService.traerNoticias()
        .then((response) => {
        this.noticias = response.data._embedded.news;
      });
      },
      getCategorias(){
        categoriesService.getCategories()
        .then((response) => {
        this.categories = response.data._embedded.categories;
      });
      },
      getReporters(){
        reportersService.getReporters()
        .then((response) => {
        this.reporters = response.data._embedded.reporters;
      });
      },
      getLastId(){
        return storageService.getUltimoId();
      },
      addNews(news){
        storageService.agregarNoticia(news)
        .then((response) =>{
          this.mensaje=true;
          this.clear();
        }
        );
      }    
    },

    mounted(){
      this.getReporters();
      this.getCategorias();
    }
}
</script>
<style>

</style>