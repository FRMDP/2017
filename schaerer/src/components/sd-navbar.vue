<template>
	<div class="navbar">
		<nav class="white" role="navigation">
    		<div class="nav-wrapper container">
            <router-link to="/news" class="brand-logo blue-text text-darken-4" id="logo">The newest news in the new world</router-link>
			<ul class="right hide-on-med-and-down">
                <li v-for="category in categories">
                    <router-link :to="{name: 'category', params: {id: category.id}}" class="black-text" v-bind:id="category.name">
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
        created(){
            this.categories = this.$categoryStorageService.getAllCategories();
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