<template>
	<div class="section dale">
			<div class="row">
				<div class="col s12 m12 l12" v-if="!news.length">
	                <h4 class="center-align">Do you like this grey bar?</h4>
	                <h4 class="center-align">(It's because there's no news)</h4>
	            </div>
				<div v-for="particularNew in news">
					<div class="col l4">
						<div class="card forCards">
							<div class="card-content">
								<strong><h4 class="card-title black-text">
									{{ particularNew.title }}
								</h4></strong>
								<p class="truncate card-text black-text">
									{{ particularNew.body }}
								</p>
								<router-link to="/particularNew">
									<p class="right green-text"  @click="setParticularNew(particularNew)">Read More</p>
								</router-link>
								<p v-if="!visits[particularNew.uid]" class="News center-align green-text" 			style="margin-top: 39px;">0 visit</p>
								<p v-else class="News center-align green-text" style="margin-top: 39px;">{{ visits[particularNew.uid]}} visits</p>
							</div>
						</div>
					</div>
				</div> 
			</div>
	</div>
</template>

<script>
	import io from "socket.io-client";

	export default {
		name: 'viewAllNews',
		props: ['visitedNews'],
		data() {
			return {
		    	news: [],
		    	socket: '',
		    	visits: []
			}
		},
		sockets: {
		    // Fired when the server sends something on the "messageChannel" channel.
		    countingReads(dataAboutNews) {
		      this.visits = dataAboutNews;
		    },
		    giveMe(data){
		      this.visits = data;
		    }
		},
		methods: {
			getNews() {
				this.$http.get('https://utn-newspaper-api.herokuapp.com/news')
					.then(response => {
						this.news = response.data._embedded.news;
					})
					.catch(error => {
						console.log(error);	
					})
			},
			setParticularNew(news){
				this.$emit('setParticularNew', news);
				this.socket.emit('countingReads', news.uid);
			}
		},
		created() {
			this.getNews();
			this.socket = io("http://localhost:3000");
			this.socket.emit('giveMe', 0);
		}
	}
</script>

<style scoped>
	.dale {
		background-color: #eeeeee;
	}

</style>