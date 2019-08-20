<template>
  <div>
    <navbar>
      <div slot="content" class="content">购物街</div>
    </navbar>
    <Homeswiper :banners="banners"></Homeswiper>
    <recommend :recommends='recommends'></recommend>
  </div>
</template>

<script>
import navbar from '../../components/common/navbar/navbar'
import Homeswiper from './childComponents/homeswiper'
import recommend from './childComponents/recommend'
import { getHomeMultidata } from 'network/home'
export default {
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  },
  components: {
    navbar,
    Homeswiper,
    recommend
  }
}

</script>
<style  scoped>
.content {
  text-align: center;
  background: var(--color-tint);
  color: #fff;
}
</style>