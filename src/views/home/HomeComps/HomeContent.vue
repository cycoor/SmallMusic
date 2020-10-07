<template>
  <div class="home-content">
    <el-row>
      <el-col :span="4">
        <left-menu/>
      </el-col>
      <el-col :span="20">
        <right-song/>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import LeftMenu from './LeftMenu'
import RightSong from './RightSong'


export default {
  name: "HomeContent",
  components: {
    LeftMenu,
    RightSong
  }
}
</script>

<style scoped>
.home-content {
  height: calc(100% - 114px);
  background-color: #191b1f;
}

.el-row {
  height: 100%;
}

.el-col-20 {
  height: 100%;
}
</style>