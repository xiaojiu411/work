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
          <label class="label">会员生日</label>
          <div>
            <router-link v-if="!userInfo.birthdayStr" to="/mobile/user/account-settings">
              <el-button type="primary">去完善资料</el-button>
            </router-link>
            <input v-if="userInfo.birthdayStr" readonly disabled :value="userInfo.birthdayStr" type="text">
          </div>
        </div>
        <div class="mobile-input-group">
          <label class="label">会员等级</label>
          <div>
            <input readonly disabled :value="userInfo.level | level" type="text">
          </div>
        </div>
        <div class="mobile-input-group">
          <label class="label">生日礼金</label>
          <div>
            <input readonly disabled v-model="amount" type="text">
          </div>
        </div>

        <div>
          <mt-button size="large" :disabled="!userInfo.birthday" @click="birthdayActivityInfo" type="danger">立即领取</mt-button>
        </div>

        <div class="tips">
          <h3>
            温馨提示：
          </h3>
          <p>
            1.请注意每年您生日的前后三天可以进行自助领取礼金，例如5月12日生日，可在5月9-15日领取，逾期无法进行补发。

            <br>2.生日礼金无需流水直接派发至您的主账户里。

            <br>3.若有任何疑问请咨询在线客服。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {commonHead, birthdayModule} from '@/common/js/mixin'
  import {mapGetters} from 'vuex'

  export default {
    mixins: [commonHead, birthdayModule],
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