<template>
    <div>
        <form novalidate>
            <md-input-container>
                <label>Nombre artista</label>
                <md-input v-model="artistName"></md-input>
            </md-input-container>
            <md-button class="md-raised md-primary" @click.prevent="send">Buscar</md-button>    
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            artistName: '',
        }
    },
    methods: {
        send(){
            const st = this.artistName.replace(/\s/g, "%20");
            this.$router.push({ name: 'result', params: { name: st} })
        }
    },
}
</script>

