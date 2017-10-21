<template>
	<div class="container">
		<div class="row">
			<div class="col s12 m8 l6">
				<h6>
					<router-link v-bind:to="'/category/' + oneNew.category.id" >
						<i class="fa fa-caret-left"></i> 
						{{ oneNew.category.name }}
					</router-link>
				</h6>
			</div>
		</div>
		<div class="row">
			<div class="col s12 m10 offset-m2 l10 offset-l2">
				<h2> {{ oneNew.title }} </h2>
			</div>
		</div>
		<div class="row">
			<div class="col 12 m12 l12">
				<img src="https://picsum.photos/950/350/?random">
			</div>
		</div>
		<div class="row">
			<div class="col s4 m3 l3 center-align">
				<img class="reporterImage" src="https://picsum.photos/75/75/?random">
				<br>
				<router-link v-bind:to="'/reporter/' + oneNew.reporter.id" class="reporterName">
					{{ oneNew.reporter.name }}
				</router-link>
			</div>
			<div class="col s4 m3 l3">
				<p>Seguime en las redes sociales</p>
			</div>
			<!-- Icons facebook, twitter, instagram -->
			<div class="icons">
				<div class="col s4 m6 l6 push-s1 push-m2 push-l2">
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
			<div class="col s12 m12 l12 body">
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
			getNew(id) {
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
		padding-bottom: -20px !important;
	}
	.reporterImage {
		border-radius: 50%;
	}
	.body {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
	.reporterName {
		padding-left: 5px;
	}
</style>