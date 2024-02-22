src/components/HelloWorld.vue<template>
  <div class="hello">
    页面一
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
.hello{
  background-color: rgb(175, 86, 71);
  height: calc(100vh - 50px);
}
</style>
