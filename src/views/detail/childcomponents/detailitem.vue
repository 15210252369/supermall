<template>
  <div>
    <navbar>
      <div slot="left">
        <img src="~assets/img/common/back.svg" alt class="back" @click="$router.back()" />
      </div>
      <div slot="content" class="title">
        <div
          class="item"
          v-for="(item,index) in titles"
          :key="index"
          :class="{active:currentIndex===index}"
          @click="change(index)"
        >{{item}}</div>
      </div>
    </navbar>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar/navbar'


export default {
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    change(index) {
      this.currentIndex = index
    }
  },
  components: {
    navbar
  }
}

</script>
<style  scoped>
.title {
  display: flex;
  font-size: 13px;
}
.item {
  flex: 1;
  text-align: center;
  margin-top: 5px;
}
.active {
  color: var(--color-tint);
}
.back {
  margin: 15px 0 0 10px;
}
</style>