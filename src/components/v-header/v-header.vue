<template>
  <div class="header">
    <!--top-->
    <div class="top">
      <div class="wrapper top-wrapper">
        <!--左公告-->
        <div class="notice" @mouseover="noticeSubState = true" @mouseout="noticeSubState = false">
          <marquee onmouseover="this.stop()" onmouseout="this.start()" loop="infinite" scrollamount="3" behavior=""
                   direction="">
            <router-link v-for="(item,index) in noticeList" to="/news-page">{{(index+1)+'、'+item.title}}</router-link>
          </marquee>
          <i class="iconfont icon-arrowdown-copy arrow scale-big"></i>
          <div v-show="noticeSubState" class="notice-sub">
            <div v-for="item in noticeList.slice(0,2)" class="item">
              <h3>
                <span>{{item.title}}</span>
                <span>{{item.time}}</span>
              </h3>
              <div>
                {{item.content}}
              </div>
            </div>
            <div class="center">
              <router-link to="/news-page">
                <el-button size="small" type="warning" class="small-btn">浏览更多</el-button>
              </router-link>
            </div>
          </div>
        </div>
        <!--未登录-->
        <div v-if="!isLogin" class="top-right-wrapper is-logOut">
          <!--<form>-->
            <!--<input type="text" autocomplete v-model="userFormData.loginName" placeholder="用户名">-->
            <!--<input type="password" autocomplete v-model="userFormData.passWord" placeholder="密码">-->
            <!--<a class="style-btn" href="javascript:;" @click="login()">登录</a>-->
            <!--<router-link to="/register" class="style-btn register-btn">免费注册</router-link>-->
            <!--<router-link class="color-intersperse" to="/safe-center">-->
              <!--<i class="iconfont icon-yusan01"></i> 忘记密码-->
            <!--</router-link>-->
            <!--<router-link class="color-intersperse" to="/site-map">-->
              <!--<i class="iconfont icon-huojian"></i> 快速网址-->
            <!--</router-link>-->
          <!--</form>-->

          <!--新注册-->
          <form>
            <a class="style-btn" href="javascript:;" @click="lgstatus=!lgstatus">登录</a>
            <router-link to="/activity/newReg" class="style-btn register-btn">免费注册</router-link>
            <router-link class="color-intersperse" to="/safe-center">
              <i class="iconfont icon-yusan01"></i> 忘记密码
            </router-link>
            <router-link class="color-intersperse" to="/site-map">
              <i class="iconfont icon-huojian"></i> 快速网址
            </router-link>
          </form>
        </div>
        <!--已登录-->
        <div v-if="isLogin && !isAgent" class="top-right-wrapper is-login">
          <div class="account">
            <span style="cursor: pointer"><span>账户：{{userInfo.loginname}}</span> <i class="iconfont icon-arrowdown-copy scale-big"></i></span>
            <div class="sub-menu">
              <router-link to="/user">
                <i class="iconfont icon-xiazai"></i>个人中心
              </router-link>
              <router-link to="/user/discounts">
                <i class="iconfont icon-zizhu"></i>自助优惠
              </router-link>
              <router-link to="/user/account-list">
                <i class="iconfont icon-declare"></i>账户清单
              </router-link>
              <a href="javascript:;" @click="logOut">
                <i class="iconfont icon-tuichu"></i>退出游戏
              </a>
            </div>
          </div>
          <span class="split"></span>
          <span>
            余额：<b class="color-intersperse">{{balance}} </b>
            <i @click="getGameMoney" class="iconfont icon-shuaxin refresh"></i>
          </span>
          <span class="split"></span>
          <router-link to="/user/deposit">充值</router-link>
          <span class="split"></span>
          <router-link to="/user/withdraw">提现</router-link>
          <span class="split"></span>
          <div class="sign">
            <router-link to="/user/sign-lottery">签到</router-link>
            <div class="sub-menu">
              <p>签到金额：</p>
              <p class="sign-money color-intersperse">{{signAmount}}元</p>
              <el-button @click="doSignRecord" type="warning">签到</el-button>
              <p>签到领取彩金~</p>
            </div>
          </div>
          <span class="split"></span>
          <router-link class="msg" to="/user/letter">消息 <i v-if="!isRead" class="badge"></i></router-link>
          <span class="split"></span>
          <router-link class="color-intersperse" to="/site-map">
            <i class="iconfont icon-huojian"></i> 快速网址
          </router-link>
        </div>
        <!--代理登录-->
        <div v-if="isAgent" class="top-right-wrapper agent-header">
          <span>
            欢迎回来：
            <span class="color-intersperse">{{userInfo.loginname}}</span>
          </span>
          <span>
            老虎机账户
            <span class="color-intersperse">{{slotAmount}}元 </span>
            <i @click="getUserStatus" class="iconfont icon-shuaxin refresh"></i>
          </span>
          <span>
            其它账户
            <span class="color-intersperse">{{balance}} </span>
            <i @click="getGameMoney" class="iconfont icon-shuaxin refresh"></i>
          </span>
          <router-link to="/agent-manage">
            <el-button type="warning" size="small" class="small-btn">代理中心</el-button>
          </router-link>
          <router-link class="msg" to="/agent-manage/letter">消息 <i v-if="!isRead" class="badge"></i></router-link>
          <a href="javascript:;" @click="logOut">
            退出
          </a>
          <router-link class="color-intersperse" to="/site-map">
            <i class="iconfont icon-huojian"></i> 快速网址
          </router-link>
        </div>

      </div>

    </div>
    <!--导航-->
    <div class="nav">
      <div class="wrapper">
        <!--logo-->
        <router-link class="logo" to="/index">
          <img :src="logo" alt="">
        </router-link>

        <!--主导航-->
        <ul class="main-nav">
          <li>
            <router-link to="/index">
              <span>首页</span>
            </router-link>
          </li>
          <li>
            <router-link to="/slots">
              <img class="hot" src="./img/hot-icon.png" alt="">
              <span>老虎机游戏</span>
            </router-link>
            <div class="sub-nav">
              <router-link v-if="_isRouterLink(item.path)" :to="{path:item.path}" v-for="item in subNav.slots">
                <div class="icon-box"><img :src="item.imageUrl" alt=""></div>
                <span>{{item.text}}</span>
              </router-link>
              <a v-if="!_isRouterLink(item.path)" @click="jumpGame(item.path)" href="javascript:;"
                 v-for="item in subNav.slots">
                <div class="icon-box"><img :src="item.imageUrl" alt=""></div>
                <span>{{item.text}}</span>
              </a>
            </div>
          </li>
          <li>
            <router-link to="/real">
              <span>真人娱乐</span>
            </router-link>
          </li>
          <li>
            <router-link to="/sports">
              <span>体育电竞</span>
            </router-link>
          </li>
          <li>
            <router-link to="/fish-classify">
              <span>捕鱼游戏</span>
            </router-link>
          </li>
          <li>
            <router-link to="/chess">
              <span>棋牌游戏</span>
            </router-link>
          </li>
          <li>
            <game-api :factoryFun="vrLogin"><a href="javascript:;">VR彩票</a></game-api>
          </li>
          <li>
            <router-link to="/promotion">
              <img class="new" src="./img/new-icon.png" alt="">
              <span>优惠活动</span>
            </router-link>
          </li>
          <li>
            <router-link to="/download">
              <span>APP下载</span>
            </router-link>
            <!--<a href="javascript:;">-->
              <!--<span>APP下载</span>-->
              <!--<i class="iconfont icon-user icon-arrow-nav"></i>-->
            <!--</a>-->
            <!--<div class="sub-nav-download">-->
              <!--<div class="wr">-->
                <!--<p>-->
                  <!--<i class="iconfont icon-android"></i>-->
                  <!--<i class="iconfont icon-ios"></i>-->
                <!--</p>-->
                <!--<img width="100" src="./img/zbEwm.png" alt="">-->
              <!--</div>-->
            <!--</div>-->
          </li>
        </ul>
      </div>
    </div>
    <!--新登录-->
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
            <router-link class="link" to="/activity/newReg">免费注册</router-link>
          </p>
          <div>
            <img :src="reglgimg" alt="">
          </div>
        </div>
      </div>
      <div class="alert-warp" @click="lgstatus=!lgstatus"></div>
    </div>
    <!--&lt;!&ndash;账号绑定弹框&ndash;&gt;-->
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
        <p>温馨提示：验证成功之后，请使用原本的账号或者手机号进行登录。</p>

      </div>
    </v-dialog>

  </div>
