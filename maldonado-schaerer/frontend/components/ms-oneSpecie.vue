<template>
	<div :id="side">
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
						<b-list-group-item>Classification: {{ specie.classification }}</b-list-group-item>
						<b-list-group-item>Designation: {{ specie.designation }}</b-list-group-item>
						<b-list-group-item>Average height: {{ specie.average_height }}</b-list-group-item>
						<b-list-group-item>Skin colors: {{ specie.skin_colors }}</b-list-group-item>
						<b-list-group-item>Hair colors: {{ specie.hair_colors }}</b-list-group-item>
						<b-list-group-item>Eye colors: {{ specie.eye_colors }}</b-list-group-item>
						<b-list-group-item>Average lifespan: {{ specie.average_lifespan }}</b-list-group-item>
						<b-list-group-item>Homeworld: 
							<router-link :to="{name: 'onePlanet', params: {id: getId(specie.homeworld.url)}}">
							{{ specie.homeworld.name }}</router-link>
						</b-list-group-item>
						<b-list-group-item>Language: {{ specie.language }}</b-list-group-item>
					</b-list-group>
				</b-col>
			</b-row>
			<b-row>
				<b-col cols="12" md="3" lg="3">
					<b-list-group>
						<b-list-group-item active>
					    	APPEARANCES
					  	</b-list-group-item>
						<b-list-group-item v-for="film in specie.films">
							<router-link :to="{name: 'oneFilm', params: {id: getId(film.url)}}">{{ film.title }}</router-link>
						</b-list-group-item>
					</b-list-group>
				</b-col>
				<b-col cols="12" md="3" lg="3">
					<b-list-group>
						<b-list-group-item active>
					    	PEOPLE
					  	</b-list-group-item>
						<b-list-group-item v-for="people in specie.people">
							<router-link :to="{name: 'onePeople', params: {id: getId(people.url)}}">{{ people.name }}</router-link>
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
		name: 'msOneSpecie',
		components: {
			msLoader,
			msPicLoader
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
				loading: true
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
				this.$http.get('https://swapi.co/api/species/' + id + '/')
						  .then((response) => {
						  		this.createSpecieSimpleData(response.data);
						  		this.setImage();
						  		this.setHomeworld(response.data.homeworld);
						  		this.specie.films = this.setArrayFilms(response.data.films);
								this.specie.people = this.setArray(response.data.people);
								this.loading = false;
						  })
						  .catch((error) => {
						  		console.log(error);
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
							console.log(error);
						})
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
				this.$http.get('https://www.googleapis.com/customsearch/v1?key=AIzaSyAI-2lr6p-qas_iY-jwcjsb3BEpIxQK7ik&cx=007669208564501026839%3Art6dk6nxzxq&q='+ this.specie.name) 
					.then((response) => {
						this.image = response.data.items[0].pagemap.cse_image[0].src;
					})
					.catch((error) => {
					 	console.log(error);
					});
			}
		},
		mounted() {
			this.getSpecie(this.specieId);
		}
	}
</script>

<style>
	.name {
		padding-top: 60px;
	}
</style>