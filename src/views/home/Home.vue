<template>
  <div id="home">
    <tab-bar/>
    <home-content/>
    <play-button/>
  </div>
</template>

<script>

import TabBar from 'components/common/tabbar/TabBar'
import PlayButton from 'components/common/playbutton/PlayButton'

import HomeContent from './HomeComps/HomeContent'

export default {
  name: "Home",
  components: {
    TabBar,
    PlayButton,
    HomeContent
  }
}
</script>

<style scoped>
#home {
  position: relative;
  height: 915px;
}
</style>