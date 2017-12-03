<template>
<div class="row">
  <div class="col l9">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <router-link class="card-title" v-bind:to="'/singleNews/'+id"> <h3>{{ newsForCard.title }}</h3></router-link>
        <p class="truncate"> {{ newsForCard.body }} </p>
        {{ cat.name }}
      </div>
    </div>
  </div>
</div>
 </template>
 
 <script>
   export default{
     name: 'newsCard',
     props: ['newsForCard'],
     data(){
            return {
                cat: {},
                id: '',
            }
        },
        methods: {
            getIdNew(link){
                const arrSplit = link.split("/");
                this.id = arrSplit[arrSplit.length - 1];
            },
            getCatNew(){
                this.$http.get(this.newsForCard._links.category.href)
                    .then((response) => {
                        this.cat = response.data;
                        const link = this.newsForCard._links.self.href;
                        this.getIdNew(link);
                    })
                    .catch((msg) => console.log('Error: ', msg));
            },
            
        },
        created(){
            this.getCatNew();
        }
   }
 
 </script>
 <style>
 </style>