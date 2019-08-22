<template>
  <div class="tab">
    <div
      :class="{active:currentIndex===index}"
      class="tab-item"
      v-for="(item,index) in titles"
      :key="index"
      @click="handleTab(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      currentIndex: 0
    }
  },
  props: {
    titles: Array,
    default() {
      return []
    }
  },
  methods: {
    handleTab(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}

</script>
<style  scoped>
.tab {
  display: flex;
  text-align: center;
  line-height: 44px;
  height: 44px;
  background: #fff;
  font-size: 15px;
  z-index: 9;
}
.tab-item {
  flex: 1;
}
.tab-item span {
  padding: 5px;
}
.tab-item.active span {
  border-bottom: 2px solid var(--color-high-text);
}
.tab {
  /* position: sticky; */
  /* top: 44px; */
}
</style>