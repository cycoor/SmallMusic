<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll/dist/better-scroll'

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    scrollbar: {
      type: [Boolean, Object],
      default() {
        return false
      }
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      mouseWheel: true,//开启鼠标滚轮
      bounce: true,
      scrollbar: this.scrollbar,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })

    // 2.滚动监听事件
    if (this.probeType == 2 || this.probeType == 3) {
      this.scroll.on('scroll', position => {
        this.$emit('scroll', position)
      })
    }

    // 3.上拉加载更多监听事件
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }

    this.$refs.wrapper.scrollerHeight = 10000000
  },
  methods: {
    scrollTo(x, y, time) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      // console.log('----');
      this.scroll && this.scroll.refresh()
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    }
  },
  watch: {
    data() {
      setTimeout(this.refresh, 20)
    }
  }
}
</script>

<style scoped>

</style>
