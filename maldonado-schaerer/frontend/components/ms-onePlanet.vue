<template>
	<div :id="side">
		<div v-if="loading">
			<ms-loader></ms-loader>
		</div>

		<b-container v-if="!loading">
			<b-row align-h="center">
				<b-col cols="4">
					<h1 class="name">{{ planet.name }}</h1>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" md="6" lg="6" style="padding-left: 200px;">
					<img v-if="image" :src="image"
						style="width: 600 !important; height: 300 !important;
					  		     max-width: 600px;max-height: 300px">
					<div v-else>
					  	<h1 style="color: white;">
					  		The picture is loading, this is the loader
					  		<ms-picLoader></ms-picLoader>
					  	</h1>
					</div>
				</b-col>
				<b-col cols="12" md="6" lg="6">
					<b-list-group>
						<b-list-group-item>Rotation period: {{ planet.rotation_period }}</b-list-group-item>
						<b-list-group-item>Orbital period: {{ planet.orbital_period }}</b-list-group-item>
						<b-list-group-item>Diameter: {{ planet.diameter }}</b-list-group-item>
						<b-list-group-item>Climate: {{ planet.climate }}</b-list-group-item>
						<b-list-group-item>Gravity: {{ planet.gravity }}</b-list-group-item>
						<b-list-group-item>Terrain: {{ planet.terrain }}</b-list-group-item>
						<b-list-group-item>Surface water: {{ planet.surface_water }}</b-list-group-item>
						<b-list-group-item>Population: {{ planet.population }}</b-list-group-item>
					</b-list-group>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" md="3" lg="3">
					<b-list-group>
						<b-list-group-item active>
					    	APPEARANCES
					  	</b-list-group-item>
						<b-list-group-item v-for="film in planet.films">
							<router-link :to="{name: 'oneFilm', params: {id: getId(film.url)}}">{{ film.title }}</router-link>
						</b-list-group-item>
					</b-list-group>
				</b-col>
				<b-col cols="12" md="3" lg="3">
					<b-list-group>
						<b-list-group-item active>
					    	RESIDENTS
					  	</b-list-group-item>
						<b-list-group-item v-for="resident in planet.residents">
							<router-link :to="{name: 'onePeople', params: {id: getId(resident.url)}}">{{ resident.name }}</router-link>
						</b-list-group-item>
					</b-list-group>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
	import msLoader from './ms-loader.vue';
	import msPicLoader from './ms-picLoader.vue';

	export default{
		name: 'msOnePlanet',
		components: {
			msLoader,
			msPicLoader
		},
		data() {
			return {
				planet: {
					name: '',
					rotation_period: '',
					orbital_period: '',
					diameter: '',
					climate: '',
					gravity: '',
					terrain: '',
					surface_water: '',
					population: '',
					residents: [],
					films: [],		
					url: ''
				},
				image: '',
				loading: true
			}
		},
		computed: {
			planetId() {
				return this.$route.params.id;
			},
			side() {
				return this.$store.state.side;
			}
		},
		methods: {
			getPlanet(id){
				this.$http.get('https://swapi.co/api/planets/' + id + '/')
						  .then((response) => {
						  		this.createPlanetSimpleData(response.data);
						  		this.setImage();
						  		this.planet.films = this.setArrayFilms(response.data.films);
								this.planet.residents = this.setArray(response.data.residents);
								this.loading = false;
						  })
						  .catch((error) => {
						  		console.log(error);
						  })
			},
			createPlanetSimpleData(data){
				this.planet.name = data.name;
				this.planet.rotation_period = data.rotation_period;
				this.planet.orbital_period = data.orbital_period;
				this.planet.diameter = data.diameter;
				this.planet.climate = data.climate;
				this.planet.gravity = data.gravity;
				this.planet.terrain = data.terrain;
				this.planet.surface_water = data.surface_water;
				this.planet.population = data.population;
				this.planet.url = data.url;
			},
			setArray(array){
				let self = this;
				let auxArray = [];
				array.forEach((element)=>{
					self.$http.get(element)
						.then((response) => {
							auxArray.push({
								name: response.data.name, 
								url: response.data.url
							});
						})
						.catch((error) => {
							console.log(error);
						});
				});
				return auxArray;
			},
			setArrayFilms(array){
				let self = this;
				let auxArray = [];
				array.forEach((element)=>{
					self.$http.get(element)
						.then((response) => {
							auxArray.push({
								title: response.data.title, 
								url: response.data.url
							});
						})
						.catch((error) => {
							console.log(error);
						});
				});
				return auxArray;
			},
			getId(url){
				if(url){
		    		const urlArr = url.split("/");
		    		return urlArr[urlArr.length-2];
		    	}
		    },
		    setImage(){
				this.$http.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyAI-2lr6p-qas_iY-jwcjsb3BEpIxQK7ik&cx=007669208564501026839%3Art6dk6nxzxq&q='+ this.planet.name) 
					.then((response) => {
						this.image = response.data.items[0].pagemap.cse_image[0].src;
					})
					.catch((error) => {
					 	console.log(error);
					});
			}
		},
		mounted() {
			this.getPlanet(this.planetId);
		}
	}
</script>

<style>
	.name {
		padding-top: 60px;
	}
</style>