</template>

<script>
  import {vrLogin,getNotice,doSignRecord,getUserStatus,bbinLogin,getGuestbookCountNew} from '@/api/index'
  import {newlogin, login, logOut, playGame, getGameMoney, queryPoints,querySignAmount} from "@/common/js/mixin"
  import VDialog from '@/components/dialog/dialog'
  import gameApi from '@/components/game-api/game-api'
  import {mapGetters, mapMutations} from 'vuex'

  export default {
//    mixins: [login, logOut, playGame, getGameMoney, queryPoints,querySignAmount],
//新注册
    mixins: [newlogin, logOut, playGame, getGameMoney, queryPoints,querySignAmount],
    data() {
      return {
        vrLogin,
        noticeList: [],//公告信息
        userFormData: { //登录数据
          loginName: '',
          passWord: ''
        },
        logo: require('@/common/image/newlogo.png'),//logo
        subNav: {
          slots: [
            {
              text: 'PT国际版',
              path: '/slots/ptasia',
              imageUrl: require('./img/slot/logopt.png')
            },
            {
              text: 'PT游戏',
              path: '/slots/pt',
              imageUrl: require('./img/slot/logopt.png')
            },
            {
              text: 'DT游戏',
              path: '/slots/dt',
              imageUrl: require('./img/slot/logodt.png')
            },
            {
              text: 'YGG游戏',
              path: '/slots/ygg',
              imageUrl: require('./img/slot/logoygg.png')
            },
            {
              text: 'PG游戏',
              path: '/slots/pg',
              imageUrl: require('./img/slot/logopg.png')
            },
            {
              text: 'CQ9游戏',
              path: '/slots/cq9',
              imageUrl: require('./img/slot/logocq9.png')
            },
            {
              text: 'SW游戏',
              path: '/slots/sw',
              imageUrl: require('./img/slot/logosky.png')
            }, {
              text: 'MG游戏',
              path: '/slots/mg',
              imageUrl: require('./img/slot/logomg.png')
            }, {
              text: 'PNG游戏',
              path: '/slots/png',
              imageUrl: require('./img/slot/logopng.png')
            }, {
              text: 'QT游戏',
              path: '/slots/qt',
              imageUrl: require('./img/slot/logoqt.png')
            },
            {
              text: 'BBIN游戏',
              path: 'BBinGame',
              imageUrl: require('./img/slot/logobbin.png')
            }
          ]
        },//子菜单
        isRead: true,//默认全部已读
        noticeSubState: false
      }
    },
    computed: {
      ...mapGetters([
        'isAgent',
        'isLogin',
        'userInfo',
        'signAmount',
        'slotAmount'
      ])
    },
    created() {
      this._getNotice() //获取公告信息
      this._isLoginChangeCallback()//初始化加载项
    },
    methods: {
      //签到
      doSignRecord() {
        doSignRecord().then((res) => {
          if (this.ERR_OK === res.code) {
            this.$message({
              type: 'success',
              message: res.data
            })
            this._querySignAmount()
          } else {
            this.$message({
              type: 'warning',
              message: res.message
            })
          }
        })
      },
      //刷新老虎机账户余额
      getUserStatus() {
        getUserStatus().then((res) => {
          if (this.ERR_OK === res.code) {
            this.SET_SLOT_AMOUNT(res.data)
          } else {
            this.$message({
              type: 'warning',
              message: res.message
            })
          }
        })
      },
      //跳转游戏
      jumpGame() {
        this.playGame(bbinLogin, {gameKind: 'game', gameCode: '', mode: 'pc'})
      },
      //初始化加载项
      _isLoginChangeCallback() {
        if (this.isLogin) {
          this._querySignAmount() //查询签到余额
          this._getGuestbookCountNew()//查询用户最新消息
          this.getGameMoney()
        }
      },
      //查询用户最新消息
      _getGuestbookCountNew() {
        getGuestbookCountNew().then((res) => {
          if (this.ERR_OK === res.code) {
            if (Number(res.data)) {//有未读消息，表示未读
              this.isRead = false //未读
              this.SET_UNREAD_MESSAGE(Number(res.data))
            }else{
              this.isRead = true //未读
              this.SET_UNREAD_MESSAGE(0)
            }
          }
        })
      },

      //公告信息
      _getNotice() {
        getNotice({pageIndex: 1, pageSize: 5}).then((res) => {
          if (this.ERR_OK === res.code) {
            this.noticeList = res.data.records
          }
        })
      },
      _isRouterLink(str) {
        return str.includes('/')
      },
      ...mapMutations([
        'SET_USERINFO',
        'SET_UNREAD_MESSAGE',
        'SET_SLOT_AMOUNT'
      ])
    },
    watch: {
      isLogin() {
        this._isLoginChangeCallback()
      }
    },
    components: {
      gameApi,
      VDialog
    }
  }
</script>

<style lang="stylus" scoped src="./header.styl"></style>