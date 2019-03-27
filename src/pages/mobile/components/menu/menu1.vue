<template>
  <div>
    <div v-if="isShow" class="mask" @click="closeMenu"></div>
    <transition name="slider-left">
      <div v-if="isShow" class="menu-wrapper">
        <div class="header">
          <div v-if="isLogin">
            <div class="top-bar">
              <div class="avatar">
                <div class="avaImg">
                  <img :src="levelImage" alt="">
                </div>
                <div class="t-info">
                  <p>{{userInfo.loginname}}</p>
                  <p v-if="!isAgent">{{userInfo.level | level}}</p>
                  <p v-if="isAgent">代理账户</p>
                </div>
                <router-link v-if="!isAgent" class="set" to="/mobile/user">
                  <i class="iconfont icon-arrow"></i>
                </router-link>

              </div>
              <p class="price" v-if="!isAgent">主账户余额（元）{{userInfo.credit}}</p>
              <router-link v-if="!isAgent" class="btn" to="/mobile/user/withdraw">提现</router-link>
              <router-link v-if="!isAgent" class="btn active" to="/mobile/user/deposit">充值</router-link>
            </div>
          </div>
          <div v-if="!isLogin">

            <div class="top-bar nl">
              <div class="avatar">
                <img class="avaImg" src="./img/avatar.png" alt="">
                <div class="t-info">
                  <h3>欢迎来到尊宝国际</h3>
                  <p>登录之后享受更多权限哦~</p>
                </div>
              </div>
              <router-link class="btn" to="/mobile/newregister">注册</router-link>
              <router-link class="btn active" to="/mobile/newlogin">登录</router-link>
            </div>
          </div>
        </div>
        <div class="main">
          <ul>
            <li v-if="!isAgent && item.user" @click="selectItem(item)" v-for="item in filterList">
              <img :src="item.icon" alt="">
              <span>{{item.text}}</span>
              <i class="iconfont icon-arrow"></i>
            </li>
            <li v-if="isAgent && item.agent" @click="selectItem(item)" v-for="item in filterList">
              <img :src="item.icon" alt="">
              <span>{{item.text}}</span>
              <i class="iconfont icon-arrow"></i>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {levelImage, logOut} from '@/common/js/mixin'

  export default {
    mixins: [levelImage, logOut],
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        menuList: [
          {
            text: '代理中心',
            icon: require('./img/icon-3.png'),
            id: 'agent',
            show: 'isLogin',
            agent:true
          },
          {
            text: '优惠活动',
            icon: require('./img/icon-2.png'),
            id: 'youhui',
            show: 'isLogin&logOut',
            user:true,
            agent:true
          },
          {
            text: '自助优惠',
            icon: require('./img/icon-3.png'),
            id: 'selfYouhui',
            show: 'isLogin',
            user:true
          },
          {
            text: '账户清单',
            icon: require('./img/icon-4.png'),
            id: 'accountList',
            show: 'isLogin',
            user:true
          },
          {
            text: '合作代理',
            icon: require('./img/icon-6.png'),
            id: 'daili',
            show: 'isLogin&logOut',
            user:true
          },
          {
            text: '客服与帮助',
            icon: require('./img/icon-5.png'),
            id: 'helpSelf',
            show: 'isLogin&logOut',
            agent:true,
            user:true
          },
          {
            text: '线路测试',
            icon: require('./img/icon-8.png'),
            id: 'lineText',
            show: 'isLogin&logOut',
            agent:true,
            user:true
          },
          {
            text: '账户设置',
            icon: require('./img/settings.png'),
            id: 'settings',
            show: 'isLogin',
            user:true
          },
          {
            text: '关于我们',
            icon: require('./img/icon-7.png'),
            id: 'aboutUs',
            show: 'isLogin&logOut',
            agent:true,
            user:true
          },
          {
            text: '安全退出',
            icon: require('./img/icon-9.png'),
            id: 'logout',
            show: 'isLogin',
            agent:true,
            user:true
          },
        ]
      }
    },
    computed: {
      filterList() {
        if (this.isLogin) {
          return this.menuList.filter(item => item.show.includes('isLogin'))
        } else {
          return this.menuList.filter(item => item.show.includes('logOut'))
        }
      },
      ...mapGetters(['isLogin','isAgent'])
    },
    created() {

    },
    methods: {
      selectItem(item) {
        this.closeMenu()
        // 退出
        if (item.id === 'logout') {
          this.logOut()
        }
        // 登录
        if (item.id === 'login') {
          this.$router.push('/mobile/newlogin')
        }

        // 注册
        if (item.id === 'register') {
          this.$router.push('/mobile/newregister')
        }

        // 关于我们
        if (item.id === 'aboutUs') {
          this.$router.push('/mobile/about-us')
        }

        // 自助中心
        if (item.id === 'helpSelf') {
          this.$router.push('/mobile/self-help')
        }

        // 线路测试
        if (item.id === 'lineText') {
          this.$router.push('/mobile/line-test')
        }

        // 优惠
        if (item.id === 'youhui') {
          this.$router.push('/mobile/activity')
        }

        // 自助优惠
        if (item.id === 'selfYouhui') {
          this.$router.push('/mobile/user/discounts')
        }

        // 代理中心
        if (item.id === 'agent') {
          this.$router.push('/mobile/agent-manage')
        }

        // 账户清单
        if (item.id === 'accountList') {
          this.$router.push('/mobile/user/account-list')
        }
        // 合作代理
        if (item.id === 'daili') {
          this.$router.push('/mobile/user/agent')
        }
        // 账户设置
        if (item.id === 'settings') {
          this.$router.push('/mobile/user/account-settings')
        }
      },
      closeMenu() {
        this.$emit('closeMenu')
      },
      getIcon(item) {
        return `iconfont icon-${item.icon}`
      }
    }
  }
</script>

<style lang="stylus" src="./menu1.styl" scoped></style>
