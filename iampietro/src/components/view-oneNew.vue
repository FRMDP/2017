<template>
	<div class="section">
		<div class="container">
			<h1 class="header black-text">{{ particularNew.title }}</h1>
			<p class="black-text"><strong>{{ particularNew.date }}</strong></p>
			<p class="right-align black-text">Autor: <strong>{{ particularNew.reporter.name }}</strong></p>
			<div class="divider"></div>
			<div class="row center">
				<p class="light black-text forP">
					{{ particularNew.body }}
				</p>
			</div>
			<div class="row">
				<p class="black-text">En esta nota: <strong>{{ particularNew.category.name }}</strong></p>
			</div>
		</div>
	</div>
</template>

<script>
	import newsService from '../services/newsService';

	export default {
		data() {
			return {
		    	particularNew: {
		    		id: '',
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
			getNew(idNew) {
				return newsService.getNew(this.id);
			}
		},
		watch: {
			'$route.params.id': function() {
				this.particularNew = this.getNew(this.id);
			}
		},
		created() {
			this.particularNew = this.getNew(this.id);
		},
		computed: {
			id() {
				return this.$route.params.id;
			}

		}
	}
</script>

