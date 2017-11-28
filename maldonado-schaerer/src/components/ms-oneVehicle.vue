<template>
	<div>
		<div v-if="!error" :id="side">
			<div v-if="loading">
				<ms-loader></ms-loader>
			</div>

			<b-container v-if="!loading">
				<b-row align-h="center">
					<b-col cols="4">
						<h1 class="name">{{ vehicle.name }}</h1>
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
							<b-list-group-item>Model: {{ vehicle.model }}</b-list-group-item>
							<b-list-group-item>Manufacturer: {{ vehicle.manufacturer }}</b-list-group-item>
							<b-list-group-item>Cost in credits: {{ vehicle.cost_in_credits }}</b-list-group-item>
							<b-list-group-item>Length: {{ vehicle.length }}</b-list-group-item>
							<b-list-group-item>Max atmosphering speed: {{ vehicle.max_atmosphering_speed }}</b-list-group-item>
							<b-list-group-item>Crew: {{ vehicle.crew }}</b-list-group-item>
							<b-list-group-item>Passengers: {{ vehicle.passengers }}</b-list-group-item>
							<b-list-group-item>Cargo capacity: {{ vehicle.cargo_capacity }}</b-list-group-item>
							<b-list-group-item>Consumables: {{ vehicle.consumables }}</b-list-group-item>
							<b-list-group-item>Vehicle class: {{ vehicle.vehicle_class }}</b-list-group-item>
						</b-list-group>
					</b-col>
				</b-row>
				<b-row>
					<b-col cols="12" md="5" lg="3" class="vehicleComponents">
						<b-list-group>
							<b-list-group-item active>
						    	APPEARANCES
						  	</b-list-group-item>
							<b-list-group-item v-if="!vehicle.films.length">
						  		<h1 class="elementsLoader">
									The picture is loading, this is the loader
									<ms-picLoader></ms-picLoader>
								</h1>
						  	</b-list-group-item>
						  	<b-list-group-item v-else-if="vehicle.films[0]=='empty'">
								Has no appearances
							</b-list-group-item>
							<b-list-group-item v-else v-for="film in vehicle.films" :key="film.title">
								<router-link v-if="film.url" :to="{name: 'oneFilm', params: {id: getId(film.url)}}">{{ film.title }}</router-link>
								<div v-if="film == 'Error loading data.'"> {{film}}</div>
							</b-list-group-item>
						</b-list-group>
					</b-col>
					<b-col cols="12" md="5" lg="3" class="vehicleComponents">
						<b-list-group>
							<b-list-group-item active>
						    	PILOTS
						  	</b-list-group-item>
							<b-list-group-item v-if="!vehicle.pilots.length">
						  		<h1 class="elementsLoader">
									The picture is loading, this is the loader
									<ms-picLoader></ms-picLoader>
								</h1>
						  	</b-list-group-item>
						  	<b-list-group-item v-else-if="vehicle.pilots[0]=='empty'">
								Has no pilots
							</b-list-group-item>
							<b-list-group-item v-else v-for="pilot in vehicle.pilots" :key="pilot.name">
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
		name: 'msOneVehicle',
		components: {
			msLoader,
			msPicLoader,
			msAtAtWalker,
			msError
		},
		data() {
			return {
				vehicle: {
					name: '',
					model: '',
					manufacturer: '',
					cost_in_credits: 0,
					length: '',
					max_atmosphering_speed: 0,
					crew: '',
					passengers: 0,
					cargo_capacity: '',
					consumables: '',
					vehicle_class: '',
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
			vehicleId() {
				return this.$route.params.id;
			},
			side() {
				return this.$store.state.side;
			}
		},
		methods: {
			getVehicle(id){
				this.$http.get(urls.baseInfoSearch + 'vehicles/' + id + '/')
						  .then((response) => {
						  		this.error = false;
						  		this.createVehicleSimpleData(response.data);
						  		this.setImage();
						  		this.vehicle.films = this.setArrayFilms(response.data.films);
								this.vehicle.pilots = this.setArray(response.data.pilots);
								this.loading = false;
						  })
						  .catch((error) => {
						  		this.loading = false;
						  		this.error = true;
						  })
			},
			createVehicleSimpleData(data){
				this.vehicle.name = data.name;
				this.vehicle.model = data.model;
				this.vehicle.manufacturer = data.manufacturer;
				this.vehicle.cost_in_credits = data.cost_in_credits;
				this.vehicle.length = data.length;
				this.vehicle.max_atmosphering_speed = data.max_atmosphering_speed;
				this.vehicle.crew = data.crew;
				this.vehicle.passengers = data.passengers;
				this.vehicle.cargo_capacity = data.cargo_capacity;
				this.vehicle.consumables = data.consumables;
				this.vehicle.vehicle_class = data.vehicle_class;
				this.vehicle.url = data.url;
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
				this.$http.get(urls.imageSearch + this.vehicle.name) 
					.then((response) => {
						this.image = response.data.items[0].pagemap.cse_image[0].src;
					})
					.catch((error) => {
					 	this.imageError = true;
					});
			}
		},
		mounted() {
			this.getVehicle(this.vehicleId);
		}
	}
</script>

<style scoped>
	.name {
		padding-top: 60px;
	}

	@media screen and (max-width: 767px) {
		.vehicleComponents {
			padding-left: 70px;
			padding-right: 70px;
			text-align: center;
			margin-bottom: 25px;
		}
	}
</style>