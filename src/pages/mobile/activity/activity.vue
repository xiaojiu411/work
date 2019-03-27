<template>
  <div class="activity">
    <v-header :data="headData" @leftIconClick="back" @rightIconClick="openService"></v-header>
    <div class="tab-wrapper">
      <tab-border @selectTabItem="selectItem" :list="menuList" :currentIdx="currentIdx"></tab-border>
    </div>
    <div class="tab-content promotions">
      <div @click="goToThisPromotion(item)" v-if="filterList.length" class="item" v-for="item in filterList">

        <div class="thumb">
          <div class="pic">
            <img v-lazy="item.img" alt="">
          </div>
          <div class="bottom">
            <p>{{item.title}}</p>
            <span class="btn">
              点击详情
            </span>
          </div>
        </div>

        <promotion-detail @togglePanel="togglePanel" :item="item"></promotion-detail>

      </div>
      <no-result v-if="!filterList.length"></no-result>
    </div>
  </div>
</template>

<script>
  import tabBorder from 'MComponents/tab-border/tab-border.vue'
  import promotionDetail from '@/components/promotion-detail/promotion-detail'
  import NoResult from '@/components/no-result/no-result'
  import {promotion} from '@/common/js/mixin'

  export default {
    mixins: [promotion],
    data() {
      return {
        headData: {
          title: '活动中心',
          leftIcon: 'arrowr',
          rightIcon: 'kefu2',
        }
      }
    },
    computed: {},
    activated() {
      this._goToThisPosition()
    },
    created() {
    },
    methods: {
      back() {
        this.$router.back()
      },
        openService() {
          window.open(`https://chatai.zb251.com/chat/chatClient/chatbox.jsp?companyID=9043&configID=17&live800_domain=https://${window.location.host}&chatfrom=wap`)
      },
      //滚动到指定位置
      _goToThisPosition() {
        setTimeout(() => {
          let query = this.$route.query.query
          if (query) {
            let needOpenOne = this.filterList.find((item) => {
              return item.id === query
            })
            needOpenOne.state = !needOpenOne.state
            this.$nextTick(() => {
              let needMoveDistance = document.querySelector(`.item .detail.${query}`).offsetTop
              window.scrollTo(0, needMoveDistance - 240)
            })
          }
        }, 20)
      },
    },
    watch: {},
    components: {tabBorder,promotionDetail,NoResult}

  }
</script>
<style>
  .activity .item .detail{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background: #fff;
    overflow: auto;
    padding: 60px 10px 10px 10px;
  }
  .activity .item .detail img{
    width: 100%;
  }

</style>
<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  @import '~common/stylus/mixin'
  .activity
    mobile-wrapper()
    background #eee
  .tab-wrapper
    position fixed
    left 0
    top 50px
    width 100%
    z-index 999
    background $color-light
  .promotions.tab-content
    padding-top 65px
    m-wrapper()
    .item
      margin-bottom 3rem
      border-radius 15px
    .thumb
      position relative
    .pic
      img
        width 100%
        border-top-right-radius 10px
        border-top-left-radius 10px
    .bottom
      position absolute
      bottom -2.4rem
      left 0
      width 100%
      display flex
      justify-content space-between
      align-items center
      background #fff
      color #333
      border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
      p
        padding-left 10px
        line-height 3rem
        font-size: 15px
        font-weight: bold
      .btn
        padding 8px 10px
        background #6b9fff
        color #fff
        border-radius 20px
        margin-right 10px


</style>