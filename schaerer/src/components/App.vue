<template>
    <div class="app">
        <sd-navbar @setCategoryNewsHref="setCategoryNewsHref" ></sd-navbar> 
    	<router-view 
            :categoryNewsHref="categoryNewsHref">    
        </router-view>
        <sd-footer></sd-footer>
    </div>
</template>

<script>
    import sdNavbar from './sd-navbar.vue';
    import sdFooter from './sd-footer.vue';
    export default {
    	name: 'app',
        components: {
            sdNavbar,
            sdFooter
        },
        data(){
            return{
                categoryNewsHref: ''
            }
        },
        methods: {
            setCategoryNewsHref(href){
                this.categoryNewsHref = href;
            }
        }
    }
</script>

<style>

</style>
