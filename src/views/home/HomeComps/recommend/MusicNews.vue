<template>
  <div class="music-news">
    <div class="title">最新音乐</div>
    <div class="music-news-item" v-for="(item,index) in newsmusic" :key="index">
      <div class="number">{{ index + 1 }}</div>
      <div>
        <img :src="item.picUrl" alt="">
      </div>
      <div class="name">
        <span>{{ item.song.album.name }}</span><br>
        <span>{{ item.song.artists[0].name }}</span>
      </div>
      <i class="el-icon-video-play"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicNews",
  props: {
    newsmusic: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.music-news {
  display: flex;
  flex-wrap: wrap;
  width: 1324px;
  margin: auto;
}

.title {
  width: 100%;
  font-size: 14px;
  border-bottom: 1px solid #b8b6b6;
  margin: 10px 0;
  padding-bottom: 5px;
}

.music-news-item {
  position: relative;
  flex: 50%;
  display: flex;
  padding: 10px 10px;
}

.music-news-item .number {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}

.music-news-item img {
  width: 50px;
  height: 50px;
}

.music-news-item .name {
  font-size: 13px;
  line-height: 26px;
  margin-left: 10px;
}

.el-icon-video-play{
  position: absolute;
  top: 25px;
  left:75px;
  font-size: 20px;
}
</style>