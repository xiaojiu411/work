<template>
  <div class="footer">
    <!--<div class="partner wrapper">-->
      <!--<span>合作伙伴：</span>-->
      <!--<div>-->
        <!--<img :src="item.imgUrl" v-for="item in imgList" alt="">-->
      <!--</div>-->
    <!--</div>-->
    <div class="bottom">
      <div class="wrapper bottom-wrapper">
        <div>
          <!--<div class="block">-->
            <!--<span>监管机构：</span>-->
            <!--<div>-->
              <!--<p><img src="./img/sv-1.jpg" alt=""></p>-->
              <!--<p><img src="./img/sv-2.jpg" alt=""></p>-->
              <!--<p><img src="./img/sv-3.jpg" alt=""></p>-->
            <!--</div>-->
          <!--</div>-->
          <div class="block">
            <span>推荐浏览器：</span>
            <div>
              <p>
                <a href="https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=%E8%B0%B7%E6%AD%8C%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%8B%E8%BD%BD&rsv_pq=943c74380000d0fc&rsv_t=726fZyEBFA%2BLRfiYvQCdUuzmPWAYrQOdeweSNWuHE2udZbFpz%2B%2F28ruo7%2BA&rqlang=cn&rsv_enter=1&rsv_sug3=2&rsv_sug1=2&rsv_sug7=101&rsv_n=2&rsv_sug2=0&inputT=485&rsv_sug4=531"  target="_blank">
                  <i class="iconfont icon-user"></i>
                  谷歌浏览器
                </a>
              </p>
              <p>
                <a href="https://www.firefox.com.cn/download/" target="_blank">
                  <i class="iconfont icon-user"></i>
                  火狐浏览器
                </a>
              </p>
              <p>
                <a href="https://get.adobe.com/cn/flashplayer/" target="_blank">
                  <i class="iconfont icon-user"></i>
                  Flash插件下载
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="contact">
          <h3>联系我们</h3>
          <div>
            <div class="info">
              <p>客服邮箱：{{config.serviceEmail}}</p>
              <p>代理邮箱：{{config.agentEmail}}</p>
              <p>投诉邮箱：{{config.complaintEmail}}</p>
            </div>
            <div style="margin-left:20px" class="qq info">
                <span>商务合作QQ：</span>
                <div>
                  <span v-for="item in config.qq">
                    {{item}} <br>
                  </span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="copyright wrapper">
      <p></p>
      <p class="link">
        <router-link to="/about?queryId=aboutUs">关于尊宝</router-link>
        <span>|</span>
        <router-link to="/about?queryId=agreement">用户协议</router-link>
        <span>|</span>
        <router-link to="/about?queryId=rule">服务条款</router-link>
        <span>|</span>
        <router-link to="/about?queryId=protect">隐私政策</router-link>
        <span>|</span>
        <router-link to="/activity/newagents">合作代理</router-link>
        <span>|</span>
        <router-link to="/about?queryId=aboutUs">招牌展示</router-link>
        <span>|</span>
        <router-link to="/about?queryId=contact">联系我们</router-link>
      </p>
    </div>
  </div>
</template>

<script>
  import config from '@/common/js/config'

  export default {
    data() {
      return {
        config,
        imgList: [
          {imgUrl: require('./img/partner/apr-1.jpg')},
          {imgUrl: require('./img/partner/apr-2.jpg')},
          {imgUrl: require('./img/partner/apr-3.jpg')},
          {imgUrl: require('./img/partner/apr-4.jpg')},
          {imgUrl: require('./img/partner/apr-5.jpg')},
          {imgUrl: require('./img/partner/apr-6.jpg')},
          {imgUrl: require('./img/partner/apr-7.jpg')},
        ]
      }
    }
  }
</script>

<style src="./v-footer.styl" lang="stylus" scoped></style>
