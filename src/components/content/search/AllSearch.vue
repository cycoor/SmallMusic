<template>
  <div class="search-all">
    <div>
      <el-input v-model="input"
                suffix-icon="el-icon-search"
                class="search"
                @focus="ShowSearch"
                @blur="SearchNone">
      </el-input>
    </div>
    <div class="search-content" v-show="isShow">
      <scroll class="content" ref="scroll" :probe-type="3" @imgLoad="imgLoad" :scrollbar="{fade:false}">
        <div class="search-title">
          <H3>搜索历史</H3>
          <i class="el-icon-delete-solid"></i>
        </div>
        <div class="search-history">
          <div v-for="item in list" class="history-item">
            {{ item }}
          </div>
        </div>
        <hot-search :history="history"/>
      </scroll>
    </div>
  </div>
</template>

<script>

import HotSearch from './HotSearch'

import {_hotSearchDetail} from 'network/search'
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "AllSearch",
  components: {
    HotSearch,
    Scroll
  },
  data() {
    return {
      input: '',
      list: ['海底', '世间美好与你环环相扣', '灰狼'],
      history: [],
      isShow: false
    }
  },
  created() {
    this._getHotSearchDetail()
  },
  methods: {
    _getHotSearchDetail() {
      _hotSearchDetail().then(res => {
        this.history = res.data
      })
    },
    ShowSearch() {
      this.isShow = !this.isShow
    },
    SearchNone() {
      this.isShow = false
    },
    imgLoad() {
      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style scoped>
.search-all {
  position: relative;
  width: 400px;
  height: 54px;
  z-index: 9;
}

.search {
  width: 230px;
  height: 40px;
  margin-left: 100px;
  margin-top: 5px;
  font-size: 20px;
}

/deep/ .el-input__inner {
  border-radius: 30px;
}

.search-content {
  position: absolute;
  top: 53px;
  left: 98px;
  width: 400px;
  height: 530px;
  background: #2d2f33;
  color: #828385;
  padding: 5px 20px 0px 20px;
  overflow: hidden;
}

.content {
  height: 530px;
  overflow: hidden;
}

.search-title {
  display: flex;
  width: 360px;
  height: 40px;
  line-height: 40px;
}

.search-title h3 {
  margin-right: 16px;
}

.el-icon-delete-solid {
  margin-top: 12px;
}

.search-history {
  display: flex;
  width: 360px;
  height: 27px;
  line-height: 27px;
  margin-top: 4px;
}

.history-item {
  font-size: 14px;
  padding: 0 10px;
  margin-right: 10px;
  border-radius: 10px;
  border: 1px solid #828385;
}
</style>