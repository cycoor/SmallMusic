<template>
  <div id="app">
    <tab-bar/>
    <el-row>
      <el-col :span="4">
        <music-menu/>
      </el-col>
      <el-col :span="20">
        <music-content/>
      </el-col>
    </el-row>
    <play-button/>
    <router-view/>
  </div>
</template>

<script>

import TabBar from 'components/content/tabbar/TabBar'
import MusicMenu from 'components/content/musiclayout/MusicMenu'
import MusicContent from 'components/content/musiclayout/MusicContent'
import PlayButton from 'components/content/playmusic/PlayMusic'

export default {
  name: "App",
  components: {
    TabBar,
    MusicMenu,
    MusicContent,
    PlayButton
  }
}

</script>

<style>
@import "assets/css/base.css";

#app {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  user-select: none;
  background: #16181c;
  color: #fff;
}

.el-row {
  height: 100%;
}

.el-col-20 {
  height: 100%;
}
</style>
