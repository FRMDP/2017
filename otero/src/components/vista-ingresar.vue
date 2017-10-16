<template>
    
        <div class="vista">
          <div class="vingresar row">
            <div class="col-md-12">
              <h3>Bienvenido a Mi Agenda online</h3>
              <p>En esta seccion podra agregar contactos a su agenda personal</p>
            </div>

            <div class="col-md-12 form-group">
              <h5>Nombre</h5>
              <input class="form-control" v-model="persona.nombre" type="text" placeholder="Ingrese nombre">
              <transition name="slide-fade">
                <label v-show="!nombreOK&&persona.nombre!=''" class="aviso">El nombre debe tener 3 caracteres como minimo y al menos una letra</label>
              </transition>

            </div>

            <div class="col-md-12 form-group">
              <h5>Sexo</h5>
              <span class="radio-inline"><input value="Masculino" id="radio1" name="radio" type="radio" v-model="persona.sexo"> Varon</span>
              <span class="radio-inline"><input value="Femenino" id="radio2" name="radio" type="radio" v-model="persona.sexo"> Mujer</span>
              <span class="radio-inline"><input value="Otro" id="radio3" name="radio" type="radio" v-model="persona.sexo"> Otro</span>
            </div>

            <div class="col-md-12 form-group">
              <h5>Telefono</h5>
              <input class="form-control" v-model="persona.telefono" type="number" placeholder="Ingrese Telefono">
              <transition name="slide-fade">
                <label v-show="!telefonoOk&&persona.telefono!=''" class="aviso">El telefono es requerido</label>
              </transition>

            </div>

            <div class="col-md-12 form-group">
              <h5>Mail</h5>
              <input class="form-control" v-model="persona.mail" type="text" placeholder="Ingrese el mail">
              <transition name="slide-fade">
                <label v-show="!mailOk&&persona.mail!=''" class="aviso">Ingrese un mail valido</label>
              </transition>

            </div>
            <div class="col">
              <button class="btn btn-primary" :disabled="!formOk" type="submit" @click="agregarPersona">Agregar</button>
            </div>

          </div>
        </div>

</template>

<script>
    export default {
        name: 'vista-ingresar',
        props: ['personas'],
        data(){
        	return{
        		persona: {
			    	nombre: '',
			    	telefono: '',
			    	sexo: '',
					mail:'',
			    }
        	}
        },
        computed:{
        	nombreOK(){
              return this.persona.nombre && isNaN(this.persona.nombre) && this.persona.nombre.length >=3;
            },
            telefonoOk(){
              return this.persona.telefono  && !isNaN(this.persona.telefono) && this.persona.telefono>99;
            },
            mailOk(){
              const expresion= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
              return this.persona.mail && expresion.test(this.persona.mail);
            },
            formOk() {
                return this.nombreOK  && this.telefonoOk && this.mailOk;
            }
        },
        methods:{
        	agregarPersona() {
	        	this.$emit('agregarPersona',this.persona);
	        	this.limpiarPersona();
		  	},
		  	limpiarPersona() {
		  		this.persona.nombre = '';
		  		this.persona.telefono = '';
		  		this.persona.sexo = '';
				this.persona.mail = '';
				this.indice = '';
		  	},
        	
            
        }
    }
</script>

<style>
    
</style>