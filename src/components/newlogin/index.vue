
<div class="alert" v-show="lgstatus">
  <div class="lgcontent">
    <div class="topic">
      欢迎登录
    </div>
    <div class="lg-body">
      <div class="input-group">
        <i class="iconfont icon-zhanghu"></i>
        <input v-model="loginName" @keyup="keystatus" placeholder="请输入用户名或手机号" type="text">
      </div>
      <div v-show="uesers" class="input-group">
        <i class="iconfont icon-mima"></i>
        <input v-model="passWord" placeholder="请输入密码" type="password">
        <i class="iconfont eye icon-yanjing1"></i>
      </div>
      <div v-show="phones" class="input-group phonecode">
        <i class="iconfont icon-anquan"></i>
        <input v-model="code" type="text" placeholder="验证码">
        <span>获取验证码</span>
      </div>
      <div class="input-group">
        <button>登录</button>
      </div>
      <p class="tip">
        <router-link class="link" to="/mobile/help-self/forget-pwd">忘记密码</router-link>
        <span>|</span>
        <router-link class="link" to="/mobile/newregister">免费注册</router-link>
      </p>
      <div>
        <img :src="reglgimg" alt="">
      </div>
    </div>
  </div>
  <div class="alert-warp"  @click="lgstatus=!lgstatus"></div>
</div>

<script>
  import Clipboard from "clipboard"
  export default{
    props:{
      isShowDialog:Boolean,
      prize:String,
      coupon:String
    },
    methods:{
      cls(){
        this.$emit('close')
      },
      copy() {
        let clipboard = new Clipboard('.tag-read')
        clipboard.on('success', e => {
          this.flag = true
          this.$message({
            type: 'success',
            message: '复制成功'
          })
          // 释放内存
          clipboard.destroy()
        })
        clipboard.on('error', e => {
          // 不支持复制
          console.log('该浏览器不支持自动复制')
          // 释放内存
          clipboard.destroy()
        })
      },
      // 去个人中心
      exchange() {
        if (this.flag) {
          if (this.isMobile) {
            this.$router.push('/mobile/user/discounts')
          } else {
            this.$router.push('/user/discounts')
          }
        } else {
          this.$message({
            type: 'info',
            message: '请先复制代码并去账户中心进行兑换'
          })
        }
      },
    }
  }
</script>
<style src="./index.styl" lang="stylus" scoped></style>