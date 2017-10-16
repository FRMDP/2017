<template>
    <transition name="fade" mode="out-in">
        <div class="vista">
          <div class="vingresar row">
            <div class="col-md-12">
              <h3>Bienvenido a Mi Agenda online</h3>
              <p>En esta seccion podra editar el contacto personal</p>
            </div>
            <input type='hidden' v-model='indice'/>
            <div class="col-md-12 form-group">
              <h5>Nombre</h5>
              <input class="form-control" v-model="nombre" type="text" placeholder="Ingrese nombre">
              <transition name="slide-fade">
                <label v-show="!nombreOK&&nombre!=''" class="aviso">El nombre debe tener 3 caracteres como minimo y al menos una letra</label>
              </transition>

            </div>

            <div class="col-md-12 form-group">
              <h5>Sexo</h5>
              <span class="radio-inline"><input value="Masculino" id="radio1" name="radio" type="radio" v-model="sexo"> Varon</span>
              <span class="radio-inline"><input value="Femenino" id="radio2" name="radio" type="radio" v-model="sexo"> Mujer</span>
              <span class="radio-inline"><input value="Otro" id="radio3" name="radio" type="radio" v-model="sexo"> Otro</span>
            </div>

            <div class="col-md-12 form-group">
              <h5>Telefono</h5>
              <input class="form-control" v-model="telefono" type="number" placeholder="Ingrese Telefono">
              <transition name="slide-fade">
                <label v-show="!telefonoOk&&telefono!=''" class="aviso">El telefono es requerido</label>
              </transition>

            </div>

            <div class="col-md-12 form-group">
              <h5>Mail</h5>
              <input class="form-control" v-model="mail" type="text" placeholder="Ingrese el mail">
              <transition name="slide-fade">
                <label v-show="!mailOk&&mail!=''" class="aviso">Ingrese un mail valido</label>
              </transition>

            </div>
            <div class="col">
              <button class="btn btn-primary" :disabled="!formOk" type="submit" @click="guardarEdicion">Editar</button>
            </div>

          </div>
        </div>
      </transition>
</template>

<script>
    export default {
        name: 'vista-editar',
        props: ['indice','nombre','telefono','sexo','mail'],
        data(){
        	return {
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
              return this.nombre && isNaN(this.nombre) && this.nombre.length >=3;
            },
            telefonoOk(){
              return this.telefono  && !isNaN(this.telefono) && this.telefono>99;
            },
            mailOk(){
              const expresion= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
              return this.mail && expresion.test(this.mail);
            },
            formOk() {
                return this.nombreOK  && this.telefonoOk && this.mailOk;
            }
        },
        methods:{
        	guardarEdicion(){
        		this.$emit('guardarEdicion',{nombre:this.nombre,telefono:this.telefono,sexo:this.sexo,mail:this.mail});
        	}
        }
    }
</script>

<style>
    
</style>