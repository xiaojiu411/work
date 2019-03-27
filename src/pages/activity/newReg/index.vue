<template>
  <div class="lg">
    <div class="navs">
      <div class="nav-content">
        <router-link class="logo" to="/">
          <img :src="logo" alt="">
        </router-link>
        <div class="rt">
          <span v-if="!isLogin" class="reg">欢迎注册,如已有账号？<b @click="lgstatus=!lgstatus">请登录</b></span>
          <span v-if="isLogin" class="reg">您好{{userInfo.loginname}}，您已登录
            <router-link to="/">
              <b> 返回首页</b>
            </router-link>
          </span>

        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="log-bar-warp">
        <img class="log-img" src="./img/left.png" alt="">
        <div class="log-bar">
          <img class="ewmcode" :src="ewm" alt="">
          <div class="points">
            <div class="p-item"
                 v-for="(item,index) in tabsParam"
                 @click="toggleTabs(index)"
                 :class="{active:index === nowIndex}"
            >{{item}}</div>
          </div>

          <!--手机号注册-->
          <div class="tab-item" v-show="nowIndex==0">
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
                我已阅读并同意<a href="/about?queryId=agreement" class="link">《用户协议》</a>和 <a href="/about?queryId=protect" class="link">《隐私条款》</a>
              </span>
              </div>
            </div>
            <div class="input-group">
              <button @click="submitPhoneRegister">注册</button>
            </div>
          </div>

          <!--用户名注册-->
          <div class="tab-item" v-show="nowIndex==1">

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
                  我已阅读并同意<a href="/about?queryId=agreement" class="link">《用户协议》</a>和 <a href="/about?queryId=protect" class="link">《隐私条款》</a>
              </span>
              </div>
            </div>
            <div class="input-group">
              <button @click="submitNewRegister">注册</button>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!--注册完成-->
    <div class="alert" v-show="registered">
      <div class="content">
        <router-link class="link-f link" to="/user/account-settings">完善资料</router-link>
        <router-link class="link-s link" to="/user/deposit">立即存款</router-link>
      </div>
      <div class="alert-warp" @click="registered=!registered"></div>
    </div>

    <!--登录-->
    <div class="alert" v-show="lgstatus">
      <div class="lgcontent">
        <div class="topic">
          欢迎登录
          <b @click="lgstatus=!lgstatus">×</b>
        </div>
        <div class="lg-body">
          <div class="input-group">
            <i class="iconfont icon-zhanghu"></i>
            <input v-model="lgData.namePhone" @keyup="keystatus" placeholder="请输入用户名或手机号" type="text">
                   <!--@blur="checkStatus" -->

          </div>
          <div v-show="uesers" class="input-group">
            <i class="iconfont icon-mima"></i>
            <input v-model="lgData.passWord" placeholder="请输入密码" type="password">
          </div>
          <!--<div v-show="checkCode" class="input-group code">-->
            <!--<i class="iconfont icon-anquan"></i>-->
            <!--<input v-model="lgData.code" type="text" placeholder="请输入验证码">-->
            <!--<span>-->
              <!--<img :src="validateCodeForlg" @click="changeCodes" alt="">-->
            <!--</span>-->
          <!--</div>-->
          <div v-show="phones" class="input-group phonecode">
            <i class="iconfont icon-anquan"></i>
            <input v-model="phoneLoginData.smsCode" :type="isPassword ? 'password':'text'" placeholder="验证码或密码">
            <i @click="isPassword=!isPassword"
               :class="{'iconfont eye' : true , 'icon-yanjing1' : isPassword, 'icon-yanjing' : !isPassword }"></i>
            <template>
              <span v-show="lgValidate.codeShow" @click="lgGetCode(lgData.namePhone)">获取验证码</span>
              <span v-show="!lgValidate.codeShow" class="discode">{{lgValidate.count}}s后重新获取</span>
            </template>
          </div>
          <div class="input-group">
            <button @click="submitNewLogin">登录</button>
          </div>
          <p class="tip">
            <router-link class="link" to="/safe-center">忘记密码</router-link>
            <span> | </span>
            <span class="link" @click="lgstatus=!lgstatus">免费注册</span>
          </p>
          <div>
            <img :src="reglgimg" alt="">
          </div>
        </div>
      </div>
      <div class="alert-warp" @click="lgstatus=!lgstatus"></div>
    </div>
    <!--账号绑定弹框-->
    <v-dialog @on-close="closeDialog('isShowbindAccountByphone')" :is-show="isShowbindAccountByphone">
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
        <div class="input-group">
          <label>输入完整账号：</label>
          <input v-model="bindAccData.loginname" type="text">
        </div>

        <div class="input-group phonecode">
          <label>输入验证码：</label>
          <input v-model="bindAccData.smsCode" type="text">
          <span v-show="bindValidate.codeShow" @click="bindgetCode(isShowbindAccountByphoneNumber)" class="v-code">获取验证码</span>
          <span v-show="!bindValidate.codeShow" class="discode">{{bindValidate.count}}s后重新获取</span>
        </div>

        <div class="input-group">
          <label></label>
          <el-button type="primary" @click="submitbindAccountByphone(isShowbindAccountByphoneNumber)">绑定</el-button>
        </div>
        <p>温馨提示：验证成功之后，请使用原本的账号或者手机号进行登录</p>

      </div>
    </v-dialog>

  </div>
