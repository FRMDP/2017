<template>
    <div>
        <h1>Busqueda de canciones</h1>
        <div>
            <md-radio v-model="radio" id="my-test4" name="my-test-group2" md-value="1" class="md-primary">Por artista</md-radio>
            <md-radio v-model="radio" id="my-test5" name="my-test-group2" md-value="2" class="md-primary">Por canción</md-radio>
            <md-radio v-model="radio" id="my-test6" name="my-test-group2" md-value="3" class="md-primary">Por nombre album</md-radio>
        </div> 
        <zp-sartist v-if="radio == '1'" class="padd"></zp-sartist> 
    </div>
</template>
<script>
import zpSartist from './zp-sartist.vue'
export default {
    components: {
        zpSartist,
    },
    data(){
        return {
            radio: '',
            result: [],
        }
    },
    computed: {
    },
    methods: {

    },
    watch:{ 

    }

}
</script>
<style scoped>
.padd{
    padding-left: 200px;
    padding-right: 200px;
}
</style>


