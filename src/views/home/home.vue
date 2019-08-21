<template>
  <div>
    <navbar class="title">
      <div slot="content" class="content">购物街</div>
    </navbar>
    <scroll class="wrap" ref="scroll" @getPosition="getY" @pullingUp="loadMore">
      <Homeswiper :banners="banners"></Homeswiper>
      <recommend :recommends="recommends"></recommend>
      <feature></feature>
      <tabcontrol :titles="['流行','新款','精选']" @tabClick="tabClick"></tabcontrol>
      <goodlist :goods="goods[currentType].list"></goodlist>
    </scroll>
    <backtop @click.native="backto" v-show="isShow"></backtop>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar/navbar'
import scroll from '@/components/common/scroll/scroll'

import Homeswiper from './childComponents/homeswiper'
import recommend from './childComponents/recommend'
import feature from './childComponents/feature'

import tabcontrol from '@/components/content/tabcontrol'
import goodlist from '@/components/content/goodlist'
import backtop from '@/components/content/backtop'

import { getHomeMultidata, getGoods } from 'network/home'
export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      currentType: 'pop',
      isShow: false
    }
  },
  created() {
    this.getHomeMultidata()
    this.getGoods('pop')
    this.getGoods('new')
    this.getGoods('sell')
  },
  methods: {
    loadMore() {
      this.getGoods(this.currentType)
      this.$refs.scroll.scroll.refresh()
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    getY(position) {
      this.isShow = -(position.y) > 1000 ? this.isShow = true : null
    },
    //
    backto() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    //
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getGoods(type) {
      let page = this.goods[type].page + 1
      getGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
      })
      this.goods[type].page + 1
    }
  },
  components: {
    navbar,
    Homeswiper,
    recommend,
    feature,
    tabcontrol,
    goodlist,
    scroll,
    backtop
  }
}

</script>
<style  scoped>
.content {
  text-align: center;
  background: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.title {
  padding-bottom: 44px;
}
.wrap {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>