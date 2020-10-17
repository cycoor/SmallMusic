<template>
  <div class="play-button">
    <div class="left-button">
      <div class="prev">
        <img src="~assets/img/playmusic/pre.png" alt/>
      </div>
      <div class="toggle">
        <img src="~assets/img/playmusic/play.png" alt="">
      </div>
      <div class="next">
        <img src="~assets/img/playmusic/next.png" alt/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayButton"
}
</script>

<style scoped>
.play-button {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 59px;
  background: #212124;
}

.left-button {
  width: 288px;
  height: 54px;
  display: flex;
  text-align: center;
  margin-top: 5px;
}

.prev, .next {
  width: 90px;
  height: 54px;
}

.toggle {
  flex: 1;
}
.toggle img{
  width: 50px;
  height: 50px;
}
</style>