<template>
	<h1>ver categoria</h1>
</template>

<script>
	import storageService from '../services/storageService';
		export default {
        name: 'viewCategory',
 		data() {
			return {
				news: {
					id: 0,
					title: '',
					body: '',
					category: {
						id: 0,
						name: ''
					},
					reporter: {
						id: 0,
						name: ''
					},
					date: 0
				}
			}
		},
		computed: {
			params() {
				return this.$route.params;
			},
			id() {
				return this.$route.params.id;
			}
		},
		methods: {
			traerNoticia() {
				return storageService.traerNoticiaByCategory(this.id);
			}
		},
		watch: {
			'$route.params.id': function() {
				this.news = this.traerNoticia();
			}
		},
		created() {
			this.news = this.traerNoticia();
		}
    }
</script>