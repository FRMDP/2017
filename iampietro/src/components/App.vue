<template>
    <div class="app">
    	<div class="navbar navbar-fixed">
    		<nav class="white" role="navigation">
	    		<div class="nav-wrapper container"><router-link to="/news" class="brand-logo blue-text text-darken-4">Sputnik</router-link>
	    			<ul class="right hide-on-med-and-down">
	    				<li>
	    					<router-link to="/category/1" class="black-text" id="sports">Sports</router-link>
	    				</li>
	    				<li>
	    					<router-link to="/category/2" class="black-text" id="local">Local</router-link>
	    				</li>
	    				<li>
	    					<router-link to="/category/3" class="black-text" id="world">World</router-link>
	    				</li>
	    				<li>
	    					<router-link to="/category/4" class="black-text" id="economy">Economy</router-link>
	    				</li>
	    				<li>
	    					<router-link to="/category/5" class="black-text" id="politics">Politics</router-link>
	    				</li>
	    				<li>
	    					<router-link to="/category/6" class="black-text" id="entertainment">Entertainment</router-link>
	    				</li>
	    				<li>
	    					<router-link to="/createNew" class="waves-effect waves-light btn" id="createNews">Create News</router-link>
	    				</li>
	    			</ul>
	    			<router-link to="/particularNew/:id"></router-link>
	    		</div>
	    	</nav>
    	</div>
    	<router-view></router-view>
    </div>
</template>

<script>
    export default {

	}
</script>

<style>

</style>
