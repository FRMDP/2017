<template>
    <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide caption="Dota Stats Web Page"
                        text="Dota 2 is a free-to-play multiplayer online battle arena video game developed and published by Valve Corporation."
                        img-src="http://esports.inquirer.net/wp-content/uploads/2016/10/22.jpg"
      ></b-carousel-slide>

      <b-carousel-slide caption="Players"
                        text="Search for players and discover their stats"
                        img-src="https://i.redd.it/5csw96tgafjy.jpg"
      >
        <b-button :href="'/#/player'">GO!</b-button>
      </b-carousel-slide>

      <b-carousel-slide caption="Heroes"
                        text="Search for heros and discover their stats"
                        img-src="http://wallpapersdsc.net/wp-content/uploads/2015/11/Dota_2_Iphone_wallpapers14.jpg"
      >
        <b-button :href="'/#/heroes'">GO!</b-button>
      </b-carousel-slide>

      <b-carousel-slide caption="Teams"
                        text="Search for teams and discover their stats"
                        img-src="https://images2.alphacoders.com/466/thumb-1920-466303.jpg"
      >
        <b-button :href="'/#/teams'">GO!</b-button>
      </b-carousel-slide>

      <b-carousel-slide caption="Chat"
                        text="Chat in real time with other dota players"
                        img-src="https://wallpaperscraft.com/image/dota_2_chibi_heroes_art_93793_1920x1080.jpg"
      >
        <b-button :href="'/#/chat'">GO!</b-button>
      </b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<style>
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
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
</style>