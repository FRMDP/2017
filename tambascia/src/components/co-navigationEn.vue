<template>
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <a class="nav-link active" href="/#/"><img src="../../static/pageico.png" alt="Web Page icon"></a>
    </li>
    <li class="nav-item">
      <a class="nav-link active" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">Disabled</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categories</a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="/#/en/category/business">Business</a>
        <a class="dropdown-item" href="/#/en/category/entertainment">Entertainment</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'navigation',
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style>
</style>
