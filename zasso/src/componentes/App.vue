<template>
    <div class="app">
      <div class="navbar-item-principal">
        <div class="field is-grouped">
          <p class="control">
            <router-link class="button-principal" to="/news" >NEWS</router-link>
          </p>
          <p class="control">
            <router-link class="button-principal" to="/addnew">REDACCIÓN</router-link>
          </p>
        </div>
      </div>
      <router-view></router-view>
  </div>
</template>
<script>
    export default {

    }
</script>

<style>

</style>
