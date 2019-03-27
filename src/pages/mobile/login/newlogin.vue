<template>
  <div class="login-wrapper">
    <v-header @leftIconClick="back" :data="headData" @rightIconClick="openService"></v-header>
    <div class="content">
      <p class="center">
        <img class="logo" :src="logo" alt="">
      </p>
      <div class="content">
        <div class="input-group">
          <i class="iconfont icon-zhanghu"></i>
          <input v-model="lgData.namePhone" @keyup="keystatus" placeholder="请输入用户名或手机号" type="text">
        </div>
        <div v-show="uesers" class="input-group">
          <i class="iconfont icon-mima"></i>
          <input v-model="lgData.passWord" placeholder="请输入密码" type="password">
        </div>
        <div v-show="phones" class="input-group phonecode">
          <i class="iconfont icon-anquan"></i>
          <input v-model="phoneLoginData.smsCode" :type="isPassword ? 'password':'text'" placeholder="验证码或密码">
          <i @click="isPassword=!isPassword"
             :class="{'iconfont eye' : true , 'icon-yanjing1' : isPassword, 'icon-yanjing' : !isPassword }"></i>
          <span v-show="lgValidate.codeShow" @click="lgGetCode(lgData.namePhone)">获取验证码</span>
          <span v-show="!lgValidate.codeShow" class="discode">{{lgValidate.count}}s后重新获取</span>
        </div>

        <div class="input-group">
          <button @click="submitNewLogin">登录</button>
        </div>
        <p class="tip">
          <router-link class="link" to="/mobile/help-self/forget-pwd">忘记密码</router-link>
          <span>|</span>
          <router-link class="link" to="/mobile/newregister">免费注册</router-link>
        </p>
      </div>
    </div>

    <!--账号绑定弹框-->
    <v-dialog @on-close="closeDialog('isShowbindAccountByphone')" :is-show="isShowbindAccountByphone" width="320">
      <div class="dialog-header">
        <h3>账号绑定</h3>
      </div>
      <div class="dialog-body">

        <div class="input-group">
          <p>如果您已有账号，请依照以下提示，输入完整的账号，完成验证并绑定。</p>
        </div>
        <div class="input-group">
          <p>账号提示：<span class="red">{{isShowbindAccountName}}</span></p>
        </div>
        <div>
          <p><label>输入完整账号：</label></p>
          <input v-model="bindAccData.loginname" type="text">
        </div>

        <div class="phonecode">
          <p><label>输入验证码：</label></p>
          <input v-model="bindAccData.smsCode" type="text" maxlength="4">
          <span v-show="bindValidate.codeShow" @click="bindgetCode(isShowbindAccountByphoneNumber)" class="v-code buttons">获取验证码</span>
          <span v-show="!bindValidate.codeShow" class="discode">{{bindValidate.count}}s后重新获取</span>
        </div>

        <div class="input-group">
          <br/><br/>
          <el-button class="buttons" type="primary" @click="submitbindAccountByphone(isShowbindAccountByphoneNumber)">绑定</el-button>
        </div>
        <p>温馨提示：验证成功之后，请使用原本的账号或者手机号进行登录</p>

      </div>
    </v-dialog>

  </div>
</template>

<script>
  import {newlogin,commonHead} from '@/common/js/mixin'
  import VDialog from '@/components/dialog/dialog'
  import config from '@/common/js/config'
  import validtorReg from '@/common/js/validtor'
  export default {
    mixins:[newlogin,commonHead],
    data() {
      return {
        logo: require('@/common/image/newlogo.png'),//logo
        phones:false,
        uesers:false
      }
    },
    computed: {},
    created() {
    },
    methods: {
    },
    watch: {},
    components: {
      VDialog
    }

  }
</script>

<style lang="stylus" scoped>

  @import '~common/stylus/variable'
  @import '~common/stylus/mixin'
  .login-wrapper
    mobile-wrapper()
    m-wrapper()
    .content
      padding-top 30px
      .input-group
        background #eee
        height 50px
        line-height 50px
        button
          border none
          background #fdcd20
          color #7c3400
          width 100%
          height 100%
          font-size 17px
        input
          width 80%
          border none
          background transparent

        .iconfont
          font-size: 20px
          text-indent: 2%
        .iconfont.eye
          font-size 16px
        span
          flex: 1
          background: #fdcd20
          color: #7c3400
          text-align: center
      .mint-button--primary
        background-color #fecb20
        color #7f2d00
        font-weight bold
      .phonecode
        input
          width 60%
    .dialog-body
      input
        width 100%
      .phonecode
        input
          width 60%
    .buttons
      display: inline-block
      width: 118px
      line-height: 32px
      text-align: center
      background: #3d407d
      color: #fff
    .logo
      width 70%
      margin-bottom 20px
    .tip
      text-align center
      margin 20px 0
      a
        color #959595
      span
        margin 0 10px
      .discode
        background #ddd

</style>