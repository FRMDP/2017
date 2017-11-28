<template>
	<div class="app">
		<ms-navbar></ms-navbar>
		<router-view></router-view>
	    <ms-footer></ms-footer>
    </div>
</template>

<script>
	import msNavbar from './ms-navbar.vue';
	import msFooter from './ms-footer.vue';

	export default{
		name: 'app',
		components: {
			msNavbar,
			msFooter
		},
		created(){
			this.$store.commit('chooseSide', this.$chatStorageService.getSide());
		}
	}
</script>

<style>
	#yodaSide {
		background: -webkit-linear-gradient(left, rgb(135,220,90) 0%,
			rgb(254,254,254) 30%,rgb(254,254,254) 50%,
			rgb(254,254,254) 70%,rgb(135,220,90) 100%);
	}
	#vaderSide {
		background: -webkit-linear-gradient(left, rgba(229,17,21,1) 0%,
			rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,
			rgba(254,254,254,1) 71%,rgba(229,17,21,1) 100%);
	}
	#winduSide {
		background: -webkit-linear-gradient(left, rgba(202,116,221,1) 0%,
			rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,
			rgba(254,254,254,1) 71%,rgba(202,116,221,1) 100%);
	}
	#obiSide {
		background: -webkit-linear-gradient(left, rgba(55,132,214,1) 0%,
			rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,
			rgba(254,254,254,1) 71%,rgba(55,132,214,1) 100%);
	}
</style>