<template>
  <div class="right-song">
    <nav-bar :lists="lists"/>
    <recommend/>
  </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'

import Recommend from './recommend/Recommend'

export default {
  name: "RightSong",
  components: {
    NavBar,
    Recommend
  },
  data() {
    return {
      lists: [
        {link: '/home', name: '个性推荐'},
        {link: '/home/category', name: '歌单'},
        {link: '/home/ranklist', name: '排行耪'},
        {link: '/home/artist', name: '歌手'},
        {link: '/home/newsongs', name: '最新音乐'},
        {link: '/home/mv', name: 'MV'}
      ]
    }
  }
}
</script>

<style scoped>
.right-song {
  position: relative;
  height: 100%;
  background-color: #16181c;
  overflow: hidden;
}
</style>