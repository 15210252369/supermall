<template>
  <div class="goods">
    <goodlistitem v-for="(item,index) in goods" :key="index" :good="item"></goodlistitem>
  </div>
</template>

<script>
import goodlistitem from './goodlistitem'
export default {
  data() {
    return {
    }
  },
  props: {
    goods: Array,
    default() {
      return []
    }
  },
  components: {
    goodlistitem
  }
}

</script>
<style  scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding:3px;
}
</style>