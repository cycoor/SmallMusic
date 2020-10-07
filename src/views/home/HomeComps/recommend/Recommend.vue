<template>
  <div class="recommend">
    <scroll :probe-type="3" ref="scroll" class="content">
      <music-banner :banner="banner" @ImgLoad="ImgLoad"/>
      <p>推荐歌单</p>
      <music-sheet :recommend="recommend"/>
      <music-broad-cast :broadcast="broadcast"/>
      <music-news :newsmusic="newsmusic"/>
    </scroll>
  </div>
</template>

<script>

import MusicBanner from './MusicBanner'
import MusicSheet from './MusicSheet'
import MusicBroadCast from './MusicBroadcast'
import MusicNews from './MusicNews'

import {_Banner, _Recommends, _Broadcast, _NewMusic} from "network/home";
import Scroll from 'components/common/scroll/Scroll'

export default {
  name: "Recommend",
  components: {
    MusicBanner,
    MusicSheet,
    MusicBroadCast,
    MusicNews,
    Scroll
  },
  data() {
    return {
      banner: [],
      recommend: [],
      broadcast: {},
      newsmusic: []
    }
  },
  created() {
    // 获取banner图
    this._getBanner()

    //推荐歌单数据
    this._getRecommends()

    //独家放送数据
    this._getBroadcast()

    //最新音乐数据
    this._getNewMusic()
  },
  methods: {
    /**
     事件相关的
     **/
    ImgLoad() {
      this.$refs.scroll.refresh()
    },
    /**
     网络请求相关的
     **/
    _getBanner() {
      _Banner().then(res => {
        this.banner = res.banners.slice(0, 6)
      })
    },
    _getRecommends() {
      _Recommends().then(res => {
        this.recommend = res.result.slice(0, 16)
      })
    },
    _getBroadcast() {
      _Broadcast().then(res => {
        this.broadcast = res
      })
    },
    _getNewMusic() {
      _NewMusic().then(res => {
        this.newsmusic = res.result
      })
    }
  }
}
</script>

<style scoped>
.recommend {
  height: 850px;
  overflow: hidden;
}

p {
  padding-left: 130px;
  margin-bottom: 5px;
  font-size: 13px;
}

.content {
  height: calc(100% - 110px);
  overflow: hidden;
}
</style>