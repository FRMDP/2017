<template>
	<div class="card">
		<div class="card-content">
			<h3>Reading seccion</h3>
			<div class="row">
				<div class="col s12 m5">
					<div class="card-panel teal">
						<p>Title: {{news.title}}</p>

						<p>Date: {{news.date}}</p>

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
					uid: 0,
					title: '',
					body: '',
					category: {
						uid: 0,
						name: ''
					},
					reporter: {
						uid: 0,
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
			uid() {
				return this.$route.params.uid;
			}
		},
		methods: {
			traerNoticia() {
				return storageService.traerNoticiaById(this.uid);
			}
		},
		watch: {
			'$route.params.uid': function() {
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