<template>
  <!-- Sidebar -->
  <div id="sidebar-wrapper" :class="{'show': this.show}">
    <ul class="sidebar-nav changeFont">
      <li class="sidebar-brand">
        <a href="/#/en/ppal/">
          Sources Avaiable
        </a>
      </li>
      <div v-show="loading" class="mx-auto loader"></div>
      <div class="col-md-12" v-if="sources === null || sources === undefined">
        <div class="alert alert-danger" role="alert">
          <h4 class="alert-heading">Do oh!</h4>
          <p>There was a problem while loading sources, please try later</p>
          <hr>
        </div>
      </div>
      <li v-else v-for="(actualSource, index) in (articlesSource[0] ? articlesSource[0].sources : [])" :key="index">
        <a @click.prevent="changeSource(actualSource.id)" href="/#/en/ppal/">{{ actualSource.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import articleService from '../services/articlesService';
  export default {
    name: 'sources',
    props: ['show'],
    data() {
      return {
        sources: {
          articlesSource: {},
          loading: false
        }
      }
    },
    methods: {
      changeSource(data) {
        this.$emit('changeSource', data);
      },
    },
    created(){
      this.loading = true;
      this.articlesSource = articleService.getAllSourcesEnglish();
      this.loading = false;
    }
  }
</script>


<style lang="scss">
  body {
    overflow-x: hidden;
  }
  .changeFont {
    font-family: 'Roboto', sans-serif;
  }

  #wrapper {
    padding-left: 0;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }

  #wrapper.toggled {
    padding-left: 250px;
  }

  #sidebar-wrapper {
    z-index: 1000;
    position: fixed;
    left: 0px;
    width: 250px !important;
    height: 100vh;
    margin-left: -250px;
    overflow-y: auto;
    background: #000;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
    &.show{
      left: 250px !important;
      -webkit-transition: all 0.5s ease;
      -moz-transition: all 0.5s ease;
      -o-transition: all 0.5s ease;
      transition: all 0.5s ease;
    }
  }

  #wrapper.toggled #sidebar-wrapper {
    width: 250px;
  }

  #page-content-wrapper {
    width: 100%;
    position: absolute;
    padding: 15px;
  }

  #wrapper.toggled #page-content-wrapper {
    position: absolute;
    margin-right: -250px;
  }


  /* Sidebar Styles */

  .sidebar-nav {
    position: absolute;
    top: 0;
    width: 250px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .sidebar-nav li {
    text-indent: 20px;
    line-height: 40px;
  }

  .sidebar-nav li a {
    display: block;
    text-decoration: none;
    color: #999999;
  }

  .sidebar-nav li a:hover {
    text-decoration: none;
    color: #fff;
    background: rgba(255, 255, 255, 0.2);
  }
  .sidebar-nav li.active a {
    text-decoration: none;
    color: #fff;
    background: rgba(255, 255, 255, 0.2);
  }

  .sidebar-nav li a:active, .sidebar-nav li a:focus {
    text-decoration: none;
  }

  .sidebar-nav>.sidebar-brand {
    height: 65px;
    font-size: 18px;
    line-height: 60px;
  }

  .sidebar-nav>.sidebar-brand a {
    color: #999999;
  }

  .sidebar-nav>.sidebar-brand a:hover {
    color: #fff;
    background: none;
  }

  @media(min-width:768px) {
    #wrapper {
      padding-left: 0;
    }
    #sidebar-wrapper {
      width: 0;
      margin-top: -15px;
    }
    #wrapper.toggled #sidebar-wrapper {
      width: 250px;
    }
    #page-content-wrapper {
      padding: 20px;
      position: relative;
    }
    #wrapper.toggled #page-content-wrapper {
      position: relative;
      margin-right: 0;
    }
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
      0% { -webkit-transform: rotate(0deg); }
      100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  }
</style>
