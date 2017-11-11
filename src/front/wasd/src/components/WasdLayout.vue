<template>
  <q-layout ref="layout" view="lHr LpR lFr" v-model="sides">
    <!-- Toolbar header -->
    <q-toolbar slot="header" color="secondary" :inverted=true>
      <q-btn flat flat round medium @click="$refs.layout.toggleLeft()">
        <q-icon name="games" class="animate-pop"/>
      </q-btn>
      <q-toolbar-title>
        WASD
        <span slot="subtitle">
          Know Your Games
        </span>
      </q-toolbar-title>
      <q-btn flat flat round medium @click="$router.push('/login')">
        <q-item-main label="Login"/>
      </q-btn>
    </q-toolbar>


    <!-- Left Side Panel -->
    <div slot="left">
      <q-list no-border link inset-delimiter>
        <q-list-header>Your world of gaming</q-list-header>
        <q-side-link item to="/home">
          <q-item @click="$refs.layout.hideLeft()">
            <q-item-side icon="home"/>
            <q-item-main label="Home"/>
          </q-item>
        </q-side-link>
        <q-side-link item to="/discover">
          <q-item @click="$refs.layout.hideLeft()">
            <q-item-side icon="explore"/>
            <q-item-main label="Discover Games"/>
          </q-item>
        </q-side-link>
        <q-side-link item to="/genres">
          <q-item @click="$refs.layout.hideLeft()">
            <q-item-side icon="videogame asset"/>
            <q-item-main label="Genres"/>
          </q-item>
        </q-side-link>
        <q-side-link item to="/platforms">
          <q-item @click="$refs.layout.hideLeft()">
            <q-item-side icon="list"/>
            <q-item-main label="Platforms"/>
          </q-item>
        </q-side-link>
        <q-side-link item to="/soon">
          <q-item @click="$refs.layout.hideLeft()">
            <q-item-side icon="hourglass empty"/>
            <q-item-main label="Coming Soon"/>
          </q-item>
        </q-side-link>
        <q-side-link item to="/releases">
          <q-item @click="$refs.layout.hideLeft()">
            <q-item-side icon="new releases"/>
            <q-item-main label="New Releases"/>
          </q-item>
        </q-side-link>
        <q-side-link item to="/ratings">
          <q-item @click="$refs.layout.hideLeft()">
            <q-item-side icon="trending up"/>
            <q-item-main label="Ratings"/>
          </q-item>
        </q-side-link>
        <q-side-link item to="/engines">
          <q-item @click="$refs.layout.hideLeft()">
            <q-item-side icon="memory"/>
            <q-item-main label="Games Engines"/>
          </q-item>
        </q-side-link>
        <q-side-link item to="/news">
          <q-item @click="$refs.layout.hideLeft()">
            <q-item-side icon="rate review"/>
            <q-item-main label="News & Reviews"/>
          </q-item>
        </q-side-link>
        <q-side-link item to="/search">
          <q-item @click="$refs.layout.hideLeft()">
            <q-item-side icon="search"/>
            <q-item-main label="Advanced Search"/>
          </q-item>
        </q-side-link>
      </q-list>
    </div>


    <!-- sub-routes get injected here -->
    <router-view/>
  </q-layout>
</template>

<script>
  import {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QTabs,
    QRouteTab,
    QSideLink,
    QFab,
    QFabAction
  } from 'quasar'

  export default {
    name: 'WasdLayout',

    components: {
      QLayout,
      QToolbar,
      QToolbarTitle,
      QBtn,
      QIcon,
      QList,
      QListHeader,
      QItem,
      QItemSide,
      QItemMain,
      QTabs,
      QRouteTab,
      QSideLink,
      QFab,
      QFabAction
    },

    data () {
      return {
        sides: {
          // "false" means hidden
          // "true" means visible
          left: false,
          right: false
        }
      }
    }
  }
</script>

<style>
</style>
