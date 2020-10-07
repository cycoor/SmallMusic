<template>
  <div class="music-banner">
    <el-carousel :interval="4000" trigger="click" type="card" height="187px">
      <el-carousel-item v-for="(item,index) in banner" :key="index">
        <img :src="item.imageUrl" alt="" @load="ImgLoad">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "MusicBanner",
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    ImgLoad() {
      this.$emit('ImgLoad')
    }
  }
}
</script>

<style scoped>
.music-banner {
  width: 1000px;
  height: 214px;
  margin: 0 auto;
}

img {
  width: 500px;
  height: 187px;
}

/deep/ .el-carousel__mask {
  opacity: 0;
}
</style>