<template>
  <div>
    <tabbar>
      <tabitem path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt />
        <div slot="item-text">首页</div>
      </tabitem>
      <tabitem path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt />
        <div slot="item-text">首页</div>
      </tabitem>
      <tabitem path="/car">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt />
        <div slot="item-text">首页</div>
      </tabitem>
      <tabitem path="/profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt />
        <div slot="item-text">首页</div>
      </tabitem>
    </tabbar>
  </div>
</template>

<script>
import tabbar from '../common/tabbar/tabbar'
import tabitem from '../common/tabbar/tabitem'
export default {
  data() {
    return {
    }
  },
  components: {
    tabbar,
    tabitem
  }
}

</script>
<style  scoped>
</style>