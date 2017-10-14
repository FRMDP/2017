<template>
    <div>
        <md-card md-with-hover class="maxWidth">
            <md-card-header>
                <div class="md-title"> {{ ne.title }} </div>
                <div class="md-subhead"> {{ ne.date }} </div>
            </md-card-header>

            <md-card-content>
                {{ ne.subtitle }}
            </md-card-content>

            <md-card-actions>
                <md-button class="md-primary" @click="$router.push({ name: 'newById', params: { id: ne.id }})">Ver completo</md-button>
                <md-button class="md-accent" @click="$router.push({ name: 'catById', params: { id: ne.category.id }})"> {{ ne.category.name }} </md-button>
            </md-card-actions>
        </md-card>
    </div>
</template>
<script>
    
    export default {
        props: ['ne'],
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
