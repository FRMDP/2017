<template>
    <div class="app">
      <b-container fluid>
          <rm-TopMenu></rm-TopMenu>
      </b-container>
      <b-container fluid>
        <transition name="custom-classes-transition"
                    enter-active-class="animated tada"
                    leave-active-class="animated bounceOutRight">
      	<router-view></router-view>
        </transition>
      </b-container>
    </div>
</template>

<script>

import rmTopMenu from './components/rm-topMenu.vue';


export default {
  name: 'app',
  components: {
      rmTopMenu
    }
}
</script>

<style>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
</style>
