<template>
	<div :id="side">
		<div v-if="loading">
			<ms-loader></ms-loader>
		</div>
		
		<div v-if="!loading">
			<b-row>
			<!-- FILM BEGGINING TEXT-->
				<link href='https://fonts.googleapis.com/css?family=Open+Sans' 
						rel='stylesheet' type='text/css'>

					<div id="starwars" class="animate">
					  <p class="intro">
					    A long time ago, in a galaxy far, far away... 
					  </p>
					  <img src="http://vignette1.wikia.nocookie.net/disney/images/8/8b/Starwars-logo.png" 
					  		class="logo" /> <!-- CHANGE TO USE IMAGE SEARCH API -->
					  <div id="reel">
					    <div class="content">
					      <h1 class="episodeNumber">Episode {{integerToRoman(film.episode_id)}} </h1>
					      <h2 class="episodeTitle">{{film.title}}</h2>
					      <p class="episodeOpeningCrawl">{{film.opening_crawl}}</p>
					    </div>
					  </div>
					  
					  <audio 
					  	src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/244725/MainTitle.ogg" 
					  	onloadeddata="var audioPlayer = this; setTimeout(function() { audioPlayer.play(); }, 4500)">
					  </audio>
					  
					</div>
			</b-row>
				
			<!-- END FILM BEGGINING TEXT-->
			<b-container class="bv-example-row" style="margin-top:200px;margin-bottom:200px;">
				<b-row align-h="center">
					<b-col cols="6">
						<h2 style="text-align:center;">Episode {{integerToRoman(film.episode_id)}}:</h2>
						<h1 class="filmTitle">{{film.title}}</h1>
						<h2>Director: {{film.director}}</h2>
						<h3>Producer: {{film.producer}}</h3>
						<h4>Release Date: {{film.release_date}}</h4>
					</b-col>
					<b-col cols="6">
						<b-img src="https://picsum.photos/500/300/?random" fluid />
					</b-col>
				</b-row>
			</b-container>

			<b-row align-h="center" style="margin-top: 45px;">
				<b-col cols="12" md="2" lg="2">
					<b-list-group>
						<b-list-group-item active>
					    	CHARACTERS
					  	</b-list-group-item>
						<b-list-group-item v-for="character in film.characters">
							<router-link :to="{name: 'onePeople', params: {id: getId(character.url)}}">
								<h5>{{character.name}}</h5>
							</router-link>
						</b-list-group-item>
					</b-list-group>
				</b-col>
				<b-col cols="12" md="2" lg="2">
					<b-list-group>
						<b-list-group-item active>
					    	PLANETS
					  	</b-list-group-item>
						<b-list-group-item v-for="planet in film.planets">
							<router-link :to="{name: 'onePlanet', params: {id: getId(planet.url)}}">
								<h5>{{planet.name}}</h5>
							</router-link>
						</b-list-group-item>
					</b-list-group>
				</b-col>
				<b-col cols="12" md="2" lg="2">
					<b-list-group>
						<b-list-group-item active>
					    	SPECIES
					  	</b-list-group-item>
						<b-list-group-item v-for="specie in film.species">
							<router-link :to="{name: 'oneSpecie', params: {id: getId(specie.url)}}">
								<h5>{{specie.name}}</h5>
							</router-link>
						</b-list-group-item>
					</b-list-group>
				</b-col>
				<b-col cols="12" md="2" lg="2">
					<b-list-group>
						<b-list-group-item active>
					    	STARSHIPS
					  	</b-list-group-item>
						<b-list-group-item v-for="starship in film.starships">
							<router-link :to="{name: 'oneStarship', params: {id: getId(starship.url)}}">
								<h5>{{starship.name}}</h5>
							</router-link>
						</b-list-group-item>
					</b-list-group>
				</b-col>
				<b-col cols="12" md="2" lg="2">
					<b-list-group>
						<b-list-group-item active>
					    	VEHICLES
					  	</b-list-group-item>
						<b-list-group-item v-for="vehicle in film.vehicles">
							<router-link :to="{name: 'oneVehicle', params: {id: getId(vehicle.url)}}">
								<h5>{{vehicle.name}}</h5>
							</router-link>
						</b-list-group-item>
					</b-list-group>
				</b-col>
			</b-row>

		<!-- AN EXTRA BECAUSE WHY NOT? -->
		<router-link to="/films"><h3>BACK TO ALL FILMS</h3></router-link>
		</div>
		
	</div>
</template>

