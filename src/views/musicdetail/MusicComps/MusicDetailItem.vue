<template>
  <div class="music-detail-item">
    <table>
      <thead>
      <tr>
        <td></td>
        <td>操作</td>
        <td>音乐标题</td>
        <td>歌手</td>
        <td>专辑</td>
        <td>时长</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in musiclist"
          :key="index"
          :class="{backColor:setBackColor(index)}"
          @dblclick="musicItemClick(index)">
        <td>
          <span v-show="!(playIndex==index)">{{ getNumber(index) }}</span>
          <div v-show="playIndex==index"><img src="~assets/img/playmusic/currentplay.svg" alt=""></div>
        </td>
        <td>
          <img src="~assets/img/leftmenu/live.svg" alt="" class="live">
          <img src="~assets/img/leftmenu/xiazai.svg" alt="" class="xiazai">
        </td>
        <td>{{ item.name }}</td>
        <td>{{ item.song }}</td>
        <td>{{ item.album }}</td>
        <td>{{ item.time }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "MusicDetailItem",
  props: {
    musiclist: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      playIndex: .5
    }
  },
  created() {
    this.$bus.$on('Playing', (index, path) => {
      if (this.$route.path == path) {
        this.playIndex = index;
      }
    })
  },
  methods: {
    getNumber(index) {
      if ((index + 1) <= 9) {
        return '0' + (index + 1)
      }
      return index + 1
    },
    setBackColor(index) {
      if (index % 2) {
        return true
      }
      return false
    },
    musicItemClick(index) {
      if (this.$parent.$parent.$el.className.indexOf('play-music-list') != -1) {
        this.$bus.$emit('PlayMusicListItem', index);
        return;
      }
      this.$emit('musicItemClick', index);
    }
  }
}
</script>

<style scoped>
table {
  width: 1529px;
}

thead tr {
  height: 30px;
  font-size: 14px;
}

thead tr td {
  border: 1px solid #23262c;
  margin-left: -1px;
}

thead, tbody tr td:nth-child(1),
thead, tbody tr td:nth-child(2),
thead, tbody tr td:nth-child(6) {
  width: 80px;
}


thead, tbody tr td:nth-child(3) {
  width: 1032px;
}

thead, tbody tr td:nth-child(4) {
  width: 140px;
}

thead, tbody tr td:nth-child(5) {
  width: 180px;
}

tbody {
  font-size: 13px;
  color: #575757;
}

tbody tr td:nth-child(1) {
  text-align: center;
}

tbody tr td:nth-child(2) img {
  width: 20px;
  opacity: .6;
}

tbody tr td:nth-child(2) img.xiazai {
  margin-left: 6px;
}

thead, tbody tr td:nth-child(3) {
  color: #fff;
}

.backColor {
  background: #1a1c20;
}
</style>