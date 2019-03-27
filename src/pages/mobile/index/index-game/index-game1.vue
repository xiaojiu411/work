<template>
  <div>
    <div class="game-wrapper">

      <div class="game-tab">
        <span :class="{active:currentType === item.type}" @click="selectItem(item)"
              v-for="(item) in tabList">{{item.text}}</span>
      </div>

      <div class="game-list">
        <div @click="allPlayGame(item)" class="item" v-for="item in filterList">
          <div class="pic">
            <img v-lazy="item.src" alt="">
          </div>
          <div class="text">
            <p class="topic">{{item.text}}</p>
            <p>{{item.content}}</p>
          </div>
          <span>开始游戏</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  const TYPES = {
    slot: 'slot',
    hot: 'hot',
    real: 'real',
  }
  import {
    gameAginBuyuRedirect,
    mwgLogin,
    cg761Login,
    kyqpLogin,
    cardDtLogin,
    gameAginRedirect,
    gameAginNewRedirect,
    getEbetToken,
    PBUserLogin,
    sbLogin,
    bbinLogin,
    gameMGLive,
    fanyaLogin,
    imLogin,
    vrLogin,
    bitGameUserLogin,
    mobileMwgLogin,
    gamePGLogin
  } from '@/api/index'
  import {playGame} from '@/common/js/mixin'
  import {getMobilePlatform} from '@/common/js/util'
  import {mapGetters} from 'vuex'

  export default {
    mixins: [playGame],
    data() {
      return {
        tabList: [
          {
            text: '热门推荐',
            type: TYPES.hot
          },
          {
            text: '老虎机',
            type: TYPES.slot
          },
          {
            text: '真人',
            type: TYPES.real
          },
        ],
        currentType: TYPES.hot,
        gameList: [

          {
            src: require('./img/i/pt.jpg'),
            text: 'PT国际版',
            type: TYPES.slot,
            category: 'ptasia',
            content:'最经典 最好玩的老虎机游戏'
          },
          {
            type: TYPES.slot,
            src: require('./img/i/dt.jpg'),
            text: 'DT老虎机',
            category: 'dt',
            content:'实力强大 游戏模式最好玩'
          },
          {
            type: TYPES.slot,
            src: require('./img/i/cq9.jpg'),
            text: 'CQ9老虎机',
            category: 'cq9',
            content:'后起之秀 赔率最高 游戏丰富'
          },
          {
            type: TYPES.slot,
            src: require('./img/i/mg-slot.png'),
            text: 'MG老虎机',
            category: 'mg',
            content:'赔付稳定 爆款游戏 天天盈利'
          },
          {
            type: TYPES.slot,
            src: require('./img/i/pg.jpg'),
            text: 'PG老虎机',
            category: 'pg',
            content:'最新网红游戏 精致新颖'
          },

          //热门游戏

          {
            type: TYPES.hot,
            src: require('./img/i/xzw.png'),
            text: 'PT-熊之舞',
            category: 'pta',
            content:'以小博大 奖池等你爆'
          },
          {
            type: TYPES.hot,
            src: require('./img/i/ag-qj.png'),
            text: 'AG旗舰厅',
            api: gameAginNewRedirect,
            reqData: {
              type: 'h5',
              url: window.location.protocol+"//"+document.domain
            },
            content:'庄闲长龙 足不出户博天下'
          },
          {
            type: TYPES.hot,
            src: require('./img/i/vr.jpg'),
            text: 'VR彩票',
            api: vrLogin,
            content:'多种彩种 台湾主播'
          },
          {
            type: TYPES.hot,
            src: require('./img/i/hcll.png'),
            text: 'PG-横财来了',
            category: 'pg',
            content:'PG好莱坞巨制新玩法'
          },
          {
            type: TYPES.hot,
            src: require('./img/i/mgzr.png'),
            text: 'MG-百家乐',
            api: gameMGLive,
            content:'幸运选台 即时下注'
          },

          //真人
          {
            type: TYPES.real,
            src: require('./img/i/ag-qj.png'),
            text: 'AG旗舰厅',
            api: gameAginNewRedirect,
            reqData: {
              type: 'h5',
              url: window.location.protocol+"//"+document.domain
            },
            content:'庄闲长龙 足不出户博天下'
          },
          {
            type: TYPES.real,
            src: require('./img/i/ag.jpg'),
            text: 'AG真人',
            api: gameAginRedirect,
            content:'实力品牌 创新下注模式'
          },
          {
            type: TYPES.real,
            src: require('./img/i/mgzr.png'),
            text: 'MG真人',
            api: gameMGLive,
            content:'多种下注方式  实时视频流畅'
          },
          {
            type: TYPES.real,
            src: require('./img/i/bbin.jpg'),
            text: 'BBIN真人',
            api: bbinLogin,
            reqData: {
              gameKind: 'live',
              mode: 'h5',
              gameCode: ''
            },
            content:'美颜水嫩荷官 让您博出快感'
          },
          {
            type: TYPES.real,
            src: require('./img/i/ebet.jpg'),
            text: 'EBET真人',
            api: getEbetToken,
            content:'性感荷官发牌 投注简单易懂'
          },
        ],
        getMobilePlatform
      }
    },
    computed: {
      filterList() {
        return this.gameList.filter(item => item.type === this.currentType)
      },
      ...mapGetters(['isLogin'])
    },
    created() {
    },
    methods: {
      //进入游戏
      allPlayGame(item) {
        if (item.type === TYPES.slot) {
          if (item.category === 'BBIN') {
            this.playGame(bbinLogin, {gameKind: 'game', gameCode: '', mode: 'h5'})
            return
          }

          this.$router.push(`/mobile/slots/${item.category}`)
        } else if(item.type === TYPES.hot) {

          if (item.category === 'pg') {
            this.playGame(gamePGLogin, {
              gameCode: 'fortune-gods',
              playMode: 'real',
              id: '10450'
            },0)
          } else if (item.category === 'pta') {
            if (!this.isLogin) {
              this.$message({
                type: 'warning',
                message: '请先登录游戏账号！'
              })
              return
            }else {
              window.location.href = `/1.0/gamePTASIALogin?gameCode=bob&language=zh-cn&platform=mobile&lobby=${window.location.origin + '/mobile/user/deposit' + window.location.search}&id=12012`
            }
          }
          else {
            this.playGame(item.api, item.reqData)
          }
        } else {
          this.playGame(item.api, item.reqData)
        }
      },
      selectItem(item) {
        this.currentType = item.type
      },
    },
    watch: {},
    components: {}

  }
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  @import '~common/stylus/mixin'
  .game-wrapper
    background $color-light
    padding 0 .5rem
    .game-title
      font-size 16px
      &.download-title
        margin 15px 0 10px
      i
        font-size 22px
        vertical-align middle
        margin-right 5px
        color $color-blue-mobile
    .game-tab
      display flex
      justify-content space-between
      margin 10px 0
      span
        color #343434
        width 33.3%
        display block
        line-height 2.5rem
        text-align center
        border-bottom 2px solid #eee
        &.active
          color  #6c9eff
          border-bottom 2px solid #6c9eff
    .game-list
      clearfix()
      .item
        width 100%
        overflow hidden
        text-align center
        margin-bottom 10px
        border-bottom 1px solid #eee
        padding-bottom .5rem
        &:nth-of-type(5)
          margin 0
        img
          float left
          width 4.5rem
        .text
          float left
          margin-top .5rem
          margin-bottom .1rem
          margin-left .5rem
          font-size 12px
          text-align left
          .topic
            font-size 15px
            font-weight: bold
            margin-bottom .5rem
        span
          display inline-block
          float right
          width 5rem
          color: #6c9eff
          padding: .4rem .1rem
          margin-top: 1rem
          border-radius: 1rem
          border: 1px solid

</style>