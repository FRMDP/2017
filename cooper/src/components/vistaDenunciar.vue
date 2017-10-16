<template>
  <div v-if="denunciando" class="container">
    <form autocomplete="off" class="normal">
      <h2>Realizar denuncia</h2>
      <h5>Usuario a denunciar: {{ persona.nombre }} {{ persona.apellido }}</h5>
      <div class="row">
        <div class="col l5">
          <ul>
          <h5>El usuario...</h5>
            <li><input value="1" id="r3" name="r2" type="radio" v-model="denuncia.motivo"> trata temas inadecuados</li>
            <li><input value="2" id="r4" name="r2" type="radio" v-model="denuncia.motivo"> realiza denuncias absurdas</li>
            <li><input value="3" id="r5" name="r2" type="radio" v-model="denuncia.motivo"> no me quiere</li>
            <li><input value="4" id="r6" name="r2" type="radio" v-model="denuncia.motivo"> publica contenido ofensivo</li>
            <li><input value="5" id="r7" name="r2" type="radio" v-model="denuncia.motivo">es violentamente violento al expresarse</li>
            <li><input value="6" id="r8" name="r2" type="radio" v-model="denuncia.motivo"> otros</li>
          </ul>
        </div>
        <div class="col l7">
        <h6>Detalles de la denuncia (opcional)</h6>
        <textarea name="paragraph_text" cols="50" rows="10" v-model="denuncia.descripcion"></textarea>
        <button :disabled="!formOk" class="btn waves-effect waves-light right" type="submit" name="action"  @click.prevent="denunciarPersonaII(denuncia)">Aceptar</button>
        </div>
      </div>
    </form>
  </div>
  <div v-else class="container">
    <div class="row">
      <h3 v-if="!denuncias.length">No hay denuncias</h3>
      <div v-else>
        <h2>Listado de denuncias</h2>
          <table class="highlight">
            <thead>
              <tr>
                <th>Denunciado</th>
                <th>Motivo</th> 
                <th>Descripcion</th>
              </tr>
            </thead>
            <tr v-for="denuncia in denuncias">
              <td> {{ getNombre(denuncia.id_persona) }} </td>
              <td v-if="denuncia.motivo == 1"> Trata temas inadecuados </td>
              <td v-else-if="denuncia.motivo == 2"> Realiza denuncias absurdas </td>
              <td v-else-if="denuncia.motivo == 3"> No me quiere </td>
              <td v-else-if="denuncia.motivo == 4"> Publica contenido ofensivo </td>
              <td v-else-if="denuncia.motivo == 5"> Es violentamente agresivo al expresarse </td>
              <td v-else> Otros </td>
              <td> {{ denuncia.descripcion }} </td>
            </tr>
          </table>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'vistaDenunciar',
      props: ['persona', 'denunciando', 'denuncias', 'nombreApellido'], //la persona es para cuando estas denunciandola
      data() {
        return {
          denuncia: {
            id_persona: '',
            motivo: '',
            descripcion: ''
          }
        }
      },
      computed: {
        formOk() {
          return this.denuncia.motivo;
        }
      },
      methods: {
        denunciarPersonaII(denuncia){ //paso 4
          this.$emit('denunciarPersonaII', Object.assign({}, this.denuncia));
          this.cleanFormulario();
          return this.nombreApellido;
        },
        cleanFormulario() {
          this.denuncia.id_persona = '';
          this.denuncia.motivo = '';
          this.denuncia.descripcion = '';
        },
        getNombre(id_persona){
          this.$emit('getNombre', id_persona);
        }
      }
    }
</script>

<style>
</style>