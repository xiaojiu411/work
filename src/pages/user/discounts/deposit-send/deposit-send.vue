<template>

  <div>

    <div class="reseting" v-if="this.userInfo.email==null || this.userInfo.phone==null || this.userInfo.phone=='' || this.userInfo.email==''">
      <p>为了保障您的账户资金安全，请先完善你的真实姓名，电话，邮箱，生日再进行申请<br/><br/></p>
      <div>
        <el-button type="danger">
          <router-link to="/user/account-settings" class="fff">完善个人资料</router-link>
        </el-button>
      </div>
    </div>
    <template v-if="this.userInfo.email && this.userInfo.phone ">
      <div class="input-group">
        <span class="label">选择平台</span>
        <div>
          <select v-model="selectedPlatform">
            <option value="">请选择平台</option>
            <option v-for="item in platformList" :value="item.value">{{item.text}}</option>
          </select>
        </div>
      </div>

      <div class="input-group">
        <span class="label">存送优惠类型</span>
        <div>
          <select v-model="selectedDiscountType" name="">
            <option v-for="item in discountTypeList" :value="item.id">{{item.aliasTitle}}</option>
          </select>
        </div>
      </div>

      <div class="input-group">
        <span class="label">转账金额</span>
        <div>
          <input v-model="amount" type="text">
        </div>
      </div>

      <div class="input-group">
        <span class="label">红利金额</span>
        <div>
          <input readonly disabled v-model="giftMoney" type="text">
        </div>
      </div>

      <div class="input-group">
        <span class="label">流水倍数</span>
        <div>
          <input readonly disabled v-model="betMultiples" type="text">
        </div>
      </div>
      <div class="input-group">
        <span class="label"></span>
        <div>
          <el-button @click="getSelfYouHuiObject" type="danger">提交</el-button>
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

          4.老虎机钱包账户"支持QT、PNG、SW、DT、MG、若要游玩以上平台请将额度转入老虎机钱包账户”即可
        </p>
      </div>
    </template>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {depositSendModule} from '@/common/js/mixin'

  export default {
    mixins:[depositSendModule],
    computed: {
      ...mapGetters([
        'userInfo'
      ]),
    },
  }
</script>

<style lang="stylus" scoped>

</style>