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
    <div v-if="this.userInfo.email && this.userInfo.phone ">
      <tab-title @selectItem="selectItem" :tab-title-list="tabTitleList" :currentIdx="currentIdx"></tab-title>
      <div style="margin-top:20px" class="tab-content">
        <!--存送优惠券-->
        <div v-if="currentIdx ===0">
          <div class="input-group">
            <span class="label">尊宝账户</span>
            <div>
              <select v-model="coupon.couponType">
                <option value="">请选择账户</option>
                <option v-for="item in platformList" :value="item.value">{{item.text}}</option>
              </select>
            </div>
          </div>

          <div class="input-group">
            <span class="label">转账金额</span>
            <div>
              <input v-model="coupon.couponRemit" type="text">
            </div>
          </div>

          <div class="input-group">
            <span class="label">存送优惠券代码</span>
            <div>
              <input v-model="coupon.couponCode" type="text">
            </div>
          </div>

          <div class="input-group">
            <span class="label"></span>
            <div>
              <el-button @click="transferInforCoupon" type="danger">提交</el-button>
            </div>
          </div>

          <div class="tips">
            <h3>存送优惠券说明：</h3>
            <p>
              1.不限平台使用，请选择正确的游戏平台填写优惠代码，确认提交，红利金额会自动添加到您指定的游戏平台里。

              <br>2.PT/PT国际版/YGG/CQ9/PG/老虎机钱包（DT、MG、QT、PNG、SW）平台存送优惠券，需要游戏帐户低于5元方可使用

              <br>3.存送优惠券有效期为30天，请您在有效期内进行使用。

              <br>4.如何得到存送优惠券，请留意尊宝国际最新的相关优惠信息。

              <br>5.优惠卷会以邮件的方式发至您的站内信。
            </p>
          </div>

        </div>

        <!--红包优惠券-->
        <div v-if="currentIdx ===1">
          <div class="input-group">
            <span class="label">尊宝账户</span>
            <div>
              <select v-model="redCoupon.couponType">
                <option value="">请选择账户</option>
                <option v-for="item in platformList" :value="item.value">{{item.text}}</option>
              </select>
            </div>
          </div>

          <div class="input-group">
            <span class="label">优惠代码</span>
            <div>
              <input v-model="redCoupon.couponCode" type="text">
            </div>
          </div>

          <div class="input-group">
            <span class="label"></span>
            <div>
              <el-button @click="transferInforRedCoupon" type="danger">提交</el-button>
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
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import tabTitle from '@/components/tab-title/tab-title'
  import {redCouponModule, couponModule} from '@/common/js/mixin'

  export default {
    mixins: [redCouponModule, couponModule],
    data() {
      return {
        tabTitleList: [
          {
            text: '存送优惠券'
          },
          {
            text: '红包优惠券'
          }
        ],
        currentIdx: 0,
      }
    },
    methods: {
      selectItem(idx) {
        this.currentIdx = idx
      },
    },
    components: {
      tabTitle
    },
    computed: {
      ...mapGetters([
        'userInfo'
      ]),
    },

  }
</script>

<style lang="stylus" scoped>

</style>