<template>
  <div class="container topFixFixed changeFont">
    <div class="row justify-content-md-center">
      <div class="col-sm-12 col-md-3">
        <div class="card my-4">
          <h5 class="card-header">Search</h5>
          <div class="card-body">
            <div class="input-group">
              <input type="text" class="form-control" @keyup.enter="sendSearch()" v-model="filterSearch"
                     placeholder="Search for..."
                     aria-label="Search for...">
              <span class="input-group-btn">
        <button :disabled="checkFilterSearch(this.filterSearch)" @click="sendSearch()" class="btn btn-secondary"
                type="button">Go!</button>
              </span>
            </div>
          </div>
        </div>
        <div class="card my-4">
          <h5 class="card-header">Filter by Date</h5>
          <div class="card-body">
            <flat-pickr v-model="dateFrom" :config="config" placeholder="Select a date From"></flat-pickr>
          </div>
          <div class="card-body">
            <flat-pickr v-model="dateTo" :config="config" placeholder="Select a date To"></flat-pickr>
          </div>
          <button
            :disabled="checkFilterSearch(this.filterSearch) && checkFilterSearch(this.dateFrom) && checkFilterSearch(this.dateTo)"
            @click="sendSearchAndFilter()" class="btn btn-secondary"
            type="button">Go!
          </button>
        </div>
      </div>
      <div class="col-md-9">
        <div class="justify-content-md-center customLeftMargin row container-card">
          <div class="loader" v-show="loading"></div>
          <div class="col-mx-auto marginOfAdvise" v-if="Object.keys(articles).length === 0">
            <div class="alert alert-danger" role="alert" v-if="!loading">
              <h4 class="alert-heading">Do oh!</h4>
              <p>There are no results to your search</p>
              <hr>
              <p>Try something different!</p>
            </div>
          </div>
          <div v-else v-for="actualArticle in (articles ? articles[0].articles : [])" class="col">
            <div class="card">
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
                <a :href="actualArticle.url" class="btn btn-outline-primary buttonRight centerButton" role="button">Show More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>
<style>
  body {
    overflow: hidden;
  }
</style>
<script>
  import articleService from '../services/articlesService';
  import flatPickr from 'vue-flatpickr-component';
  import '../../node_modules/flatpickr/dist/flatpickr.css';

  export default {
    name: 'search',
    data() {
      return {
        filterSearch: '',
        articles: {},
        loading: false,
        dateFrom: null,
        dateTo: null,
        config: {
          altFormat: "F j, Y",
          altInput: true,
          maxDate:"today"
        }
      }
    },
    components: {
      flatPickr
    },
    methods: {
      sendSearch() {
        this.loading = true;
        this.articles = articleService.searchInTheAPI(this.filterSearch);
        this.loading = false;
      },
      sendSearchAndFilter() {
        this.loading = true;
        this.articles = articleService.searchInTheAPIByDate(this.filterSearch, this.dateFrom, this.dateTo);
        this.loading = false;
      },
      checkFilterSearch() {
        let isFull = false;
        if (this.filterSearch.length === 0) {
          isFull = true;
        }
        return isFull;
      },
      dataIsNull(data) {
        let itIs = false;
        if (data === null || data === undefined) {
          itIs = true;
        }
        return itIs;
      },
      validateDate(badDate) {
        let newDate = null;
        if (badDate) {
          let idx = badDate.indexOf("T");
          let idxZ = badDate.indexOf("Z");
          let replacement = "-";
          let replacementZ = " ";
          newDate = badDate.substr(0, idx) + replacement + badDate.substr(idx + replacement.length);
          newDate = newDate.substr(0, idxZ) + replacementZ + badDate.substr(idxZ + replacementZ.length);
        }
        return newDate;
      }
    }
  }
</script>

<style>

  .loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .topFixFixed {
    margin-top: 68px;
  }

  .marginOfAdvise {
    margin-top: 25px;
  }

  .centerButton {
    margin-left: 109px;
  }

  .card {
    width: 20rem;
    margin: 10px;
  }

  .changeFont {
    font-family: 'Roboto', sans-serif;
  }

  .customLeftMargin {
    margin-left: 72px;
  }

  .container-card {
    max-height: 88vh;
    overflow: auto;
  }

  .container-card::-webkit-scrollbar {
    width: 12px;
    background-color: #F5F5F5;
  }

  .container-card::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: #555;
  }

  .container-card::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }
</style>
