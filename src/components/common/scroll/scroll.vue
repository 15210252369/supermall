<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      scroll: null,
    }
  },

  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: 2,
      pullUpLoad: true
    }),
      this.scroll.on('scroll', (position) => {
        this.$emit('getPosition', position)
      }),
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
        this.scroll.finishPullUp()
      })
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    },
    refresh() {
      this.scroll.refresh()
    }
  }
}

</script>
<style  scoped>
</style>