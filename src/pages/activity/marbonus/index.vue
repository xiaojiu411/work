<template>
  <div class="">
    <common-nav ref="nav"></common-nav>
    <div class="main bg-wap">
      <div class="content">
        <div v-if="isMobile">
          <router-link to="/mobile/user/deposit">
            <img src="./img/bgm.jpg" alt="">
          </router-link>
        </div>

        <div v-if="!isMobile" class="d-link">
          <a href="javascript:;" @click="links">
            <img src="./img/fast-d.png" alt="">
          </a>
          <a href="javascript:;" @click="links">
            <img src="./img/code-d.png" alt="">
          </a>
        </div>
        <div class="mob-p">
          <p class="f-20">即日起，凡是使用手机/网银转账、支付秒存/扫码支付的用户，当日内达到对应的存款额度,即可领取彩金！</p>
          <div class="t-bar">
            <div class="tab-l">
              <h4>秒存存款 （手机/网银/支付宝银行账户)</h4>
              <table class="table">
                <tr class="tit">
                  <th>金额</th>
                  <th>彩金</th>
                  <th>流水倍数</th>
                </tr>
                <tr>
                  <td>满500元</td>
                  <td>8</td>
                  <td rowspan="4">5倍</td>
                </tr>
                <tr>
                  <td>满3000元</td>
                  <td>58</td>
                </tr>
                <tr>
                  <td>满10000元</td>
                  <td>108</td>
                </tr>
                <tr>
                  <td>满50000元</td>
                  <td>388</td>
                </tr>
              </table>
            </div>
            <div class="tab-r">
              <h4>扫码存款（支付宝扫码）</h4>
              <table class="table">
                <tr class="tit">
                  <th>金额</th>
                  <th>彩金</th>
                  <th>流水倍数</th>
                </tr>
                <tr>
                  <td>满300元</td>
                  <td>10</td>
                  <td rowspan="4">3倍</td>
                </tr>
                <tr>
                  <td>满1000元</td>
                  <td>38</td>
                </tr>
                <tr>
                  <td>满3000元</td>
                  <td>88</td>
                </tr>
                <tr>
                  <td>满5000元</td>
                  <td>108</td>
                </tr>
              </table>
            </div>

          </div>
        </div>

        <div class="rule">
          <div class="c">
            <img class="topic t" src="./img/t-3.png" alt="">
            <p>1.满足条件的玩家需联系24小时在线客服申请彩,客服会在审核之后派发到您的站内信里。</p>
            <p>2.秒存和扫码福利每日只限申请一次，不同存款方式不可叠加总额，只计算单一存款方式的累计存款金额。</p>
            <p>3.领取之彩金只限游戏于PT国际/PT/SLOT/CQ9/PG/YGG平台。</p>
            <p>4.尊宝国际保留对本次活动的最终解释权和修订权。</p>
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

      links(){
        if (!this.isLogin) {
          this.$refs.nav.openLoginDialog('isShowLoginDialog')
          return false
        }else {
          this.$router.push('/user/deposit')
        }
      }
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