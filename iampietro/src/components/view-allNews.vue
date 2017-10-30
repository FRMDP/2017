<template>
	<div class="section dale">
			<div class="row">
				<div class="col s12 m12 l12" v-if="!news.length">
	                <h4 class="center-align">Do you like this grey bar?</h4>
	                <h4 class="center-align">(It's because there's no news)</h4>
	            </div>
				<div v-for="particularNew in news">
					<p v-if="isConnected">We're connected to the server!</p>
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
									<p class="right green-text" @click="setParticularNew(particularNew)">Read More</p>
								</router-link>
								<p class="coldNews center-align">Cold News</p>
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
		    	isConnected: false,
		    	socket: '',
		    	socketMessage : ''
			}
		},
		sockets: {
		    connect() {
		      // Fired when the socket connects.
		      this.isConnected = true;
		    },

		    disconnect() {
		      this.isConnected = false;
		    },

		    // Fired when the server sends something on the "messageChannel" channel.
		    messageChannel(data) {
		      this.socketMessage = data
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
				this.socket.emit('countingReads', news.title);
			},
			someMethod(){
				this.visitedNews.forEach(visitedN => {
					this.news.indexOf(visitedN).visits = visitedN.visits;
				})
			}
		},
		created() {
			this.getNews();
			this.socket = io("http://localhost:3000");
		}
	}
</script>

<style scoped>
	.dale {
		background-color: #eeeeee;
	}

</style>