<template>
    <div class="card">
        {{ persona.nombre }}
    </div>
</template>

<script>
    export default {
        name: 'userCard',
        props: ['persona']
    }
</script>

<style>
    .card {
        width: 500px;
        background-color: yellow;
        padding: 30px;
        margin-bottom: 10px;
    }
</style>
