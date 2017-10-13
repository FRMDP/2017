<template>
    <div>
        <md-card md-with-hover class="maxWidth">
            <md-card-header>
                <div class="md-title">Title goes here</div>
                <div class="md-subhead">Subtitle here</div>
            </md-card-header>

            <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
            </md-card-content>

            <md-card-actions>
                <md-button @click="$router.push({ name: 'newById', params: { id: 1 }})"> ver completo</md-button>
                <md-button><router-link :to="{ name: 'catById', params: { id: 1 }}">Categoria</router-link></md-button>
            </md-card-actions>
        </md-card>
    </div>
</template>
<script>
    
    export default {
        props: [],
        data(){
            return {
                
            }
        },
        methods:{
            
        },
        created() {
            
        }
    }
</script>
