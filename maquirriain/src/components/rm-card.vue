<template>
  <div>

      <b-card  img-src="https://lorempixel.com/600/300/food/5/"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2" bg-variant="dark" text-variant="white" v-bind:title="aux.title" v-bind:sub-title="category">
        <p v-if='!isParticular' class="card-text truncateBody">
          {{aux.body}}
        </p>
        <p v-if="isParticular" class="card-text">
          {{aux.body}}
        </p>
           <router-link v-if="!this.isParticular" v-bind:to="'/'+category+'/'+aux.uid"><button type="submit" class="btn btn-primary">Go to news</button></router-link>
        <div slot="footer">
            <small class="text-muted">{{reporter}}</small>
          </br>
            <small v-if="this.isParticular" class="text-muted">{{aux.date}}</small>
        </div>
      </b-card>

  </div>
</template>
<script>
  export default{
    name: 'rmCard',
    props: ['aux','isParticular'],
    data(){
      return{
      reporter: '',
      category:''
      }
    },
    methods:{
      getReporterAndCategory(){

        this.$http.get(this.aux._links.reporter.href)
             .then((reporter) => {
             this.reporter = reporter.data.name;
           })
             .catch((error) => {
              console.log(error);
            }),
            this.$http.get(this.aux._links.category.href)
                 .then((category) => {
                 this.category = category.data.name;
               })
                 .catch((error) => {
                  console.log(error);
                })
      }
    },
    created(){
      this.getReporterAndCategory();

    },
			updated() {
            this.getReporterAndCategory();
			},
  }

</script>
<style>
</style>
