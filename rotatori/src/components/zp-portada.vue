<template>
    <div>
        <md-boards :md-auto="true" :md-infinite="true" :md-duration="5000" :md-swipeable="true">
            <md-board id="slide1">
                <img src="/img/recital.jpg" alt="">
            </md-board>

            <md-board id="slide2">
                <img src="/img/beatles.jpg" alt="">
            </md-board>

            <md-board id="slide3">
                <img src="/img/recital2.jpg" alt="">
            </md-board>
        </md-boards>
    </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
img{
    display:block;
    margin:auto;
}
</style>



