<template>
    <div class="buscar-menu">
        <h2>Lista de contactos</h2>
        <input type="text" class="form-control" placeholder="Buscá a tus contactos" v-model="filtro">
        <h3 >No hay contactos agregados.</h3>
        <div class="col-md-4 contenedor" >
          <div class="card">
            <div class="card-block">
              <div v-if="persona.genero === 'varon'">
                <img src="img/varon.png">
              </div>
              <div v-else>
                <img src="img/mujer.png">
              </div>
              <h4 class="card-title">{{persona.apellido}}, {{persona.nombre}}</h4>
              <h6 class="card-subtitle mb-2 text-muted">{{persona.telefono}}</h6>
              <div>
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <a v-if="persona.mail === ''" class="negativo" @click="cambiarVista('modificar')"> Agregar correo</a><a v-else> {{persona.mail}}</a>
              </div>
              <div>
                <i class="fa fa-users"></i>
                <a v-if="persona.grupo === ''" class="negativo" @click="cambiarVista('modificar')"> Agregar grupo</a><a v-else> {{persona.grupo}}</a>
              </div>
              <div>
                <i class="fa fa-heart"></i>
                <a v-if="persona.favorito == 'true'"> SI</a><a class="negativo" v-else> NO</a>
              </div>
            </div>
            <hr>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
    	name: 'buscarMenu',
      props:['personas'],
      data() {
        return {
          filtro: '',
          persona: [{
                    nombre: '',
                    apellido:'',
                    telefono: '',
                    mail:'',
                    genero:'',
                    grupo:'',
                    favorito: ''
                }]
        }
      },
    	methods: {
    		personasFiltradas(filtro) {
    			this.$emit('personasFiltradas', this.filtro);
    		}
    	}
    }
</script>
<style>
.top-menu {
	
}
</style>



