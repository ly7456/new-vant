<template>
  <div class="hello">
    <van-pull-refresh>
      <one v-if="active==0"></one>
      <two v-else-if="active==1"></two>
      <three v-else></three>
    </van-pull-refresh>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="search">页面一</van-tabbar-item>
      <van-tabbar-item icon="friends-o">页面二</van-tabbar-item>
      <van-tabbar-item icon="setting-o">页面三</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import one from './one.vue'
import two from './two.vue'
import three from './three.vue'
export default {
  name: 'HelloWorld',
  components: {
    one,
    two,
    three
  },
  props: {
    msg: String
  },
  data() {
    return {
      active: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
