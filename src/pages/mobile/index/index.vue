<template>
  <div>
    <v-header
            @closeDownload="closeDownload"
            @rightIconClick="openService"
            @leftIconClick="openMenu"
            :data="headData">
    </v-header>

    <div class="index-main" :class="{paddingTop:headData.download}">

      <!--banner-->
      <banner :bannerList="bannerList"></banner>

      <div class="new-top-navs">
        <router-link to="/mobile/slots/ptasia">
          <img src="./img/n1.png" alt="">
          <span>老虎机</span>
        </router-link>
        <a href="/mobile/slots/ptasia?platform=REAL">
          <img src="./img/n2.png" alt="">
          <span>真人</span>
        </a>
        <a href="/mobile/slots/ptasia?platform=REAL">
          <img src="./img/n3.png" alt="">
          <span>体育</span>
        </a>
        <a href="/mobile/slots/ptasia?platform=REAL">
          <img src="./img/n4.png" alt="">
          <span>电竞</span>
        </a>
        <a href="/mobile/slots/ptasia?platform=FISH">
          <img src="./img/n5.png" alt="">
          <span>捕鱼</span>
        </a>
        <a href="/mobile/slots/ptasia?platform=CARD">
          <img src="./img/n6.png" alt="">
          <span>棋牌</span>
        </a>
        <a href="/mobile/slots/ptasia?platform=LOTTERY">
          <img src="./img/n7.png" alt="">
          <span>彩票</span>
        </a>
      </div>
      <!--公告-->
      <notice></notice>


      <!--网页版游戏-->
      <index-game></index-game>

      <div class="section">
        <div class="topic">
          <p>
            人气活动
            <router-link to="/mobile/activity">
              更多 >
            </router-link>
          </p>
          <div class="wrap">
            <div class="list">
              <div class="item">
                <router-link to="/mobile/activity?query=ckms">
                  <img src="@/common/image/promotion/upgradevip.jpg" alt="">
                </router-link>
              </div>
              <div class="item">
                <router-link to="/mobile/activity?query=shoucun">
                  <img src="@/common/image/promotion/shoucun.jpg" alt="">
                </router-link>
              </div>
              <div class="item">
                <router-link to="/mobile/activity?query=sign">
                  <img src="@/common/image/promotion/meiriqd.jpg" alt="">
                </router-link>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="section">
        <div class="topic">
          <p>
            客户端下载
            <router-link to="/mobile/game-down">
              更多 >
            </router-link>
          </p>
          <router-link to="/mobile/game-down">
            <img src="./img/dl-bg.png" alt="">
          </router-link>
        </div>
      </div>
      <div class="new-bot">
        <p>尊宝国际持菲律宾 <img src="./img/b-icon.png" alt=""> 合法牌照</p>
        <p>2015-2019版权所有</p>
        <p>尊宝国际侵权必究</p>
      </div>

    </div>

    <!--菜单-->
    <v-menu @closeMenu="closeMenu" :isShow="isShow"></v-menu>

    <!--alert-->
    <idx-alert @close="close"
               :isShowIndexAlert="isShowIndexAlert">
    </idx-alert>
  </div>
</template>

<script>
  import {getBannerData} from '@/api/index'
  import VMenu from 'MComponents/menu/menu1'
  import notice from './notice/notice'
  import btnGroup from './btn-group/btn-group'
  import indexGame from './index-game/index-game1'
  import banner from 'MComponents/banner/banner'
  import idxAlert from './index-alert/index-alert'
  import {menu} from '@/common/js/mixin'
  import {mapGetters} from 'vuex'
  import {ajaxRequst} from '@/common/js/util'

  export default {
    mixins: [menu],
    data() {
      return {
        headData: {
          title: '',
          leftIcon: 'menu',
          rightIcon: 'kefu2',
          logo: require('@/common/image/newlogo.png'),
          download: true
        },
        bannerList: [],
        isShowIndexAlert:false
      }
    },
    computed: {
      ...mapGetters(['isLogin'])
    },
    created() {
      this._getBannerItems() //加载banner
    },
    mounted(){
      this.isShowIndexAlert=true
    },
    methods: {
      // 关闭下载提示
      closeDownload() {
        this.headData.download = false
      },
      // 打开客服
      openService() {
        window.open(`https://chatai.zb251.com/chat/chatClient/chatbox.jsp?companyID=9043&configID=17&live800_domain=https://${window.location.host}&chatfrom=wap`)
      },
      // 获取banner
      _getBannerItems() {
        // position：1:首页轮播图/2:老虎机轮播图/3:真人轮播图/4:捕鱼轮播图/5:棋牌轮播图
        // displaySide：1:电脑网页/2:手机网页/3:手机APP

        let baseUrl = 'http://220.241.124.160:15002'
        if (process.env.NODE_ENV === 'production') {
          baseUrl = ''
        }
        let url = baseUrl + '/api/personal/carouselMapConfig/list'
        ajaxRequst(url, 'POST', {position: "1", displaySide: "2"}).then((res) => {
          if (res.code === this.ERR_OK || this.ERR_OK_OTHER === res.code) {
            if (res.data.length) {
              this.bannerList = res.data.map((item) => {
                item.src = item.imageUrl
                item.href = item.jumpLink
                return item
              })
            }
          } else {
            this.$message({
              type: 'warning',
              message: res.message
            })
          }
        })
      },
      close(){
        this.isShowIndexAlert = false
      },
    },
    components: {
      VMenu, notice, btnGroup, indexGame, banner ,idxAlert
    }
  }
</script>

<style lang="stylus" src="./index.styl" scoped>


</style>