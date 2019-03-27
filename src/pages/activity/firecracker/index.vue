<template>
  <div class="fc">
    <common-nav ref="nav"></common-nav>
    <div class="main bg-wap">
      <div class="top-bar">
        <h3>活动时间：2月4日0点-2月5日0点</h3>
        <div class="item-bar">
            <div class="item" v-for="items in lists">
              <p>{{items.topic}}</p>
              <img :class="{active: items.type == 1}" @click="takeMoney(items)" src="./img/item-click.png" alt="">
            </div>
        </div>
      </div>

      <div class="rule">
        <img src="./img/rule.png" alt="">
        <p>1、流水类彩金属于系统计算，达到要求的用户需在次日返水派发后才可领取。</p>
        <p>2、活动时间内玩家可在达到要求后，四项福利各领取一次。</p>
        <p>3、此活动赠送方式为红包优惠券，并非实物，领取成功的玩家需要转入指定游戏厅完成彩金一倍流水方可提款使用。</p>
        <p>4、此活动只针对娱乐性质的会员,禁止多帐号套利以及违规投注行为，如有发现同IP多帐号申请此优惠,我们将立即关闭帐号，请严格遵守尊宝条款条例，尊宝国际有权收回红利以及盈利！</p>
        <p>5、尊宝国际对本次优惠享有最终解释权。</p>
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
              id: 0,
              topic: "存满500元",
              type: '0',
              redCouponMoney: "1",
              title: "普通福炮",
            },
            {
              id: 0,
              topic: "所有老虎机平台流水满10000",
              type: '0',
              redCouponMoney: "2",
              title: "豪华福炮",
            },
            {
              id: 0,
              topic: "存满10000元",
              type: '0',
              redCouponMoney: "3",
              title: "黄金礼炮",
            },
            {
              id: 0,
              topic: "所有老虎机平台流水满2000000",
              type: '0',
              redCouponMoney: "4",
              title: "嘉年华炮王",
            },
          ],
          isShowDialog:false,
          giftID:{
              giftID:''
          },
          prize: '',
          coupon: '',
          isMobile:isMobilePlatform(),
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
        if(this.strDate==4||this.strDate==5){
//type 0 ：未达标 1、可领取 2、已领取
          existGift().then((res) => {
            if (this.ERR_OK === res.code || this.ERR_OK_OTHER === res.code) {
              this.lists=res.data.sort(compare("redCouponMoney"))
              this.lists[0].topic = '存满500元'
              this.lists[1].topic = '所有老虎机平台流水满10000'
              this.lists[2].topic = '存满10000元'
              this.lists[3].topic = '所有老虎机平台流水满2000000'
              console.log(this.lists)
            }
          })
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
              message: '请您活动期间，满额后领取'
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
  .fc .obt-wrap .obt{
    background: url(./img/alert.png) no-repeat center;
    background-size: contain;
  }
  .fc .obt-wrap .obt p{
    font-size: 17px;
    color: #333;
  }
</style>
<style lang="stylus" src="./index.styl" scoped></style>