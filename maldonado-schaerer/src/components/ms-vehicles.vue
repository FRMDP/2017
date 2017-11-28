<template>
	<div>
		<div v-if="!error" :id="side">
			<div v-if="loading">
				<ms-loader></ms-loader>
			</div>
			<b-container class="bv-example-row" v-if="!loading">
				<b-row align-h="center" style="margin-bottom:30px;padding-top: 30px;">
					<b-col cols="3">
						<h2>Vehicles</h2>
					</b-col>
				</b-row>
				<b-row>
					<b-col cols="8" md="5" lg="3" v-for="(vehicle,index) in vehicles" :key="vehicle.name"
						class="cards mobileCards">
						<div class="card box">
							<div v-if="images[index] && images[index].error">
						  		<h5 class="imageError">Error loading image</h5>
						  		<img src="http://92moose.fm/files/2017/08/JabbaComedy.png" 
						  			style="width: auto !important; height: 200 !important;
						  		     max-width: 100%;max-height: 200px">
						  	</div>
						  	<img v-else-if="images[index]" class="card-img-top" :src="images[index].image" 
						  		style="width: 400 !important; height: 200 !important;
						  		     max-width: 400px;max-height: 200px">
						  	<div v-else>
							  	<h1 class="picLoader">
							  		The picture is loading, this is the loader
							  		<ms-picLoader></ms-picLoader>
							  	</h1>
							</div>
						  	<div class="card-block">
						    	<h4 class="card-title" style="text-align:center;">{{vehicle.name}}</h4>
						    	<ul class="card-text">
									<li>Model: {{ vehicle.model }}</li>
									<li>Length: {{ vehicle.length }}</li>
									<li>Speed: {{ vehicle.max_atmosphering_speed }}</li>
									<li>Passengers: {{ vehicle.passengers }}</li>
						    	</ul>
						    	<router-link :to="{name: 'oneVehicle', params: {id: getId(vehicle.url)}}">
							    	<a class="btn btn-outline-primary moreInfo" 
							    		style="margin-left: 20%;margin-bottom:20px;">
							    		More Information
							    	</a>
						    	</router-link>
						  	</div>
						</div>
					</b-col>
				</b-row>	
				<b-row style="margin-top:50px;">
			    	<b-col>
			    		<nav aria-label="Page navigation example">
							<ul class="pagination justify-content-center">
							   	<li class="page-item">
							      	<a class="page-link" style="background-color:black" aria-label="Previous" 
							      		@click="getVehicles(1)">
							        	<span aria-hidden="true">&laquo;</span>
							        	<span class="sr-only">Previous</span>
							      	</a>
							    </li>
							   	<li v-for="page in pages" class="page-item">
							   		<a class="page-link" style="background-color:black"
							   			 @click="getVehicles(page)">
							   			{{ page }}
							   		</a>
							   	</li>
							   	<li class="page-item">
							      	<a class="page-link" style="background-color:black" aria-label="Next"
							      		@click="getVehicles(numberOfPages)">
							        	<span aria-hidden="true">&raquo;</span>
							        	<span class="sr-only">Next</span>
								      	</a>
							    </li>
							</ul>
						</nav>
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
		name: 'msVehicles',
		components: {
			msLoader,
			msPicLoader,
			msAtAtWalker,
			msError
		},
		data() {
			return{
				pages: [],
				vehicles: [],
				numberOfPages: 0,
				images: [],
				loading: true,
				error: false
			}
		},
		computed: {
			side() {
				return this.$store.state.side;
			}
		},
		methods: {
			initializer(){
				this.pages = [];
				this.images = [];
				this.vehicles = [];
				this.numberOfPages = 0;
			},
			getId(url){
		    	const urlArr = url.split("/");
		    	return urlArr[urlArr.length-2];
		    },
	    	getVehicles(index) {
	    		this.loading = true;
		    	this.initializer();
	    		this.$http.get(urls.baseInfoSearch + 'vehicles/?page=' + index)
		        	.then(response => {
		        		this.error = false;
		        		this.numberOfPages = Math.ceil(response.data.count/10);
		        		this.makeArrayPages();
		          		this.vehicles = response.data.results;
		          		this.setAllImages();
		          		this.loading = false;

		        	})
		        	.catch(error => {
		         		this.loading = false;
		         		this.error = true;
		        	 });
	    	},
	    	makeArrayPages(){
				for(let i = 1; i<=this.numberOfPages; i++){
					this.pages.push(i);
				}
			},
			setImage(vehicle, index){
				this.$http.get(urls.imageSearch + vehicle.name) 
					.then((response) => {
						this.images.splice(index, 0, {index: index, image: response.data.items[0].pagemap.cse_image[0].src});
					})
					.catch((error) => {
					 	this.images.splice(index, 0, {index: index, error: true});
					});
			},
			setAllImages(){
				this.vehicles.forEach((vehicle, index)=>{
					this.setImage(vehicle, index);
				});
			}
		},
		mounted() {
			this.getVehicles(1);
		},
		watch: {
			'images.length': function () {
				this.images.sort((a,b) =>{
				  if (a.index < b.index)
				    return -1;
				  if (a.index > b.index)
				    return 1;
				});
			}
		}
	}
</script>

<style scoped>
	@media screen and (max-width: 560px) {
		.mobileCards {
			margin-left: 100px;
		}
	}
</style>