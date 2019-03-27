<template>
  <div class="red-coupon">
    <v-header :data="headData" @leftIconClick="back" @rightIconClick="openService"></v-header>
    <div class="content">

      <div class="reseting" v-if="this.userInfo.email==null || this.userInfo.phone==null || this.userInfo.phone=='' || this.userInfo.email==''">

        <div class="tips">
          <h3>为了保障您的账户资金安全，请先完善你的真实姓名，电话，邮箱，生日再进行申请<br/><br/></h3>
        </div>
        <div>
          <router-link to="/mobile/user/account-settings" class="fff">完善个人资料</router-link>
        </div>
      </div>

      <div v-if="this.userInfo.email && this.userInfo.phone">
        <div class="mobile-input-group">
          <label class="label">尊宝账户</label>
          <div>
            <select v-model="redCoupon.couponType">
              <option value="">请选择账户</option>
              <option v-for="item in platformList" :value="item.value">{{item.text}}</option>
            </select>
          </div>
        </div>

        <div class="mobile-input-group">
          <label class="label">优惠代码</label>
          <div>
            <input v-model="redCoupon.couponCode" type="text">
          </div>
        </div>

        <div class="mobile-input-group">
          <label class="label"></label>
          <div>
            <mt-button size="large" @click="transferInforRedCoupon" type="danger">提交</mt-button>
          </div>
        </div>

        <div class="tips">
          <h3>红包优惠券说明：</h3>
          <p>
            1.PT/PT国际版/YGG/CQ9/PG/老虎机钱包（DT、MG、QT、PNG、SW）平台存送优惠券，需要游戏帐户低于5元方可使用

            <br>2.使用红包优惠券无需进行存款，优惠券有相应的流水倍数，须达到限定投注额或是账户小于五元，才可进行户内转账。

            <br>温馨提示：

            <br>1.完成转帐后，可到账户清单，优惠券记录里查询相关使用记录。

            <br>2.红包优惠券从发至站内信后30天为有效期限，逾期未使用恕不补发。

            <br>3.如使用优惠券出现代码错误，请至您的站内信确认代码或可咨询客服进行核对。

            <br>4.优惠券取得方式不同，请留意尊宝国际相关优惠信息。

            <br>5.优惠卷会以邮件的方式发至您的站内信。
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {commonHead,redCouponModule} from '@/common/js/mixin'
  import {mapGetters} from 'vuex'

  export default {
    mixins:[commonHead,redCouponModule],
    computed: {
      ...mapGetters([
        'userInfo'
      ]),
    },
  }
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/mixin'
  .red-coupon
    mobile-wrapper()
    .content
      margin-top 20px
      m-wrapper()
      select
        width 100%
      .fff
        color: #fff
        background-color: #ef4f4f
        display: block
        line-height: 40px
        text-align: center
        font-size: 18px
</style>