<script>
	import msLoader from './ms-loader.vue';

	export default{
		name: 'msOneFilm',
		components: {
			msLoader,
		},
		data(){
			return{
				film: {
					title: '',
					episode_id: '',
					opening_crawl: '',
					director: '',
					producer: '',
					release_date: '',
					url: '',
					characters: [],
					species: [],
					planets: [],
					starships: [],
					vehicles: []
				},
				loading: true,
			}
		},
		computed: {
            filmId() {
                return this.$route.params.id;
            },
            side() {
				return this.$store.state.side;
			}
        },
		methods: {
			getFilm(id){
				this.$http.get('https://swapi.co/api/films/' + id)
					.then((response) => {
						this.createFilmSimpleData(response.data);
						this.film.characters = this.setArray(response.data.characters);
						this.film.species = this.setArray(response.data.species);
						this.film.planets = this.setArray(response.data.planets);
						this.film.starships = this.setArray(response.data.starships);
						this.film.vehicles = this.setArray(response.data.vehicles);
						this.loading = false;
					})
					.catch((error) => {
						console.log(error);
					});
			},
			createFilmSimpleData(data){
				this.film.title = data.title;
				this.film.episode_id = data.episode_id;
				this.film.opening_crawl = data.opening_crawl;
				this.film.director = data.director;
				this.film.producer = data.producer;
				this.film.release_date = data.release_date;
				this.film.url = data.url;
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
				while (i--) {
					roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
				}
				return Array(+digits.join("") + 1).join("M") + roman_num;
			},
			getId(url){
		    	const urlArr = url.split("/");
		    	return urlArr[urlArr.length-2];
		    }
		},
		mounted(){
			this.getFilm(this.filmId);
		}
	}
	
</script>

<style scoped>

	body {
	  background-size: cover;
	  position: relative;
	  height: 100%;
	  font-family: 'Open Sans', sans serif;
	}

	.episodeNumber {
		font-size: 100px !important;
	}

	.episodeTitle {
		font-size: 140px !important;
		text-transform: uppercase;
		font-family: 'Pathway Gothic One';
	}

	.episodeOpeningCrawl {
		margin-top: -30px;
	}

	.filmTitle {
		text-transform: uppercase;
	}

	.element {
		padding-top: 15px;
		padding-left: 15px;
		padding-right: 15px;
		padding-bottom: 15px;
	}

	.filmElements {
		margin-top: 40px;
		margin-bottom: 40px;
	}

	h5 {
		color: black;
	}

	/* BEGINNING TEXT */
	#starwars {
	  background-image: url(https://i.ytimg.com/vi/JquobII5VjA/maxresdefault.jpg);
	  position: relative;
	  height: 600px;
	  width: 100%;
	}
	.animate .intro {
	  font-size: 250%;
	  color: #19a3c8;
	  width: 578px;
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%, -50%);
	  animation: intro 5s linear 0s;
	  opacity: 0;
	}
	.animate .logo {
	  position: absolute;
	  width: 0;
	  height: auto;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%, -50%);
	  animation: logo 10s linear 5s;
	  opacity: 0;
	}
	.animate #reel {
	  width: 1200px;
	  margin-left: -589px;
	  position: absolute;
	  bottom: 0;
	  left: 50%;
	  height: 100em;
	  overflow: hidden;
	  transform: perspective(255px) rotateX(30deg);
	  transform-origin: 50% 100%;
	  color: #ffec01;
	  font-weight: bold;
	  font-size: 400%;
	  text-align: justify;
	}
	.animate #reel div {
	  position: absolute;
	  top: 100%;
	  animation: reel 53s linear 12s;
	}
	.animate #reel div p {
	  line-height: 1.5em;
	  margin-top: 50px;
	}
	.animate #reel div p:first-child {
	  margin-top: 0;
	}
	.animate #reel div h1, .animate #reel div h2 {
	  text-align: center;
	  margin-bottom: 25px;
	}
	.animate button {
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%, -50%);
	  font-size: 50px;
	  background: none;
	  border: 0;
	  font-weight: bold;
	  color: #ffec01;
	  opacity: 1;
	  cursor: pointer;
	  animation: reset 66s linear;
	}
	@keyframes reel {
	  0% {
	    top: 100%;
	    opacity: 1;
	  }
	  95% {
	    opacity: 1;
	  }
	  100% {
	    top: 50%;
	    opacity: 0;
	  }
	}
	@keyframes intro {
	  0% {
	    opacity: 0;
	  }
	  20% {
	    opacity: 1;
	  }
	  80% {
	    opacity: 1;
	  }
	  100% {
	    opacity: 0;
	  }
	}
	@keyframes logo {
	  0% {
	    width: 300px;
	    opacity: 1;
	  }
	  10% {
	    width: 300px;
	    opacity: 1;
	  }
	  15% {
	    width: 300px;
	  }
	  90% {
	    width: 10px;
	    opacity: 1;
	  }
	  100% {
	    width: 0;
	    opacity: 0;
	  }
	}
	@keyframes reset {
	  0% {
	    opacity: 0;
	    cursor: default;
	  }
	  99% {
	    opacity: 0;
	    cursor: default;
	  }
	  100% {
	    opacity: 1;
	    display: block;
	  }
	}
</style>