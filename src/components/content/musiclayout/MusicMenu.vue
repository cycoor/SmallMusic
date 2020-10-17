<template>
  <div class="left-menu">
    <div class="menu-item" v-for="(item,index) in lists"
         :class="{isActive:index==currentIndex && item.image !==''}"
         @click="Change(index)">
      <div v-if="item.image !==''">
        <img :src="item.image" alt="">
      </div>
      <span>{{ item.content }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicMenu",
  data() {
    return {
      lists: [
        {path: '', image: '', content: '推荐'},
        {path: '/home', image: require("assets/img/leftmenu/music-line.svg"), content: '发现音乐'},
        {path: '', image: require("assets/img/leftmenu/mv.svg"), content: '全部MV'},
        {path: '', image: require("assets/img/leftmenu/zhibo.svg"), content: '直播'},
        {path: '', image: require("assets/img/leftmenu/shiping.svg"), content: '视频'},
        {path: '', image: require("assets/img/leftmenu/friend.svg"), content: '朋友'},
        {path: '', image: '', content: '我的音乐'},
        {path: '', image: require("assets/img/leftmenu/music.svg"), content: '本地音乐'},
        {path: '', image: require("assets/img/leftmenu/xiazai.svg"), content: '下载管理'},
        {path: '', image: require("assets/img/leftmenu/yunpan.svg"), content: '我的音乐云盘'},
        {path: '', image: '', content: '创建的歌单'}
      ],
      currentIndex: 1
    }
  },
  methods: {
    Change(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
.left-menu {
  margin-left: 10px;
}

.menu-item {
  display: flex;
  height: 30px;
  line-height: 30px;
  margin-top: 15px;
  opacity: 0.6;
}

.menu-item:hover {
  color: #ffffff;
  opacity: 1;
  background: #26282c;
  cursor: pointer;
}

.menu-item img {
  width: 20px;
  height: 20px;
  margin: 0 10px;
}

.isActive {
  border-left: 2px solid #b82525;
  background: #26282c;
}
</style>