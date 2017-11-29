import Vue from 'vue'
import Router from 'vue-router'


import viewIndex from '../components/view-index.vue'
import viewSearch from '../components/view-search.vue'
import viewPlayers from '../components/view-players.vue'
import matchesInfo from '../components/view-match.vue'
import proMatches from '../components/view-matches.vue'
import playerRecentmatches from '../components/player-recentmatches.vue'
import playerTotals from '../components/player-totals.vue'
import playerPeers from '../components/player-peers.vue'
import playerHeroes from '../components/player-heroes.vue'



Vue.use(Router)


export default new Router({
  routes: [
    {
        path: '/',
        component: viewIndex
    },
    {
        path: '/search',
        name: 'search',
        component: viewSearch,
        props : true
    },
    {
        path: '/players/:id',
        name: 'players',
        component: viewPlayers,
        props : true
    },
    {
        path: '/players/:id/heroes',
        name: 'playerHeroes',
        component: playerHeroes,
        props : true
    },
    {
        path: '/matches/:id',
        name: 'match',
        component: matchesInfo,
        props : true
    },
    {
        path: '/proMatches',
        name: 'matches',
        component: proMatches,
        props : true
    },
  ]
})
