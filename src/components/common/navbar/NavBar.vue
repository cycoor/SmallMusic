<template>
  <div class="nav-bar">
    <div class="nav-bar-item"
         v-for="(item,index) in lists"
         :class="{active:index==currentIndex}"
         @click="getContent(item,index)">
      {{item.name}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    props: {
      lists: {
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
      getContent(item, index) {
        this.currentIndex = index
        this.$router.push(item.link)
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    width: 50%;
    margin: 0 auto;
    text-align: center;
    line-height: 51px;
  }

  .nav-bar-item {
    flex: 1;
    width: 136px;
    height: 51px;
    opacity: 0.6;
    cursor: pointer;
  }

  .active {
    opacity: 1;
    border-bottom: 2px solid #5c5e61;
  }
</style>