<template>
  <div>
    <b-row>
      <b-col>
      </b-col>
      <b-col cols="8">
        <br>
        <rm-cousel></rm-cousel>
      </b-col>
      <b-col>
      </b-col>
    </b-row>
    <b-row>
        <footer class ='foot'>
          <rm-car></rm-car>
          <br>
        </footer>
    </b-row>
</div>
</template>
<script>

  import rmCar from './rm-car.vue';
import rmCousel from './rm-cousel.vue';
  export default{
    name: 'rmIndex',
    components:{
      rmCar,
      rmCousel
    },
    data(){
      return{
        allNews: [],
      }
    },
    methods: {

    },
    mounted(){

    }
  }
</script>
<style>
.foot{
    position: absolute;
    bottom: 30%;
    width: 50%;
    height: 40px;
    line-height: 40px;
}
</style>
