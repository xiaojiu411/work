(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5c652789"],{"0b56":function(t,i,e){"use strict";var s=e("eb9c");e.n(s).a},"0cf7":function(t,i,e){},"255e":function(t,i,e){},"2e93":function(t,i,e){"use strict";var s=e("d9c2");e.n(s).a},"2f21":function(t,i,e){"use strict";var s=e("79e5");t.exports=function(t,i){return!!t&&s(function(){i?t.call(null,function(){},1):t.call(null)})}},3888:function(t,i,e){"use strict";var s=e("3bbe");e.n(s).a},"3bbe":function(t,i,e){},"55dd":function(t,i,e){"use strict";var s=e("5ca1"),n=e("d8e8"),o=e("4bf8"),c=e("79e5"),a=[].sort,r=[1,2,3];s(s.P+s.F*(c(function(){r.sort(void 0)})||!c(function(){r.sort(null)})||!e("2f21")(a)),"Array",{sort:function(t){return void 0===t?a.call(o(this)):a.call(o(this),n(t))}})},"72ef":function(t,i,e){"use strict";var s=e("cebc"),n=(e("6762"),e("2fdb"),e("2f62")),o=e("510f"),c={mixins:[o.I,o.J,o.L],data:function(){return{ownMenuList:[{text:"登录账户",id:"login",show:"logOut"},{text:"注册账户",id:"register",show:"logOut"},{text:"安全退出",id:"logout",show:"isLogin"}]}},props:{isShow:{type:Boolean,default:!1},menuList:{type:Array,default:[]}},computed:Object(s.a)({filterList:function(){return this.isLogin?this.ownMenuList.concat(this.menuList).filter(function(t){return t.show.includes("isLogin")}):this.ownMenuList.concat(this.menuList).filter(function(t){return t.show.includes("logOut")})}},Object(n.b)(["isLogin"])),created:function(){},methods:{selectItem:function(t){this.closeMenu(),"logout"!==t.id?"login"!==t.id?"register"!==t.id?this._isHttpUrl(t.path)?window.location.href=t.path:this.$router.push(t.path):this.$router.push("/mobile/newregister"):this.openLoginDialog():this.logOut()},closeMenu:function(){this.$emit("closeMenu")},getIcon:function(t){return"iconfont icon-".concat(t.icon)},_isHttpUrl:function(t){return/^http/.test(t)}}},a=(e("fdfc"),e("2877")),r=Object(a.a)(c,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[t.isShow?e("div",{staticClass:"mask",on:{click:t.closeMenu}}):t._e(),e("transition",{attrs:{name:"slider-left"}},[t.isShow?e("div",{staticClass:"menu-wrapper"},[e("i",{staticClass:"iconfont icon-2guanbi icon-close",on:{click:t.closeMenu}}),e("div",{staticClass:"header"},[t.isLogin?e("div",[e("img",{attrs:{src:t.levelImage,alt:""}}),e("p",[t._v("会员账号："+t._s(t.userInfo.loginname))]),e("p",[t._v("会员等级："+t._s(t._f("level")(t.userInfo.level)))]),e("p",[t._v("会员余额："+t._s(t.userInfo.credit))])]):t._e(),t.isLogin?t._e():e("div",[e("p",{staticStyle:{padding:"20px 0"}},[t._v("尊敬的用户，您好，请先登录")])])]),e("div",{staticClass:"main"},[e("ul",t._l(t.filterList,function(i){return e("li",{on:{click:function(e){t.selectItem(i)}}},[i.icon?e("i",{class:t.getIcon(i)}):t._e(),e("span",[t._v(t._s(i.text))])])}))])]):t._e()])],1)},[],!1,null,"f7929e36",null);r.options.__file="menu.vue";var l=r.exports,u=e("8b55"),f=Object(u.h)()?"/mobile":"",p={mixins:[o.J,o.L,o.P],data:function(){return{headData:{title:"",leftIcon:"menu",rightIcon:"kefu2",logo:e("d6b8")},logo:e("d6b8"),menuList:[{text:"尊宝电影院",path:f+"/activity/movie",show:"isLogin&logOut"}],isMobilePlatform:Object(u.h)()}},computed:Object(s.a)({},Object(n.b)(["isLogin"])),created:function(){},methods:{_isHttpUrl:function(t){return/^http/.test(t)},openService:function(){window.open("https://chatai.zb251.com/chat/chatClient/chatbox.jsp?companyID=9043&configID=17&live800_domain=https://".concat(window.location.host,"&chatfrom=wap"))}},watch:{},components:{VMenu:l}},h=(e("2e93"),Object(a.a)(p,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[t.isMobilePlatform?t._e():e("div",{staticClass:"common-nav"},[e("div",{staticClass:"wrapper"},[e("router-link",{staticClass:"logo",attrs:{to:"/"}},[e("img",{attrs:{src:t.logo,alt:""}})]),e("div",{staticClass:"right-wrapper"},[e("div",{staticClass:"menu-list"},[t._l(t.menuList,function(i){return t._isHttpUrl(i.path)?e("a",{attrs:{href:i.path,target:"_blank"}},[t._v(t._s(i.text))]):t._e()}),t._l(t.menuList,function(i){return t._isHttpUrl(i.path)?t._e():e("router-link",{attrs:{to:{path:i.path}}},[t._v(t._s(i.text)+"\n          ")])}),t.isLogin?t._e():e("el-button",{attrs:{type:"warning"},on:{click:t.openLoginDialog}},[t._v("登录")]),t.isLogin?e("el-button",{attrs:{type:"warning"},on:{click:t.logOut}},[t._v("退出")]):t._e()],2)])],1)]),t.isMobilePlatform?e("div",{staticClass:"mobile-common-nav"},[e("v-header",{attrs:{data:t.headData},on:{rightIconClick:t.openService,leftIconClick:t.openMenu}})],1):t._e(),e("v-menu",{attrs:{isShow:t.isShow,menuList:t.menuList},on:{closeMenu:t.closeMenu}})],1)},[],!1,null,"4ff20f6d",null));h.options.__file="common-nav.vue",i.a=h.exports},"896c":function(t,i,e){t.exports=e.p+"static/img/rule.7fa0d3b5.png"},"8a24":function(t,i,e){"use strict";e.r(i);var s=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"rule"},[s("img",{attrs:{src:e("896c"),alt:""}}),s("p",[t._v("1.此活动赠送彩金兑换代码并非实物，领取成功的玩家需要转入指定游戏厅完成彩金一倍流水方可提款使用。")]),s("p",[t._v("2.此活动只计算玩家"),s("b",[t._v("2018年1月1日0点至2018年12月31日23点59分59秒")]),t._v("的存款数据为依据。")]),s("p",[t._v("3.此活动每位玩家只限申请一次，若已申请A奖励则无法再次领取B奖励。")]),s("p",[t._v("4.此项优惠活动只针对娱乐性质的会员,如有发现同IP多帐号申请活动，尊宝娱乐城将有权不予以派发！")]),s("p",[t._v("5.尊宝娱乐享有此优惠的最终解释权及修改权，其网站规则条款适用于此优惠！")])])}],n=(e("55dd"),e("cebc")),o=e("72ef"),c=e("c400"),a=e("d32e"),r=e("2f62"),l=e("365c"),u=e("8b55");e("b311");var f={data:function(){return{lists:[{countTotal:"登录后查看",id:0,msg:"10000",type:"0",redCouponMoney:"58",title:"春联红包"},{countTotal:"登录后查看",id:0,msg:"50000",type:"0",redCouponMoney:"188",title:"礼盒红包"},{countTotal:"登录后查看",id:0,msg:"100000",type:"0",redCouponMoney:"588",title:"礼炮红包"},{countTotal:"登录后查看",id:0,msg:"500000",type:"0",redCouponMoney:"1088",title:"土豪红包"}],isShowDialog:!1,giftID:{giftID:""},prize:"",coupon:"",isMobile:Object(u.h)(),month:(new Date).getMonth()+1,strDate:(new Date).getDate()}},computed:Object(n.a)({},Object(r.b)(["isLogin"])),created:function(){this._checkstatus()},methods:{_checkstatus:function(){var t=this;this.isLogin&&(1==this.strDate?Object(l.L)().then(function(i){var e;t.ERR_OK===i.code||t.ERR_OK_OTHER===i.code?t.lists=i.data.sort((e="redCouponMoney",function(t,i){var s=t[e],n=i[e];return s-n})):(t.lists[0].countTotal="活动暂未开启",t.lists[1].countTotal="活动暂未开启",t.lists[2].countTotal="活动暂未开启",t.lists[3].countTotal="活动暂未开启")}):(this.lists[0].countTotal="活动已结束",this.lists[1].countTotal="活动已结束",this.lists[2].countTotal="活动已结束",this.lists[3].countTotal="活动已结束"))},takeMoney:function(t){var i=this;if(!this.isLogin)return this.$refs.nav.openLoginDialog("isShowLoginDialog"),!1;switch(t.type){case"0":this.$message({type:"success",message:"活动未开启或尚未符合活动要求，无法领取！"});break;case"1":this.giftID.giftID=t.id,Object(l.h)(this.giftID).then(function(e){i.ERR_OK===e.code||i.ERR_OK_OTHER===e.code?(i.isShowDialog=!0,i.coupon=e.coupon,i.prize=t.title):i.$message({type:"warning",message:e.message})});break;case"2":this.$message({type:"success",message:"您已领取"})}},close:function(){this.isShowDialog=!1,this._checkstatus()}},watch:{isLogin:function(t){t&&this._checkstatus()}},components:{commonNav:o.a,commonFooter:c.a,codeAlert:a.a}},p=(e("9da0"),e("a04e"),e("2877")),h=Object(p.a)(f,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"es"},[e("common-nav",{ref:"nav"}),e("div",{staticClass:"main bg-wap"},[e("div",{staticClass:"content"},[e("div",{staticClass:"sec1"},[e("div",{staticClass:"wrap"},t._l(t.lists,function(i){return e("div",{staticClass:"item",on:{click:function(e){t.takeMoney(i)}}},[e("div",{staticClass:"i-top"},[t._v("2018年存满"),e("b",[t._v(t._s(Math.round(i.msg)))]),t._v("元")]),e("div",{staticClass:"i-tit"},[t._v(t._s(i.title)+"优惠券"),e("b",[t._v(t._s(Math.round(i.redCouponMoney)))]),t._v("元")]),e("div",{staticClass:"i-num"},[t._v(t._s(i.countTotal)+" 位玩家已领取")])])}))]),t._m(0)]),e("code-alert",{attrs:{isShowDialog:t.isShowDialog,coupon:t.coupon,prize:t.prize},on:{close:t.close}})],1)],1)},s,!1,null,"c6857a48",null);h.options.__file="index.vue",i.default=h.exports},"8a4f":function(t,i,e){t.exports=e.p+"static/img/a-click.9c4cc7ae.png"},"9be7":function(t,i,e){},"9da0":function(t,i,e){"use strict";var s=e("0cf7");e.n(s).a},a04e:function(t,i,e){"use strict";var s=e("9be7");e.n(s).a},c400:function(t,i,e){"use strict";var s={data:function(){return{}},computed:{},created:function(){},methods:{},watch:{},components:{}},n=(e("3888"),e("2877")),o=Object(n.a)(s,function(){return this.$createElement,this._self._c,this._m(0)},[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"common-footer"},[i("p",[this._v("尊宝国际持有菲律宾 PAGCOR 合法博彩执照")])])}],!1,null,"1343d1b9",null);o.options.__file="common-footer.vue",i.a=o.exports},d32e:function(t,i,e){"use strict";var s=e("b311"),n=e.n(s),o={props:{isShowDialog:Boolean,prize:String,coupon:String},methods:{cls:function(){this.$emit("close")},copy:function(){var t=this,i=new n.a(".tag-read");i.on("success",function(e){t.flag=!0,t.$message({type:"success",message:"复制成功"}),i.destroy()}),i.on("error",function(t){i.destroy()})},exchange:function(){this.flag?this.isMobile?this.$router.push("/mobile/user/discounts"):this.$router.push("/user/discounts"):this.$message({type:"info",message:"请先复制代码并去账户中心进行兑换"})}}},c=(e("0b56"),e("2877")),a=Object(c.a)(o,function(){var t=this,i=t.$createElement,s=t._self._c||i;return t.isShowDialog?s("div",{staticClass:"obt-wrap"},[s("div",{staticClass:"obt"},[s("div",{staticClass:"cls",on:{click:t.cls}}),s("p",[t._v("恭喜获得 "+t._s(t.prize)+"，请复制代码兑换")]),s("div",{staticClass:"copy"},[s("input",{attrs:{readonly:"",id:"tg-link"},domProps:{value:t.coupon}}),s("span",{staticClass:"tag-read",attrs:{"data-clipboard-text":t.coupon},on:{click:t.copy}},[t._v("复制")])]),s("a",{attrs:{href:"javascript:;",id:"links",target:"_blank"},on:{click:t.exchange}},[s("img",{attrs:{src:e("8a4f"),alt:""}})])])]):t._e()},[],!1,null,"f0f7c782",null);a.options.__file="codeAlert.vue",i.a=a.exports},d6b8:function(t,i,e){t.exports=e.p+"static/img/newlogo.9c12c89a.png"},d9c2:function(t,i,e){},eb9c:function(t,i,e){},fdfc:function(t,i,e){"use strict";var s=e("255e");e.n(s).a}}]);