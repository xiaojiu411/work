<template>
  <div class="nym">
    <common-nav ref="nav"></common-nav>
    <div class="main bg-wap">
      <div class="s-wrap">
        <div class="status">
          <div :class="items.title.toLowerCase() + ' item'" v-for="items in list">
            <div class="pro" v-show="!items.reach">
              <span>{{items.betAmount}}</span>
            </div>
            <div class="final" v-show="items.reach"></div>
          </div>
        </div>
      </div>
      <div class="handle">
        <img :class="{active : btnStatus}" @click="takeMoney()" src="./img/item-click.png" alt="">
        <div><span>目前已有 {{this.countTotal}} 位玩家领取成功</span></div>
      </div>

      <div class="rule">
        <img src="./img/rule.png" alt="">
        <p>1、此活动流水仅计算用户前一天在老虎机平台的投注额次日刷新，请符合条件的玩家按时领取福字！</p>
        <p>2、此活动在期限内每位玩家仅限领取一次，用户只需集满五福字即可点击领取红包。</p>
        <p>3、活动红包派发金额按照参赛人员总概率计算，越先完成任务的玩家获得金额额度越高。</p>
        <p>4、此活动金额以红包优惠券的方式派发到玩家的站内信里，可自行兑换转入指定的游戏厅。</p>
        <p>5、获得的红包彩金只需完成5倍流水即可提款。</p>
        <p>6、尊宝国际拥有本次活动的最终解释权和修改权。</p>
      </div>
      <code-alert @close="close"
        :isShowDialog="isShowDialog"
        :coupon="coupon"
        :prize="prize">
      </code-alert>
    </div>
  </div>

</template>
<script>
  import commonNav from '@/pages/activity/common-nav/common-nav.vue'
  import commonFooter from '@/pages/activity/common-footer/common-footer.vue'
  import codeAlert from '@/pages/activity/alert/codeAlert.vue'
  import {mapGetters} from 'vuex'
  import {findNewYearActivity,drawNewYearActivity,applyGiftNew} from '@/api/index'
  import {isMobilePlatform} from '@/common/js/util'
  import Clipboard from "clipboard"

  export default {
    data() {
        return{
          list: [
            {
              "betAmount": 0,
              "reach": false,
              "title": "SW"
            },
            {
              "betAmount": 0,
              "reach": false,
              "title": "MG"
            },
            {"betAmount": 0,
              "reach": false,
              "title": "PG"
            },
            {
              "betAmount": 0,
              "reach": false,
              "title": "DT"
            },
            {
              "betAmount": 0,
              "reach": false,
              "title": "CQ9"
            }
          ],
          reach:[],
          isShowDialog: false,
          giftID: {
            giftID: ''
          },
          prize: '',
          coupon: '',
          isMobile: isMobilePlatform(),
          btnStatus: false,
          countTotal: '登录后查看'
        }
    },
    computed: {
      ...mapGetters([
        'isLogin'
      ])
    },
    created() {
      this._checkstatus()
    },
    methods: {
      _checkstatus(){
        if (!this.isLogin) return
        findNewYearActivity().then((res) => {
          if (this.ERR_OK === res.code || this.ERR_OK_OTHER === res.code) {
            this.countTotal = res.countTotal
            this.list = res.data
            //判断五福集齐
            this.reach = this.list.map(function(a) {return a.reach})
            if(this.reach.indexOf(false)==-1){
              this.btnStatus = true
            }
          }else {
            this.$message({
              type: 'warning',
              message: res.message
            })
            this.countTotal = '活动暂未开启'
          }
        })
      },
      takeMoney(){
        if (!this.isLogin) {
          this.$refs.nav.openLoginDialog('isShowLoginDialog')
          return false
        }
        if(!this.btnStatus) {
          this.$message({
            type: 'warning',
            message: '请先集齐五福'
          })
          return false
        }
        drawNewYearActivity().then((res) => {
          if (this.ERR_OK === res.code || this.ERR_OK_OTHER === res.code) {
            this.isShowDialog = true
            this.coupon = res.coupon
            this.prize = res.message
          }else {
            this.$message({
              type: 'warning',
              message: res.message
            })
          }
        })
      },
      close(){
        this.isShowDialog = false
        this._checkstatus()
      }
    },
    watch: {
        isLogin(val) {
            if (val) {
              this._checkstatus()
            }
        },
    },
    components: {commonNav, commonFooter, codeAlert}
  }
</script>
<style>
  .nym .obt-wrap .obt{
    background: url(./img/alert.png) no-repeat center;
    background-size: contain;
  }
  .nym .obt-wrap .obt p{
    font-size: 17px;
    color: #333;
  }
</style>
<style lang="stylus" src="./index.styl" scoped></style>