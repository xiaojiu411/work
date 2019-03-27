<template>
  <div class="">
    <common-nav ref="nav"></common-nav>
    <div class="main bg-wap">
      <div class="content">
        <div class="top">
          <img class="topic" src="./img/t-1.png" alt="">
          <p>活动期间内每周一至周五, 每日存款达到指定金额 , 次日DT游戏平台派发指定免费旋转游戏</p>
        </div>

        <div class="s-wrap">
          <div class="game">
            <div class="item" v-for="item in gameList"  @click="clickGame(item)" >
              <div class="imgs">
                <img :src="item.src">
                <h3>{{item.name}}</h3>
              </div>
              <p>存款满{{item.dep}}元，送免费游戏：<b>{{item.free}}局</b></p>
            </div>
          </div>
        </div>


        <div class="mid">
          <img class="topic" src="./img/t-2.png" alt="">
          <p>活动期间内每周一至周五新开户会员，当天存款50元，次日赠送DT游戏平台《金玉满堂》8局免费游戏</p>
          <div class="item" v-for="item in nGameList"  @click="clickGame(item)" >
            <div class="imgs">
              <img :src="item.src">
              <h3>{{item.name}}</h3>
            </div>
            <p>存款满{{item.dep}}元，送免费游戏：<b>{{item.free}}局</b></p>
          </div>
        </div>


        <div class="rule">
          <div class="f-bar">
            <img class="topic" src="./img/rule.png" alt="">
            <p>次日下午18点之前会以站内信通知获奖会员，直接进入指定游戏即可开始免费旋转<span>(会员需要在免费游戏派发之前激活游戏平台，符合资格才可获得奖励)。</span></p>
          </div>
          <div class="s-bar">
            <img class="topic" src="./img/rule-2.png" alt="">
            <p>1.玩家获得免费奖励局须在当日23:59前进入游戏完成游戏投注，逾期作废不予补偿。</p>
            <p>2.获奖局数：以总存款对应区间赠送的局数为准，各等级之间不累积。</p>
            <p>3.获奖免费游戏线注默认为最低投注线注。</p>
            <p>4.此次优惠每位玩家﹑每户﹑每一住址 、每一电子邮箱地址﹑每一电话号码﹑相同支付方式(相同借记卡/信用卡/银行账户/姓名及号码) 及IP地址只能享有一次优惠,一旦确认为套利玩家，立即没收盈利和本金。</p>
            <p>5.尊宝国际保留对本次活动的最终解释权</p>
          </div>
          
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import commonNav from '@/pages/activity/common-nav/common-nav.vue'
  import commonFooter from '@/pages/activity/common-footer/common-footer.vue'
  import {mapGetters} from 'vuex'
  import {gameDTLogin} from '@/api/index'
  import {playGame} from "@/common/js/mixin"
  import {isMobilePlatform} from '@/common/js/util'
  import Clipboard from "clipboard"


  export default {
    mixins: [playGame],
    data() {
        return{
          gameList: [
            {
              src: require('./img/doraemon3x5.png'),
              id: 'doraemon3x5',
              num: 16086,
              name: '哆啦A梦',
              dep: 500,
              free: 10
            },
            {
              src: require('./img/tgow.png'),
              id: 'tgow',
              num: 15900,
              name: '财神到',
              dep: 3000,
              free: 30
            },
            {
              src: require('./img/sweethouse.png'),
              id: 'sweethouse',
              num: 15892,
              name: '甜蜜糖果屋',
              dep: 5000,
              free: 50
            },
            {
              src: require('./img/lovefighters.jpg'),
              id: 'lovefighters',
              num: 15958,
              name: '仙侠情缘',
              dep: 10000,
              free: 70
            },
            {
              src: require('./img/shopping5x243.jpg'),
              id: 'shopping5x243',
              num: 15924,
              name: '全民狂欢',
              dep: 50000,
              free: 100
            },
          ],
          nGameList: [
            {
              src: require('./img/goldjade5x50.jpg'),
              id: 'goldjade5x50',
              num: 15986,
              name: '金玉满堂',
              dep: 50,
              free: 8
            },
          ]
        }
    },
    computed: {
      ...mapGetters([
        'isLogin'
      ])
    },
    created() {
    },
    methods: {
      clickGame(item) {
        this.playGame(gameDTLogin, {
          gameCode: item.id,
          playMode: 0,
          id: item.num,
        }, 0)
      },
    },
    watch: {
        isLogin(val) {
            if (val) {

            }
        },
    },
    components: {commonNav, commonFooter}
  }
</script>
<style lang="stylus" src="./index.styl" scoped></style>