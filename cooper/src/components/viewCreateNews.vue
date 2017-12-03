<template>
	<div class="container">
    <div class="ac-custom ac-radio ac-circle negrita card blue-grey darken-1">
        <form class="card-content" autocomplete="off">
            <h2>Create news</h2>
            <input v-model="news.title" type="text" placeholder="Insert title">
            <input v-model="news.body" type="text" placeholder="Insert body">
            <div class="row">
              <div class="col s4">
                <select v-model="news.category" class="browser-default">
                  <option value="" disabled selected>Select category</option>
                  <option v-for="category in categories"> {{ category.name }} </option>
                </select>
              </div>
              <div class="col s4">
                <select v-model="news.reporter" class="browser-default">
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

    export default {
    	name: 'viewCreateNews',
      props: [],
      data(){ 
        return {
          news: {
            id: '',
            title: '',
            body: '',
            category: '',
            reporter: '',
            date: ''
          },
          message: false,
          categories: [],
          reporters: []
        }
      },
      mounted() {
        this.getAllCategories();
        this.getAllReporters();
      },
      created() {
        this.getAllCategories();
        this.getAllReporters();
      },
      computed:{
        formOk() {
          return this.news.title && this.news.body && this.news.category && this.news.reporter;
        }
      },
      methods:{
        getAllCategories(){
                this.$http.get('http://localhost:8080/categories')
                .then((response) => {
                    this.categories = response.data._embedded.categories
                })
                .catch((msg) => console.log('Error: ', msg));
        },
        getAllReporters(){
          this.$http.get('http://localhost:8080/reporters')
                .then((response) => {
                    this.reporters =  response.data._embedded.reporters
                })
                .catch((msg) => console.log('Error: ', msg));
        },
        createNews(){
            this.$http.post('http://localhost:8080/news',{
               "title" : this.news.title,
               "body" : this.news.body,
               "date" : new Date().toJSON().slice(0,10),
               "reporter" : this.reporters.find(c => c.name == this.news.reporter)._links.self.href,
               "category" : this.categories.find(c => c.name == this.news.category)._links.self.href,
            }).then((response) => {
              console.log(response.status)
            })
            .catch((error) => {
             console.log(error);
           })
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
        }
      }
    }
</script>

<style>

</style>
