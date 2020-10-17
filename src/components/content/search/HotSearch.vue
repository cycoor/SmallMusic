<template>
  <div class="hot-search">
    <div>
      <h3>热搜榜</h3>
    </div>
    <div class="hots-search">
      <div class="hots-search-item" v-for="(item,index) in history" :key="index">
        <div class="hots-number" :class="{active:index <= 2}">{{ getNumber(index) }}</div>
        <div class="hot-content">
          <div class="top">
            <span class="name">{{ item.searchWord }}</span>
            <span class="score">{{ item.score }}</span>
            <img :src="item.iconUrl" alt="" @load="imgLoad">
          </div>
          <span>{{ item.content }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotSearch",
  props: {
    history: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    getNumber(index) {
      if ((index + 1) <= 9) return '0' + (index + 1);
      return (index + 1);
    },
    imgLoad() {
      this.$emit('imgLoad')
    }
  }
}
</script>

<style scoped>
.hot-search {
  height: 100%;
}

h3 {
  margin-top: 30px;
  margin-bottom: 10px;
}

.hots-search {
  display: flex;
  flex-wrap: wrap;
}

.hots-search-item {
  display: flex;
}

.hots-search-item:hover {
  background: #2a2c30;
}

.hots-number {
  width: 40px;
  height: 50px;
  line-height: 50px;
}

.hot-content {
  width: 314px;
  height: 50px;
  font-size: 13px;
}

.top {
  display: flex;
  margin-bottom: 10px;
}

img {
  height: 14px;
}

.top .name {
  margin-right: 5px;
  color: #fff;
}

.top .score {
  margin-right: 5px;
}

.active {
  color: #dd3a3a;
}
</style>