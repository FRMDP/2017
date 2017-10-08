<template>
	<div class="section no-pad-bot">
		<div class="container">
			<h1 class="header black-text">{{ New.title }}</h1>
			<p class="black-text"><strong>{{ New.date }}</strong></p>
			<p class="right-align black-text">Autor: <strong>{{ New.reporter.name }}</strong></p>
			<hr>
			<div class="row center">
				<p class="light black-text forP">
					{{ New.body }}
				</p>
			</div>
			<div class="row">
				<p class="black-text">En esta nota: <strong>{{ New.category.name }}</strong></p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

				Reporter: {
	    		id: '',
	    		name: ''
		    	},
		    	Category: {
		    		id: '',
		    		name: ''
		    	},
		    	New: {
		    		id: '',
		    		title: 'Some random thing',
		    		body: 'Ayudamos en la logística para que se pueda concretar esta fiesta que se inició en 1999 entre amigos y se transformó en un evento cultural que muestra que los jóvenes paranaenses saben organizar y son responsablesAyudamos en la logística para que se pueda concretar esta fiesta que se inició en 1999 entre amigos y se transformó en un evento cultural que muestra que los jóvenes paranaenses saben organizar y son responsablesAyudamos en la logística para que se pueda concretar esta fiesta que se inició en 1999 entre amigos y se transformó en un evento cultural que muestra que los jóvenes paranaenses saben organizar y son responsablesAyudamos en la logística para que se pueda concretar esta fiesta que se inició en 1999 entre amigos y se transformó en un evento cultural que muestra que los jóvenes paranaenses saben organizar y son responsablesAyudamos en la logística para que se pueda concretar esta fiesta que se inició en 1999 entre amigos y se transformó en un evento cultural que muestra que los jóvenes paranaenses saben organizar y son responsablesAyudamos en la logística para que se pueda concretar esta fiesta que se inició en 1999 entre amigos y se transformó en un evento cultural que muestra que los jóvenes paranaenses saben organizar y son responsablesAyudamos en la logística para que se pueda concretar esta fiesta que se inició en 1999 entre amigos y se transformó en un evento cultural que muestra que los jóvenes paranaenses saben organizar y son responsablesAyudamos en la logística para que se pueda concretar esta fiesta que se inició en 1999 entre amigos y se transformó en un evento cultural que muestra que los jóvenes paranaenses saben organizar y son responsablesAyudamos en la logística para que se pueda concretar esta fiesta que se inició en 1999 entre amigos y se transformó en un evento cultural que muestra que los jóvenes paranaenses saben organizar y son responsablesAyudamos en la logística para que se pueda concretar esta fiesta que se inició en 1999 entre amigos y se transformó en un evento cultural que muestra que los jóvenes paranaenses saben organizar y son responsablesAyudamos en la logística para que se pueda concretar esta fiesta que se inició en 1999 entre amigos y se transformó en un evento cultural que muestra que los jóvenes paranaenses saben organizar y son responsablesAyudamos en la logística para que se pueda concretar esta fiesta que se inició en 1999 entre amigos y se transformó en un evento cultural que muestra que los jóvenes paranaenses saben organizar y son responsablesAyudamos en la logística para que se pueda concretar esta fiesta que se inició en 1999 entre amigos y se transformó en un evento cultural que muestra que los jóvenes paranaenses saben organizar y son responsables',
		    		category: {name: 'sports'},
		    		reporter: {name: 'saraza'},
		    		date: '23-07-1993'
		    	}
			}
		},
		methods: {

		},
		watch: {

		},
		created() {

		}
	}
</script>

