<template>
	<div :id="side">
		<div v-if="loading">
			<ms-loader></ms-loader>
		</div>

		<b-container v-if="!loading">
			<b-row align-h="center">
				<b-col cols="4">
					<h1 class="name">{{ starship.name }}</h1>
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
						<b-list-group-item>Model: {{ starship.model }}</b-list-group-item>
						<b-list-group-item>Manufacturer: {{ starship.manufacturer }}</b-list-group-item>
						<b-list-group-item>Cost in credits: {{ starship.cost_in_credits }}</b-list-group-item>
						<b-list-group-item>Length: {{ starship.length }}</b-list-group-item>
						<b-list-group-item>Max atmosphering speed: {{ starship.max_atmosphering_speed }}</b-list-group-item>
						<b-list-group-item>Crew: {{ starship.crew }}</b-list-group-item>
						<b-list-group-item>Passengers: {{ starship.passengers }}</b-list-group-item>
						<b-list-group-item>Cargo capacity: {{ starship.cargo_capacity }}</b-list-group-item>
						<b-list-group-item>Consumables: {{ starship.consumables }}</b-list-group-item>
						<b-list-group-item>Hyperdrive rating: {{ starship.hyperdrive_rating }}</b-list-group-item>
						<b-list-group-item>MGLT: {{ starship.MGLT }}</b-list-group-item>
						<b-list-group-item>Starship class: {{ starship.starship_class }}</b-list-group-item>
					</b-list-group>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" md="3" lg="3">
					<b-list-group>
						<b-list-group-item active>
					    	APPEARANCES
					  	</b-list-group-item>
						<b-list-group-item v-for="film in starship.films">
							<router-link :to="{name: 'oneFilm', params: {id: getId(film.url)}}">{{ film.title }}</router-link>
						</b-list-group-item>
					</b-list-group>
				</b-col>
				<b-col cols="12" md="3" lg="3">
					<b-list-group>
						<b-list-group-item active>
					    	PILOTS
					  	</b-list-group-item>
						<b-list-group-item v-for="pilot in starship.pilots">
							<router-link :to="{name: 'onePeople', params: {id: getId(pilot.url)}}">{{ pilot.name }}</router-link>
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
		name: 'msOneStarship',
		components: {
			msLoader,
			msPicLoader
		},
		data() {
			return {
				starship: {
					name: '',
					model: '',
					manufacturer: '',
					cost_in_credits: '',
					length: '',
					max_atmosphering_speed: '',
					crew: '',
					passengers: '',
					cargo_capacity: '',
					consumables: '',
					hyperdrive_rating: '',
					MGLT: '',
					starship_class: '',
					pilots: [],
					films: [],		
					url: ''
				},
				image: '',
				loading: true
			}
		},
		computed: {
			starshipId() {
				return this.$route.params.id;
			},
			side() {
				return this.$store.state.side;
			}
		},
		methods: {
			getStarship(id){
				this.$http.get('https://swapi.co/api/starships/' + id + '/')
						  .then((response) => {
						  		this.createStarshipSimpleData(response.data);
						  		this.setImage();
						  		this.starship.films = this.setArrayFilms(response.data.films);
								this.starship.pilots = this.setArray(response.data.pilots);
								this.loading = false;
						  })
						  .catch((error) => {
						  		console.log(error);
						  })
			},
			createStarshipSimpleData(data){
				this.starship.name = data.name;
				this.starship.model = data.model;
				this.starship.manufacturer = data.manufacturer;
				this.starship.cost_in_credits = data.cost_in_credits;
				this.starship.length = data.length;
				this.starship.max_atmosphering_speed = data.max_atmosphering_speed;
				this.starship.crew = data.crew;
				this.starship.passengers = data.passengers;
				this.starship.cargo_capacity = data.cargo_capacity;
				this.starship.consumables = data.consumables;
				this.starship.hyperdrive_rating = data.hyperdrive_rating;
				this.starship.MGLT = data.MGLT;
				this.starship.starship_class = data.starship_class;
				this.starship.url = data.url;
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
				this.$http.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyAI-2lr6p-qas_iY-jwcjsb3BEpIxQK7ik&cx=007669208564501026839%3Art6dk6nxzxq&q='+ this.starship.name) 
					.then((response) => {
						this.image = response.data.items[0].pagemap.cse_image[0].src;
					})
					.catch((error) => {
					 	console.log(error);
					});
			}
		},
		mounted() {
			this.getStarship(this.starshipId);
		}
	}
</script>

<style>
	.name {
		padding-top: 60px;
	}
</style>