<template>
<div class="publicar-agenda">
<div id="publicar" class="columns">
  <form class="column field">
    <label class="label">Escriba algo...</label>
    <textarea class="textarea" name="paragraph_text" cols="40" rows="2" v-model="publicacion.nota"></textarea>
    <div class="columns">
      <div class="column">
        <label>Seleccione usuario</label>
        <div class="control">
          <div class="select">
            <select v-model="publicacion.persona">
              <option v-for="persona in personas" :value="persona">{{ persona.nombre }} {{ persona.apellido}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="column">
      <br>
        <button :disabled="!formOkp" class="button" type="submit" @click.prevent="nuevaPublicacion">Publicar</button>
      </div>
    </div>
  </form>
  <div class="column">
    <div v-if="publicaciones.length">
      <div v-for="(publicacion, index) in publicaciones">
        <div class="box">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{{ publicacion.persona.nombre }} {{ publicacion.persona.apellido }}</strong>
                  <button class="delete" @click.prevent="eliminaPublicacion(index)"></button>
                  <br>
                  {{ publicacion.nota }}
                </p>
              </div>
              <nav class="level is-mobile">
                <div class="level-left">
                  <a class="level-item">
                    <span class="is-small noselect"><i @click.prevent="meGusto(index)">Me gusta {{ publicacion.mg }}</i></span>
                  </a>
                  <a class="level-item">
                    <span class="is-small noselect"><i @click.prevent="meEnfado(index)">Me enfada {{ publicacion.me }}</i></span>
                  </a>
                  <a class="level-item">
                    <span class="is-small noselect"><i @click.prevent="esFacho(index)">Es un facho {{ publicacion.facho }}</i></span>
                  </a>
                </div>
              </nav>
            </div>
          </article>
        </div>
        <br>
      </div>
    </div>
    <div v-else><label class="label">No hay publicaciones...buscate unos amigos</label></div>
  </div>
</div>
</div>
</template>

<script>
    export default {
    	name: 'publicarAgenda',
      props: ['publicaciones','personas'],
      data() {
        return {
          publicacion: {
            persona: null,
            nota: '',
            mg: 0,
            me: 0,
            facho: 0
          }
        }
      },
      computed: {
        formOkp() {
          return this.publicacion.persona && this.publicacion.nota;
        }
      },
      methods: {
        nuevaPublicacion() {
          this.$emit('nuevaPublicacion', this.publicacion);
          this.limpiarPublicacion();
        },
        limpiarPublicacion(){
          this.publicacion.persona = '';
          this.publicacion.nota = '';
        },
        eliminaPublicacion(id)
        {
          this.$emit('eliminaPublicacion',id);
        },
        meGusto(id){
          this.$emit('meGusto',id);
        },
        meEnfado(id){
          this.$emit('meEnfado',id);
        },
        esFacho(id){
          this.$emit('esFacho',id);
        }
      }
  }
</script>

<style>

</style>
