<template>
  <div class="account-settings">
    <v-header :data="headData" @leftIconClick="back" @rightIconClick="openService"></v-header>
    <div class="content">
      <div class="tab-border-wrapper">
        <tab-border @selectTabItem="selectItem" :list="tabTitleList" :currentIdx="currentIdx"></tab-border>
      </div>
      <!--基本资料-->
      <div v-if="currentIdx==0">

        <div v-if="userInfo.accountName" class="mobile-input-group">
          <label class="label">真实姓名：</label>
          <div class="i-disabled">
            <input v-model="userInfo.accountName" type="hidden">
            {{formatStr(userInfo.accountName,1,0,2)}}
          </div>
        </div>

        <div v-if="!userInfo.accountName" class="mobile-input-group">
          <label class="label">
            真实姓名：
            <mt-button @click="goTobindName" type="primary" size="small">点击绑定</mt-button>
          </label>
        </div>

        <div class="mobile-input-group">
          <label class="label">注册邮箱：</label>
          <div v-if="userInfo.email" class="i-disabled">
            {{formatStr(userInfo.email,4,8,5)}}
          </div>
          <div v-if="!userInfo.email">
            <input v-model="baseInfo.email" type="text">
          </div>

        </div>

        <template v-if="userInfo.phone">
          <div class="mobile-input-group">
            <label class="label">手机号码：</label>
              <input v-model="userInfo.phone" type="hidden">
              <span class="i-disabled">{{formatStr(userInfo.phone,3,4,4)}}</span>
              <span v-if="!isPhoneBindCheck" @click="_isShowPhoneOrEmail" class="isPhoneBindCheck red">
                      <i class="iconfont icon-2guanbi"></i>
                    验证后可用手机登录
                  </span>
              <span v-if="isPhoneBindCheck">
                      <i class="iconfont icon-ziyuan"></i>
                    已验证可用手机登录
                  </span>
          </div>
        </template>

        <template v-if="!userInfo.phone">
          <div class="mobile-input-group">
            <span class="label">手机号码</span>
            <div>
              <input v-model="baseInfo.phone" type="text">
            </div>
          </div>
          <div class="mobile-input-group">
            <span class="label">短信验证码</span>
            <div>

              <input v-model="baseInfo.smsCode" type="text" maxlength="4">
              <mt-button v-show="setPhoneValidate.codeShow" size="small" class="small-btn"
                         @click="bindGetCodes" type="primary">获取验证码</mt-button>
              <mt-button v-show="!setPhoneValidate.codeShow" size="small" class="small-btn discode"
                         type="primary">{{setPhoneValidate.count}}s后重新获取</mt-button>
            </div>
          </div>
        </template>
        <div v-if="userInfo.birthdayStr" class="mobile-input-group">
          <label class="label">生日：{{userInfo.birthdayStr}}</label>
        </div>
        <div v-if="!userInfo.birthday" class="mobile-input-group">
          <label class="label">生日：</label>
          <div>
            <el-date-picker type="date" placeholder="选择日期" v-model="baseInfo.birthday"
                            style="width: 100%;height:40px"></el-date-picker>
          </div>
        </div>


        <div class="mobile-input-group">
          <label class="label">QQ号码：</label>
          <div>
            <input v-model="baseInfo.qq" type="text" placeholder="（非必填项）">
          </div>
        </div>

        <div class="mobile-input-group">
          <label class="label">用户昵称：</label>
          <div>
            <input v-model="baseInfo.aliasName" type="text" placeholder="（非必填项）">
          </div>
        </div>

        <div class="mobile-input-group">
          <label class="label">微信：</label>
          <div>
            <input v-model="baseInfo.microchannel" type="text" placeholder="（非必填项）">
          </div>
        </div>

        <div class="mobile-input-group">
          <label class="label"></label>
          <div>
            <mt-button size="large" @click="changeInfo" type="danger">提交</mt-button>
          </div>
        </div>


      </div>

      <!--修改密码-->
      <div v-if="currentIdx==1">

        <template v-if="!userInfo.user_remark">
          <div class="mobile-input-group">
            <span class="label">原密码</span>
            <div>
              <input v-model="pwd.oldPwd" type="password">
            </div>
          </div>

          <div class="mobile-input-group">
            <span class="label">新密码</span>
            <div>
              <input v-model="pwd.newPwd" type="password">
            </div>
          </div>

          <div class="mobile-input-group">
            <span class="label">确认新密码</span>
            <div>
              <input v-model="pwd.rePwd" type="password">
            </div>
          </div>

          <div class="mobile-input-group">
            <span class="label"></span>
            <div>
              <mt-button size="large" @click="changePwd" type="danger">提交</mt-button>
            </div>
          </div>

          <div class="tips">
            <h3>
              温馨提示：
            </h3>
            <p>
              1. 修改密码请注意大小写。
            </p>
          </div>
        </template>

        <template v-if="userInfo.user_remark">
          <div class="mobile-input-group">
            <span class="label">设置登录密码</span>
            <div>
              <input v-model="setpwd.new_password" type="password">
            </div>
          </div>

          <div class="mobile-input-group">
            <span class="label"></span>
            <div>
              <mt-button size="large" @click="setPwd" type="danger">提交</mt-button>
            </div>
          </div>

        </template>

      </div>


      <!--绑定银行卡-->
      <div v-if="currentIdx==2">
        <div class="mobile-input-group">
          <span class="label">卡/折号</span>
          <div>
            <input @change="getBankInfo" v-model="bankCard.bankno" type="text">
          </div>
        </div>

        <div class="mobile-input-group">
          <span class="label">银行名称</span>
          <div>
            <input readonly disabled :value="bankCard.bankname" type="text">
          </div>
        </div>
        <div class="mobile-input-group">
          <span class="label">登录密码</span>
          <div>
            <input v-model="bankCard.password" :type="inputType">
          </div>
        </div>

        <div class="mobile-input-group">
          <span class="label">姓名</span>
          <div>
            <input v-if="userInfo.accountName" v-model="bankCard.xinMing" readonly disabled type="text">
            <input v-if="!userInfo.accountName" v-model="bankCard.xinMing" type="text">
          </div>
        </div>

        <div class="mobile-input-group">
          <mt-button size="large" @click="mainbandingBankno" type="danger">提交</mt-button>
        </div>

        <div class="tips">
          <h3>温馨提示</h3>
          <p>

            <span class="red"> 1. 请认真填写真实姓名，如有乱填写造成无法出款，尊宝概不负责。</span>

            <br>2. 绑定银行卡/折号，可以免去您重复输入卡/折号的繁琐步骤。

            <br>3. 如有疑问请直接联系在线客服。
          </p>
        </div>

      </div>
      <!--验证手机弹框-->
      <v-dialog @on-close="closeDialog('isShowPhoneOrEmail')" :is-show="isShowPhoneOrEmail" width="320">
        <div class="dialog-header">
          <h3>验证手机号码</h3>
        </div>
        <div class="dialog-body">
          <div class="mobile-input-group">
            <p>输入您收到的验证码，完成验证</p>
          </div>

          <div class="mobile-input-group phonecode">
            <p><label>输入验证码：</label></p>
            <input v-model="bindPhoneAccData.smsCode" type="text" maxlength="4">
            <span v-show="bindPhoneValidate.codeShow" @click="bindGetCode" class="v-code buttons">获取验证码</span>
            <span v-show="!bindPhoneValidate.codeShow" class="discode">{{bindPhoneValidate.count}}s后重新获取</span>
          </div>

          <div class="mobile-input-group">
            <label></label>
            <el-button type="primary" class="buttons" @click="submitbindAccByphone">提交验证</el-button>
          </div>

        </div>
      </v-dialog>
    </div>
  </div>
