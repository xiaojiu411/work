<template>
  <div class="real">
    <div class="banner">
      <div class="wrapper chips">
        <img src="./img/live-icon.gif" alt="">
      </div>
    </div>
    <div class="wrapper real-wrapper">
      <div class="item" v-for="item in itemList">
        <div class="pic">
          <img :src="item.img" alt="">
        </div>
        <div class="bottom">
          <h3>{{item.title}}</h3>
          <p>{{item.describe}}</p>
          <game-api :factoryFun="item.api" :reqData="item.reqData">
            <el-button type="warning">立即投注</el-button>
          </game-api>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {gameAginRedirect, gameAginNewRedirect ,gameMGLive, bbinLogin, getEbetToken, bitGameUserLogin} from '@/api/index'
  import gameApi from '@/components/game-api/game-api'

  export default {
    data() {
      return {
        itemList: [
          {
            title: 'AG旗舰厅',
            describe: '独有玩法咪牌、包桌、免佣百家乐玩法,最新游戏体验',
            img: require('./img/live-ag-new.jpg'),
            api: gameAginNewRedirect,
            reqData: {
              type: 'flash',
              url: window.location.protocol+"//"+document.domain
            }
          },
          {
            title: 'AG国际厅',
            describe: '逼真场景如身临奇境，让您在家放心的博一天',
            img: require('./img/live-ag.jpg'),
            api: gameAginRedirect,
          },
          {
            title: 'MG真人娱乐厅',
            describe: 'MG实力品牌铸造高质游戏体验',
            img: require('./img/live-mg.jpg'),
            api: gameMGLive,
          },
          {
            title: 'BBIN真人娱乐厅',
            describe: 'BBIN高颜值水嫩荷官让您享受博出快感',
            img: require('./img/live-bbin.jpg'),
            api: bbinLogin,
            reqData: {
              gameKind: 'live',
              mode: 'pc',
              gameCode: ''
            }
          },
          {
            title: 'EBET真人娱厅',
            describe: '亚洲最新游戏平台，网页游戏极速顺畅',
            img: require('./img/live-ebet.jpg'),
            api: getEbetToken,
          },
        ]
      }
    },
    computed: {},
    methods: {},
    components: {
      gameApi
    }

  }
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  @import '~common/stylus/mixin'
  .banner
    height 520px
    background url(./img/live-banner.jpg) no-repeat center
    .chips
      position relative
      img
        position absolute
        right 39px
        top 59px
        border-radius 20%

  .real-wrapper
    clearfix()
    margin-top -50px
    .item
      float left
      margin-right 15px
      margin-bottom 15px
      background $color-light
      &:hover img
        transform scale(1.05)
      .pic
        overflow hidden
        img
          transition all .3s ease-in
      .bottom
        padding 20px 28px
        h3
          color $color-intersperse
          font-size 28px
        p
          margin 15px 0 20px 0
        button
          display block
          margin 0 auto
          font-size 16px


</style>