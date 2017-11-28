<template>
  <q-layout ref="layout" view="lhr LpR lFr" v-model="sides">
    <!-- Toolbar header -->
    <q-toolbar slot="header" color="secondary" :inverted=true>
      <q-btn flat flat round medium @click="$refs.layout.toggleLeft()">
        <q-icon name="games" class="animate-pop"/>
      </q-btn>
      <q-toolbar-title>
        WASD
        <span slot="subtitle" class="animated fadeInRight">
          Know Your Games
        </span>
      </q-toolbar-title>
      <!--<q-btn flat flat round medium @click="$router.push('/login')">
        <q-item-main label="Login"/>
      </q-btn>-->
    </q-toolbar>


    <!-- Left Side Panel -->
    <div slot="left" @click="navigate()">
      <q-list no-border link inset-delimiter>
        <q-list-header>Your world of gaming</q-list-header>
        <q-side-link item to="/home">
          <q-item>
            <q-item-side icon="home"/>
            <q-item-main label="Home"/>
          </q-item>
        </q-side-link>
        <q-side-link item to="/discover">
          <q-item>
            <q-item-side icon="explore"/>
            <q-item-main label="Discover Games"/>
          </q-item>
        </q-side-link>
        <!--<q-side-link item to="/genres">
          <q-item>
            <q-item-side icon="videogame asset"/>
            <q-item-main label="Genres"/>
          </q-item>
        </q-side-link>-->
        <q-side-link item to="/platforms">
          <q-item>
            <q-item-side icon="list"/>
            <q-item-main label="Platforms"/>
          </q-item>
        </q-side-link>
        <!--<q-side-link item to="/soon">
          <q-item>
            <q-item-side icon="hourglass empty"/>
            <q-item-main label="Coming Soon"/>
          </q-item>
        </q-side-link>-->
        <q-side-link item to="/releases">
          <q-item>
            <q-item-side icon="new releases"/>
            <q-item-main label="New Releases"/>
          </q-item>
        </q-side-link>
        <!--<q-side-link item to="/ratings">
          <q-item>
            <q-item-side icon="trending up"/>
            <q-item-main label="Ratings"/>
          </q-item>
        </q-side-link>-->
        <q-side-link item to="/engines">
          <q-item>
            <q-item-side icon="memory"/>
            <q-item-main label="Game Engines"/>
          </q-item>
        </q-side-link>
        <q-side-link item to="/news">
          <q-item>
            <q-item-side icon="rate review"/>
            <q-item-main label="News"/>
          </q-item>
        </q-side-link>
        <q-side-link item to="/companies">
          <q-item>
            <q-item-side icon="business"/>
            <q-item-main label="Game Companies"/>
          </q-item>
        </q-side-link>
        <!--<q-side-link item to="/search">
          <q-item>
            <q-item-side icon="search"/>
            <q-item-main label="Advanced Search"/>
          </q-item>
        </q-side-link>-->
      </q-list>
    </div>


    <!-- sub-routes get injected here -->
    <router-view/>

    <q-ajax-bar color="secondary" ref="bar"/>
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
    QFabAction,
    QAjaxBar
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
      QFabAction,
      QAjaxBar
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
    },

    methods: {
      navigate () {
        this.$refs.layout.hideLeft()

        this.left = false
      }
    }
  }
</script>

<style>
</style>
