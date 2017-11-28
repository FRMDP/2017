import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import zpPortada from '../../components/zp-portada.vue'
import zpSearch from '../../components/zp-search.vue'
import zpLyric from '../../components/zp-lyric.vue'
import zpResult from '../../components/zp-result.vue'
import zpSearchartist from '../../components/zp-searchartist.vue'
import zpResultartist from '../../components/zp-resultartist.vue'
import zpInfoartist from '../../components/zp-infoartist.vue'
import zpLyricid from '../../components/zp-lyricsid.vue'
import zpTracklist from '../../components/zp-tracklist.vue'
import zpComments from '../../components/zp-comments.vue'
import zpTerms from '../../components/zp-terms.vue'
import zpProfile from '../../components/zp-profile.vue'

export default new VueRouter({
	routes: [
		{ path: '/', component: zpPortada, name: 'index' },
		{ path: '/searchSong', component: zpSearch, name: 'search' },
		{ path: '/result/:endpoint/:search/:name', component: zpResult, name: 'result' },
		{ path: '/lyrics/:id/:name', component: zpLyric, name: 'lyric' },
        { path: '/searchArtist', component: zpSearchartist, name: 'searchArtist' },
		{ path: '/resultArtist/:endpoint/:search/:name', component: zpResultartist, name: 'resultArtist' },
		{ path: '/infoArtist/:id', component: zpInfoartist, name: 'infoAr' },
		{ path: '/lyricById/:id/:name', component: zpLyricid, name: 'lyricsId' },
		{ path: '/myTrackList', component: zpTracklist, name: 'myList' },
		{ path: '/termsCond', component: zpTerms, name: 'term' },
		{ path: '/profile', component: zpProfile, name: 'profile' },
	]
});