<template>
	<div :id="side">
		<div v-if="loading">
			<ms-loader></ms-loader>
		</div>
		<b-container class="bv-example-row" v-if="!loading">
			<b-row align-h="center" style="margin-bottom:30px;margin-top: 30px;">
				<b-col cols="3">
					<h2>Starships</h2>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="8" md="3" lg="3" v-for="(starship,index) in starships" 
					class="cards mobileCards">
					<div class="card box">
					  	<img class="card-img-top" v-if="images[index]" :src="images[index].image" 
					  		style="width: 400 !important; height: 200 !important;
					  		     max-width: 400px;max-height: 200px">
					  	<div v-else>
					  		<h1 style="color: white;">
					  			The picture is loading, this is the loader
					  			<ms-picLoader></ms-picLoader>
					  		</h1>
					  	</div>
					  	<div class="card-block">
					    	<h4 class="card-title" style="text-align:center;">{{starship.name}}</h4>
					    	<ul class="card-text">
								<li>Model: {{ starship.model }}</li>
								<li>Length: {{ starship.length }}</li>
								<li>Passengers: {{ starship.passengers }}</li>
								<li>Speed: {{ starship.max_atmosphering_speed }}</li>
					    	</ul>
					    	<router-link :to="{name: 'oneStarship', params: {id: getId(starship.url)}}" >
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
						      	<a class="page-link" aria-label="Previous" 
						      		@click="getStarships(1)">
						        	<span aria-hidden="true">&laquo;</span>
						        	<span class="sr-only">Previous</span>
						      	</a>
						    </li>
						   	<li v-for="page in pages" class="page-item">
						   		<a class="page-link"
						   			 @click="getStarships(page)">
						   			{{ page }}
						   		</a>
						   	</li>
						   	<li class="page-item">
						      	<a class="page-link" aria-label="Next"
						      		@click="getStarships(numberOfPages)">
						        	<span aria-hidden="true">&raquo;</span>
						        	<span class="sr-only">Next</span>
							      	</a>
						    </li>
						</ul>
					</nav>
		    	</b-col>
		    </b-row>

		</b-container>
	</div>
</template>

<script>
	import msLoader from './ms-loader.vue';
	import msPicLoader from './ms-picLoader.vue';

 	export default{
		name: 'msStarships',
		components: {
			msLoader,
			msPicLoader
		},
		data(){
			return{
				starships: [],
				pages: [],
				numberOfPages: 0,
				images: [],
				loading: true
			}
		},
		computed: {
			side() {
				return this.$store.state.side;
			}
		},
		methods:{
		    initializer(){
				this.pages = [];
				this.images = [];
				this.starships = [];
				this.numberOfPages = 0;
			},
			getId(url){
		    	const urlArr = url.split("/");
		    	return urlArr[urlArr.length-2];
		    },
		    getStarships(index) {
		    	this.loading = true;
		    	this.initializer();
		    	this.$http.get('https://swapi.co/api/starships/?page=' + index)
		        	.then(response => {
		        		this.numberOfPages = Math.ceil(response.data.count/10);
		        		this.makeArrayPages();
		          		this.starships = response.data.results;
		          		this.setAllImages();
		          		this.loading = false;
		        	})
		        	.catch(error => {
		         		console.log(error);
		        	 });
		    },
		    makeArrayPages(){
				for(let i = 1; i<=this.numberOfPages; i++){
					this.pages.push(i);
				}
			},
			setImage(starship, index){
				this.$http.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyAI-2lr6p-qas_iY-jwcjsb3BEpIxQK7ik&cx=007669208564501026839%3Art6dk6nxzxq&q='+starship.name) 
					.then((response) => {
						this.images.splice(index, 0, {index: index, image: response.data.items[0].pagemap.cse_image[0].src});
					})
					.catch((error) => {
					 	console.log(error);
					});
			},
			setAllImages(){
				this.starships.forEach((starship, index)=>{
					this.setImage(starship, index);
				});
			}
		},
		mounted(){
			this.getStarships(1)
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

<style>
	@media screen and (max-width: 560px) {
		.mobileCards {
			margin-left: 100px;
		}
	}
</style>