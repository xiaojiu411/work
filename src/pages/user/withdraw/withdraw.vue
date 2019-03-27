<template>
  <div class="common-withdraw">
    <tab-title @selectItem="selectItem" :tab-title-list="tabTitleList" :currentIdx="currentIdx"></tab-title>
    <div class="border-content">
      <!--银行卡提款-->
      <div v-if="currentIdx===0">

        <div class="reseting" v-if="this.userInfo.email==null || this.userInfo.phone==null || this.userInfo.phone=='' || this.userInfo.email==''">
          <p>为了保障您的账户资金安全，请先完善你的真实姓名，电话，邮箱，生日再进行申请<br/><br/></p>
          <div>
            <router-link to="/user/account-settings" class="fff">完善个人资料</router-link>
          </div>
        </div>
        <template v-if="this.userInfo.email && this.userInfo.phone ">
          <div class="input-group">
            <span class="label">账号余额</span>
            <div>
              <span class="color-intersperse">{{balance || getGameMoney()}}</span>
              <i @click="getGameMoney" class="iconfont icon-shuaxin refresh"></i>
            </div>
            <span class="red">(温馨提示：提款前请刷新额度)</span>
          </div>

          <div class="input-group">
            <span class="label">账号密码</span>
            <div>
              <input type="password" v-model="withdrawalData.password">
            </div>
          </div>

          <div class="input-group">
            <span class="label">取款银行</span>
            <div>
              <select v-model="withdrawalData.bank" name="">
                <option value="">请选择提款银行</option>
                <option v-for="item in bankList" :value="item.bankname">{{item.bankname}}</option>
              </select>
            </div>
            <div>
              <el-button @click="goToBindBank" size="small" type="primary" class="small-btn">绑定银行卡</el-button>
              <el-button @click="unBindBank" size="small" type="primary" class="small-btn">解绑银行卡</el-button>
            </div>
          </div>

          <div class="input-group">
            <span class="label">银行卡号</span>
            <div>
              <input type="text" readonly disabled :value="formatStr(withdrawalData.accountNo,4,4,6)">
            </div>
          </div>

          <div class="input-group">
            <span class="label">提款金额</span>
            <div>
              <input type="text" v-model="withdrawalData.amount">
            </div>
            <span class="red">(单笔提款金额最低须100元)</span>
          </div>

          <div class="input-group">
            <span class="label"></span>
            <div>
              <input id="agree" type="checkbox" v-model="withdrawalData.agree">
              <label for="agree">我已经读过 <a @click.stop="withdrawalRule" class="link" href="javascript:;">《提款须知》</a>，并已清楚了解其规则。</label>
            </div>
          </div>

          <div class="input-group">
            <span class="label"></span>
            <div>
              <el-button @click="withdrawSubmit" type="danger">提交</el-button>
            </div>
          </div>

          <div class="tips">
            <h3>
              提款验证以尊宝账号金额为基准。在您没有申请任何优惠的情况下，您需要投注一倍流水方可进行提款。
            </h3>
            <p>
              1.若遇到提款问题或被取消，请联系在线客服为您查询！<br>

              2.提款姓名与卡号须与注册信息一致，否则无法提款。<br>

              3.提款金额最低100，请您使用100以上金额进行取款。
            </p>
          </div>
        </template>
      </div>

    </div>


  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters([
        'userInfo'
      ]),
    },
    created() {
    },
    methods: {},
    watch: {},
    components: {}
  }
</script>
<script src="./withdraw.js"></script>


<style lang="stylus" scoped>
  .refresh
    cursor pointer
    margin-left 8px

  .small-btn
    font-size 14px
</style>