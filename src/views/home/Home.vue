<template>
  <div id="home">
    <nav-bar :lists="lists"/>
    <recommend/>
  </div>
</template>

<script>
import Recommend from './HomeComps/Recommend'

// import MusicContent from 'components/content/musiclayout/MusicContent'
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: "Home",
  components: {
    // MusicContent,
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
#home {
  height: calc(100% - 114px);
  background-color: #191b1f;
}
</style>