<template>
  <div class="notice m-wrapper">
    <i class="iconfont icon-gonggao"></i>
    <!--<span> 公告：</span>-->
    <marquee loop="infinite" scrollamount="3">
      <router-link to="/mobile/notice-page" class="news" v-for="item in newsList">{{item.title}}</router-link>
    </marquee>
  </div>
</template>

<script>
  import {getNotice} from '@/api/index'

  export default {
    data() {
      return {
        newsList: []
      }
    },
    computed: {},
    created() {
      this._getNotice()
    },
    methods: {
      _getNotice() {
        getNotice({
          pageIndex: 1,
          pageSize: 5,
        }).then((res) => {
          if (this.ERR_OK === res.code) {
            this.newsList = res.data.records
          }
        })
      }
    },
    watch: {},
    components: {}

  }
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  .notice
    display flex
    line-height 38px
    height 38px
    margin .5rem 0
    overflow hidden
    background #fff
    color #6c9eff
    span
      display inline-block
      margin-left 2px
      width 54px
    .news
      margin-right 13px
    marquee
      display flex
      height 38px
      overflow hidden
</style>