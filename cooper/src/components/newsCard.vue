<template>
<div class="row">
  <div class="col l9">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <router-link class="card-title" v-bind:to="'/singleNews/'+newsForCard.id"> <h3>{{ newsForCard.title }}</h3></router-link>
        <p class="truncate"> {{ newsForCard.body }} </p>
        {{ newsForCard.category.name }}
      </div>
    </div>
  </div>
</div>
 </template>
 
 <script>
   export default{
     name: 'newsCard',
     props: ['newsForCard']
   }
 
 </script>
 <style>
 </style>