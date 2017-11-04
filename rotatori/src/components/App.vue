<template>
    <div class="app">
        <div v-if="pbar">
            <md-progress class="md-accent"  md-indeterminate></md-progress>
            <h3 >Aguarde mientras se carga la página...</h3 >
        </div>
        <zp-servererror class='marginTop' v-else-if="errorServer"></zp-servererror>
        <zp-menu v-else @toggleMenu="toggleMenu" id="toolbar"></zp-menu>
    	<router-view v-if="!pbar && !errorServer" class="relative"></router-view>
    </div>
</template>

<script>
    import zpMenu from './zp-menu.vue'
    import zpServererror from './zp-servererror.vue'
    export default {
        name: 'app',
        components: {
            zpMenu,
            zpServererror
        },
        data(){
            return {
                isMenuOpen: false,
                errorServer: false,
                pbar: false,
            }
        },
        methods: {
    		toggleMenu() {
    			this.isMenuOpen = !this.isMenuOpen;
            }
        },
        created(){
            this.pbar = true;
            this.$http.get('http://192.168.99.100:8080/news')
                .then(response => {
                    this.errorServer = false;
                    this.pbar = false;
                })
                .catch(msg => {
                    this.errorServer = true;
                    this.pbar = false;    
                });
        }
    }
</script>
<style scoped>
h3{
    text-align: center;
}
</style>
