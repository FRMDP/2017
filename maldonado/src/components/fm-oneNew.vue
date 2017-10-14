<template>
	<div class="container">
		<div class="row">
			<div class="col s12 m8 l6">
				<h6>{{ oneNew.category.name }}</h6>
			</div>
		</div>
		<div class="row">
			<div class="col s12 m8 offset-m2 l6 offset-l3">
				<h2> {{ oneNew.title }} </h2>
			</div>
		</div>
		<div class="row">
			<div class="col 12 m12 l12">
				<img src="" alt=""> <!-- imagen mas grande -->
					<p>foto del autor</p>
			</div>
		</div>
		<div class="row">
			<div class="col s8 m6 l4">
				<img src="" alt=""> <!-- iria imagen del autor -->
				<p>{{ oneNew.reporter.name }}</p>
			</div>
			<!-- Icons facebook, twitter, instagram -->
			<div class="icons">
				<div class="col s4 m6 l8 push-s2 push-m4 push-l4">
					<a class="btn-floating waves-effect waves-dark #1a237e indigo darken-4">
						<i class="fa fa-facebook-official"></i>
					</a>
					<a class="btn-floating waves-effect waves-dark #039be5 light-blue darken-1">
						<i class="fa fa-twitter"></i>
					</a>
					<a class="btn-floating waves-effect waves-dark #fb8c00 orange darken-1">
						<i class="fa fa-instagram"></i>
					</a>
					<a class="btn-floating waves-effect waves-dark #ffeb3b yellow">
						<i class="fa fa-snapchat"></i>
					</a>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col s12 m12 l12">
				<h5>{{ oneNew.body }}</h5>
			</div>
		</div>
	</div>
</template>

<script>
	import newsService from '../services/newsService';
	export default {
		name: 'oneNew',
		data() {
			return {
				oneNew: {
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
					date: ''
				}
			}
		},
		methods: {
			getNew(id){
				return newsService.getNew(id);
			}
		},
		watch: {
			'$route.params.id': function() {
				this.oneNew = this.getNew(this.id);
			}
		},
		created() {
			this.oneNew = this.getNew(this.id)
		},
		computed: {
			id() {
				return this.$route.params.id;
			}
		}
	}
</script>

<style>
	.icons {
		padding-bottom: 30px;
	}
</style>