<template>
  <div class="tabitem" @click="handleChange">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    handleChange() {
      this.$router.replace(this.path)
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : null
    }
  }
}

</script>
<style  scoped>
.tabitem {
  flex: 1;
  text-align: center;
}
.tabitem img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>