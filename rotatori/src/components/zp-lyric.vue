<template>
    <div>
        <h1>{{ lyric.title }}</h1>
        <div class="margins">
            <div v-html="lyric.body" class="paddingSup"></div>
            <div v-html="lyric.copyright" class="italic"></div>
            <md-button :href="lyric.url" target="_blank" class="md-raised md-primary">Ver Completa en Musixmatch</md-button>
        </div>
    </div>
</template>
<script>
export default {
    props: [],
    data(){
        return {
            trackLyrics: [],
            lyric: {
                title:'',
                body: '',
                copyright: '',
                url: '',
            }

        }
    },
    computed: {
        params() {
            return this.$route.params;
        },
        id() {
            return this.$route.params.id;
        },
        name() {
            return this.$route.params.name;
        }
    },
    methods: {
        getLyric(){
            const st = this.$apiRoutes.getRoutes('lyricGetId',{name:'trackId', value: this.id});
            this.$http.get(st)
                .then(response => {
                    const lyric = response.data.message.body.lyrics;
                    this.lyric.title = this.name;
                    const body = lyric.lyrics_body;
                    this.lyric.body = body.split('*******')[0].replace(/\n/g, '<br>');
                    this.lyric.copyright = lyric.lyrics_copyright;
                    this.lyric.url = lyric.backlink_url;


                })
                .catch(msg => console.log(msg));
        }
    },
    watch: {
        '$route.params.id': function() {
            this.getArtist();
        },
    },
    created(){
        this.getLyric();
    }
}
</script>
<style scoped>
.margins{
    margin-left: 150px;
}
.paddingSup{
    padding-top: 50px;
}
.italic{
    font-style: italic;
}
</style>


