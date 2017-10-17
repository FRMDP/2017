<template>
	<div class="card">
		<div class="card-content">
			<h3>Reading seccion</h3>
			<div class="row">
				<div class="col s12 m5">
					<div class="card-panel teal">
						<p>Title: {{news.title}}</p>
						<p>Category: {{news.category.name}}</p>
						<p>Date: {{news.date}}</p>
						<p>Reporter: {{news.reporter.name}}</p>
						<span class="white-text">{{news.body}}
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import storageService from '../services/storageService';
	export default {
		name: 'viewSpecific',
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
				return storageService.traerNoticiaById(this.id);
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

<style>

</style>