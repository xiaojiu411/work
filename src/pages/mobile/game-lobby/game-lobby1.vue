<template>
  <div class="game-lobby" :class="{noTab}">
    <v-header :data="headData" @leftIconClick="commonBack" @rightIconClick="getFavoriteGameList"></v-header>
    <div class="game-tab">
      <router-link to="/mobile/game-down"><i class="iconfont icon-xiazai2"></i></router-link>
        <span :class="{active:tabcurrentIdx === item.type}" @click="selectItem(item.type)"
              v-for="(item) in tabTitleList">{{item.text}}</span>
    </div>
<!--老虎机-->
    <div v-if="tabcurrentIdx==0">
      <div class="wrapper">

        <div class="search-input-wrapper">
          <search-input width="100%" @search="_searchInput"></search-input>
        </div>
        <span @click="openMenu" class="f-icon">筛选 <i class="iconfont icon-filter"></i></span>
        <div class="list-item">
          <router-link class="item" v-for="item in platformList"
                       :to="{path:`/mobile/slots/${item.path}`}">
            {{item.text}}
          </router-link>
          <a class="item" @click="playbbinslot" href="javascript:;">BBIN</a>
        </div>
        <!--游戏列表-->
        <div class="game-list-wrapper">
          <game-list v-show="filterList.length" :filterList="filterList"></game-list>
          <no-result v-show="!filterList.length"></no-result>
        </div>
      </div>
    </div>
<!--真人体育-->
    <div v-if="tabcurrentIdx==1">
      <div class="game-list">
        <div class="item" v-for="item in rsList">
          <div class="pic">
            <img v-lazy="item.img" alt="">
          </div>
          <div class="title">
            <p class="zh-name">{{item.text}}</p>
          </div>
          <div class="bottom">
            <span @click="playGame(item.api,item.reqData)">进入游戏</span>
          </div>
        </div>
      </div>
    </div>
<!--彩票-->
    <div v-if="tabcurrentIdx==2">
      <div class="game-list">
        <div class="item" v-for="item in lottery">
          <div class="pic">
            <img v-lazy="item.img" alt="">
          </div>
          <div class="title">
            <p class="zh-name">{{item.text}}</p>
          </div>
          <div class="bottom">
            <span @click="playGame(item.api,item.reqData)">进入游戏</span>
          </div>
        </div>
      </div>
    </div>
<!--棋牌-->
    <div v-if="tabcurrentIdx==3">
      <div class="list-item">
        <a href="javascript:;" @click="selectcardItem(idx,item.type)"
           :class="{active:cardcurrentIdx === idx}" v-for="(item,idx) in tabTitleList[3].tabs">
          {{item.text}}
        </a>
      </div>
      <div class="game-list-wrapper">
        <div class="game-list">
          <div class="item" v-for="item in filterLists">
            <div class="pic">
              <img v-lazy="item.img" alt="">
            </div>
            <div class="title">
              <p class="zh-name">{{item.title}}</p>
            </div>
            <div class="bottom">
              <span @click="playGameCommon(item)">进入游戏</span>
              <span v-if="item.testmode" @click="playtestGameCommon(item)">试玩游戏</span>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--捕鱼-->
    <div v-if="tabcurrentIdx==4">
      <div class="game-list">
        <div class="item" v-for="item in fish">
          <div class="pic">
            <img v-lazy="item.img" alt="">
          </div>
          <div class="title">
            <p class="zh-name">{{item.text}}</p>
          </div>
          <div class="bottom">
            <span @click="playGame(item.api,item.reqData)">进入游戏</span>
          </div>
        </div>
      </div>
    </div>
    <game-menu :platformList="platformList" @selectTabItem="selectTabItem" @search="_search" @closeMenu="closeMenu" :isShow="isShow" :currentIdx="currentIdx"></game-menu>
  </div>
</template>

