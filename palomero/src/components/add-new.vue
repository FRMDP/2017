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
            <input type="number" v-model="news.date" placeholder="Date">
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
      <div class="row" align="center">
        <button class="btn waves-effect waves-light" type="submit">Add </button>
      </div>
    </form>
  </div> 
</div>
</div>

</template>

<script>
import reportersService from '../services/reportersService';
import categoriesService from '../services/categoriesService';
		export default {
      name: 'addNew',

       data () {
      return {
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
        reporters:[]
      }
    },

    computed:{
      formOk() {
      return this.persona.nombre && this.persona.apellido && this.persona.edad && this.persona.telefono && this.persona.sexo;
    }
    },

    methods: {
      submit () {

      },
      clear () {
      },
      getCategorias(){
        return categoriesService.getCategories();
      },
      getReporters(){
        return reportersService.getReporters();
      }
    },

    mounted(){
      this.categories=this.getCategorias();
      this.reporters=this.getReporters();
    }
}
</script>
<style>

</style>