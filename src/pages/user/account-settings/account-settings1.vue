<template>
  <div>
    <tab-title @selectItem="selectItem" :tab-title-list="tabTitleList" :currentIdx="currentIdx"></tab-title>
    <div class="border-content">
      <!--基本资料-->
      <div v-if="currentIdx==0">
        <div v-if="userInfo.accountName" class="input-group">
          <span class="label">真实姓名</span>
          <div class="i-disabled">
            <input v-model="userInfo.accountName" type="hidden">
            {{formatStr(userInfo.accountName,1,0,2)}}
          </div>
        </div>

        <div v-if="!userInfo.accountName" class="input-group">
          <span class="label">真实姓名</span>
          <div>
            <el-button size="small" class="small-btn" @click="goTobindName" type="primary">点击绑定</el-button>
          </div>
        </div>

        <div class="input-group">
          <span class="label">注册邮箱</span>
          <div v-if="userInfo.email" class="i-disabled">
            {{formatStr(userInfo.email,4,8,5)}}
          </div>
          <div v-if="!userInfo.email">
            <input v-model="baseInfo.email" type="text">
          </div>
        </div>

        <template v-if="userInfo.phone">
          <div v-if="userInfo.phone" class="input-group">
              <span class="label">手机号码</span>
              <div>
                <input v-model="userInfo.phone" type="hidden">
                <span class="i-disabled">{{formatStr(userInfo.phone,3,4,4)}}</span>
                <span v-if="!isPhoneBindCheck" @click="_isShowPhoneOrEmail" class="isPhoneBindCheck">
                    <i class="iconfont icon-2guanbi"></i>
                  验证后可用手机登录
                </span>
                <span v-if="isPhoneBindCheck">
                    <i class="iconfont icon-ziyuan"></i>
                  已验证可用手机登录
                </span>
              </div>


          </div>
        </template>

        <template v-if="!userInfo.phone">
          <div class="input-group">
            <span class="label">手机号码</span>
            <div>
              <input v-model="baseInfo.phone" type="text">
            </div>
          </div>
          <div class="input-group">
            <span class="label">短信验证码</span>
            <div>

              <input v-model="baseInfo.smsCode" type="text" maxlength="4">
              <el-button v-show="setPhoneValidate.codeShow" size="small" class="small-btn"
                         @click="bindGetCodes" type="primary">获取验证码</el-button>
              <el-button v-show="!setPhoneValidate.codeShow" size="small" class="small-btn discode"
                         type="primary">{{setPhoneValidate.count}}s后重新获取</el-button>
            </div>
          </div>
        </template>

        <div class="input-group">
          <span class="label">生日</span>
          <div v-if="userInfo.birthdayStr" class="i-disabled">
            <span>{{userInfo.birthdayStr}}</span>
          </div>
          <div v-if="!userInfo.birthday">
            <el-date-picker type="date" placeholder="选择日期" v-model="baseInfo.birthday"
                            style="width: 100%;"></el-date-picker>
          </div>
        </div>


        <div class="input-group">
          <span class="label">QQ号码</span>
          <div>
            <input v-model="baseInfo.qq" type="text">（非必填项）
          </div>
        </div>

        <div class="input-group">
          <span class="label">用户昵称</span>
          <div>
            <input v-model="baseInfo.aliasName" type="text">（非必填项）
          </div>
        </div>

        <div class="input-group">
          <span class="label">微信</span>
          <div>
            <input v-model="baseInfo.microchannel" type="text">（非必填项）
          </div>
        </div>

        <div class="input-group">
          <span class="label"></span>
          <div>
            <el-button @click="changeInfo" type="danger">提交</el-button>
          </div>
        </div>


      </div>

      <!--修改密码-->
      <div v-if="currentIdx==1">

        <template v-if="!userInfo.user_remark">
          <div class="input-group">
            <span class="label">原密码</span>
            <div>
              <input v-model="pwd.oldPwd" type="password" >
            </div>
          </div>

          <div class="input-group">
            <span class="label">新密码</span>
            <div>
              <input v-model="pwd.newPwd" type="password" >
            </div>
          </div>

          <div class="input-group">
            <span class="label">确认新密码</span>
            <div>
              <input v-model="pwd.rePwd" type="password">
            </div>
          </div>

          <div class="input-group">
            <span class="label"></span>
            <div>
              <el-button @click="changePwd" type="danger">提交</el-button>
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
          <div class="input-group">
            <span class="label">设置登录密码</span>
            <div>
              <input v-model="setpwd.new_password" type="password">
            </div>
          </div>
          <div class="input-group">
            <span class="label"></span>
            <div>
              <el-button @click="setPwd" type="danger">提交</el-button>
            </div>
          </div>

        </template>

      </div>


      <!--绑定银行卡-->
      <div v-if="currentIdx==2">
        <div class="input-group">
          <span class="label">卡/折号</span>
          <div>
            <input @change="getBankInfo" v-model="bankCard.bankno" style="width:240px" type="">
          </div>
        </div>

        <div class="input-group">
          <span class="label">银行名称</span>
          <div>
            <input readonly disabled :value="bankCard.bankname" type="text">
          </div>
        </div>

        <div class="input-group">
          <span class="label">登录密码</span>
          <div>
            <input v-model="bankCard.password" :type="inputType">(如果尚未设置密码，请先到密码设置中，设置登录密码)
          </div>
        </div>

        <div class="input-group">
          <span class="label">姓名</span>
          <div>
            <input v-if="userInfo.accountName" v-model="bankCard.xinMing" readonly disabled type="text">
            <input v-if="!userInfo.accountName" v-model="bankCard.xinMing" type="text">
          </div>
        </div>

        <div class="input-group">
          <span class="label"></span>
          <div>
            <el-button @click="mainbandingBankno" type="danger">提交</el-button>
          </div>
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
    </div>
    <!--验证手机弹框-->
    <v-dialog @on-close="closeDialog('isShowPhoneOrEmail')" :is-show="isShowPhoneOrEmail">
      <div class="dialog-header">
        <h3>验证手机号码</h3>
      </div>
      <div class="dialog-body">
        <div class="input-group">
          <p>输入您收到的验证码，完成验证</p>
        </div>

        <div class="input-group phonecode">
          <label>输入验证码：</label>
          <input v-model="bindPhoneAccData.smsCode" type="text" maxlength="4">
          <span v-show="bindPhoneValidate.codeShow" @click="bindGetCode" class="v-code">获取验证码</span>
          <span v-show="!bindPhoneValidate.codeShow" class="discode">{{bindPhoneValidate.count}}s后重新获取</span>
        </div>

        <div class="input-group">
          <label></label>
          <el-button type="primary" @click="submitbindAccByphone">提交验证</el-button>
        </div>

      </div>
    </v-dialog>
  </div>
</template>

<script>
  import tabTitle from '@/components/tab-title/tab-title'
  import {bindBankCardModule, accountSettingsModule, newaccountSettingsModule} from '@/common/js/mixin'
  import VDialog from '@/components/dialog/dialog'
  export default {
    mixins: [bindBankCardModule, newaccountSettingsModule],
    components: {tabTitle,VDialog}

  }
</script>

<style lang="stylus" scoped>
  .isPhoneBindCheck
    cursor pointer
    &:hover
      color #f56c6c
  .phonecode
    span
      display: inline-block;
      background: #f8b651;
      color: #fff;
      font-size: 20px;
      width: 30%;
      cursor pointer
      text-align center
    span.v-code
      background #404268
      margin-left: -6px
      width: 140px
      font-size: 16px
    span.discode
      background #acacac
      font-size 16px
  .red
    color red
</style>