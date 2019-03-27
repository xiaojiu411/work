<template>
  <div class="">
    <common-nav ref="nav"></common-nav>
    <div class="main bg-wap">
      <div class="content">

      </div>
      <div class="top">
        <img class="t" src="./img/t-1.png" alt="">
        <div class="t-wrap">
          <table class="table">
            <tr>
              <th>日期</th>
              <th>PT国际、SLOT钱包、YGG、CQ9、PG平台</th>
              <th>次数</th>
            </tr>
            <tr>
              <td rowspan="4">周一至周六</td>
              <td>存10送10元</td>
              <td rowspan="4">四选一</td>
            </tr>
            <tr>
              <td>存30送21元</td>
            </tr>
            <tr>
              <td>存100送50元</td>
            </tr>
            <tr>
              <td>存500送160元</td>
            </tr>
            <tr>
              <td rowspan="4">周日</td>
              <td>存18送18元</td>
              <td rowspan="4">四选一</td>
            </tr>
            <tr>
              <td>存35送25元</td>
            </tr>
            <tr>
              <td>存100送65元</td>
            </tr>
            <tr>
              <td>存500送180元</td>
            </tr>
          </table>
        </div>
      </div>

      <img class="t" src="./img/t-4.png" alt="">
      <div class="step">
        <img class="topic t" src="./img/t-2.png" alt="">
        <div v-if="!isMobile">
          <img src="./img/step.png" alt="">
        </div>
        <div v-if="isMobile">
          <img src="./img/step-m.png" alt="">
        </div>
        <p><br>您在成功存款后，根据以上步骤您就可以自行操作申请优惠，红利实时到账。</p>
      </div>
      <div class="rule">
        <img class="topic t" src="./img/t-3.png" alt="">
        <div class="c">
          <p>1.申请条件达到指定存款金额即可自助申请。</p>
          <p>2.存送优惠申请成功无法中途进行取消，需达到流水倍数才能解除优惠。</p>
          <p>3.周一至周六定制存送流水倍数为25倍,周日定制存送流水倍数为30倍。</p>
          <p>4.此次优惠每位玩家﹑每户﹑每一住址 、每一电子邮箱地址﹑每一电话号码﹑相同支付方式(相同借记卡/信用卡/银行账户/姓名及号码) 及IP地址只能享有一次优惠,一旦确认为套利玩家，立即没收盈利和本金。</p>
          <p>5.该活动玩家必须在PT国际“经典老虎机”和“电动吃角子老虎”、PG、CQ9、SLOT钱包(MG、DT、YGG、QT、PNG、SW)平台游戏中进行投注。所有21点游 戏，所有轮盘游戏，所有百家乐游戏，所有骰宝游戏，所有视频扑克游戏，所有Pontoon游戏，各种Craps游戏，赌场战争游戏，娱乐场Hold'em游戏，牌九游戏，多旋转老虎机(地妖之穴、海洋公主、三倍利润、热带滚筒和部落生活)和老虎机奖金翻倍投注 将不计算在内，如投注此类游戏将取消申请资格，扣除所有红利以及盈利。</p>
        </div>
      </div>

    </div>
  </div>

</template>
<script>
  import commonNav from '@/pages/activity/common-nav/common-nav.vue'
  import commonFooter from '@/pages/activity/common-footer/common-footer.vue'
  import {mapGetters} from 'vuex'
  import {applyGiftNew} from '@/api/index'
  import {isMobilePlatform} from '@/common/js/util'
  import Clipboard from "clipboard"


  export default {
    data() {
        return{
          isMobile: isMobilePlatform(),
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