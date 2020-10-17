<template>
  <div class="music-sheet">
    <div class="music-sheet-list" v-for="(item,index) in recommend" :key="index">
      <div>
        <img :src="getImgUrl(item)" alt="" @load="LoadImg" @click="DetailClick(index)">
      </div>
      <span>{{ item.name }}</span>
      <div class="number">
        <div class="number-content">
          <img src="~assets/img/content/erji.svg"/>
          {{ item.playCount }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicSheet",
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    LoadImg() {
      this.$emit('LoadImg')
    },
    getImgUrl(item) {
      return item.picUrl || item.coverImgUrl;
    },
    DetailClick(index) {
      this.$router.push('/musicdetail/' + this.recommend[index].id)
    }
  }
}
</script>

<style scoped>
.music-sheet {
  display: flex;
  width: 1324px;
  height: 426px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.music-sheet-list {
  position: relative;
  flex: 1;
  font-size: 14px;
  line-height: 20px;
}

.music-sheet-list img {
  width: 150px;
  height: 150px;
}

.number {
  position: absolute;
  top: 0;
  right: 15px;
  width: 150px;
  height: 20px;
  line-height: 20px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
}

.number-content {
  position: absolute;
  top: 0;
  right: 0;
}

.number img {
  width: 10px;
  height: 10px;
}
</style>