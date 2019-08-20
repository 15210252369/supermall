<template>
  <div>
    <Swiper>
      <SwiperItem v-for="(item,index) in banners" :key='index'>
        <a :href="item.link">
          <img :src="item.image" alt />
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/common/swiper/index'
export default {
  props: {
    banners: Array,
    default() {
      return []
    }
  },
  data() {
    return {
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}

</script>
<style  scoped>
</style>