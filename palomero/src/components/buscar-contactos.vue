<template>
		<div class="card">
			<div class="card-content">
				<h3>Search for contacts</h3>
				<input type="text" placeholder="Filter" v-model="filtro">
				<div class="row">
					<h3 v-if="!personas.length">Looks so empty</h3>
					<div v-else v-for="(persona,index) in personasFiltradas">
						<div class="col s12 m6">
							<div class="card blue-grey darken-1">
								<div v-if="edit==persona.index" class="card-content white-text">
									<input type="text" placeholder="Name" v-model="personaedit.nombre">
									<input type="text" placeholder="apellido" v-model="personaedit.apellido">
									<input type="number" placeholder="Age" v-model="personaedit.edad">
									<input type="number" placeholder="Phone number" v-model="personaedit.telefono">
									<input name="sexo2" value="Male" type="radio" id="checkSexo3" v-model="personaedit.sexo"/>
									<label for="checkSexo3">Male</label>
									<input name="sexo2" value="Female" type="radio" id="checkSexo4" v-model="personaedit.sexo"/>
									<label for="checkSexo4">Female</label>
								</div>
								<div v-else class="card-content white-text">
									<span class="card-title">{{ persona.nombre }} {{ persona.apellido }}</span>
									<p>Age: {{persona.edad}}</p>
									<p>Phone number: {{persona.telefono}}</p>
									<p>Sex: {{persona.sexo}}</p>
								</div>
								<div v-if="edit==persona.index" class="card-action">
									<button class="btn waves-effect green waves-light" @click="editPersona()">Confirm</button>
									<button class="btn waves-effect red darken-4" @click="canceleditPersona();">Cancel</button>
								</div>
								<div v-else class="card-action">
									<button class="btn waves-effect red darken-4" @click="eliminarPersonaLocalStorage(persona.index);">Delete</button>
									<button class="btn waves-effect waves-light" :disabled=persona.favs @click="hacerFavorito(persona.index);">Favorite</button>
									<button class="btn waves-effect green waves-light" @click="vereditPersona(persona.index);">Edit</button>
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
		name: 'buscarContactos',
		props:['vista','personas'],

		data(){
		return{
			mensaje:false,
			filtro: '',
            edit:-1,


                personaedit: {
                    nombre: '',
                    apellido:'',
                    edad: '',
                    telefono:'',
                    sexo: '',
                    favs: false,
                    index:'',
                }
		}
		},

		computed: {
			personasFiltradas() {
				return this.personas.filter(p => p.nombre.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ||
					p.apellido.toLowerCase().indexOf(this.filtro.toLowerCase()) >=0 ||
					p.edad.toLowerCase().indexOf(this.filtro.toLowerCase()) >=0 ||
					p.telefono.toLowerCase().indexOf(this.filtro.toLowerCase()) >=0 ||
					p.sexo.toLowerCase().indexOf(this.filtro.toLowerCase()) >=0
					);
			}
		},

		methods:{

			hacerFavorito(index) {
				for (var i = this.personas.length - 1; i >= 0; i--) {
					if(this.personas[i].index==index)
					{
						this.personas[i].favs=true;
					}
				}
				this.agregarPersonaLocalStorage();
				this.mensaje=true;
			},

			eliminarPersonaLocalStorage(posicion)
			{
				for (var i = this.personas.length - 1; i >= 0; i--) {
					if(this.personas[i].index==posicion){
						this.personas.splice(i,1);
					}
				}
				this.agregarPersonaLocalStorage();
			},


			agregarPersonaLocalStorage(){
				localStorage.setItem('personas',JSON.stringify(this.personas));
			},

			vereditPersona(index){
				this.edit=index
				this.personaedit=this.personas[index]
			},
			canceleditPersona(){
				this.edit=-2;
			},
			editPersona(){
				for (var i = this.personas.length - 1; i >= 0; i--) {
					if(this.personas[i].index==this.edit)
					{
						this.personas[i]=this.personaedit;
					}
				}
				this.agregarPersonaLocalStorage();
				this.edit=-2

			}


		}
	}
</script>