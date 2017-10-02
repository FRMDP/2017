<template>
    <transition name="slide-fade">
        <div class="alert marginTop" role="alert" v-show="alert" :class="classAlert">
            <button v-show="classAlert=='alert-info'" type="button" class="close" data-dismiss="alert" @click="changeAlert">
            <i class="material-icons left">remove</i>
            </button>
            {{ messageAlert }}
        </div>
    </transition>   
</template>

<script>
     export default {
    	name: 'zpAlert',
    	props: ['messageAlert','alert', 'classAlert'],
        data(){
            return {

            }
        },
        methods: {
            changeAlert(){
                this.$emit('changeAlert');
            }
        }
    }

    
</script>

<style>

</style>