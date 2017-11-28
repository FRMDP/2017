<template>
	<div>
		<div :id="side">
			<div v-if="loading">
				<ms-loader ></ms-loader>
			</div>
			<!-- FILMS -->
			<div v-for="(film,index) in films">
				<b-container>
					<b-row>
						<b-col>
							<router-link :to="{name: 'oneFilm', params: {id: getId(film.url)} }">
								<h3 class="film">
									EPISODE {{ integerToRoman(film.episode_id) }}: {{ film.title }}
								</h3>
							</router-link>
							<h4 class="film">Director: {{ film.director }}</h4>
							<h5 class="film">Producer: {{ film.producer }}</h5>
							<h6 class="film">Release Date: {{ film.release_date }}</h6>
						</b-col>
					</b-row>
				</b-container>
				<div class="parallax" v-if="images[index] && images[index].error"
					style="background-image: url('http://92moose.fm/files/2017/08/JabbaComedy.png')">
				</div>
				<div class="parallax" v-else-if="images[index]"
					:style="{'background-image': 'url(' + images[index].image + ')'}" >	
				</div>
				<div v-else>
				  	<h1 class="picLoader">
				  		The picture is loading, this is the loader
				  		<ms-picLoader style="margin-top:100px;"></ms-picLoader>
				  	</h1>
				</div>
			</div>
			<!-- END FILMS V-FOR -->
			<ms-atAtWalker></ms-atAtWalker>
		</div>
		<div v-if="error">
			<ms-error></ms-error>
		</div>
	</div>
</template>

<script>
	import msLoader from './ms-loader.vue';
	import msAtAtWalker from './ms-atAtWalker.vue';
	import msPicLoader from './ms-picLoader.vue';
	import msError from './ms-error.vue';
	import urls from '../configuration/urls.js';

	export default{
		name: 'msFilms',
		components: {
			msLoader,
			msAtAtWalker,
			msPicLoader,
			msError
		},
		data() {
			return {
				films: [],
				loading: true,
				images: [],
				error: false
			}
		},
		computed: {
			side() {
				return this.$store.state.side;
			}
		},
		methods: {
			getFilms() {
				this.$http.get(urls.baseInfoSearch + 'films/')
					.then((response) => {
						this.error = false;
						let auxFilms = response.data.results;
						auxFilms = auxFilms.sort(function(a, b){
							return a.episode_id - b.episode_id;
						});
						this.films = auxFilms;
						this.setAllImages();
						this.loading=false;
					})
					.catch((error) => {
						this.loading = false;
						this.error = true;
					});
			},
			setAllImages(){
				this.films.forEach((film, index)=>{
					this.setImage(film, index);
				});
			},
			setImage(film, index){
				this.$http.get(urls.filmImageSearch + film.title + urls.imageAdittional)
					.then((response) => {
						this.images.splice(index, 0, {index: index, image: response.data.items[0].pagemap.cse_image[0].src});
					})
					.catch((error) => {
					 	this.images.splice(index, 0, {index: index, error: true});
					});
			},
			integerToRoman(num) {
				if (typeof num !== 'number') {
					return false; 
				}

				let digits = String(+num).split(""),
				key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
				"","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
				"","I","II","III","IV","V","VI","VII","VIII","IX"],
				roman_num = "",
				i = 3;
				while (i--)
				roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
				return Array(+digits.join("") + 1).join("M") + roman_num;
			},
			getId(url){
		    	const urlArr = url.split("/");
		    	return urlArr[urlArr.length-2];
		    }
		},
		mounted() {
			this.getFilms();
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
	b-row {
		margin-bottom: 50px;
	}
	.film {
		margin-top: 30px;
		text-align: center;
		color: black;
	}
	.parallax {
	/* Set a specific height */
    min-height: 500px; 
    min-width: 100%;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>