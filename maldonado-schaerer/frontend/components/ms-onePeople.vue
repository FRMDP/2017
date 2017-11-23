<template>
	<div :id="side">
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
						<b-list-group-item>Height: {{ people.height }}</b-list-group-item>
						<b-list-group-item>Mass: {{ people.mass }}</b-list-group-item>
						<b-list-group-item>Gender: {{ people.gender }}</b-list-group-item>
						<b-list-group-item>Homeworld: 						
							<router-link :to="{name: 'onePlanet', params: {id: getId(people.homeworld.url)}}">
							{{ people.homeworld.name }}</router-link>
						</b-list-group-item>
					</b-list-group>
				</b-col>
			</b-row>
			<b-row style="margin-top: 45px;">
				<b-col cols="12" md="4" lg="4">
					<b-list-group>
						<b-list-group-item active>
					    	APPEARANCES
					  	</b-list-group-item>
						<b-list-group-item v-for="film in people.films">
							<router-link :to="{name: 'oneFilm', params: {id: getId(film.url)}}">{{ film.title }}</router-link>
						</b-list-group-item>
					</b-list-group>
				</b-col>
				<b-col cols="12" md="3" lg="3">
					<b-list-group>
						<b-list-group-item active>
					    	SPECIES
					  	</b-list-group-item>
						<b-list-group-item v-for="specie in people.species">
							<router-link :to="{name: 'oneSpecie', params: {id: getId(specie.url)}}">{{ specie.name }}</router-link>
						</b-list-group-item>
					</b-list-group>
				</b-col>
				<b-col cols="12" md="3" lg="3">
					<b-list-group>
						<b-list-group-item active>
					    	VEHICLES
					  	</b-list-group-item>
						<b-list-group-item v-for="vehicle in people.vehicles">
							<router-link :to="{name: 'oneVehicle', params: {id: getId(vehicle.url)}}">{{ vehicle.name }}</router-link>
						</b-list-group-item>
					</b-list-group>
				</b-col>
				<b-col cols="12" md="4" lg="4">
					<b-list-group>
						<b-list-group-item active>
					    	STARSHIPS
					  	</b-list-group-item>
						<b-list-group-item v-for="starship in people.starships">
							<router-link :to="{name: 'oneStarship', params: {id: getId(starship.url)}}">{{ starship.name }}</router-link>
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
		name: 'msOnePeople',
		components: {
			msLoader,
			msPicLoader
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
				image: ''
			}
		},
		computed: {
			loading() {
				return !(this.people.name && this.people.height && this.people.mass && this.people.gender && this.people.homeworld && this.people.films && this.people.species && this.people.vehicles && this.people.starships && this.people.url);
			},
			peopleId() {
				return this.$route.params.id;
			},
			side() {
				return this.$store.state.side;
			}
		},
		methods: {
			getPeople(id){
				this.$http.get('https://swapi.co/api/people/' + id + '/')
						  .then((response) => {
						  		this.createPeopleSimpleData(response.data);
						  		this.setImage();
						  		this.setHomeworld(response.data.homeworld);
						  		this.people.films = this.setArrayFilms(response.data.films);
								this.people.species = this.setArray(response.data.species);
								this.people.vehicles = this.setArray(response.data.vehicles);
								this.people.starships = this.setArray(response.data.starships);
						  })
						  .catch((error) => {
						  		console.log(error);
						  })
			},
			setHomeworld(homeworldUrl) {
				this.$http.get(homeworldUrl)
						.then((response) => {
							this.people.homeworld = { name: response.data.name, url: response.data.url};
						})
						.catch((error) => {
							console.log(error);
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
				this.$http.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyAI-2lr6p-qas_iY-jwcjsb3BEpIxQK7ik&cx=007669208564501026839%3Art6dk6nxzxq&q='+ this.people.name) 
					.then((response) => {
						this.image = response.data.items[0].pagemap.cse_image[0].src;
					})
					.catch((error) => {
					 	console.log(error);
					});
			}
		},
		mounted() {
			this.getPeople(this.peopleId);
		}
	}
</script>

<style>
	.name {
		padding-top: 60px;
	}
</style>