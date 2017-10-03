<template>
     <div class="card">
      <div class="card-content">
      <div class="row">
        <h3 align="center">New contact</h3>
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
             <input v-model="persona.nombre" type="text" placeholder="Name">
           </div>
           <div class="input-field col s6">
             <input v-model="persona.apellido" type="text" placeholder="Surname">
           </div>
         </div>
         <div class="row">
           <div class="input-field col s12">
            <input type="number" v-model="persona.edad" placeholder="Age">
          </div>
        </div>
        <div class="row">
         <div class="input-field col s12">
          <input type="number" v-model="persona.telefono" placeholder="Phone number">
        </div>
      </div>

      <div class="row" align="center">
        <form action="#">
          <input name="sexo" value="Male" type="radio" id="checkSexo1" v-model="persona.sexo"/>
          <label for="checkSexo1">Male</label>

          <input name="sexo" value="Female" type="radio" id="checkSexo2" v-model="persona.sexo"/>
          <label for="checkSexo2">Female</label>
        </form>
        <button class="btn waves-effect waves-light" :disabled="!formOk" type="submit" @click.prevent="agregarPersona">Add Contact</button>
      </div>
    </form>
   </div> 
  </div>
 </div>
</template>

<script>
	export default{
		name:'agregarPersona',
    props: ['vista','personas','persona'],
		data(){
      return{
			mensaje:false
    }
		},

    computed:{

    formOk() {
      return this.persona.nombre && this.persona.apellido && this.persona.edad && this.persona.telefono && this.persona.sexo;
    }

    },

    methods: {
      agregarPersona() {    
        this.personas.push(Object.assign({}, this.persona));
        const indice=this.personas.length-1;
        if (indice!=0) {
          this.personas[indice].index=this.personas[indice].index+1;
        }
        else{
          this.personas[indice].index=0;
        }

        this.agregarPersonaLocalStorage();
        this.limpiarPersona();
        this.mensaje = true;
      },


      agregarPersonaLocalStorage(){
        localStorage.setItem('personas',JSON.stringify(this.personas));
      },

    limpiarPersona() {
      this.persona.nombre = '';
      this.persona.edad = '';
      this.persona.sexo = '';
      this.persona.apellido='';
      this.persona.telefono=''
     }
    }
	}
</script>

<style>
</style>