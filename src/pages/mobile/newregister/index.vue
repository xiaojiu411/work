<template>
  <div class="register">
    <v-header :data="headData" @leftIconClick="back" @rightIconClick="openService"></v-header>
    <div class="content">
      <div class="tab-border-wrapper">
        <tab-border @selectTabItem="selectItem" :list="tabTitleList" :currentIdx="currentIdx"></tab-border>
      </div>

      <div class="tabs" v-if="currentIdx==0">
        <div class="input-group">
          <i class="iconfont icon-shouji1"></i>
          <input v-model="rgPhoneData.phone" type="text" placeholder="请输入手机号">
        </div>
        <div class="input-group phonecode">
          <i class="iconfont icon-anquan"></i>
          <input v-model="rgPhoneData.smsCode" type="text" maxlength="4" placeholder="请输入验证码">
          <span v-show="regValidate.codeShow" @click="GetCode(rgPhoneData.phone)">获取验证码</span>
          <span v-show="!regValidate.codeShow" class="discode">{{regValidate.count}}s后重新获取</span>
        </div>
        <div class="checkbar">
          <label class="label"></label>
          <div class="checkbox">
            <input v-model="rgPhoneagree" type="checkbox" checked>
            <span>
              我已阅读并同意<router-link to="/mobile/about-us" class="link">《用户协议》和《隐私条款》</router-link>
              </span>
          </div>
        </div>
        <div class="input-group">
          <button @click="submitPhoneRegister">注册</button>
        </div>
      </div>
      <div class="tabs" v-if="currentIdx==1">

        <div class="input-group">
          <i class="iconfont icon-zhanghu"></i>
          <input v-model="rgUserData.loginname" type="text" placeholder="请输入账号6-11位数字或字母组合">
        </div>
        <div class="input-group">
          <i class="iconfont icon-mima"></i>
          <input v-model="rgUserData.password" :type="isPassword2 ? 'password':'text'" placeholder="请输入密码6-16位数字或字母">
          <i @click="isPassword2=!isPassword2"
             :class="{'iconfont eye' : true , 'icon-yanjing1' : isPassword2, 'icon-yanjing' : !isPassword2 }"></i>
        </div>
        <div class="input-group">
          <i class="iconfont icon-mima"></i>
          <input v-model="rgUserData.rePwd" :type="isPassword3 ? 'password':'text'" placeholder="请再次输入密码">
          <i @click="isPassword3=!isPassword3"
             :class="{'iconfont eye' : true , 'icon-yanjing1' : isPassword3, 'icon-yanjing' : !isPassword3 }"></i>
        </div>
        <div class="input-group code">
          <i class="iconfont icon-anquan"></i>
          <input v-model="rgUserData.validateCode" type="text" placeholder="请输入验证码">
          <span>
              <img :src="validateCodeForIndex" @click="changeCode" alt="">
            </span>
        </div>
        <div class="checkbar">
          <label class="label"></label>
          <div class="checkbox">
            <input v-model="rgUseragree" type="checkbox" checked>
            <span>
                  我已阅读并同意<router-link to="/mobile/about-us" class="link">《用户协议》和《隐私条款》</router-link>
              </span>
          </div>
        </div>
        <div class="input-group">
          <button @click="submitNewRegister">注册</button>
        </div>
      </div>
      <!--<div class="bot">-->
        <!--<a href="http://www.188zun.com"><img src="./img/reg-code.png" alt=""></a>-->
      <!--</div>-->
    </div>

    <div class="alert" v-show="registered">
      <div class="content">
        <router-link class="link-f link" to="/mobile/user/account-settings">完善资料</router-link>
        <router-link class="link-s link" to="/mobile/user/deposit">立即存款</router-link>
      </div>
      <div class="alert-warp" @click="registered=!registered"></div>
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
  import {newregister,newlogin} from '@/common/js/mixin'
  import tabBorder from 'MComponents/tab-border/tab-border'
  import VDialog from '@/components/dialog/dialog'

  export default {
    mixins: [newregister, newlogin],
    data() {
      return {
        headData: {
          title: '会员注册',
          leftIcon: 'arrowr',
          rightIcon: 'kefu2',
        },
        tabTitleList:[
          {
            text: '手机号注册'
          },
          {
            text: '用户名注册'
          },
        ],
        currentIdx:0,
        userlist:[]
      }
    },
    computed: {},
    created() {
    },
    methods: {
      selectItem(idx) {
          this.currentIdx = idx
      },
      back() {
        this.$router.back()
      },
        openService() {
          window.open(`https://chatai.zb251.com/chat/chatClient/chatbox.jsp?companyID=9043&configID=17&live800_domain=https://${window.location.host}&chatfrom=wap`)
      },
      getIcon(item) {
        return `iconfont icon-${item.icon}`
      },
    },
    watch: {},
    components: {tabBorder,VDialog}

  }
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  @import '~common/stylus/mixin'
  .register
    mobile-wrapper()
    .content
      m-wrapper()
      margin-top 20px
      .bot
        img
          width 100%
          margin-top 50px
      .tabs
        padding 20px 0 0
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
        .phonecode.input-group
          input
            width 60%
          span
            flex: 1
            background: #fdcd20
            color: #7c3400
            text-align: center
        .checkbox
          margin-bottom 12px
    .link
      color #fdcd20
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

  .alert-warp
    position fixed
    top:0
    left 0
    right 0
    bottom 0
    background rgba(0,0,0,.6)
  .alert
    position relative
    .content
      position fixed
      background: url(/static/img/reg-alert.3174dcb2.png) no-repeat center
      width: 300px
      height: 500px
      background-size: contain
      left: 50%
      top: 0%
      margin-left: -150px
      z-index: 9
      .link
        display block
        width 280px
        margin 0 auto
        line-height 50px
        border-radius 40px
        text-align center
        font-size 22px
        cursor pointer
      a.link-f
        background #fc6d08
        color #fff
        margin-top: 280px;
        margin-bottom: 20px;
      a.link-s
        border 2px solid
        color #fc6d08

</style>