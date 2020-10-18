<template>
  <div id="music-detail">
    <scroll :probe-type="3" class="content" ref="scroll">
      <music-detail-brief :baseInfo="baseInfo" @allPlay="playMusic()"/>
      <music-detail-bar :list="list"/>
      <music-detail-item :musiclist="musiclist" @musicItemClick="playMusic"/>
    </scroll>
  </div>
</template>

<script>

import MusicDetailBrief from './MusicComps/MusicDetailBrief'
import MusicDetailBar from './MusicComps/MusicDetailBar'
import MusicDetailItem from './MusicComps/MusicDetailItem'

import {MusicListDetail, SongsDetail, baseInfo, songDetail,} from 'network/detail'
import {indexMixin} from './plays'
import Scroll from "components/common/scroll/Scroll";


export default {
  name: "MusicDetailContent",
  components: {
    Scroll,
    MusicDetailBrief,
    MusicDetailBar,
    MusicDetailItem
  },
  data() {
    return {
      baseInfo: {},
      list: [],
      musiclist: []
    }
  },
  mixins: [indexMixin],
  created() {
    this.id = this.$route.params.id;

    this.getMusicListDetail(this.id)
  },
  methods: {
    getMusicListDetail(id) {
      MusicListDetail(id).then(res => {
        this.musicListDetail = res;
        this.baseInfo = new baseInfo(this.musicListDetail.playlist);
        let str = "评论(" + this.musicListDetail.playlist.commentCount + ")";
        this.list = ['歌曲列表', str, '收藏者'];
        for (let i of this.musicListDetail.playlist.trackIds) {
          SongsDetail(i.id).then(res => {
            let song = new songDetail(res.songs);
            this.musiclist.push(song);
          })
        }
      })
    },
  }
}
</script>

<style scoped>
#music-detail {
  width: 100%;
  height: 850px;
  padding: 35px 35px 0px 35px;
  overflow: hidden;
}

.content {
  height: calc(100% - 59px);
  overflow: hidden;
}
</style>