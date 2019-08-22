<template>
  <div id="app">
    <tabbar></tabbar>
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import tabbar from './components/content/main.vue'
export default {
  name: 'app',
  components: {
    tabbar
  }

}
</script>

<style>
@import "assets/css/base.css";
</style>
