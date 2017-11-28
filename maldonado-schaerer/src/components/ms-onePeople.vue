<template>
	<div>
		<div v-if="!error" :id="side">
			<div v-if="loading">
				<ms-loader></ms-loader>
			</div>

			<b-container v-if="!loading">
				<b-row align-h="center">
					<b-col cols="4">
						<h1 class="name">{{ people.name }}</h1>
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
							<b-list-group-item>Height: {{ people.height }}</b-list-group-item>
							<b-list-group-item>Mass: {{ people.mass }}</b-list-group-item>
							<b-list-group-item>Gender: {{ people.gender }}</b-list-group-item>
							<b-list-group-item>Homeworld: 						
								<router-link v-if="people.homeworld.url" :to="{name: 'onePlanet', params: {id: getId(people.homeworld.url)}}">
								{{ people.homeworld.name }}</router-link>
								<div v-else-if="people.homeworld.error">Error loading data</div>
							</b-list-group-item>
						</b-list-group>
					</b-col>
				</b-row>
				<b-row>
					<b-col cols="12" md="5" lg="3" class="peopleComponents">
						<b-list-group>
							<b-list-group-item active>
						    	APPEARANCES
						  	</b-list-group-item>
							<b-list-group-item v-if="!people.films.length">
								<h1 class="elementsLoader">
									The picture is loading, this is the loader
									<ms-picLoader></ms-picLoader>
								</h1>
						  	</b-list-group-item>
						  	<b-list-group-item v-else-if="people.films[0]=='empty'">
								Has no appearances
							</b-list-group-item>
							<b-list-group-item v-else v-for="film in people.films" :key="film.title">
								<router-link v-if="film.url":to="{name: 'oneFilm', params: {id: getId(film.url)}}">{{ film.title }}</router-link>
								<div v-if="film == 'Error loading data.'"> {{film}}</div>
							</b-list-group-item>
						</b-list-group>
					</b-col>
					<b-col cols="12" md="5" lg="3" class="peopleComponents">
						<b-list-group>
							<b-list-group-item active>
						    	SPECIES
						  	</b-list-group-item>
							<b-list-group-item v-if="!people.species.length">
						  		<h1 class="elementsLoader">
									The picture is loading, this is the loader
									<ms-picLoader></ms-picLoader>
								</h1>
						  	</b-list-group-item>
						  	<b-list-group-item v-else-if="people.species[0]=='empty'">
								Has no species
							</b-list-group-item>
							<b-list-group-item v-else v-for="specie in people.species" :key="specie.name">
								<router-link v-if="specie.url" :to="{name: 'oneSpecie', params: {id: getId(specie.url)}}">{{ specie.name }}</router-link>
								<div v-if="specie == 'Error loading data.'"> {{specie}}</div>
							</b-list-group-item>
						</b-list-group>
					</b-col>
					<b-col cols="12" md="5" lg="3" class="peopleComponents">
						<b-list-group>
							<b-list-group-item active>
						    	VEHICLES
						  	</b-list-group-item>
						  	<b-list-group-item v-if="!people.vehicles.length">
						  		<h1 class="elementsLoader">
									The picture is loading, this is the loader
									<ms-picLoader></ms-picLoader>
								</h1>
						  	</b-list-group-item>
						  	<b-list-group-item v-else-if="people.vehicles[0]=='empty'">
								Has no vehicles
							</b-list-group-item>
							<b-list-group-item v-else v-for="vehicle in people.vehicles" :key="vehicle.name">
								<router-link v-if="vehicle.url" :to="{name: 'oneVehicle', params: {id: getId(vehicle.url)}}">{{ vehicle.name }}</router-link>
								<div v-if="vehicle == 'Error loading data.'"> {{vehicle}}</div>
							</b-list-group-item>
						</b-list-group>
					</b-col>
					<b-col cols="12" md="5" lg="3" class="peopleComponents">
						<b-list-group>
							<b-list-group-item active>
						    	STARSHIPS
						  	</b-list-group-item>
							<b-list-group-item v-if="!people.starships.length">
						  		<h1 class="elementsLoader">
									The picture is loading, this is the loader
									<ms-picLoader></ms-picLoader>
								</h1>
						  	</b-list-group-item>
						  	<b-list-group-item v-else-if="people.starships[0]=='empty'">
								Has no starships
							</b-list-group-item>
							<b-list-group-item v-else v-for="starship in people.starships" :key="starship.name">
								<router-link v-if="starship.url" :to="{name: 'oneStarship', params: {id: getId(starship.url)}}">{{ starship.name }}</router-link>
								<div v-if="starship == 'Error loading data.'"> {{starship}}</div>
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
		name: 'msOnePeople',
		components: {
			msLoader,
			msPicLoader,
			msAtAtWalker,
			msError
		},
		data() {
			return {
				people: {
					name: '',
					height: 0,
					mass: 0,
					gender: '',
					homeworld: {},
					films: [],
					species: [],
					vehicles: [],
					starships: [],
					url: ''
				},
				image: '',
				loading: true,
				error: false,
				imageError: false
			}
		},
		computed: {
			peopleId() {
				return this.$route.params.id;
			},
			side() {
				return this.$store.state.side;
			}
		},
		methods: {
			getPeople(id){
				this.$http.get(urls.baseInfoSearch + 'people/' + id + '/')
						  .then((response) => {
						  		this.error = false;
						  		this.createPeopleSimpleData(response.data);
						  		this.setImage();
						  		this.setHomeworld(response.data.homeworld);
						  		this.people.films = this.setArrayFilms(response.data.films);
								this.people.species = this.setArray(response.data.species);
								this.people.vehicles = this.setArray(response.data.vehicles);
								this.people.starships = this.setArray(response.data.starships);
								this.loading = false;
						  })
						  .catch((error) => {
						  		this.loading = false;
						  		this.error = true;
						  })
			},
			setHomeworld(homeworldUrl) {
				this.$http.get(homeworldUrl)
						.then((response) => {
							this.people.homeworld = { name: response.data.name, url: response.data.url};
						})
						.catch((error) => {
							this.people.homeworld = {error: true};
						})
			},
			createPeopleSimpleData(data){
				this.people.name = data.name;
				this.people.height = data.height;
				this.people.mass = data.mass;
				this.people.gender = data.gender;
				this.people.url = data.url;
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
		    	let vaderAux ='';
				if (this.people.name == "Darth Vader"){
					vaderAux = "suit";
				}
				this.$http.get(urls.imageSearch + this.people.name + vaderAux) 
					.then((response) => {
						this.image = response.data.items[0].pagemap.cse_image[0].src;
					})
					.catch((error) => {
					 	this.imageError = true;
					});
			}
		},
		mounted() {
			this.getPeople(this.peopleId);
		}
	}
</script>

<style scoped>
	.name {
		padding-top: 60px;
	}

	@media screen and (max-width: 767px) {
		.peopleComponents {
			padding-left: 70px;
			padding-right: 70px;
			text-align: center;
			margin-bottom: 25px;
		}
	}
</style>