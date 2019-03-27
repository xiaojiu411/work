<template>
  <div>
    <transition name="height">
      <div class="download" v-if="isShow">
        <div class="cls" @click="close">
          <img src="./img/app-cls.png" alt="">
        </div>
        <div @click="appDownLoad" class="d-content">
          <img class="iconlg" src="./img/dl-icon.png" alt="">
          <h5>下载尊宝全新手机APP</h5>
          <p>新用户送12-88元</p>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
  import {appDownLoad} from '@/common/js/mixin'
  import {mapGetters} from 'vuex'
  export default {
    mixins:[appDownLoad],
    data() {
      return {
        isShow: true
      }
    },
    computed: {
      ...mapGetters(['isLogin'])
    },
    created() {
    },
    methods: {
      close() {
        this.isShow = false
        this.$emit('closeDownload')
      },
    },
    watch: {},
    components: {}
  }
</script>

<style lang="stylus" scoped>
  $height = 48px
  @import '~common/stylus/variable'
  .download
    height 5rem
    background url("./img/app-dl-bg.jpg") no-repeat right
    background-size cover
    p.text
      line-height 32px
      text-align center
      background $color-light
    .box
      height $height
      line-height $height
      display flex
      background $color-blue-mobile
      color $color-light
      div
        display flex
        flex 1
        text-align center
        &:last-child
          background $color-danger
        i
          height $height
          width $height
          flex 0 0 $height
          font-size 20px
          display inline-block
          background rgba(0, 0, 0, .5)
        p
          flex 1
    .cls
      float: left
      overflow: hidden
      width: 3.2rem
      img
        margin: .6rem
        width: 2rem
    .d-content
      font-size: .8rem
      line-height: 2
      color #fff
      overflow hidden
      .iconlg
        float left
        width 4rem
        margin-top .5rem
        margin-right .25rem
      h5
        margin-top .8rem
        font-size .9rem
        font-weight bold




  .height-enter-active, .height-leave-active
    transition all .3s ease-in

  .height-enter, .height-leave-to
    height 0

</style>