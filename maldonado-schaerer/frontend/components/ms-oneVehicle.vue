<template>
	<div :id="side">
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
				<b-col cols="12" md="3" lg="3">
					<b-list-group>
						<b-list-group-item active>
					    	APPEARANCES
					  	</b-list-group-item>
						<b-list-group-item v-for="film in vehicle.films">
							<router-link :to="{name: 'oneFilm', params: {id: getId(film.url)}}">{{ film.title }}</router-link>
						</b-list-group-item>
					</b-list-group>
				</b-col>
				<b-col cols="12" md="3" lg="3">
					<b-list-group>
						<b-list-group-item active>
					    	PILOTS
					  	</b-list-group-item>
						<b-list-group-item v-for="pilot in vehicle.pilots">
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
		name: 'msOneVehicle',
		components: {
			msLoader,
			msPicLoader
		},
		data() {
			return {
				vehicle: {
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
					vehicle_class: '',
					pilots: [],
					films: [],		
					url: ''
				},
				image: '',
				loading: true
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
				this.$http.get('https://swapi.co/api/vehicles/' + id + '/')
						  .then((response) => {
						  		this.createVehicleSimpleData(response.data);
						  		this.setImage();
						  		this.vehicle.films = this.setArrayFilms(response.data.films);
								this.vehicle.pilots = this.setArray(response.data.pilots);
								this.loading = false;
						  })
						  .catch((error) => {
						  		console.log(error);
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
				this.$http.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyAI-2lr6p-qas_iY-jwcjsb3BEpIxQK7ik&cx=007669208564501026839%3Art6dk6nxzxq&q='+ this.vehicle.name) 
					.then((response) => {
						this.image = response.data.items[0].pagemap.cse_image[0].src;
					})
					.catch((error) => {
					 	console.log(error);
					});
			}
		},
		mounted() {
			this.getVehicle(this.vehicleId);
		}
	}
</script>

<style>
	.name {
		padding-top: 60px;
	}
</style>