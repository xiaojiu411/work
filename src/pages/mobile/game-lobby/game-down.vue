<template>
  <div class="service">
    <v-header :data="headData" @leftIconClick="back" @rightIconClick="openService"></v-header>
    <div class="main">
      <img class="fullwidth" src="./img/dw/d-bg.jpg" alt="">
      <div class="game-list download-list">
        <div v-if="item.category !== 'PT' || getMobilePlatform() ==='Android'" class="item" v-for="item in downloadList">
          <div class="pic">
            <img v-lazy="item.src" alt="">
          </div>
          <h4>{{item.text}}</h4>
          <span @click="download(item)">下载</span>
        </div>
      </div>
      <img class="bot" src="./img/dw/bot.jpg" alt="">
    </div>
  </div>
</template>

<script>
  import {getMobilePlatform} from '@/common/js/util'
  import {commonHead} from '@/common/js/mixin'

  export default {
    mixins: [commonHead],
    data() {
      return {
        headData: {
          title: '客户端下载',
        },
        // 打开客服
        openService() {
          window.open(`https://chatai.zb251.com/chat/chatClient/chatbox.jsp?companyID=9043&configID=17&live800_domain=https://${window.location.host}&chatfrom=wap`)
        },
        downloadList: [
          {
            src: require('./img/dw/agreal.png'),
            text: 'AG真人',
            category: 'AGReal',
            content:'逼真场景,足不出户博天下'
          },
          {
            src: require('./img/dw/agfish.png'),
            text: 'AG捕鱼下载',
            category: 'AGFish',
            content:'以小搏大千万奖池等你来爆'
          },
          {
            src: require('./img/dw/ptslot.png'),
            text: 'PT老虎机',
            category: 'PT',
            content:'最经典,最好玩的老虎机游戏'
          },
          {
            src: require('./img/dw/dt.png'),
            text: 'DT老虎机',
            category: 'DT',
            content:'实力强大,游戏模式最好玩'
          },
          {
            src: require('./img/dw/mwfish.png'),
            text: '千炮捕鱼',
            category: 'MWG',
            content:'赔付稳定,爆款游戏 天天盈利'
          },
          {
            src: require('./img/dw/ebetreal.png'),
            text: 'EBET真人',
            category: 'EBET',
            content:'美女性感荷官,投注简单易懂'
          },
        ],
        getMobilePlatform
      }
    },
    computed: {
    },
    created() {
    },
    methods: {

      // 下载
      download(item) {
        if (item.category === 'PT') {
          window.location.href = 'http://m.gm175788.com/download.html'
        }
        if (item.category === 'DT') {
          let url = ''
          if (getMobilePlatform() === 'Android') {
            url = 'http://down.dreamtech.asia/ZUNBAO/android.html'
          } else {
            url = 'http://down.dreamtech.asia/ZUNBAO/ios.html'
          }
          window.location.href = url
        }
        if (item.category === 'AGFish') {
          window.location.href = 'http://hunter2.agmjs.com/'
        }
        if (item.category === 'AGReal') {
          window.location.href = 'http://agmbet.com'
        }
        if (item.category === 'MWG') {
          window.location.href = 'https://www.666wins.com/as-lobby/mob/qrcode2_cn.html'
        }
        if (item.category === 'EBET') {
          window.location.href = 'https://www.ebetapp.com/zunbao'
        }
      }
    },
    watch: {},
    components: {}

  }
</script>
<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  @import '~common/stylus/mixin'
  .service
    background #fec013
    .main
      position relative
      padding-top 2rem
      .download-list
        position: relative
        background: #fff
        width: 96%
        top: -8rem
        left: 2%
        border-radius 1rem
        padding 1rem 1rem 5rem 1rem
        .item
          padding-bottom: .5rem
          border-bottom: 1px solid #eaeaea
          margin-bottom: 1rem
          overflow hidden
          .pic
            float left
          img
            width 4rem
            margin-right 1rem
          h4
            display inline-block
            font-size .9rem
            line-height 3rem
            font-weight bold
          span
            float: right
            display inline-block
            width 5rem
            margin-top .5rem
            border 2px solid
            border-radius 3rem
            color #6f9fff
            text-align center
            line-height 2rem
            font-size .9rem
            font-weight bold

  .fullwidth
    width 100%
  .bot
    position relative
    top -8rem
    width 100%

</style>