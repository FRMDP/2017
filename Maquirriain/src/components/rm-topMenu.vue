<template>
  <div>
    <header>
     <b-navbar toggleable type="light" variant="light">
     <b-nav-toggle target="nav_text_collapse"></b-nav-toggle>
     <router-link to="/"><b-navbar-brand>The History of the F1</b-navbar-brand></router-link>
     <b-collapse  is-nav id="nav_text_collapse">
       <b-navbar-nav>
          <router-link to="/results"><a class="nav-link" href="#" >Results</a></router-link>
       </b-navbar-nav>
       <b-navbar-nav>
          <router-link to="/drivers"><a class="nav-link" href="#" >Drivers</a></router-link>
       </b-navbar-nav>
       <b-navbar-nav>
          <router-link to="/f1Teams"><a class="nav-link" href="#" >F1 Teams</a></router-link>
       </b-navbar-nav>
       <b-navbar-nav>
          <router-link to="/circuits"><a class="nav-link" href="#" >Circuits</a></router-link>
       </b-navbar-nav>
    </b-collapse>
    </b-navbar>
    </header>
	</div>
</template>
<script>
    export default {
      name: 'rmTopMenu',
      data(){
        return{

        }
      }
    }
</script>
