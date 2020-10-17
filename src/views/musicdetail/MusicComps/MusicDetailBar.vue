<template>
  <div class="music-detail-bar">
    <div class="detail-bar"
         v-for="(item,index) in list"
         :class="{action:index === currentIndex}"
         @click="BtnClick(index)">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicDetailBar",
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    BtnClick(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
.music-detail-bar {
  display: flex;
  width: 100%;
  padding: 10px 0;
}

.detail-bar {
  width: 96px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  font-size: 14px;
}

.action {
  border-bottom: 3px solid #b82525;
}
</style>