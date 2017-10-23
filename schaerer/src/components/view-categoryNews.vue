<template>
   <!-- <div v-bind:class="categoryName"> -->
        <div class="container">
            <div class="row" >
                <div class="col s12 m6 l4" v-for="news in allCategoryNews">
                    <div class="card large">
                    	<router-link to="/oneNews"
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
                        <div class="card-action small">
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
    <!-- </div> -->
</template>

<script>
	export default{
        props: ['categoryNewsHref'],
		data(){
			return{
				allCategoryNews: []
			}
		},
       watch: {
            categoryNewsHref: function() {
                this.$http.get(this.categoryNewsHref)
                .then(response => {
                    this.allCategoryNews = response.data._embedded.news;
                    })
                .catch(error => {
                    console.log(error); 
                });
            }
        },
		created(){
            this.$http.get(this.categoryNewsHref)
                .then(response => {
                    this.allCategoryNews = response.data._embedded.news;
                    })
                .catch(error => {
                    console.log(error); 
                });
		}
	}
</script>

<style>
    .entertainment{
        background-color: #f06292;
    }

    .sports{
        background-color: #66bb6a;
    }

    .economy{
        background-color: #d50000;
    }

    .world{
        background-color: #aeea00;
    }

    .politics{
        background-color: #1a237e;
    }

    .local{
        background-color: #1565c0;
    }
</style>