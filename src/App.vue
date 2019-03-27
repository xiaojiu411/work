<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
  import {initLoginStateModule} from '@/common/js/mixin'
  export default {
    mixins:[initLoginStateModule],
  }
</script>
