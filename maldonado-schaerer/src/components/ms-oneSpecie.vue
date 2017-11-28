<template>
	<div>
		<div v-if="!error" :id="side">
			<div v-if="loading">
				<ms-loader></ms-loader>
			</div>

			<b-container v-if="!loading">
				<b-row align-h="center">
					<b-col cols="4">
						<h1 class="name">{{ specie.name }}</h1>
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
							<b-list-group-item>Classification: {{ specie.classification }}</b-list-group-item>
							<b-list-group-item>Designation: {{ specie.designation }}</b-list-group-item>
							<b-list-group-item>Average height: {{ specie.average_height }}</b-list-group-item>
							<b-list-group-item>Skin colors: {{ specie.skin_colors }}</b-list-group-item>
							<b-list-group-item>Hair colors: {{ specie.hair_colors }}</b-list-group-item>
							<b-list-group-item>Eye colors: {{ specie.eye_colors }}</b-list-group-item>
							<b-list-group-item>Average lifespan: {{ specie.average_lifespan }}</b-list-group-item>
							<b-list-group-item>Homeworld: 
								<router-link v-if="specie.homeworld.url" :to="{name: 'onePlanet', params: {id: getId(specie.homeworld.url)}}">
								{{ specie.homeworld.name }}</router-link>
								<div v-else-if="specie.homeworld.error">Error loading data</div>
							</b-list-group-item>
							<b-list-group-item>Language: {{ specie.language }}</b-list-group-item>
						</b-list-group>
					</b-col>
				</b-row>
				<b-row>
					<b-col cols="12" md="5" lg="3" class="specieComponents">
						<b-list-group>
							<b-list-group-item active>
						    	APPEARANCES
						  	</b-list-group-item>
							<b-list-group-item v-if="!specie.films.length">
						  		<h1 class="elementsLoader">
									The picture is loading, this is the loader
									<ms-picLoader></ms-picLoader>
								</h1>
						  	</b-list-group-item>
						  	<b-list-group-item v-else-if="specie.films[0]=='empty'">
								Has no appearances
							</b-list-group-item>
							<b-list-group-item v-else v-for="film in specie.films" :key="film.title">
								<router-link v-if="film.url" :to="{name: 'oneFilm', params: {id: getId(film.url)}}">{{ film.title }}</router-link>
								<div v-if="film == 'Error loading data.'"> {{film}}</div>
							</b-list-group-item>
						</b-list-group>
					</b-col>
					<b-col cols="12" md="5" lg="3" class="specieComponents">
						<b-list-group>
							<b-list-group-item active>
						    	PEOPLE
						  	</b-list-group-item>
							<b-list-group-item v-if="!specie.people.length">
						  		<h1 class="elementsLoader">
									The picture is loading, this is the loader
									<ms-picLoader></ms-picLoader>
								</h1>
						  	</b-list-group-item>
						  	<b-list-group-item v-else-if="specie.people[0]=='empty'">
								Has no people
							</b-list-group-item>
							<b-list-group-item v-else v-for="people in specie.people" :key="specie.name">
								<router-link v-if="people.url" :to="{name: 'onePeople', params: {id: getId(people.url)}}">{{ people.name }}</router-link>
								<div v-if="people == 'Error loading data.'"> {{people}}</div>
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
		name: 'msOneSpecie',
		components: {
			msLoader,
			msPicLoader,
			msAtAtWalker,
			msError
		},
		data() {
			return {
				specie: {
					name: '',
					classification: '',
					designation: '',
					average_height: '',
					skin_colors: '',
					hair_colors: '',
					eye_colors: '',
					average_lifespan: '',
					homeworld: {},
					language: '',
					people: [],
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
			specieId() {
				return this.$route.params.id;
			},
			side() {
				return this.$store.state.side;
			}
		},
		methods: {
			getSpecie(id){
				this.$http.get(urls.baseInfoSearch + 'species/' + id + '/')
						  .then((response) => {
						  		this.error = false;
						  		this.createSpecieSimpleData(response.data);
						  		this.setImage();
						  		this.setHomeworld(response.data.homeworld);
						  		this.specie.films = this.setArrayFilms(response.data.films);
								this.specie.people = this.setArray(response.data.people);
								this.loading = false;
						  })
						  .catch((error) => {
						  		this.loading = false;
						  		this.error = true;
						  })
			},
			createSpecieSimpleData(data){
				this.specie.name = data.name;
				this.specie.classification = data.classification;
				this.specie.designation = data.designation;
				this.specie.average_height = data.average_height;
				this.specie.skin_colors = data.skin_colors;
				this.specie.hair_colors = data.hair_colors;
				this.specie.eye_colors = data.eye_colors;
				this.specie.average_lifespan = data.average_lifespan;
				this.specie.language = data.language;
				this.specie.url = data.url;
			},
			setHomeworld(homeworldUrl) {
				this.$http.get(homeworldUrl)
						.then((response) => {
							this.specie.homeworld = { name: response.data.name, url: response.data.url};
						})
						.catch((error) => {
							this.specie.homeworld = {error: true};
						})
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
				this.$http.get(urls.imageSearch + this.specie.name) 
					.then((response) => {
						this.image = response.data.items[0].pagemap.cse_image[0].src;
					})
					.catch((error) => {
					 	this.imageError = true;
					});
			}
		},
		mounted() {
			this.getSpecie(this.specieId);
		}
	}
</script>

<style scoped>
	.name {
		padding-top: 60px;
	}

	@media screen and (max-width: 767px) {
		.specieComponents {
			padding-left: 70px;
			padding-right: 70px;
			text-align: center;
			margin-bottom: 25px;
		}
	}
</style>