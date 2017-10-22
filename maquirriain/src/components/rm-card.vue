<template>
  <div>
    <b-row class="justify-content-md-center">
      <b-col></b-col>
      <b-col cols="8">
      <b-card  img-src="https://lorempixel.com/600/300/food/5/"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2" bg-variant="dark" text-variant="white" v-bind:title="aux.title" v-bind:sub-title="aux.category.name">
        <p v-if='!isParticular' class="card-text truncateBody">
          {{aux.body}}
        </p>
        <p v-if="isParticular" class="card-text">
          {{aux.body}}
        </p>
           <router-link v-if="!this.isParticular" v-bind:to="'/'+aux.category.name+'/'+aux.id"><button type="submit" class="btn btn-primary">Go to news</button></router-link>
        <div slot="footer">
            <small class="text-muted">{{aux.reporter.name}}</small>
          </br>
            <small v-if="this.isParticular" class="text-muted">{{aux.date}}</small>
        </div>
      </b-card>
    </b-col>
    <b-col></b-col>
  </b-row>
  </div>
</template>
<script>
  export default{
    name: 'rmCard',
    props: ['aux','isParticular']
  }

</script>
<style>
</style>
