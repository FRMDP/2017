<template>
	<div class="navbar">
		<nav class="white" role="navigation">
    		<div class="nav-wrapper container"><router-link to="/news" class="brand-logo blue-text text-darken-4">The newest news in the new world</router-link>
    			<ul class="left hide-on-med-and-down">
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
    			</ul>
    		</div>
    	</nav>
	</div>
</template>

<script>
    export default {
    	name: 'sdNavbar'
    }
</script>

<style>
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