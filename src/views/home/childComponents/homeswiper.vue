<template>
  <div>
    <Swiper>
      <SwiperItem v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" @load="monitor" />
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
      isLoad:false
    }
  },
  methods: {
    monitor() {
      if (!this.isLoad) {
        this.$emit('monitor')
        this.isLoad = true
      }
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