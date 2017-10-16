<template>
	<v-form v-model="valid">
    <v-text-field
    label="Title"
    v-model="news.title"
    :rules="titleRules"
    :counter="50"
    required
    ></v-text-field>

    <v-text-field
    label="Body"
    v-model="news.body"
    :rules="bodyRules"
    :counter="500"
    required
    ></v-text-field>

    <v-btn @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
</template>

<script>
import reportersService from '../services/reportersService';
import categoriesService from '../services/categoriesService';
		export default {
      name: 'addNew',

       data () {
      return {
        valid: false,
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