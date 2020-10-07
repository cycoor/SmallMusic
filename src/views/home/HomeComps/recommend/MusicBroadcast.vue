<template>
  <div class="music-broadcast">
    <div class="music-title">
      <p>{{ broadcast.name }}</p>
    </div>
    <div class="music-broadcast-item" v-for="(item,index) in broadcast.result" :key="index">
      <div>
        <img :src="item.picUrl" alt="">
      </div>
      <span>{{ item.copywriter }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicBroadCast",
  props: {
    broadcast: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.music-broadcast {
  display: flex;
  flex-wrap: wrap;
  width: 1324px;
  margin: auto;
}

.music-title {
  width: 100%;
  font-size: 14px;
}

.music-broadcast-item {
  flex: 1;
  margin-top: 10px;
  margin-left: 70px;
  font-size: 13px;
}

.music-broadcast-item img {
  width: 300px;
  margin-bottom: 5px;
}
</style>