<template>
    <div class="app">
    	<zp-frame></zp-frame>
    </div>
</template>

<script>
import zpFrame from './zp-frame.vue'
    export default {
        name: 'app',
        components: {
            zpFrame
        },
        data(){
            return {
              
            }
        },
        methods: {
    		
        },
        created(){
            this.$http.get('https://battuta.medunes.net/api/country/all/?key=2bd3a0ab3aeea1156c6649766caa2373')
                .then( response => {
                    this.$store.commit('putCountries', response.data);
                })
                .catch(msg => console.log(msg));
        }
    }
</script>
<style scoped>
h3{
    text-align: center;
}
</style>
