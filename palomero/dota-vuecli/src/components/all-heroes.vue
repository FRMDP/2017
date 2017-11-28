<template>
	<div>
    <b-card class="text-center">
      <h1>List of Heros</h1>
      <b-card title="Search" bg-variant="dark" text-variant="white">
      <b-form-input v-model="heroFilter"
                  type="text"
                  placeholder="Type here"></b-form-input>
                  <br>
      </b-card>
      <h3 v-if="loading">LOADING PAGE</h3>
      <h3 v-if="heroes.lenght<1">Nothing here</h3>
      <div v-else>
        <transition-group name="bounce">
          <b-card v-for="h in heroesFilter" :key="h.id" bg-variant="dark" text-variant="white">
            <h4>{{h.localized_name}}</h4>
            <h4>Attribute: {{h.primary_attr}}</h4>
            <h4>Attack Type: {{h.attack_type}}</h4>
            <h4>Roles: {{h.roles}}</h4>
            <b-button :href="'#/heroes/'+ h.id + '/matches/'" >Discover Matches</b-button>
            <b-button :href="'#/heroes/'+ h.id + '/players/'" :hero="h.localized_name">Players who used this heroe</b-button>
            <b-button :href="'#/heroes/'+ h.id + '/rankings/'" >Rankings</b-button>
            <b-button :href="'#/heroes/'+ h.id + '/durations/'" >Durations</b-button>     
          </b-card>
        </transition-group>
      </div>
    </b-card>
</div>
</template>

<script>
	import heroeService from '../services/heroeService';
    export default {
     data() {
      return {
          heroFilter:'',	
          heroes:[],
          loading:false
    }
  }, 	

  computed:{
    heroesFilter() {
        return this.heroes.filter(h => h.localized_name.toLowerCase().indexOf(this.heroFilter.toLowerCase()) >= 0 ||
          h.primary_attr.toLowerCase().indexOf(this.heroFilter.toLowerCase()) >=0 ||
          h.attack_type.toLowerCase().indexOf(this.heroFilter.toLowerCase()) >=0);
      }
  },

  created() {
   this.getHeroes();
  },

  methods: {

    getHeroes(){
      this.loading=true;
      heroeService.getHeroStats()
      .then((response) => {
                      this.heroes = response.data;
                      this.loading=false;
                  })
                  .catch((error) => {
                      this.heroes=null;
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