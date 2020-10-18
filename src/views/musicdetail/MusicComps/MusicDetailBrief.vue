<template>
  <div class="music-detail-brief">
    <div>
      <img :src="baseInfo.img" alt="">
    </div>
    <div class="content">
      <div class="title">
        <span class="icon">歌单</span>
        <span>{{ baseInfo.name }}</span>
        <div class="right">
          <span class="number">歌曲数{{ baseInfo.trackCount }}</span>
          <span class="plays">播放量{{ baseInfo.playCount }}</span>
        </div>
      </div>
      <div class="center">
        <div class="bofang" @click="allPlay">
          <img src="~assets/img/playmusic/bofang.svg" alt/>
          播放全部
        </div>
        <div class="sub">
          <img src="~assets/img/detail/add.svg" alt/>
          收藏({{ baseInfo.subscribedCount }})
        </div>
        <div class="share">
          <img src="~assets/img/detail/share.svg" alt/>
          分享({{ baseInfo.shareCount }})
        </div>
      </div>
      <div class="bottom">
        标签：<span>{{ baseInfo.tags }}</span>
        <p>{{ baseInfo.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicDetailBrief",
  props: {
    baseInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    allPlay() {
      this.$emit('allPlay')
    }
  }
}
</script>

<style scoped>
.music-detail-brief {
  display: flex;
  height: 206px;
}

img {
  width: 200px;
  height: 200px;
}

.content {
  flex: 1;
  width: 1280px;
  padding: 0 20px;
  font-size: 14px;
}

.title {
  padding-top: 8px;
  font-size: 20px;
}

.icon {
  border: 1px solid red;
  border-radius: 4px;
  color: red;
  padding: 5px;
  font-size: 11px;
  margin-right: 10px;
}

.right {
  display: flex;
  height: 46px;
  color: #4e4e52;
  font-size: 12px;
}

.number, .plays {
  width: 46px;
  height: 46px;
  line-height: 17px;
  text-align: center;
}

.center {
  display: flex;
  margin-top: 40px;
}

.center div {
  border-radius: 10px;
  padding: 5px 10px;
  margin-right: 10px;
  background: #25272b;
}

.center img {
  width: 18px;
  height: 18px;
  vertical-align: -4px;
}

.center .bofang {
  background: #cd2929;
}

.bottom {
  color: #dcdde4;
  margin-top: 32px;
  line-height: 40px;
}

.bottom span {
  color: #2e6bb0;
}

p {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>