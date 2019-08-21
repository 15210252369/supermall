<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
}

</script>
<style  scoped>
.tabbar {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  height: 49px;
  background:#fff;
  z-index: 10;
}
</style>