<template>
  <div>
    <div class="row justify-content-md-center topFixFixed">
      <div class="col-mx-auto">
        <div class="input-group">
          <input type="text" class="form-control" v-model="filterSearch" placeholder="Search for..."
                 aria-label="Search for...">
          <span class="input-group-btn">
        <button :disabled="checkFilterSearch(this.filterSearch)" @click="sendSearch()" class="btn btn-secondary"
                type="button">Go!</button>
      </span>
        </div>
      </div>
    </div>
      <div class="row justify-content-md-center">
        <div class="col-md-12" v-if="articles === null || articles === undefined">
          <div class="alert alert-danger" role="alert">
            <h4 class="alert-heading">Do oh!</h4>
            <p>There are no results to your search :(</p>
            <hr>
            <p>Try something different!</p>
          </div>
        </div>
        <div v-else="" v-for="actualArticle in (articles ? articles[0].articles : [])">
          <div class="col-md-4">
            <p>hola</p>
            <!--<div class="card">
              <img class="card-img-top" v-if=(!dataIsNull(actualArticle.urlToImage)) :src="actualArticle.urlToImage"
                   alt="Image of the article">
              <div class="card-header" v-if=(!dataIsNull(actualArticle.title))>
                <h5 class="changeFont">{{actualArticle.title.substring(0, 30)}}</h5>
              </div>
              <div class="card-body">
                <p class="card-text changeFont" v-if=(!dataIsNull(actualArticle.description))>
                  {{actualArticle.description.substring(0, 200)}}</p>
                <p class="card-text" v-if="(validateDate(actualArticle.publishedAt))!= null ">
                  <small class="text-muted">Published at: {{validateDate(actualArticle.publishedAt)}}</small>
                </p>
              </div>
              <div class="card-footer">
                <a :href="actualArticle.url" class="btn btn-outline-primary buttonRight" role="button">Show More</a>
                <a v-if=(!dataIsNull(actualArticle.author)) :href="actualArticle.author"
                   class="btn btn-outline-info buttonLeft" role="button">Author</a>
              </div>
            </div>-->
          </div>
        </div>
      </div>
    </div>


</template>

<script>
  import articleService from '../services/articlesService';

  export default {
    name: 'search',
    data() {
      return {
        filterSearch: '',
        articles: {}
      }
    },
    methods: {
      sendSearch() {
        this.articles = articleService.searchInTheAPI(this.filterSearch);
      },
      checkFilterSearch() {
        let isFull = false;
        if (this.filterSearch.length === 0) {
          isFull = true;
        }
        return isFull;
      },
      dataIsNull(data){
        let itIs = false;
        if(data=== null || data === undefined){
          itIs = true;
        }
        return itIs;
      },
      validateDate(badDate) {
        let newDate = null;
        if(badDate!= null  || badDate!= undefined){
          let idx = badDate.indexOf("T");
          let idxZ = badDate.indexOf("Z");
          let replacement = "-";
          let replacementZ = " ";
          newDate = badDate.substr(0, idx) + replacement + badDate.substr(idx + replacement.length);
          newDate = newDate.substr(0, idxZ) + replacementZ + badDate.substr(idxZ + replacementZ.length);
        }
        return newDate;
      }
    },
    created() {
      this.articles = articleService.searchInTheAPI()
      console.log(this)
    }
  }
</script>

<style>
  .topFixFixed {
    margin-top: 68px;
  }
</style>
