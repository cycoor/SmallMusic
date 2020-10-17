<template>
  <div class="music-content">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "MusicContent"
}
</script>

<style scoped>
.music-content {
  position: relative;
  height: 100%;
  background-color: #16181c;
  overflow: hidden;
}
</style>