<script>
  const TYPE_kY = 'ky'
  const TYPE_761 = 'poker761'
  const TYPE_MW = 'mw'
  const TYPE_dt = 'dt'
  import {
    getEbetToken,
    gameAginRedirect,
    gameAginNewRedirect,
    cg761Login,
    cardDtLogin,
    kyqpLogin,
    bbinLogin,
    gameAginBuyuRedirect,
    mwgLogin,
    sbLogin,
    PBUserLogin,
    imLogin,
    fanyaLogin,
    gameMGLive,
    vrLogin,
  } from '@/api/index'
  import tabCard from 'MComponents/tab-card/tab-card'
  import tabBorder from 'MComponents/tab-border/tab-border'
  import VJackpot from '@/components/v-jackpot/v-jackpot'
  import SearchInput from '@/components/search-input/search-input'
  import GameList from 'MComponents/game-list/game-list'
  import NoResult from '@/components/no-result/no-result'
  import GameMenu from 'MComponents/game-menu/game-menu'
  import {playGame, commonBack, gameLobby, menu} from '@/common/js/mixin'
  import {getQueryString} from '@/common/js/util'
  import {mapGetters} from 'vuex'

  export default {
    mixins: [playGame, commonBack, gameLobby, menu],
    data() {
      return {
        headData: {
          title: '游戏大厅',
          leftIcon: 'arrowr',
          rightIcon: 'xingxing'
        },
        tabTitleList: [
          {
            text: '老虎机',
            type: 0
          },
          {
            text: '真人/体育',
            type: 1
          },
          {
            text: '彩票',
            type: 2
          },
          {
            text: '棋牌',
            type: 3,
            tabs: [
              {
                text: 'DT棋牌',
                type: TYPE_dt
              },
              {
                text: '开元棋牌',
                type: TYPE_kY
              },
              {
                text: '761CITY',
                type: TYPE_761
              },
              {
                text: '大满贯',
                type: TYPE_MW
              },
            ],
            allGames: [
              {
                img: require('./img/ky/01.jpg'),
                title: '抢庄牛牛',
                gameCode: 830,
                type: TYPE_kY
              },
              {
                img: require('./img/ky/02.jpg'),
                title: '炸金花',
                gameCode: 220,
                type: TYPE_kY
              },
              {
                img: require('./img/ky/03.jpg'),
                title: '极速炸金花',
                gameCode: 230,
                type: TYPE_kY
              },
              {
                img: require('./img/ky/04.jpg'),
                title: '德州扑克',
                gameCode: 620,
                type: TYPE_kY
              },
              {
                img: require('./img/ky/05.jpg'),
                title: '通比牛牛',
                gameCode: 870,
                type: TYPE_kY
              },
              {
                img: require('./img/ky/06.jpg'),
                title: '二八杠',
                gameCode: 720,
                type: TYPE_kY
              },
              {
                img: require('./img/ky/07.jpg'),
                title: '抢庄牌九',
                gameCode: 730,
                type: TYPE_kY
              },
              {
                img: require('./img/ky/08.jpg'),
                title: '三公',
                gameCode: 860,
                type: TYPE_kY
              },
              {
                img: require('./img/ky/09.jpg'),
                title: '幸运五张',
                gameCode: 380,
                type: TYPE_kY
              },
              {
                img: require('./img/ky/10.jpg'),
                title: '十三水',
                gameCode: 630,
                type: TYPE_kY
              },
              {
                img: require('./img/ky/11.jpg'),
                title: '斗地主',
                gameCode: 610,
                type: TYPE_kY
              },
              {
                img: require('./img/ky/12.jpg'),
                title: '押庄龙虎',
                gameCode: 900,
                type: TYPE_kY
              },
              {
                img: require('./img/ky/13.jpg'),
                title: '欢乐红包',
                gameCode: 880,
                type: TYPE_kY
              },
              {
                img: require('./img/ky/14.jpg'),
                title: '二十一点',
                gameCode: 600,
                type: TYPE_kY
              },


              {
                img: require('./img/poker761/01.jpg'),
                title: '德州扑克',
                gameCode: 'texas',
                type: TYPE_761
              },
              {
                img: require('./img/poker761/12.jpg'),
                title: '李逵捕鱼',
                gameCode: 'fish',
                type: TYPE_761
              },
              {
                img: require('./img/poker761/13.jpg'),
                title: '二八杠',
                gameCode: 'g28',
                type: TYPE_761
              },
              {
                img: require('./img/poker761/02.jpg'),
                title: '牛牛',
                gameCode: 'bull',
                type: TYPE_761
              },
              {
                img: require('./img/poker761/03.jpg'),
                title: '百人牛牛',
                gameCode: 'hundredbull',
                type: TYPE_761
              },
              {
                img: require('./img/poker761/04.jpg'),
                title: '飞禽走兽',
                gameCode: 'animal',
                type: TYPE_761
              },
              {
                img: require('./img/poker761/05.jpg'),
                title: '欢乐三十秒',
                gameCode: 'baccarat',
                type: TYPE_761
              },
              {
                img: require('./img/poker761/06.jpg'),
                title: '奔驰宝马',
                gameCode: 'carbrand',
                type: TYPE_761
              },
              {
                img: require('./img/poker761/07.jpg'),
                title: '看牌抢庄',
                gameCode: 'bull/rob',
                type: TYPE_761
              },
              {
                img: require('./img/poker761/08.jpg'),
                title: '龙虎',
                gameCode: 'doratora',
                type: TYPE_761
              },
              {
                img: require('./img/poker761/09.jpg'),
                title: '抢庄牛牛',
                gameCode: 'bull/mrob',
                type: TYPE_761
              },
              {
                img: require('./img/poker761/10.jpg'),
                title: '通比牛牛',
                gameCode: 'bull/fair',
                type: TYPE_761
              },
              {
                img: require('./img/poker761/11.jpg'),
                title: '炸金花',
                gameCode: 'zjh',
                type: TYPE_761
              },


              {
                img: require('./img/mw/pk.jpg'),
                title: '扑克',
                gameCode: 1022,
                type: TYPE_MW
              },
              {
                img: require('./img/mw/nn.jpg'),
                title: '牛牛',
                gameCode: 1139,
                type: TYPE_MW
              },
              {
                img: require('./img/mw/ddz.jpg'),
                title: '斗地主',
                gameCode: 1023,
                type: TYPE_MW
              },

              {
                img: require('./img/dt/01.jpg'),
                title: '抢庄牛牛',
                gameCode: 'qznn520',
                type: TYPE_dt,
                testmode:1
              },
              {
                img: require('./img/dt/02.jpg'),
                title: '德州扑克',
                gameCode: 'dezhou520',
                type: TYPE_dt,
                testmode:1
              },
              {
                img: require('./img/dt/03.jpg'),
                title: '斗地主',
                gameCode: 'doudizhu520',
                type: TYPE_dt,
                testmode:1
              },
              {
                img: require('./img/dt/04.jpg'),
                title: '通比牛牛',
                gameCode: 'tbnn520',
                type: TYPE_dt,
                testmode:1
              },
//              {
//                img: require('./img/dt/05.png'),
//                title: '三公',
//                gameCode: 'sangong520',
//                type: TYPE_dt,
//                testmode:1
//              },

            ],
          },
          {
            text: '捕鱼',
            type: 4
          },
        ],
        tabcurrentIdx:0,
        noTab:window.location.href.includes('isFromApp'),
        currentIdx:0,
        cardcurrentIdx:0,
        currentTypes: TYPE_dt,
        platformList: [
          {
            text: 'PT国际版',
            path: 'ptasia',
          },
          {
            text: 'PT',
            path: 'pt',
          },
          {
            text: 'DT',
            path: 'dt',
          },
          {
            text: 'YGG',
            path: 'ygg',
          },
          {
            text: 'PG',
            path: 'pg',
          },
          {
            text: 'CQ9',
            path: 'cq9',
          },
          {
            text: 'SW',
            path: 'sw',
          },
          {
            text: 'MG',
            path: 'mg',
          },
          {
            text: 'PNG',
            path: 'png',
          },
          {
            text: 'QT',
            path: 'qt',
          },
        ],
        rsList:[//真人体育
          {
            text: 'AG旗舰',
            img:require('./img/rs/agl.png'),
            api: gameAginNewRedirect,
            reqData: {
              type: 'h5',
              url: window.location.protocol+"//"+document.domain
            }
          },
          {
            text: 'AG国际',
            img:require('./img/rs/agglo.png'),
            api: gameAginRedirect,
          },
          {
            text: 'EBET真人',
            img:require('./img/rs/ebet.png'),
            api: getEbetToken,
          },
          {
            text: 'MG真人',
            img:require('./img/rs/mg.png'),
            api: gameMGLive,
          },
          {
            text: 'BBIN真人',
            img:require('./img/rs/bbin.png'),
            api: bbinLogin,
            reqData: {
              gameKind: 'live',
              mode: 'h5',
              gameCode: ''
            }
          },
          {
            text: '沙巴体育',
            img:require('./img/rs/sb.png'),
            api: sbLogin,
          },
          {
            text: 'IM体育',
            img:require('./img/rs/im.png'),
            api: imLogin,
          },
          {
            text: '泛亚电竞',
            img:require('./img/rs/fanya.png'),
            api: fanyaLogin,
          },
        ],
        lottery:[
          {
            text:'VR彩票',
            img:require('./img/rs/vr.jpg'),
            api:vrLogin,
          }
        ],
        fish:[
          {
            text: 'AG捕鱼',
            img:require('./img/fish/agf.png'),
            api: gameAginBuyuRedirect,
          },
          {
            text: '千炮捕鱼',
            img:require('./img/fish/mwf.png'),
            api: mwgLogin,
            reqData: {gameCode: 1051}
          },
          {
            text: '761捕鱼',
            img:require('./img/fish/761f.png'),
            api: cg761Login,
            reqData: {gameCode: 'jcby'}
          },
        ],
      }
    },
    computed: {
      styleObj(){
        return {
          paddingBottom:''
        }
      },
      filterLists() {
        return this.tabTitleList[3].allGames.filter((item) => {
          return item.type === this.currentTypes
        })
      },
      ...mapGetters(['initLoginState'])
    },
    created() {
      let platform = getQueryString('platform')
      if(platform === 'SLOT'){
        this.tabcurrentIdx = 0
      }
      if(platform === 'REAL'){
          this.tabcurrentIdx = 1
      }
      if(platform === 'SPORT'){
        this.tabcurrentIdx = 1
      }
      if(platform === 'LOTTERY'){
        this.tabcurrentIdx = 2
      }
      if(platform === 'CARD'){
        this.tabcurrentIdx = 3
      }
      if(platform === 'FISH'){
        this.tabcurrentIdx = 4
      }
    },
    methods: {
      selectTabItem(idx) {
        this.currentIdx = idx
      },
      selectItem(idx) {
        this.tabcurrentIdx = idx
      },
      selectcardItem(idx,type) {
        console.log(type)
        this.cardcurrentIdx = idx
        this.currentTypes = type
      },
      playGameCommon(item) {
        let api = null
        if (item.type === TYPE_kY) {
          api = kyqpLogin
        }
        if (item.type === TYPE_761) {
          api = cg761Login
        }
        if (item.type === TYPE_MW) {
          api = mwgLogin
        }
        if (item.type === TYPE_dt) {
          api = cardDtLogin
          this.playGame(api, {gameCode: item.gameCode,playMode: 0})
          return
        }
        this.playGame(api, {gameCode: item.gameCode})
      },
      playtestGameCommon(item) {
        let api = null
        if (item.type === TYPE_dt) {
          api = cardDtLogin
          this.playGame(api, {gameCode: item.gameCode,playMode: 1})
          return
        }
      },
      playbbinslot() {
        this.playGame(bbinLogin, {gameKind: 'game', gameCode: '', mode: 'h5'})
      }
    },
    watch: {
      initLoginState(val){
        if(val && !window.localStorage.gameLobbyFlag && window.location.href.includes('isFromApp') && window.location.href.includes('/mobile/slots') ){
          window.localStorage.gameLobbyFlag = true
          window.location.reload()
        }
      },
    },
    components: {VJackpot, SearchInput, NoResult, GameList, GameMenu}

  }
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/mixin.styl'
  @import '~common/stylus/variable.styl'
  .icon-xiazai2
    position fixed
    right 3rem
    top 12px
    font-size 27px
    color: #fff
    z-index 9
  .game-lobby
    background #eee
    min-height 90vh
    mobile-wrapper()
    &.noTab
      padding-bottom 20px
    clearfix()
    .game-tab
      height 2.7rem
      background #0847fd
      color #fff
      >span
        position relative
        display inline-block
        text-align center
        width 20%
        line-height 2.2rem
      >span.active:after
        position: absolute
        content: " "
        width: 28%
        height: 2px
        bottom: 0px
        left: 36%
        background #fff
    .list-item
      margin-top .5rem
      a
        display inline-block
        width 20%
        line-height 2rem
        text-align center
        border-bottom  2px solid transparent
      a.active
        color #6ba1ff
        border-bottom  2px solid #6ba1ff
    .f-icon
      display: inline-block
      text-align: right
      width: 4rem
      line-height: 32px
      color: #6ba1ff
      i
        position: relative
        top: 3px
        font-size 1.5rem
    .wrapper
      margin-top 10px
    .search-input-wrapper
      float left
      width 17.5rem
    .jackpot-wrapper
      margin-top 10px
      height 40px
      background: url(./img/dt-jatbg.png) no-repeat
      background-size: cover
      line-height 40px
      padding-left 20%
      border-radius 20px
    .game-list-wrapper
      margin-top 20px

  .game-list
    clearfix()
    .item
      width 48.5%
      float: left
      margin 0 3% 15px 0
      background $color-light
      overflow hidden
      cursor pointer
      transition all .2s ease-in
      &:nth-of-type(2n)
        margin-right 0
      .pic
        height 118px
        position relative
        img
          width 100%
          height 100%
      .title
        display flex
        justify-content space-between
        line-height 40px
        padding 0 10px
        .zh-name
          font-weight 600
          color #333
        .favorite
          i
            color #999
            &.active
              color $color-intersperse
      .bottom
        display flex
        justify-content space-between
        padding 0 10px 10px
        span
          flex 1
          text-align center
          line-height 30px
          border-radius 5px
          background transparent
          border 1px solid #6c9fff
          color #6c9fff
          &:first-child
            background #6c9fff
            color $color-light
            margin-right 5px




</style>