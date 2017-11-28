<template>
    <div class="paddings">
        <h2>Mi Información</h2>
        <p> {{ profile.name }} </p>
        <p> {{ profile.email }} </p>
        <p> {{ profile.pass }} </p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            profile: {},
        }
    },
    methods: {

    },
    created(){
        if (!this.$session.has('login')) {
            this.$router.push({ name: "index" });
        }else{
            this.profile = this.$session.get('login');
        }
    }
}
</script>

