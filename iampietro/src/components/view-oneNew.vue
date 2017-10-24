<template>
	<div class="section">
		<div class="container">
			<h1 class="header black-text">{{ particularNew.title }}</h1>
			<p class="black-text"><strong>{{ particularNew.date }}</strong></p>
			<p class="right-align black-text">Autor: <strong>{{ reporter.name }}</strong></p>
			<div class="divider"></div>
			<div class="row center">
				<p class="light black-text forP">
					{{ particularNew.body }}
				</p>
			</div>
			<div class="row">
				<p class="black-text">En esta nota: <strong>{{ category.name }}</strong></p>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'viewOneNew',
		props: ['particularNew'],
		data() {
			return {
				reporter: {},
				category: {}
		    }
		},
		methods: {
			
		},
		watch: {
			'$route.params.id': function() {
				this.getNew();
			}
		},
		created() {
			this.$http.get(this.particularNew._links.reporter.href)
                .then(response => {
                    this.reporter = response.data;
                    })
                .catch(error => {
                    console.log(error); 
                });
            this.$http.get(this.particularNew._links.category.href)
                .then(response => {
                    this.category = response.data;
                    })
                .catch(error => {
                    console.log(error); 
                });
		},
		computed: {
			id() {
				return this.$route.params.id;
			}

		}
	}
</script>

