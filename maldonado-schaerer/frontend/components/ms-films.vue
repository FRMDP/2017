<template>
	<div :id="side">
		<div v-if="loading">
			<ms-loader ></ms-loader>
		</div>

		<!-- FILMS -->
		<div v-for="film in films">
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
			<div class="parallax" 
				style="background-image: url('https://picsum.photos/1300/700/?random')">
				<!-- '../../public/images/thePhantonMenace.jpg' -->
			</div>
		</div>
		<!-- END FILMS V-FOR -->
	</div>
</template>

<script>
	import msLoader from './ms-loader.vue';

	export default{
		name: 'msFilms',
		components: {
			msLoader
		},
		data() {
			return {
				films: [],
				loading: true,
			}
		},
		computed: {
			side() {
				return this.$store.state.side;
			}
		},
		methods: {
			getFilms() {
				this.$http.get('https://swapi.co/api/films/')
					.then((response) => {
						let auxFilms = response.data.results;
						auxFilms = auxFilms.sort(function(a, b){
							return a.episode_id - b.episode_id;
						});
						this.films = auxFilms;
						this.loading=false;
					})
					.catch((error) => {
						console.log(error);
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