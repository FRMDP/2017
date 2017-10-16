<template>
    <transition name="fade" mode="out-in">
        <div class="vista vexportar row">
          <div v-if="!personas.length" class="col-md-12">
            <h4>Exportar:</h4>
            <h5>No se encontraron datos en la agenda para exportar</h5>
            <hr>
          </div>

          <div v-else class="col">
            <div class="form-group txtcontenedor">
              <h4>Exportar:</h4>
              <label>Copie el contenido del cuadro y guardelo en algun archivo de texto</label>
              <button class="btn btn-primary form-group" @click="exportar">Copiar al portapapeles</button>
              <textarea class="form-control" rows="21" id="txtexporat" readonly>{{contenidoAexportar}}</textarea>
            </div>
          </div>
          <div class="col">
            <div class="form-group txtcontenedor">
              <h4>Importar:</h4>
              <h6><input type="radio" value="reemplazar" name="tipoImportacion" v-model="importacion"> Reemplazar contenido existente</h6>
              <h6><input type="radio" value="agregar" name="tipoImportacion" v-model="importacion"> Agregar al contenido actual</h6>
              <label for="comment">Pegue aqui el texto a importar:</label>
              <button class="btn btn-primary form-group" @click="importar">Importar!</button>
              <textarea class="form-control" rows="21" id="textimport"></textarea>
            </div>
          </div>
        </div>
      </transition>
</template>

<script>
    export default {
        name: 'vista-exportar',
        props: ['personas'],
        computed:{
            contenidoAexportar(){
              return JSON.stringify(this.personas);
            },
        },
        data(){
            return{
                importacion:'reemplazar',
            }
        },
        methods:{
            importar(){
              var texto = document.getElementById("textimport").value;
              if (this.importacion!="reemplazar") {
                var primerString = document.getElementById("txtexporat").value;
                var segundoString = document.getElementById("textimport").value;
                primerString=primerString.slice(0,-1);
                segundoString=segundoString.slice(1);
                texto = primerString+","+segundoString;
              }
              this.$emit('reemplazarListaPorTexto',texto);
              localStorage.setItem("datos", JSON.stringify(this.personas));
              this.$emit('mostrarMensaje',{fuerte:"Importado",mensaje:"se han importado los datos",tipo:"alert-success"});
            },
            exportar(){
              var texto = document.getElementById("txtexporat");
              texto.select();
              document.execCommand("copy");
              this.$emit('mostrarMensaje',{fuerte:"Copiado!",mensaje:"Se ha copiado el contenido, guardelo en un archivo de texto",tipo:"alert-success"});
            },
        }
    }
</script>

<style>
    
</style>