<template>
  <div class="es">
    <common-nav ref="nav"></common-nav>
    <div class="main bg-wap">
      <div class="content">
        <div class="sec1">
          <div class="wrap">
            <div class="item" v-for="item in lists"  @click="takeMoney(item)">
              <div class="i-top">2018年存满<b>{{Math.round(item.msg)}}</b>元</div>
              <div class="i-tit">{{item.title}}优惠券<b>{{Math.round(item.redCouponMoney)}}</b>元</div>
              <div class="i-num">{{item.countTotal}} 位玩家已领取</div>
            </div>
          </div>
        </div>
        <div class="rule">
          <img src="./img/rule.png" alt="">
          <p>1.此活动赠送彩金兑换代码并非实物，领取成功的玩家需要转入指定游戏厅完成彩金一倍流水方可提款使用。</p>
          <p>2.此活动只计算玩家<b>2018年1月1日0点至2018年12月31日23点59分59秒</b>的存款数据为依据。</p>
          <p>3.此活动每位玩家只限申请一次，若已申请A奖励则无法再次领取B奖励。</p>
          <p>4.此项优惠活动只针对娱乐性质的会员,如有发现同IP多帐号申请活动，尊宝娱乐城将有权不予以派发！</p>
          <p>5.尊宝娱乐享有此优惠的最终解释权及修改权，其网站规则条款适用于此优惠！</p>
        </div>
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
  import {existGift,drawGiftNew,applyGiftNew} from '@/api/index'
  import {isMobilePlatform} from '@/common/js/util'
  import Clipboard from "clipboard"


  export default {
    data() {
        return{
            lists:[
              {
                countTotal: '登录后查看',
                id: 0,
                msg: "10000",
                type: '0',
                redCouponMoney: "58",
                title: "春联红包",
              },
              {
                countTotal: '登录后查看',
                id: 0,
                msg: "50000",
                type: '0',
                redCouponMoney: "188",
                title: "礼盒红包",
              },
              {
                countTotal: '登录后查看',
                id: 0,
                msg: "100000",
                type: '0',
                redCouponMoney: "588",
                title: "礼炮红包",
              },
              {
                countTotal: '登录后查看',
                id: 0,
                msg: "500000",
                type: '0',
                redCouponMoney: "1088",
                title: "土豪红包",
              },
            ],
            isShowDialog:false,
            giftID:{
                giftID:''
            },
            prize: '',
            coupon: '',
            isMobile:isMobilePlatform(),
            month:new Date().getMonth() + 1,
          strDate:new Date().getDate(),
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

        if(this.strDate==1){
//type 0 ：未达标 1、可领取 2、已领取
          existGift().then((res) => {
            if (this.ERR_OK === res.code || this.ERR_OK_OTHER === res.code) {
              this.lists=res.data.sort(compare("redCouponMoney"))
            }else {
              this.lists[0].countTotal = '活动暂未开启'
              this.lists[1].countTotal = '活动暂未开启'
              this.lists[2].countTotal = '活动暂未开启'
              this.lists[3].countTotal = '活动暂未开启'
            }
          })
        }else {
          this.lists[0].countTotal = '活动已结束'
          this.lists[1].countTotal = '活动已结束'
          this.lists[2].countTotal = '活动已结束'
          this.lists[3].countTotal = '活动已结束'
        }
      },
      takeMoney(item){
        if (!this.isLogin) {
          this.$refs.nav.openLoginDialog('isShowLoginDialog')
          return false
        }
        switch(item.type)
        {
          case '0':
            this.$message({
              type: 'success',
              message: '活动未开启或尚未符合活动要求，无法领取！'
            })
            break;
          case '1':
            this.giftID.giftID = item.id;
            applyGiftNew(this.giftID).then((res) => {
              if (this.ERR_OK === res.code || this.ERR_OK_OTHER === res.code) {
                this.isShowDialog = true
                this.coupon = res.coupon
                this.prize = item.title
              }else {
                this.$message({
                  type: 'warning',
                  message: res.message
                })
              }
            })
            break;
          case '2':
            this.$message({
              type: 'success',
              message: '您已领取'
            })
            break;
        }

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
    components: {commonNav, commonFooter,codeAlert}
  }
  function compare(property){
    return function(obj1,obj2){
      var value1 = obj1[property];
      var value2 = obj2[property];
      return value1 - value2;     // 升序
    }
  }

</script>
<style>
  .es .obt-wrap .obt{
    background: url(./img/alert.png) no-repeat center;
    background-size: contain;
  }
  .es .obt-wrap .obt p{
    font-size: 17px;
    color: #333;
  }
</style>
<style lang="stylus" src="./index.styl" scoped></style>