<template>
	<div class="navbar">
		<nav class="white" role="navigation">
    		<div class="nav-wrapper container">
            <router-link to="/news" class="brand-logo blue-text text-darken-4" id="logo">The newest news in the new world</router-link>
			<ul class="right hide-on-med-and-down">
                <li v-for="category in categories" @click="setCategoryNewsHref(category._links.news.href)">
                    <router-link to="/category" class="black-text">
                        {{category.name}}
                    </router-link>
                </li>
                <li>
                    <router-link to="/new" class="black-text">Add the newest news</router-link>
                </li>
			</ul>
    		</div>
    	</nav>
	</div>
</template>

<script>
    export default {
    	name: 'sdNavbar',
        data(){
            return{
                categories: []
            }
        },
        methods:{
            setCategoryNewsHref(href){
                this.$emit('setCategoryNewsHref', href);
            }
        },
        created(){
            this.$http.get('http://192.168.99.100:8080/categories')
                .then(response => {
                    this.categories = response.data._embedded.categories;
                    })
                .catch(error => {
                    console.log(error); 
                });
        }
    }
</script>

<style>
    #logo{
        font-size: 25px;
    }

	#entertainment:hover {
		background-color: #f06292;
	}

	#sports:hover {
		background-color: #66bb6a;
	}

	#economy:hover {
		background-color: #d50000;
	}

	#world:hover {
		background-color: #aeea00;
	}

	#politics:hover {
		background-color: #1a237e;
	}

	#local:hover {
		background-color: #1565c0;
	}
</style>