</template>

<script>
  import {newregister,newlogin} from '@/common/js/mixin'
  import VDialog from '@/components/dialog/dialog'
  import config from '@/common/js/config'
  import validtorReg from '@/common/js/validtor'
  export default {

    mixins: [newregister, newlogin],
    data() {
      return {
        logo: require('@/common/image/newlogo.png'),
        ewm: require('@/common/image/zb-app.png'),
        tabsParam:['手机号注册','用户名注册'],
        nowIndex:0,
      }
    },
    computed: {
    },
    created() {
    },
    methods: {
      toggleTabs:function(index){
          this.nowIndex=index
      }
    },
    components: {
      VDialog
    }

  }
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable'
  @import '~common/stylus/mixin'

  .navs
    width 100%
    min-width 1366px
    line-height 100px
    height 100px
    background rgba(52,76,145,.8)
    .nav-content
      width: 1200px;
      margin: 0 auto;
      .rt
        float right
        span
          display: inline-block;
          line-height: 48px;
          padding: 0 20px;
          color: #fff;
          margin-left: 20px;
          font-size: 20px;
          cursor: pointer;
          b
            color #f9f101
            text-decoration underline
  .wrapper
    width 100%
    height 980px
    margin 0 auto
    background url(./img/reg-bg.jpg) no-repeat center top
    clearfix()
    text-align center
    .log-bar-warp
      margin: 140px auto
      width: 1400px
      text-align: center
      .log-img
        float: left
        width: 746px
        position: relative
        top: -75px
    .checkbar
      font-size: 16px;
      text-align: left;
      margin-bottom: 20px;
      a
        color #f8b651
    .input-group
      height 60px
      line-height 60px
      margin-bottom 20px
      background #eeeeee
      padding-left: 18px;
      span
        img
          height:45px
      button
        background #f8b651
        border none
        width 480px
        height 100%
        margin-left: -20px
        color: #fff;
        font-size: 24px
        cursor pointer
      .iconfont
        font-size 26px
      .iconfont.eye
        font-size: 20px
        margin-left: 50px
        cursor pointer
      input
        width: 310px
        border: none
        background: transparent
        font-size: 16px
    .input-group.phonecode
      .iconfont.eye
        font-size: 20px
        margin-right: 10px
        margin-left 0
        cursor pointer
    .log-bar
      float left
      position relative
      width 600px
      height 600px

      background #fff
      .ewmcode
        position absolute
        width: 170px
        left: -320px
        top: 280px
      .points
        background #c9c9c9
        height 80px
        line-height 80px
        .p-item
          display inline-block
          width 50%
          font-weight bold
          cursor pointer
          font-size 26px
        .p-item.active
          background #fff
      .tab-item
        padding 60px
  .input-group
    label
      width 100px
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
    .iconfont.eye
      font-size: 20px
      margin-right: 10px
      margin-left -10px
      cursor pointer
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
    background url(./img/reg-alert.png) no-repeat center
    width 500px
    height 600px
    left 50%
    top 10%
    margin-left -250px
    z-index 99
    .link
      display block
      width 370px
      margin 0 auto
      line-height 60px
      border-radius 40px
      text-align center
      font-size 24px
      cursor pointer
    a.link-f
      background #fc6d08
      color #fff
      margin-top: 350px;
      margin-bottom: 20px;
    a.link-s
      border 2px solid
      color #fc6d08
  .lgcontent
    position: fixed
    top: 10%
    width: 500px
    height: 600px
    left: 50%
    margin-left: -250px
    background: #fff
    border-radius: 20px
    overflow hidden
    z-index 99
    .tip
      float right
      text-align: right
      color: #a0a0a0
      .link
        display: inline-block;
        color: #a0a0a0;
        margin-bottom: 20px;
        text-align: right;
    .topic
      line-height 80px
      background #4969a4
      color #fff
      font-size: 25px
      text-align: center
      b
        float: right
        margin-left: -50px
        padding-right: 30px
        cursor: pointer
        font-size: 40px
    .lg-body
      padding 20px 40px
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
        cursor pointer
      input
        width 80%
        border none
        background transparent
      .iconfont
        font-size: 20px
        text-indent: 15px
      .iconfont.eye
        font-size 16px
      margin-right 10px
    .phonecode.input-group
      input
        width 55%
      span
        flex: 1
        background: #fdcd20
        color: #7c3400
        text-align: center
        cursor pointer
      span.discode
        background #acacac
        color #fff
</style>