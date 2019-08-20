<template>
  <div id="app">
    <tabbar></tabbar>
  <router-view></router-view>
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
@import 'assets/css/base.css'
</style>
