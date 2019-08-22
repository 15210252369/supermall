<template>
  <swiper class="detail">
    <swiper-item v-for="(item,index) in detailSwiper" :key="index">
      <img :src="item" alt />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index'
export default {
  data() {
    return {
    }
  },
  props: {
    detailSwiper: Array
  },
  components: {
    Swiper,
    SwiperItem
  }
}

</script>
<style  scoped>
.detail {
  height: 300px;
}
</style>