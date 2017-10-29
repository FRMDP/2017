<template>
	<div class="card">
		<div class="card-content">
			<h3>You are in our {{category.name}} seccion</h3>
			<div class="row">
				<div class="col s12 m6">
					<h3 v-if="!noticias.length">Looks so empty</h3>
					<div class="card blue-grey darken-1" v-else v-for="noticia in noticias">
						<div class="card-content white-text">
							<span class="card-title">{{noticia.title}}</span>
							<p>Date:{{noticia.date}}</p>
						</div>
						<div class="card-action">
							<a href="#"><router-link v-bind:to="'/news/'+noticia.uid">Read</router-link></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import storageService from '../services/storageService';
	import categoriesService from '../services/categoriesService';
	export default {
		name: 'viewCategory',
		data() {
			return {
				noticias:[],
				category: {
					uid: 0,
					name: ''
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
			traer() {
				return storageService.traerNoticiaByCategory(this.uid);
			},

			traerCategoria(){
				return categoriesService.getCategoryById(this.uid)
			}
		},
		watch: {
			'$route.params.uid': function() {
				this.noticias=this.traer();
				this.category=this.traerCategoria();
			}
		},
		created() {
			this.noticias=this.traer();
			this.category=this.traerCategoria();
		}
	}
</script>