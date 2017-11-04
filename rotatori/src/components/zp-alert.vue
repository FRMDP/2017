<template>
    <transition name="bounce">
        <div class="alert marginTop" role="alert" :class="classAlert">
            <button v-if="classAlert=='alert-success'" type="button" class="close" data-dismiss="alert" @click="hideAlert">
            <i class="material-icons left">remove</i>
            </button>
            {{ messageAlert }}
        </div>
    </transition>   
</template>

<script>
     export default {
    	name: 'zpAlert',
    	props: ['messageAlert', 'classAlert'],
        data(){
            return {

            }
        },
        methods: {
            hideAlert(){
                this.$emit('hideAlert');
            }
        }
    }

    
</script>

<style>

</style>