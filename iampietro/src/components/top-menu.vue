<template>
	<div class="navbar navbar-fixed">
    		<nav class="white" role="navigation">
	    		<div class="nav-wrapper container">
	    			<router-link to="/news" class="brand-logo blue-text text-darken-4">Sputnik</router-link>
	    			<ul class="right hide-on-med-and-down">
	    				<li v-for="category in categories">
	    					<router-link :to="{ name: 'genre', params: { id: category.uid }}" class="black-text">{{ category.name }}</router-link>
	    				</li>
	    				<li>
	    					<router-link to="/createNew" class="waves-effect waves-light btn" id="createNews">Create News</router-link>
	    				</li>
	    			</ul>
	    			<router-link to="/particularNew/:id"></router-link>
	    		</div>
	    	</nav>
    	</div>
</template>

<script>
	export default {
		name: 'topMenu',
		data() {
			return {
				categories: []
			}
		},
		created() {
			this.$http.get('https://utn-newspaper-api.herokuapp.com/categories')
					.then(response => {
						this.categories = response.data._embedded.categories;
					})
					.catch(error => {
						console.log(error);	
					})
		}
	}
</script>