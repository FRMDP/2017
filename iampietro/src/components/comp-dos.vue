<template>
    <div>
    	<button @click="agregarNumero">AGREGAR NUMERO</button>
    </div>
</template>

<script>
    export default {
        name: 'compDos',
        methods: {
            agregarNumero() {
                const n = Math.round(Math.random() * 100);
                this.$storageService.agregarNumero(n);
            }
        }
    }
</script>

<style>

</style>