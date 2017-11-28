import Vue from 'vue'
import Router from 'vue-router'
import homeMenu from '@/components/home-menu.vue'
import playerSearch from '@/components/player-search.vue'
import playerProfile from '@/components/player-profile.vue'
import playerPeers from '@/components/player-peers.vue'
import playerRecent from '@/components/player-recent.vue'
import playerHeroes from '@/components/player-heroes.vue'
import allHeroes from '@/components/all-heroes.vue'
import heroeMatches from '@/components/heroe-matches.vue'
import heroePlayers from '@/components/heroe-players.vue'
import heroesRankings from '@/components/heroes-rankings.vue'
import heroeDurations from '@/components/heroe-durations.vue'
import matchDetails from '@/components/match-details.vue'
import allTeams from '@/components/all-teams.vue'
import teamPlayer from '@/components/team-player.vue'
import teamDetails from '@/components/team-details.vue'
import onlineChat from '@/components/online-chat.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      {path: '/', component: homeMenu },
      {path: "/player/", component: playerSearch},   
      {path: "/player/:id", component: playerProfile},
      {path: "/player/:id/peers", component: playerPeers},
      {path: "/player/:id/rmatches", component: playerRecent},
      {path: "/player/:id/heroes", component: playerHeroes},
      {path: "/heroes/", component: allHeroes},
      {path: "/heroes/:id/matches", component: heroeMatches},
      {path: "/heroes/:id/players", component: heroePlayers},
      {path: "/heroes/:id/rankings", component: heroesRankings},
      {path: "/heroes/:id/durations", component: heroeDurations},
      {path: "/matches/:id", component: matchDetails},
      {path: "/teams/", component: allTeams},
      {path: "/teams/:id", component: teamDetails},
      {path: "/teams/:id/players", component: teamPlayer},
      {path: "/chat/", component: onlineChat}
    }
  ]
})
