(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-37cdf2be"],{"107a":function(t,e,i){"use strict";var s=i("96b5");i.n(s).a},"114e":function(t,e,i){},1325:function(t,e,i){t.exports=i.p+"static/img/ds2.3dc7bc00.jpg"},"1c94":function(t,e,i){"use strict";var s=i("e131");i.n(s).a},"1dd9":function(t,e,i){"use strict";i("7f7f");var s=i("f6b5"),a=i.n(s),n=i("76a0");a.a.component(n.Swipe.name,n.Swipe),a.a.component(n.SwipeItem.name,n.SwipeItem);var o={data:function(){return{height:200,currentIdx:0}},props:{bannerList:{type:Array,default:[]}},computed:{},mounted:function(){},methods:{loadImg:function(t){var e=this;this.isLoad||(this.isLoad=!0,this.$Lazyload.$once("loaded",function(t){var i=t.el;t.src,e.height=i.scrollHeight}))},imgObj:function(t){return{src:t,loading:"".concat(this.baseUrl,"images/loading.jpg")}},goToThisPage:function(t){var e=t.href;this._isHttpUrl(e)?window.open(e):this._isHttpUrl(e)||this.$router.push(e)},_isHttpUrl:function(t){return/^http/.test(t)}},watch:{},components:{}},c=(i("1c94"),i("2877")),r=Object(c.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.bannerList.length?i("div",{staticClass:"banner-wrapper"},[i("mt-swipe",{style:{height:t.height+"px",minHeight:"170px"},attrs:{auto:4e3}},t._l(t.bannerList,function(e,s){return i("mt-swipe-item",[i("a",{attrs:{href:"javascript:;"},on:{click:function(i){t.goToThisPage(e)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgObj(e.src),expression:"imgObj(item.src)"}],attrs:{width:"100%",alt:""},on:{load:t.loadImg}})])])}))],1):t._e()},[],!1,null,"29f76239",null);r.options.__file="banner.vue",e.a=r.exports},"255e":function(t,e,i){},"2e93":function(t,e,i){"use strict";var s=i("d9c2");i.n(s).a},3888:function(t,e,i){"use strict";var s=i("3bbe");i.n(s).a},"3bbe":function(t,e,i){},"4abf":function(t,e,i){t.exports=i.p+"static/img/gct.6a24634c.jpg"},"51a8":function(t,e,i){t.exports=i.p+"static/img/hynh.385e36f5.jpg"},"6eee":function(t,e,i){t.exports=i.p+"static/img/jpm.0cf1baeb.jpg"},"6f3d":function(t,e,i){"use strict";var s=i("da7f");i.n(s).a},"6ffc":function(t,e,i){t.exports=i.p+"static/img/lps.678c34a5.jpg"},"72ef":function(t,e,i){"use strict";var s=i("cebc"),a=(i("6762"),i("2fdb"),i("2f62")),n=i("510f"),o={mixins:[n.I,n.J,n.L],data:function(){return{ownMenuList:[{text:"登录账户",id:"login",show:"logOut"},{text:"注册账户",id:"register",show:"logOut"},{text:"安全退出",id:"logout",show:"isLogin"}]}},props:{isShow:{type:Boolean,default:!1},menuList:{type:Array,default:[]}},computed:Object(s.a)({filterList:function(){return this.isLogin?this.ownMenuList.concat(this.menuList).filter(function(t){return t.show.includes("isLogin")}):this.ownMenuList.concat(this.menuList).filter(function(t){return t.show.includes("logOut")})}},Object(a.b)(["isLogin"])),created:function(){},methods:{selectItem:function(t){this.closeMenu(),"logout"!==t.id?"login"!==t.id?"register"!==t.id?this._isHttpUrl(t.path)?window.location.href=t.path:this.$router.push(t.path):this.$router.push("/mobile/newregister"):this.openLoginDialog():this.logOut()},closeMenu:function(){this.$emit("closeMenu")},getIcon:function(t){return"iconfont icon-".concat(t.icon)},_isHttpUrl:function(t){return/^http/.test(t)}}},c=(i("fdfc"),i("2877")),r=Object(c.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.isShow?i("div",{staticClass:"mask",on:{click:t.closeMenu}}):t._e(),i("transition",{attrs:{name:"slider-left"}},[t.isShow?i("div",{staticClass:"menu-wrapper"},[i("i",{staticClass:"iconfont icon-2guanbi icon-close",on:{click:t.closeMenu}}),i("div",{staticClass:"header"},[t.isLogin?i("div",[i("img",{attrs:{src:t.levelImage,alt:""}}),i("p",[t._v("会员账号："+t._s(t.userInfo.loginname))]),i("p",[t._v("会员等级："+t._s(t._f("level")(t.userInfo.level)))]),i("p",[t._v("会员余额："+t._s(t.userInfo.credit))])]):t._e(),t.isLogin?t._e():i("div",[i("p",{staticStyle:{padding:"20px 0"}},[t._v("尊敬的用户，您好，请先登录")])])]),i("div",{staticClass:"main"},[i("ul",t._l(t.filterList,function(e){return i("li",{on:{click:function(i){t.selectItem(e)}}},[e.icon?i("i",{class:t.getIcon(e)}):t._e(),i("span",[t._v(t._s(e.text))])])}))])]):t._e()])],1)},[],!1,null,"f7929e36",null);r.options.__file="menu.vue";var l=r.exports,m=i("8b55"),u=Object(m.h)()?"/mobile":"",p={mixins:[n.J,n.L,n.P],data:function(){return{headData:{title:"",leftIcon:"menu",rightIcon:"kefu2",logo:i("d6b8")},logo:i("d6b8"),menuList:[{text:"尊宝电影院",path:u+"/activity/movie",show:"isLogin&logOut"}],isMobilePlatform:Object(m.h)()}},computed:Object(s.a)({},Object(a.b)(["isLogin"])),created:function(){},methods:{_isHttpUrl:function(t){return/^http/.test(t)},openService:function(){window.open("https://chatai.zb251.com/chat/chatClient/chatbox.jsp?companyID=9043&configID=17&live800_domain=https://".concat(window.location.host,"&chatfrom=wap"))}},watch:{},components:{VMenu:l}},v=(i("2e93"),Object(c.a)(p,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.isMobilePlatform?t._e():i("div",{staticClass:"common-nav"},[i("div",{staticClass:"wrapper"},[i("router-link",{staticClass:"logo",attrs:{to:"/"}},[i("img",{attrs:{src:t.logo,alt:""}})]),i("div",{staticClass:"right-wrapper"},[i("div",{staticClass:"menu-list"},[t._l(t.menuList,function(e){return t._isHttpUrl(e.path)?i("a",{attrs:{href:e.path,target:"_blank"}},[t._v(t._s(e.text))]):t._e()}),t._l(t.menuList,function(e){return t._isHttpUrl(e.path)?t._e():i("router-link",{attrs:{to:{path:e.path}}},[t._v(t._s(e.text)+"\n          ")])}),t.isLogin?t._e():i("el-button",{attrs:{type:"warning"},on:{click:t.openLoginDialog}},[t._v("登录")]),t.isLogin?i("el-button",{attrs:{type:"warning"},on:{click:t.logOut}},[t._v("退出")]):t._e()],2)])],1)]),t.isMobilePlatform?i("div",{staticClass:"mobile-common-nav"},[i("v-header",{attrs:{data:t.headData},on:{rightIconClick:t.openService,leftIconClick:t.openMenu}})],1):t._e(),i("v-menu",{attrs:{isShow:t.isShow,menuList:t.menuList},on:{closeMenu:t.closeMenu}})],1)},[],!1,null,"4ff20f6d",null));v.options.__file="common-nav.vue",e.a=v.exports},"817f":function(t,e,i){"use strict";i("c5f6");var s={props:{isShow:{type:Boolean,default:!1},width:{type:Number,default:600},height:{type:Number,default:500}},data:function(){return{}},computed:{styleObj:function(){return{width:"".concat(this.width,"px"),"max-height":"".concat(this.height,"px"),margin:"-".concat(this.height/2,"px 0 0 -").concat(this.width/2,"px")}}},methods:{closeMyself:function(){this.$emit("on-close")}}},a=(i("6f3d"),i("2877")),n=Object(a.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"dialog-wrap"},[t.isShow?i("div",{staticClass:"dialog-cover",on:{click:t.closeMyself}}):t._e(),i("transition",{attrs:{name:"scale"}},[t.isShow?i("div",{staticClass:"dialog-content",style:t.styleObj},[i("p",{staticClass:"dialog-close",on:{click:t.closeMyself}},[t._v("×")]),t._t("default",[t._v("empty")])],2):t._e()])],1)])},[],!1,null,"1ab10b28",null);n.options.__file="dialog.vue",e.a=n.exports},8380:function(t,e,i){t.exports=i.p+"static/img/banner2.21dbc312.jpg"},8512:function(t,e,i){t.exports=i.p+"static/img/banner3.d5a8b5e5.jpg"},"91a2":function(t,e,i){t.exports=i.p+"static/img/xyrj.c71ffd27.jpg"},"92de":function(t,e,i){"use strict";i("c5f6");var s={props:{slides:{type:Array,default:[]},inv:{type:Number,default:1e3},isShowIndicator:{type:Boolean,default:!0},height:{type:Number,default:400}},data:function(){return{nowIndex:0,isShow:!0}},computed:{prevIndex:function(){return 0===this.nowIndex?this.slides.length-1:this.nowIndex-1},nextIndex:function(){return this.nowIndex===this.slides.length-1?0:this.nowIndex+1},styleObj:function(){return{height:"".concat(this.height,"px")}}},methods:{goToThisPage:function(t){var e=t.href;this._isHttpUrl(e)?window.open(e):this._isHttpUrl(e)||this.$router.push(e)},goto:function(t){var e=this;this.isShow=!1,setTimeout(function(){e.isShow=!0,e.nowIndex=t},10)},runInv:function(){var t=this;this.invId=setInterval(function(){t.goto(t.nextIndex)},this.inv)},clearInv:function(){clearInterval(this.invId)},_isHttpUrl:function(t){return/^http/.test(t)}},mounted:function(){this.runInv()}},a=(i("107a"),i("2877")),n=Object(a.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.slides.length?i("div",{staticClass:"slide-show",style:t.styleObj,on:{mouseover:t.clearInv,mouseout:t.runInv}},[i("div",{staticClass:"slide-img"},[i("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.goToThisPage(t.slides[t.nowIndex])}}},[i("transition",{attrs:{name:"slide-fade"}},[t.isShow?i("img",{attrs:{src:t.slides[t.nowIndex].src}}):t._e()]),i("transition",{attrs:{name:"slide-fade"}},[t.isShow?t._e():i("img",{attrs:{src:t.slides[t.nowIndex].src}})])],1)]),t.isShowIndicator?i("div",{staticClass:"indicator"},[i("div",{staticClass:"indicator-wrapper"},t._l(t.slides,function(e,s){return i("a",{class:{active:s===t.nowIndex},attrs:{href:"javascript:;"},on:{mouseover:function(e){t.goto(s)}}})}))]):t._e(),i("span",{staticClass:"prev-btn",on:{click:function(e){t.goto(t.prevIndex)}}},[i("i",{staticClass:"iconfont icon-arrowr"})]),i("span",{staticClass:"next-btn",on:{click:function(e){t.goto(t.nextIndex)}}},[i("i",{staticClass:"iconfont icon-arrowr icon-arrow-right"})])]):t._e()},[],!1,null,"7cce8fa1",null);n.options.__file="banner.vue",e.a=n.exports},"96b5":function(t,e,i){},"9a7b":function(t,e,i){"use strict";var s=i("114e");i.n(s).a},"9ef1":function(t,e,i){t.exports=i.p+"static/img/banner5.43648fd8.jpg"},a6b8:function(t,e,i){"use strict";i.r(e);var s=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"why-watch-movie center"},[s("p",[s("img",{attrs:{src:i("e289"),alt:""}})]),s("h2",[t._v("透过电影，我们的人生延长了三倍《一一》里杨德昌的这句话 触动我至今")]),s("p",[t._v("\n        俗话说一场电影一场梦，看电影不是为了打发时间，而是去寻找自己！\n\n        "),s("br"),t._v("现在越来越多的人遇到烂片会果断的中途退场，对于一场错误的感情，也是一样，及时离开便是对自己有限生命时间最好的珍惜·······\n\n        "),s("br"),t._v("那么您还记得人生中看的第一部电影是什么吗？90年的香港恐怖片？僵尸片？还是00年崛起的青春文艺片？亦是当下流行的好莱坞科幻大片？\n\n        "),s("br"),s("span",{staticClass:"red"},[t._v("尊宝国际为回馈广大会员的支持，福利再次来袭！不定期请您看国内外最新首映电影，尽享尊荣vip观影体验！")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"movie-tip wrapper"},[i("p",[i("span",{staticClass:"red"},[t._v("如何申请：")]),t._v("当日存款满500元以上，每月仅限申请前100名，先申先得，次日系统将在申请名单里随机抽取\n\n        "),i("br"),i("span",{staticClass:"red"},[t._v("申请举例：进入京东电影网之后点击影院，切换地址到您的住址即可查询到您身边可购票成功的电影院！")]),i("br"),i("span",{staticClass:"red"},[t._v("温馨提示：")]),i("br"),t._v("1.选购电影票只可选择当周周末（当周六或周日）观影，其他时段（周1-周5）恕不处理。必须在周五前完成预约申请，否则无法进行处理。\n\n        "),i("br"),t._v("2.报名时请填写正确您选择电影院、联系方式、放映时间。\n\n        "),i("br"),t._v("3.尊宝娱乐享有此优惠的最终解释权及修改权。\n      ")])])}],a=i("cebc"),n=(i("e6e3"),i("9f02"),i("c263")),o=i.n(n),c=(i("cadf"),i("551c"),i("097d"),i("365c")),r=i("817f"),l=i("72ef"),m=i("c400"),u=i("1dd9"),p=i("92de"),v=i("2f62"),d=i("c15b"),f=i("8b55"),g=i("f6b5");i.n(g).a.use(o.a);var h={data:function(){return{slides:[{src:i("e514")},{src:i("8380")},{src:i("8512")},{src:i("ae3d")},{src:i("9ef1")}],movieHotList:[{src:i("6ffc"),name:"绿皮书",point:"9.7"},{src:i("4abf"),name:"过春天",point:"8.0"},{src:i("d0dd"),name:"惊奇队长",point:"8.6"},{src:i("b3f7"),name:"驯龙高手",point:"8.9"},{src:i("b81c"),name:"阳台上",point:"9.1"}],movieGoodList:[{src:i("6eee"),name:"金瓶梅2",point:"6.0"},{src:i("91a2"),name:"性瘾日记",point:"7.0"},{src:i("b5e4"),name:"重庆深林",point:"8.7"},{src:i("51a8"),name:"花样年华",point:"8.5"},{src:i("1325"),name:"赌神2",point:"7.5"}],movieData:{cityName:"",cinemaName:"",movieName:"",loginName:"",seeTime:"",seeTimeInterval:"",mobile:""},isShowMovieState:!1,isMobile:Object(f.h)(),width:.9*window.innerWidth}},computed:Object(a.a)({},Object(v.b)(["userInfo","isLogin"])),created:function(){},methods:{getMoneyTime:function(t){var e=this;Object(c.xb)().then(function(i){e.ERR_OK===i.code?500<=i.data?(e.isShowMovieState=!0,e.movieData.movieName=t):e.$message({type:"info",message:"您今日的存款额未达到"}):e.$message({type:"warning",message:i.message})})},addUserMovie:function(){var t=this;if(this.isLogin){var e=this.movieData,i=e.cityName,s=e.cinemaName,a=e.seeTime,n=e.seeTimeInterval,o=e.mobile;i?s?a?n?d.a.phoneReg.test(o)?(this.movieData.loginName=this.userInfo.loginname,a.format&&(this.movieData.seeTime=a.format()),Object(c.d)(this.movieData).then(function(e){t.ERR_OK===e.code?t.$message({type:"info",message:e.data}):t.$message({type:"warning",message:e.message})})):this.$message({type:"warning",message:"手机号输入有误"}):this.$message({type:"warning",message:"请选择放映时段"}):this.$message({type:"warning",message:"请选择观影日期"}):this.$message({type:"warning",message:"请输入电影院名称"}):this.$message({type:"warning",message:"请输入城市地区"})}else this.$message({type:"warning",message:"请先登录游戏"})},closeDialog:function(t){this[t]=!1}},watch:{},components:{VDialog:r.a,commonNav:l.a,commonFooter:m.a,banner:u.a,PcBanner:p.a}},b=(i("9a7b"),i("2877")),_=Object(b.a)(h,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"movie"},[i("common-nav"),t.isMobile?t._e():i("pc-banner",{attrs:{slides:t.slides,inv:4e3}}),t.isMobile?i("banner",{attrs:{bannerList:t.slides}}):t._e(),i("div",{staticClass:"movie-wrapper"},[t._m(0),i("div",{staticClass:"hot-movie common-list"},[i("div",{staticClass:"wrapper"},[i("h3",{staticClass:"title"},[t._v("正在热映")]),i("div",{staticClass:"item-list"},t._l(t.movieHotList,function(e){return i("div",{staticClass:"item"},[i("div",{staticClass:"pic"},[i("img",{attrs:{src:e.src,alt:""}})]),i("p",{staticClass:"name"},[t._v(t._s(e.name))]),i("div",{staticClass:"bottom"},[i("span",{staticClass:"point"},[t._v(t._s(e.point)+"分")]),t.isMobile?t._e():i("el-button",{staticClass:"small-btn",attrs:{type:"primary",size:"small"},on:{click:function(i){t.getMoneyTime(e.name)}}},[t._v("我要看\n              ")]),t.isMobile?i("mt-button",{staticClass:"small-btn",attrs:{type:"primary",size:"small"},on:{click:function(i){t.getMoneyTime(e.name)}}},[t._v("我要看\n              ")]):t._e()],1)])}))])]),i("div",{staticClass:"good-movie common-list"},[i("div",{staticClass:"wrapper"},[i("h3",{staticClass:"title"},[t._v("经典电影")]),i("div",{staticClass:"item-list"},t._l(t.movieGoodList,function(e){return i("div",{staticClass:"item"},[i("div",{staticClass:"pic"},[i("img",{attrs:{src:e.src,alt:""}})]),i("p",{staticClass:"name"},[t._v(t._s(e.name))]),i("div",{staticClass:"bottom"},[i("span",{staticClass:"point"},[t._v(t._s(e.point)+"分")])])])}))])]),t._m(1)]),i("common-footer"),t.isMobile?t._e():i("div",[i("v-dialog",{attrs:{height:550,"is-show":t.isShowMovieState},on:{"on-close":function(e){t.closeDialog("isShowMovieState")}}},[i("div",[i("div",{staticClass:"dialog-header"},[i("h3",[t._v("请完成您的确认单")])]),i("div",{staticClass:"dialog-body"},[i("h3",{staticClass:"movie-title"},[t._v("请先进入："),i("a",{staticClass:"red",attrs:{href:"https://movie.jd.com",target:"_blank"}},[t._v("movie.jd.com")]),t._v("\n            选择您身边的电影院")]),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("请输入城市地区")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.movieData.cityName,expression:"movieData.cityName"}],attrs:{type:"text"},domProps:{value:t.movieData.cityName},on:{input:function(e){e.target.composing||t.$set(t.movieData,"cityName",e.target.value)}}})])]),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("请输入影院名称")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.movieData.cinemaName,expression:"movieData.cinemaName"}],attrs:{type:"text"},domProps:{value:t.movieData.cinemaName},on:{input:function(e){e.target.composing||t.$set(t.movieData,"cinemaName",e.target.value)}}})])]),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("请选择观影日期")]),i("div",[i("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.movieData.seeTime,callback:function(e){t.$set(t.movieData,"seeTime",e)},expression:"movieData.seeTime"}})],1)]),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("请选择放映时段")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.movieData.seeTimeInterval,expression:"movieData.seeTimeInterval"}],attrs:{type:"text"},domProps:{value:t.movieData.seeTimeInterval},on:{input:function(e){e.target.composing||t.$set(t.movieData,"seeTimeInterval",e.target.value)}}})])]),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("请输入手机号码")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.movieData.mobile,expression:"movieData.mobile"}],attrs:{maxlength:"11",type:"text"},domProps:{value:t.movieData.mobile},on:{input:function(e){e.target.composing||t.$set(t.movieData,"mobile",e.target.value)}}})])]),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"}),i("div",[i("el-button",{attrs:{type:"danger"},on:{click:t.addUserMovie}},[t._v("提交申请")])],1)]),i("div",[i("p",[i("span",{staticClass:"red"},[t._v("*")]),t._v("本活动指定平台京东电影，其他平台恕不受理。\n\n              "),i("br"),i("span",{staticClass:"red"},[t._v("*")]),t._v("请准确无错字的输入进您查询到的电影院名称，并且输入进资料栏。\n            ")])])])])])],1),t.isMobile?i("div",[i("v-dialog",{attrs:{width:t.width,height:450,"is-show":t.isShowMovieState},on:{"on-close":function(e){t.closeDialog("isShowMovieState")}}},[i("div",{staticClass:"mobile-dialog"},[i("div",{staticClass:"dialog-header"},[i("h3",[t._v("请完成您的确认单")])]),i("div",{staticClass:"dialog-body"},[i("h3",{staticClass:"movie-title"},[t._v("请先进入："),i("a",{staticClass:"red",attrs:{href:"https://movie.jd.com",target:"_blank"}},[t._v("movie.jd.com")]),t._v("\n            选择您身边的电影院")]),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("城市地区")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.movieData.cityName,expression:"movieData.cityName"}],attrs:{type:"text"},domProps:{value:t.movieData.cityName},on:{input:function(e){e.target.composing||t.$set(t.movieData,"cityName",e.target.value)}}})])]),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("影院名称")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.movieData.cinemaName,expression:"movieData.cinemaName"}],attrs:{type:"text"},domProps:{value:t.movieData.cinemaName},on:{input:function(e){e.target.composing||t.$set(t.movieData,"cinemaName",e.target.value)}}})])]),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("观影日期")]),i("div",[i("el-date-picker",{staticClass:"movie-date-picker",attrs:{type:"date",placeholder:"选择日期"},model:{value:t.movieData.seeTime,callback:function(e){t.$set(t.movieData,"seeTime",e)},expression:"movieData.seeTime"}})],1)]),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("放映时段")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.movieData.seeTimeInterval,expression:"movieData.seeTimeInterval"}],attrs:{type:"text"},domProps:{value:t.movieData.seeTimeInterval},on:{input:function(e){e.target.composing||t.$set(t.movieData,"seeTimeInterval",e.target.value)}}})])]),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v("手机号码")]),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.movieData.mobile,expression:"movieData.mobile"}],attrs:{maxlength:"11",type:"text"},domProps:{value:t.movieData.mobile},on:{input:function(e){e.target.composing||t.$set(t.movieData,"mobile",e.target.value)}}})])]),i("div",{staticClass:"input-group"},[i("span",{staticClass:"label"},[t._v(" ")]),i("div",[t.isMobile?t._e():i("el-button",{attrs:{type:"danger"},on:{click:t.addUserMovie}},[t._v("提交申请")]),t.isMobile?i("mt-button",{attrs:{type:"danger"},on:{click:t.addUserMovie}},[t._v("提交申请")]):t._e()],1)]),i("div",[i("p",[i("span",{staticClass:"red"},[t._v("*")]),t._v("本活动指定平台京东电影，其他平台恕不受理。\n\n              "),i("br"),i("span",{staticClass:"red"},[t._v("*")]),t._v("请准确无错字的输入进您查询到的电影院名称，并且输入进资料栏。\n            ")])])])])])],1):t._e()],1)},s,!1,null,"6cef5486",null);_.options.__file="movie.vue",e.default=_.exports},ae3d:function(t,e,i){t.exports=i.p+"static/img/banner4.57d80558.jpg"},b3f7:function(t,e,i){t.exports=i.p+"static/img/xlgs.b328a86a.jpg"},b5e4:function(t,e,i){t.exports=i.p+"static/img/cqsl.1bedbb66.jpg"},b81c:function(t,e,i){t.exports=i.p+"static/img/yts.fe63195e.jpg"},c400:function(t,e,i){"use strict";var s={data:function(){return{}},computed:{},created:function(){},methods:{},watch:{},components:{}},a=(i("3888"),i("2877")),n=Object(a.a)(s,function(){return this.$createElement,this._self._c,this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"common-footer"},[e("p",[this._v("尊宝国际持有菲律宾 PAGCOR 合法博彩执照")])])}],!1,null,"1343d1b9",null);n.options.__file="common-footer.vue",e.a=n.exports},d0dd:function(t,e,i){t.exports=i.p+"static/img/jqdz.37442a4e.jpg"},d6b8:function(t,e,i){t.exports=i.p+"static/img/newlogo.9c12c89a.png"},d9c2:function(t,e,i){},da7f:function(t,e,i){},e131:function(t,e,i){},e289:function(t,e,i){t.exports=i.p+"static/img/topic2.2dd7dfbc.png"},e514:function(t,e,i){t.exports=i.p+"static/img/banner1.61db624f.jpg"},fdfc:function(t,e,i){"use strict";var s=i("255e");i.n(s).a}}]);