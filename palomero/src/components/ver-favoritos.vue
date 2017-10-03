<template>
	<div class="card">
		<div class="card-content">
			<h3>Favorite List</h3>
			<h3 v-if="!personas.length">Looks so empty</h3>
			<div v-else v-for="(persona,index) in personas">
				<div v-if="persona.favs==true">
					<div class="row">
						<div class="col s12 m6">
							<div class="card blue-grey darken-1">
								<div class="card-content white-text">
									<span class="card-title">{{ persona.nombre }} {{ persona.apellido }}</span>
									<p>Age: {{persona.edad}}</p>
									<p>Phone number: {{persona.telefono}}</p>
									<p>Sex: {{persona.sexo}}</p>
								</div>
								<div class="card-action">
									<button class="btn waves-effect waves-light" @click="eliminarFav(index);">Unfave</button>
								</div>
							</div>
						</div>
					</div>  
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'favoritos',
		props:['vista','personas'],

		data(){
			mensaje:false
		},

		computed:{
			esFav(index)
			{
				return this.personas[index].favs;
			},


			returnFavs()
			{
				return this.personas.filter(p => p.favs=true);
			}
		},

		methods:{
			eliminarFav(index)
			{
				for (var i = this.personas.length - 1; i >= 0; i--) {
					if(this.personas[i].index==index)
					{
						this.personas[i].favs=false;
					}
				}
				this.agregarPersonaLocalStorage();

			}
		}
	}
</script>