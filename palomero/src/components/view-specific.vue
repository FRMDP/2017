<template>
	<div class="row">
		<div class="col s12 m5">
			<div class="card-panel teal">
				<span class="white-text">{{news.title}}
				</span>
				<span class="white-text">{{news.date}}
				</span>
				<span class="white-text">{{news.body}}
				</span>
				<span class="white-text">{{news.category.name}}
				</span>
				<p>{{news.category.name}}</p>
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