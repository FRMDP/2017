<template>
	<div class="container">
    <div class="ac-custom ac-radio ac-circle negrita card blue-grey darken-1">
        <form class="card-content" autocomplete="off">
            <h2>Create news</h2>
            <input v-model="news.title" type="text" placeholder="Insert title">
            <input v-model="news.body" type="text" placeholder="Insert body">
            <div class="row">
              <div class="col s4">
                <select v-model="news.category.name" class="browser-default">
                  <option value="" disabled selected>Select category</option>
                  <option v-for="category in categories"> {{ category.name }} </option>
                </select>
              </div>
              <div class="col s4">
                <select v-model="news.reporter.name" class="browser-default">
                  <option value="" disabled selected>Select reporter</option>
                  <option v-for="reporter in reporters"> {{ reporter.name }} </option>
                </select>
              </div>
              <div class="col s4">
              <button :disabled="!formOk" class="btn waves-effect waves-light right" type="submit" name="action" @click.prevent="createNews">Aceptar</button>
              </div>
            </div>
        </form>
    </div> 
    <br>
    <div v-if="message" class="todo_bien_box">
      News succesfully created
    </div>
  </div>
</template>

<script>
  import $serviceCategory from '../services/serviceCategory';
  import $serviceNews from '../services/serviceNews';
  import $serviceReporter from '../services/serviceReporter';


    export default {
    	name: 'viewCreateNews',
      props: [],
      data(){ 
        return {
          news: {
            id: '',
            title: '',
            body: '',
            category: {
              name: '',
              id: ''
            },
            reporter: {
              name: '',
              id: ''
            },
            date: ''
          },
          message: false,
          categories: [],
          reporters: []
        }
      },
      mounted() {
        this.categories = $serviceCategory.getAllCategories();
        this.reporters = $serviceReporter.getAllReporters();
      },
      created() {
        this.categories = $serviceCategory.getAllCategories();
        this.reporters = $serviceReporter.getAllReporters();
      },
      computed:{
        formOk() {
          return this.news.title && this.news.body && this.news.category.name && this.news.reporter.name;
        }
      },
      methods:{
        getAllCategories(){
          return serviceCategory.getAllCategories();
        },
        getAllReporters(){
          return serviceReporter.getAllReporters();
        },
        createNews(){
          this.news.date = Date();
          this.news.category.id = this.getCategoryID(this.news.category.name);
          $serviceNews.addNews(this.news);
          //this.cleanForm();
          this.message = true;
          setTimeout(this.message_false, 4000);
        },
        cleanForm() {
          this.news.title = '';
          this.news.body = '';
          this.news.category = null;
          this.news.reporter = null;
          this.news.id = '';
          this.news.date = '';
        },
        message_false() { 
          this.message = false; 
        },
        getCategoryID(cat_name){ //obtener id de categoria por nombre
          for(let i = 0; this.categories.length > i; i++){
            if(this.categories[i].name == cat_name){
              return this.categories[i].id;
            }
          }
        }
      }
    }
</script>

<style>

</style>
