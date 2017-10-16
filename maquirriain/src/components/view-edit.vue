<template>
    <div class='view-edit'>
        <form>
          <label class="sizeSubTitle"><strong>Edit person</strong></label>
          <br/>
          <label>Name</label>
          <input type='hidden' v-model='index'/>
          <input class="form-control" v-model="persona.nombre" type="text" placeholder="Put your name">
          <label>Age</label>
          <input class="form-control" type="number" placeholder="Put your age" v-model="persona.edad">
          <label>Description</label>
          <textarea  class="form-control Styletextarea" v-model="persona.descripcion"> </textarea>
          <label class="custom-control custom-radio">
            <input value="male" class="custom-control-input" id="radio1" name="radio" type="radio" v-model="persona.sexo">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">Man</span>
          </label>
          <label class="custom-control custom-radio">
            <input value="female" class="custom-control-input" id="radio2" name="radio" type="radio" v-model="persona.sexo">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">Woman</span>
          </label>
          <br/>
          <button class="btn btn-success spaceButton" :disabled="!formPeopleOk" type="submit" @click.prevent="saveEditing">Edit</button>
        </form>
    </div>

</template>
<script>
  export default {
    name: 'viewEdit',
    props: ['persona','index'],
    data(){
      return{
        vista: 'edit'
      }
    },
    computed:{
      formPeopleOk() {
        return this.persona.nombre && this.persona.edad && this.persona.sexo && this.persona.descripcion;
      }
    },
    methods:{
      saveEditing(){
        this.$emit('saveEditing',this.personEdit);
      }
    }
  }

</script>
<style>
</style>
