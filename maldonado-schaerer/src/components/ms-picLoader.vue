<template>
	<div class="loader-ring">
	  	<div class="loader-ring-light"></div>
	  	<div class="loader-ring-track"></div>
	</div>
</template>

<script>
	export default {
		name: 'msPicLoader'
	}
</script>

<style scoped>
	.relative {
	  position: relative;
	}

	.loader-ring {
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  margin: -120px 0 0 -120px;
	  margin-left: -50px;
	  width: 100px;
	  height: 100px;
	}

	.loader-ring-light {
	  width: 100px;
	  height: 100px;
	  -moz-border-radius: 240px;
	  -webkit-border-radius: 240px;
	  border-radius: 240px;
	  -moz-box-shadow: 0 4px 0 yellow inset;
	  -webkit-box-shadow: 0 4px 0 yellow inset;
	  box-shadow: 0 4px 0 yellow inset;
	  animation: rotate-360 2s linear infinite;
	}

	.loader-ring-track {
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 100px;
	  height: 100px;
	  -moz-border-radius: 240px;
	  -webkit-border-radius: 240px;
	  border-radius: 240px;
	  -moz-box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.3) inset;
	  -webkit-box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.3) inset;
	  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.3) inset;
	}

	@keyframes rotate-360 {
	  from {
	    -moz-transform: rotate(0);
	    -ms-transform: rotate(0);
	    -webkit-transform: rotate(0);
	    transform: rotate(0);
	  }
	  to {
	    -moz-transform: rotate(360deg);
	    -ms-transform: rotate(360deg);
	    -webkit-transform: rotate(360deg);
	    transform: rotate(360deg);
	  }
	}
	body {
	  background-color: rgba(0, 0, 0, 0.87);
	}

</style>