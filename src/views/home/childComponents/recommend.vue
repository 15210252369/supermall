<template>
  <div class="wrapper">
    <div class="wrapper-item" v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    recommends: Array,
    default() {
      return []
    }
  }
}

</script>
<style  scoped>
.wrapper {
  display: flex;
  font-size: 12px;
  padding: 15px 0 30px;
  width: 100%;
  text-align: center;
  border-bottom:8px solid #ccc;
}
.wrapper-item {
  flex: 1;
}
.wrapper-item img {
  width: 65px;
  height: 65px;
  margin-bottom: 10px;
}
</style>
