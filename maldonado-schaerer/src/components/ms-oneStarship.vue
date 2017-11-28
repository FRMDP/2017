<template>
	<div>
		<div v-if="!error" :id="side">
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
					<b-col cols="12" md="5" lg="3" class="starshipComponents">
						<b-list-group>
							<b-list-group-item active>
						    	APPEARANCES
						  	</b-list-group-item>
							<b-list-group-item v-if="!starship.films.length">
						  		<h1 class="elementsLoader">
									The picture is loading, this is the loader
									<ms-picLoader></ms-picLoader>
								</h1>
						  	</b-list-group-item>
						  	<b-list-group-item v-else-if="starship.films[0]=='empty'">
								Has no appearances
							</b-list-group-item>
							<b-list-group-item v-else v-for="film in starship.films" :key="film.title">
								<router-link v-if="film.url" :to="{name: 'oneFilm', params: {id: getId(film.url)}}">{{ film.title }}</router-link>
								<div v-if="film == 'Error loading data.'"> {{film}}</div>
							</b-list-group-item>
						</b-list-group>
					</b-col>
					<b-col cols="12" md="5" lg="3" class="starshipComponents">
						<b-list-group>
							<b-list-group-item active>
						    	PILOTS
						  	</b-list-group-item>
							<b-list-group-item v-if="!starship.pilots.length">
						  		<h1 class="elementsLoader">
									The picture is loading, this is the loader
									<ms-picLoader></ms-picLoader>
								</h1>
						  	</b-list-group-item>
						  	<b-list-group-item v-else-if="starship.pilots[0]=='empty'">
								Has no pilots
							</b-list-group-item>
							<b-list-group-item v-else v-for="pilot in starship.pilots" :key="pilot.name">
								<router-link v-if="pilot.url" :to="{name: 'onePeople', params: {id: getId(pilot.url)}}">{{ pilot.name }}</router-link>
								<div v-if="pilot == 'Error loading data.'"> {{pilot}}</div>
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
		name: 'msOneStarship',
		components: {
			msLoader,
			msPicLoader,
			msAtAtWalker,
			msError
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
				loading: true,
				error: false,
				imageError: false
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
				this.$http.get(urls.baseInfoSearch + 'starships/' + id + '/')
						  .then((response) => {
						  		this.error = false;
						  		this.createStarshipSimpleData(response.data);
						  		this.setImage();
						  		this.starship.films = this.setArrayFilms(response.data.films);
								this.starship.pilots = this.setArray(response.data.pilots);
								this.loading = false;
						  })
						  .catch((error) => {
						  		this.loading = false;
						  		this.error = true;
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
				this.$http.get(urls.imageSearch + this.starship.name) 
					.then((response) => {
						this.image = response.data.items[0].pagemap.cse_image[0].src;
					})
					.catch((error) => {
					 	this.imageError = true;
					});
			}
		},
		mounted() {
			this.getStarship(this.starshipId);
		}
	}
</script>

<style scoped>
	.name {
		padding-top: 60px;
	}

	@media screen and (max-width: 767px) {
		.starshipComponents {
			padding-left: 70px;
			padding-right: 70px;
			text-align: center;
			margin-bottom: 25px;
		}
	}
</style>