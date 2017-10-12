<template>
    <div>
        <p>HOLASASDASDASDSAD</p>
        {{ New }}
    </div>
</template>
<script>
    
    export default {
        props: [],
        data(){
            return {
                New : ''
            }
        },
        computed: {
            params() {
        		return this.$route.params;
        	},
            id(){
                return this.$route.params.id;
            }
        },
        methods:{
            
        },
        watch:{
            '$route.params.id': function(){
                this.New = this.id;
            }
        },
        created() {
            this.New = this.id;
        }
    }
</script>
