<template>
      <b-navbar toggleable="md" type="dark" variant="dark">

        <b-navbar-brand >DotaStats</b-navbar-brand>

          <b-navbar-nav>
            <b-nav-item to="/heroes">Heroes</b-nav-item>
            <b-nav-item to="/promatches">Pro Matches</b-nav-item>
            <b-nav-item to="/search">Search</b-nav-item>

          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using button-content slot -->
              <template slot="button-content">
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

      </b-navbar>
</template>

<script>
    export default{
        name : 'menuBar',
      data(){
            return{

            }
      },
      computed:{
      },
      methods:{

      }
    }
</script>

<style>

</style>
