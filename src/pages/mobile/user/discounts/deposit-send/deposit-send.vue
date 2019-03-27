<template>
  <div class="deposit-send">
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
          <label class="label">选择平台</label>
          <div>
            <select v-model="selectedPlatform">
              <option value="">请选择平台</option>
              <option v-for="item in platformList" :value="item.value">{{item.text}}</option>
            </select>
          </div>
        </div>

        <div class="mobile-input-group">
          <label class="label">存送优惠类型</label>
          <div>
            <select v-model="selectedDiscountType" name="">
              <option v-for="item in discountTypeList" :value="item.id">{{item.aliasTitle}}</option>
            </select>
          </div>
        </div>

        <div class="mobile-input-group">
          <label class="label">转账金额</label>
          <div>
            <input v-model="amount" type="text">
          </div>
        </div>

        <div class="mobile-input-group">
          <label class="label">红利金额</label>
          <div>
            <input readonly disabled v-model="giftMoney" type="text">
          </div>
        </div>

        <div class="mobile-input-group">
          <label class="label">流水倍数</label>
          <div>
            <input readonly disabled v-model="betMultiples" type="text">
          </div>
        </div>
        <div class="mobile-input-group">
          <label class="label"></label>
          <div>
            <mt-button size="large" @click="getSelfYouHuiObject" type="danger">提交</mt-button>
          </div>
        </div>
        <div class="tips">
          <h3>
            温馨提示：
          </h3>
          <p>
            1.每日00:00-01:00为系统结算时间，短时间内无法使用。<br>

            2.存送优惠申请后系统会自动发放到您相应的游戏平台，请登入并查看游戏。<br>

            3.请您确认您选择优惠的平台，执行优惠后将不可撤销！<br>

            4.老虎机钱包账户"支持QT、YGG、PNG、SW、DT、MG、若要游玩以上平台请将额度转入老虎机钱包账户”即可
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {commonHead,depositSendModule} from '@/common/js/mixin'
  import {mapGetters} from 'vuex'

  export default {
    mixins:[commonHead,depositSendModule],
    computed: {
      ...mapGetters([
        'userInfo'
      ]),
    },
  }
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/mixin'
  .deposit-send
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