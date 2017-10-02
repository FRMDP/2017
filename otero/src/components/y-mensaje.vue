<template>
    <transition name="bounce">
      <div class="alert alerta" :class="tipomensaje" v-if="boleanmensaje">
        <strong>{{fuerte}}</strong>{{mensaje}}
      </div>
    </transition>
</template>

<script>
    export default {
        name: 'y-mensaje',
        props: ['fuerte','mensaje','tipomensaje','boleanmensaje']
    }
</script>

<style>
    .alerta{
    position: fixed;
    top: 70px;
    z-index: 3;
    right: 100px;
}
</style>
