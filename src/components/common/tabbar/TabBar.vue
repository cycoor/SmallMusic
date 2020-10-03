<template>
  <div id="tab-bar">
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="logo">
          <img src="~assets/img/logo/logo.jpg">
        </div>
        <span class="user">小小音乐</span>
        <div class="back">
          <img src="~assets/img/logo/back.svg">
        </div>
      </el-col>
      <el-col :span="17">
        <el-input v-model="input" suffix-icon="el-icon-search" class="search">
        </el-input>
      </el-col>
      <el-col :span="3">
        <a href="#" class="login">
          <div class="login-item"></div>
          <span>未登录</span>
        </a>
        <div class="click-icon">
          <div class="click-icon-item">
            <a href="#">
              <img src="~assets/img/logo/min.svg" alt="最小化">
            </a>
          </div>
          <div class="click-icon-item">
            <a href="#">
              <img src="~assets/img/logo/reset.svg" alt="还原">
            </a>
          </div>
          <div class="click-icon-item">
            <a href="#">
              <img src="~assets/img/logo/x.svg" alt="退出">
            </a>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
    data() {
      return {
        input: ''
      }
    }
  }
</script>

<style scoped>
  #tab-bar {
    margin-top: 5px;
  }

  .logo {
    float: left;
    width: 44px;
    height: 44px;
    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
  }

  .logo img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-top: 5px;
  }

  .user {
    line-height: 55px;
    font-size: 14px;
    cursor: pointer;
  }

  .back {
    float: right;
    margin-top: 10px;
    cursor: pointer;
  }

  .back img {
    width: 26px;
    height: 26px;
  }

  .search {
    width: 230px;
    height: 23px;
    margin-left: 100px;
    margin-top: 5px;
  }

  .login {
    float: left;
    line-height: 44px;
    font-size: 14px;
    margin-right: 30px;
  }

  .login-item {
    float: left;
    width: 28px;
    height: 28px;
    background-color: #fff;
    border-radius: 50%;
    margin-top: 5px;
    margin-right: 8px;
  }

  .click-icon {
    float: left;
  }

  .click-icon-item {
    float: left;
    margin: 9px 7px 0;
  }

  .click-icon-item img {
    width: 22px;
    height: 22px;
  }
</style>