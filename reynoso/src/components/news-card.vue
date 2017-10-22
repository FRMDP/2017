<template>
    <div class="pad">
    <md-card>
        <md-card-media-cover md-text-scrim>
            <md-card-media md-ratio="16:9">
                <img src="img/img.jpg" alt="Skyscraper">
            </md-card-media>

            <md-card-area>
                <md-card-header>
                    <div class="md-title">{{New.title}}</div>
                    <div class="md-subhead">{{New.category.name}}</div>
                </md-card-header>

                <md-card-content>
                    <div class="truncate">{{New.body}}</div>
                    <span class="md-body-1">{{New.date}}</span>
                </md-card-content>

                <md-card-actions>
                    <md-button @click="$router.push({ name: 'onenew', params: { id: New.id }})">Ver más</md-button>
                </md-card-actions>
            </md-card-area>
        </md-card-media-cover>
    </md-card>
    </div>
</template>

<script>
    export default{
        name:'newsCard',
        props:['New'],

    }
</script>

<style>
</style>