<template>
	<b-card class="text-center">
    <h1>Heros Durations</h1>
      <h3 v-if="loading">LOADING PAGE</h3>
      <div v-else>  
        <transition name="bounce">
  	     <b-table dark :items="durations"></b-table>
        </transition>
      </div>
  </b-card>
</template>

<script>
	import heroeService from '../services/heroeService';
    export default {
     data() {
      return {   			
   	    durations:[],
        loading:false
    }
  }, 

  computed:{
    params() {
      return this.$route.params;
    },
    id() {
      return this.$route.params.id;
    }

  },

  watch: {
   '$route.params.id': function() {
     this.id = this.$route.params.id;
     this.getDurations(this.id);
   }
  },	

  created() {
   this.getDurations(this.id);
  },

  methods: {

    getDurations(){
      this.loading=true;
      heroeService.getDurationHeroeById(this.id)
      .then((response) => {
                      this.durations = response.data;
                      this.loading=false;
                  })
                  .catch((error) => {
                      this.durations=null;
                      this.loading=false;
                  })
                }
    },
  }
</script>
<style>
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>