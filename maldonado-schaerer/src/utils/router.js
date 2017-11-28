import VueRouter from 'vue-router'
import msStart from '../components/ms-start.vue'
import msFilms from '../components/ms-films.vue'
import msOneFilm from '../components/ms-oneFilm.vue'
import msPeople from '../components/ms-people.vue'
import msOnePeople from '../components/ms-onePeople.vue'
import msStarships from '../components/ms-starships.vue'
import msOneStarship from '../components/ms-oneStarship.vue'
import msVehicles from '../components/ms-vehicles.vue'
import msOneVehicle from '../components/ms-oneVehicle.vue'
import msSpecies from '../components/ms-species.vue'
import msOneSpecie from '../components/ms-oneSpecie.vue'
import msPlanets from '../components/ms-planets.vue'
import msOnePlanet from '../components/ms-onePlanet.vue'
import msChat from '../components/ms-chat.vue'

export default new VueRouter({
  routes: [
  		{ path: '/', redirect: '/start' },
  		{ path: '/start', component: msStart },
  		{ path: '/films', component: msFilms },
  		{ path: '/films/:id', component: msOneFilm , name: 'oneFilm'},
  		{ path: '/people', component: msPeople },
  		{ path: '/people/:id', component: msOnePeople, name: 'onePeople' },
  		{ path: '/starships', component: msStarships },
  		{ path: '/starships/:id', component: msOneStarship, name: 'oneStarship' },
  		{ path: '/vehicles', component: msVehicles },
  		{ path: '/vehicles/:id', component: msOneVehicle, name: 'oneVehicle' },
  		{ path: '/species', component: msSpecies },
  		{ path: '/species/:id', component: msOneSpecie, name: 'oneSpecie' },
  		{ path: '/planets', component: msPlanets },
  		{ path: '/planets/:id', component: msOnePlanet, name: 'onePlanet' },
      { path: '/chat', component: msChat },
	]
});