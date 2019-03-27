<template>
  <div class="register">
    <v-header :data="headData" @leftIconClick="back" @rightIconClick="openService"></v-header>
    <div class="content">
      <div v-for="(item,idx) in list" class="mobile-input-group">
        <label>
          <span class="red">*</span>{{item.label}}
        </label>
        <input :placeholder="item.placeholder" v-model="registerData[item.inputData]" :type="item.inputType">
      </div>

      <div class="mobile-input-group">
        <label>
          <span class="red">*</span>验证码
        </label>
        <div class="code">
          <input placeholder="输入正确的验证码" v-model="registerData.validateCode" type="text">
          <img @click="changeCode" :src="validateCodeForIndex" alt="">
        </div>
      </div>


      <mt-button @click="submitRegister" size="large" type="danger">立即注册</mt-button>

    </div>
  </div>
</template>

<script>
  import {register} from '@/common/js/mixin'

  export default {
    mixins: [register],
    data() {
      return {
        headData: {
          title: '会员注册',
          leftIcon: 'arrowr',
          rightIcon: 'kefu2',
        },
        list: []
      }
    },
    computed: {},
    created() {
      this.list = [
        {
          label: '账号',
          inputData:'loginName',
          placeholder: '请输入6-11个字母加数字',
          inputType:'text'
        },
        {
          label: '密码',
          inputData: 'password',
          placeholder: '6-16位数字或英文字母',
          inputType:'password'
        },
        {
          label: '确认密码',
          inputData: 'rePwd',
          placeholder: '两次密码请保持一致',
          inputType:'password'
        },
        {
          label: '手机号',
          inputData: 'phone',
          placeholder: '请输入手机号',
          inputType:'text'
        },
        {
          label: '邮箱(非必填项)',
          inputData:'email',
          placeholder: '找回密码时使用',
          inputType:'text'
        },
        {
          label: 'QQ(非必填项)',
          inputData: 'qq',
          placeholder: '6-16位数字或英文字母',
          inputType:'text'
        },
      ]
    },
    methods: {
      back() {
        this.$router.back()
      },
        openService() {
          window.open(`https://chatai.zb251.com/chat/chatClient/chatbox.jsp?companyID=9043&configID=17&live800_domain=https://${window.location.host}&chatfrom=wap`)
      },
    },
    watch: {},
    components: {}

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

</style>