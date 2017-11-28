<template>
	<div>
		<div v-if="!error" :id="side">
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
						<div v-if="imageError">
							<h5 class="imageError">Error loading image</h5>
						  		<img src="http://92moose.fm/files/2017/08/JabbaComedy.png" 
						  			style="width: auto !important; height: 200 !important;
						  		     max-width: 100%;max-height: 200px">
						</div>
						<img v-else-if="image" :src="image"
							style="width: 600 !important; height: 300 !important;
						  		     max-width: 600px;max-height: 300px">
						<div v-else>
						  	<h1 class="picLoader">
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
					<b-col cols="12" md="5" lg="3" class="planetComponents">
						<b-list-group>
							<b-list-group-item active>
						    	APPEARANCES
						  	</b-list-group-item>
							<b-list-group-item v-if="!planet.films.length">
						  		<h1 class="elementsLoader">
									The picture is loading, this is the loader
									<ms-picLoader></ms-picLoader>
								</h1>
						  	</b-list-group-item>
						  	<b-list-group-item v-else-if="planet.films[0]=='empty'">
								Has no appearances
							</b-list-group-item>
							<b-list-group-item v-else v-for="film in planet.films" :key="film.title">
								<router-link v-if="film.url" :to="{name: 'oneFilm', params: {id: getId(film.url)}}">{{ film.title }}</router-link>
								<div v-if="film == 'Error loading data.'"> {{film}}</div>
							</b-list-group-item>
						</b-list-group>
					</b-col>
					<b-col cols="12" md="5" lg="3" class="planetComponents">
						<b-list-group>
							<b-list-group-item active>
						    	RESIDENTS
						  	</b-list-group-item>
							<b-list-group-item v-if="!planet.residents.length">
						  		<h1 class="elementsLoader">
									The picture is loading, this is the loader
									<ms-picLoader></ms-picLoader>
								</h1>
						  	</b-list-group-item>
						  	<b-list-group-item v-else-if="planet.residents[0]=='empty'">
								Has no residents
							</b-list-group-item>
							<b-list-group-item v-else v-for="resident in planet.residents" :key="resident.name">
								<router-link v-if="resident.url" :to="{name: 'onePeople', params: {id: getId(resident.url)}}">{{ resident.name }}</router-link>
								<div v-if="resident == 'Error loading data.'"> {{resident}}</div>
							</b-list-group-item>
						</b-list-group>
					</b-col>
				</b-row>
			</b-container>
			<ms-atAtWalker></ms-atAtWalker>
		</div>
		<div v-if="error">
			<ms-error></ms-error>
		</div>
	</div>
</template>

<script>
	import msLoader from './ms-loader.vue';
	import msPicLoader from './ms-picLoader.vue';
	import msAtAtWalker from './ms-atAtWalker.vue';
	import msError from './ms-error.vue';
	import urls from '../configuration/urls.js';

	export default{
		name: 'msOnePlanet',
		components: {
			msLoader,
			msPicLoader,
			msAtAtWalker,
			msError
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
				loading: true,
				error: false,
				imageError: false
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
				this.$http.get(urls.baseInfoSearch + 'planets/' + id + '/')
						  .then((response) => {
						  		this.error = false;
						  		this.createPlanetSimpleData(response.data);
						  		this.setImage();
						  		this.planet.films = this.setArrayFilms(response.data.films);
								this.planet.residents = this.setArray(response.data.residents);
								this.loading = false;
						  })
						  .catch((error) => {
						  		this.loading = true;
						  		this.error = false;
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
				let auxArray = [];
				if(!(array.length)){
					auxArray.push("empty");
					return auxArray;
				}
				let self = this;
				array.forEach((element)=>{
					self.$http.get(element)
						.then((response) => {
							auxArray.push({
								name: response.data.name, 
								url: response.data.url
							});
						})
						.catch((error) => {
							auxArray.push("Error loading data.");
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
							auxArray.push("Error loading data.");
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
				this.$http.get(urls.imageSearch + this.planet.name) 
					.then((response) => {
						this.image = response.data.items[0].pagemap.cse_image[0].src;
					})
					.catch((error) => {
					 	this.imageError = true;
					});
			}
		},
		mounted() {
			this.getPlanet(this.planetId);
		}
	}
</script>

<style scoped>
	.name {
		padding-top: 60px;
	}


	@media screen and (max-width: 767px) {
		.planetComponents {
			padding-left: 70px;
			padding-right: 70px;
			text-align: center;
			margin-bottom: 25px;
		}
	}
</style>