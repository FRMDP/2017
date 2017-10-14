<template>
  <div>
      <div class='row justify-content-center'>
        <div class='col-md-4 center'>
            <label class="sizeSubTitle"><strong>Add a new news</strong></label>
            <br/>
            <label>Title</label>
            <input class="form-control"  type="text" placeholder="Put the title" v-model="news.title">
            <label>Date</label>
            <input class="form-control" type="date" placeholder="Put the date"v-model="news.date">
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Body</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Put the body of the news"rows="3" v-model="news.body"></textarea>
            </div>
              <label>Categories</label>
            </br>
            <div v-for="category in categories">
              <label class="custom-control custom-radio">
                <input v-bind:value="category.name" class="custom-control-input" id="radio1" name="radio" type="radio" v-model="news.category.name">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">{{category.name}}</span>
              </label>
            </div>
            </br>
            <label>Reporters</label>
            </br>
            <select class="custom-select" v-model="news.reporter.name">
              <option v-for="reporter in reporters" v-bind:value="reporter.name" >{{reporter.name}}</option>
            </select>
            </br>
            <router-link to="/"><button :disabled="!formOk" type="submit" class="btn btn-primary" @click="saveNews">Submit</button></router-link>

        </div>
      </div>
  </div>
</template>
<script>
    export default{
      name: 'rmAddNews',
      data(){
        return{
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
              date: ''
            },
            categories: [],
            reporters: [],
            allNews: []
          }
        },
        computed: {
          formOk(){
            return this.news.title && this.news.body && this.news.category.name && this.news.reporter.name && this.news.date;
          }
        },
        methods:{
          saveNews(){
            this.news.category.id = this.categories.find(c => c.name == this.news.category.name).id;
            this.news.reporter.id = this.reporters.find(c => c.name == this.news.reporter.name).id;
            this.allNews =   this.$newsService.allNews();
            this.news.id = this.allNews.length+1;
            this.$newsService.saveNews(this.news);
          }
        },
        mounted(){
          this.categories = this.$categoriesService.allCategories();
          this.reporters = this.$reportersService.allReporters();
        }
    }

</script>
<style>

</style>