</template>

<script>

  import VDialog from '@/components/dialog/dialog'
  import tabCard from 'MComponents/tab-card/tab-card'
  import tabBorder from 'MComponents/tab-border/tab-border'
  import {commonHead, bindBankCardModule, accountSettingsModule, newaccountSettingsModule} from '@/common/js/mixin'
  import Vue from 'vue'
  import {DatePicker} from 'element-ui'

  Vue.use(DatePicker)
  export default {
    mixins: [commonHead, bindBankCardModule, newaccountSettingsModule],
    data() {
      return {}
    },
    computed: {},
    methods: {},
    watch: {},
    components: {tabCard, tabBorder, VDialog}

  }
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/mixin'
  .account-settings
    mobile-wrapper()
    .content
      .i-disabled
        margin-top 10px
        height: 34px
        line-height: 34px
        padding: 0px 12px
        color: #555
        background-color: #eee
        background-image: none
        border: 1px solid #ccc
        border-radius: 4px
        display: block
        margin-bottom: 7px;
      m-wrapper()
      .dialog-body
        input
          width 100%
        .phonecode
          input
            width 60%
            float left
      .buttons
        display: inline-block
        width: 118px
        line-height: 32px
        text-align: center
        background: #3d407d
        color: #fff
    .tab-border-wrapper
      margin-bottom 15px
    .red
      color red



</style>