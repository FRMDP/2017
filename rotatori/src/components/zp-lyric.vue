<template>
    <div>
        <h1>{{ lyric.title }}</h1>
        <div v-html="lyric.body"></div>
    </div>
</template>
<script>
export default {
    props: ['lyric'],
    data(){
        return {

        }
    },
    computed: {

    },
    methods: {

    },
    created(){

    }
}
</script>

