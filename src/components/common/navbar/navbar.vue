<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
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
.navbar {
  display: flex;
  line-height: 44px;
  box-shadow: 1px 1px 1px rgba(100, 100, 100, 0.1);
}

.content {
  flex: 1;
}
</style>