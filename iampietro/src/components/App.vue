<template>
    <div class="app">
    	<div class="navbar">
    		<nav class="white" role="navigation">
	    		<div class="nav-wrapper container"><router-link to="/news" class="brand-logo blue-text text-darken-4">Sputnik</router-link>
	    			<ul class="right hide-on-med-and-down">
	    				<li>
	    					<router-link to="/sports" class="black-text" id="sports">Sports</router-link>
	    				</li>
	    				<li>
	    					<router-link to="/economy" class="black-text" id="economy">Economy</router-link>
	    				</li>
	    				<li>
	    					<router-link to="/politics" class="black-text" id="politics">Politics</router-link>
	    				</li>
	    				<li>
	    					<router-link to="/entertainment" class="black-text" id="entertainment">Entertainment</router-link>
	    				</li>
	    				<li>
	    					<router-link to="/world" class="black-text" id="world">World</router-link>
	    				</li>
	    				<li>
	    					<router-link to="/localy" class="black-text" id="localy">Localy</router-link>
	    				</li>
	    				<li>
	    					<router-link to="new/:id"></router-link>
	    				</li>
	    			</ul>
			    	<router-view></router-view>
	    		</div>
	    	</nav>
    	</div>
    	
    </div>
</template>

<script>
    export default {

    }
</script>

<style>

</style>
