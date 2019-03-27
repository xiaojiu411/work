<template>
  <div class="sw">
    <common-nav ref="nav"></common-nav>
    <div class="main bg-wap">
      <div class="content">
        <div class="sec1">
          <div class="wrap">
            <div class="item" v-for="item in lists"  @click="takeMoney(item)">
              <div class="i-tit"></div>
              <img :class="{gray: item.type != 1}" class="clicks" src="./img/clicks.png" alt="">
            </div>
          </div>
        </div>
        <div class="rule">
          <img src="./img/rule.png" alt="">
          <p>1.每周的星期一开始计算到星期日结束为一个活动周期。凡在尊宝娱乐进行电子游艺游戏，7天累计有效投注达1万及以上，即可获得尊宝送出的签到彩金大奖，最大可达8888元；</p>
          <p>2.所获得奖金需一倍流水方可申请提款；</p>
          <p>3.彩金可以累积领取，（比如活动周期流水达到10万，依次可以领取 88 38 18）；</p>
          <p>4.每位会员每周仅限申请一次各投注等级彩金，第一周满足条件的玩家必须在第二周之内领取。周计算周期为北京时间周一至周日，符合申请条件的会员请于北京时间每周二0:00到周日 23:59可以自助领取彩金，逾期视为自动放弃优惠；</p>
          <p>5.电子游艺中的桌面游戏，多旋转老虎机不参与本活动；</p>
          <p>6.尊宝国际拥有本次活动的最终解释权和修改权。</p>
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
                id: 0,
                msg: "10000",
                type: '0',
                redCouponMoney: "0",
                title: "",
              },
              {
                id: 0,
                msg: "50000",
                type: '0',
                redCouponMoney: "0",
                title: "",
              },
              {
                id: 0,
                msg: "100000",
                type: '0',
                redCouponMoney: "0",
                title: "",
              },
              {
                id: 0,
                msg: "500000",
                type: '0',
                redCouponMoney: "0",
                title: "",
              },
              {
                id: 0,
                msg: "500000",
                type: '0',
                redCouponMoney: "0",
                title: "",
              },
              {
                id: 0,
                msg: "500000",
                type: '0',
                redCouponMoney: "0",
                title: "",
              },
              {
                id: 0,
                msg: "500000",
                type: '0',
                redCouponMoney: "0",
                title: "",
              },
              {
                id: 0,
                msg: "500000",
                type: '0',
                redCouponMoney: "0",
                title: "",
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

//type 0 ：未达标 1、可领取 2、已领取
        existGift().then((res) => {
          if (this.ERR_OK === res.code || this.ERR_OK_OTHER === res.code) {
            this.lists=res.data.sort(compare("redCouponMoney"))
          }
        })
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
  .sw .obt-wrap .obt{
    background: url(./img/alert.png) no-repeat center;
    background-size: contain;
  }
  .sw .obt-wrap .copy{
    margin: 10px 0;
  }
  .sw .obt-wrap .obt p{
    font-size: 17px;
    color: #333;
  }
</style>
<style lang="stylus" src="./index.styl" scoped></style>