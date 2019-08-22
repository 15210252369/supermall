<template>
  <div>
    <navbar class="title">
      <div slot="content" class="content">购物街</div>
    </navbar>
    <tabcontrol
      :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="newTab"
      v-show="show"
    ></tabcontrol>
    <scroll class="wrap" ref="scroll" @getPosition="getY" @pullingUp="loadMore">
      <Homeswiper :banners="banners" @monitor="monitor"></Homeswiper>
      <recommend :recommends="recommends"></recommend>
      <feature></feature>
      <tabcontrol :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2"></tabcontrol>
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
      isShow: false,
      tabOffsetTop: 0,
      isFixed: false,
      show: false
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
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    getY(position) {
      this.isShow = -(position.y) > 1000 ? this.isShow = true : null
      this.show = -(position.y) > this.tabOffsetTop
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
    },
    debounce(fn, delay) {
      let timer = null
      return function (...arg) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          fn.apply(this, arg)
        }, delay)
      }
    },
    monitor() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
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
  },
  mounted() {
    const exe = this.debounce(this.$refs.scroll.refresh, 20)
    this.$bus.$on('loadImg', () => {
      exe()
    })
  }
}

</script>
<style  scoped>
.title {
  text-align: center;
  background: var(--color-tint);
  color: #fff;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10; */
}
.wrap {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.newTab {
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
/* .fixed {
  position: fixed;
  top: 44px;
  right: 0;
  left: 0;
  bottom: 0;
} */
</style>