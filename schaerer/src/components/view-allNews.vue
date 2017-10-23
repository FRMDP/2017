<template>
    <div class="container">
        <div class="row" >
            <div class="col s12 m6 l4" v-for="news in allNews">
                <div class="card large">
                	<router-link to="/oneNews">
	                    <div class="card-image">
	                        <img src="https://picsum.photos/200/150/?random">
	                        <span class="card-title"><strong>{{ news.title }}</strong></span>
	                    </div>
	                </router-link>
                    <div class="card-content">
                        <p class="truncate">
                            {{ news.body }}
                        </p>
                    </div>
                    <div class="card-action">
                        <router-link to="/oneNews">
                            <p>Read more</p>
                        </router-link>
                   <!--     <p class="left-align">By:{{ news.reporter.name }}</p> -->
                        <p class="right-align">{{ news.date }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default{
		data(){
			return{
				allNews: []
			}
		},
		created(){
            this.$http.get('http://192.168.99.100:8080/news')
                .then(response => {
                    this.allNews = response.data._embedded.news;
                    })
                .catch(error => {
                    console.log(error); 
                });
		}
	}
</script>