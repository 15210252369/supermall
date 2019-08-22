<template>
  <div class="detail">
    <detail-item class="top"></detail-item>
    <div class="wrap">
      <scroll class="middle-item" ref="scroll">
        <detail-swiper :detailSwiper="detailSwiper"></detail-swiper>
        <detail-base :goods="goods"></detail-base>
        <shopinfo :shop="shop"></shopinfo>
        <detailInfo :detailInfo="detailInfo" @imageLoad="imageLoad"></detailInfo>
        <detailparams :paramInfo="paramInfo"></detailparams>
        <detailComment :commentInfo="commentInfo"></detailComment>
      </scroll>
    </div>
  </div>
</template>

<script>
import detailItem from './childcomponents/detailitem'
import detailSwiper from './childcomponents/detailswiper'
import detailBase from './childcomponents/DetailBaseInfo'
import shopinfo from './childcomponents/DetailShopInfo'
import detailInfo from './childcomponents/DetailGoodsInfo'
import detailparams from './childcomponents/DetailParamInfo'
import detailComment from './childcomponents/DetailCommentInfo'

import scroll from 'components/common/scroll/scroll'

import { getDetail, Goods, Shop, GoodsParam } from 'network/detail'
export default {
  name: 'detail',
  data() {
    return {
      iid: null,
      detailSwiper: null,
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {}
    }
  },
  created() {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res => {
      console.log(res)
      let data = res.result
      this.detailSwiper = data.itemInfo.topImages
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      this.shop = new Shop(data.shopInfo)
      this.detailInfo = data.detailInfo
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0]
      }
    })
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()
    }
  },
  components: {
    detailItem,
    detailSwiper,
    detailBase,
    shopinfo,
    scroll,
    detailInfo,
    detailparams,
    detailComment
  }
}

</script>
<style  scoped>
.detail {
  position: relative;
  z-index: 11;
  background: #fff;
}
.detail img {
  height: 300px;
}
.middle-item {
  height: calc(100% - 44px);
}
.top {
  position: relative;
  z-index: 12;
  background: #fff;
}
.wrap {
  height: 100vh;
}
</style>