(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6a8903de"],{"08a3":function(t,i,n){"use strict";n.r(i);var e=[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"mob-p"},[n("p",{staticClass:"f-20"},[t._v("即日起，凡是使用手机/网银转账、支付秒存/扫码支付的用户，当日内达到对应的存款额度,即可领取彩金！")]),n("div",{staticClass:"t-bar"},[n("div",{staticClass:"tab-l"},[n("h4",[t._v("秒存存款 （手机/网银/支付宝银行账户)")]),n("table",{staticClass:"table"},[n("tr",{staticClass:"tit"},[n("th",[t._v("金额")]),n("th",[t._v("彩金")]),n("th",[t._v("流水倍数")])]),n("tr",[n("td",[t._v("满500元")]),n("td",[t._v("8")]),n("td",{attrs:{rowspan:"4"}},[t._v("5倍")])]),n("tr",[n("td",[t._v("满3000元")]),n("td",[t._v("58")])]),n("tr",[n("td",[t._v("满10000元")]),n("td",[t._v("108")])]),n("tr",[n("td",[t._v("满50000元")]),n("td",[t._v("388")])])])]),n("div",{staticClass:"tab-r"},[n("h4",[t._v("扫码存款（支付宝扫码）")]),n("table",{staticClass:"table"},[n("tr",{staticClass:"tit"},[n("th",[t._v("金额")]),n("th",[t._v("彩金")]),n("th",[t._v("流水倍数")])]),n("tr",[n("td",[t._v("满300元")]),n("td",[t._v("10")]),n("td",{attrs:{rowspan:"4"}},[t._v("3倍")])]),n("tr",[n("td",[t._v("满1000元")]),n("td",[t._v("38")])]),n("tr",[n("td",[t._v("满3000元")]),n("td",[t._v("88")])]),n("tr",[n("td",[t._v("满5000元")]),n("td",[t._v("108")])])])])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"rule"},[e("div",{staticClass:"c"},[e("img",{staticClass:"topic t",attrs:{src:n("b7f2"),alt:""}}),e("p",[t._v("1.满足条件的玩家需联系24小时在线客服申请彩,客服会在审核之后派发到您的站内信里。")]),e("p",[t._v("2.秒存和扫码福利每日只限申请一次，不同存款方式不可叠加总额，只计算单一存款方式的累计存款金额。")]),e("p",[t._v("3.领取之彩金只限游戏于PT国际/PT/SLOT/CQ9/PG/YGG平台。")]),e("p",[t._v("4.尊宝国际保留对本次活动的最终解释权和修订权。")])])])}],s=n("cebc"),o=n("72ef"),a=n("c400"),c=n("2f62"),r=(n("365c"),n("8b55")),l=(n("b311"),{data:function(){return{isMobile:Object(r.h)()}},computed:Object(s.a)({},Object(c.b)(["isLogin"])),created:function(){},methods:{links:function(){if(!this.isLogin)return this.$refs.nav.openLoginDialog("isShowLoginDialog"),!1;this.$router.push("/user/deposit")}},watch:{isLogin:function(t){}},components:{commonNav:o.a,commonFooter:a.a}}),u=(n("a64d"),n("2877")),d=Object(u.a)(l,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{},[e("common-nav",{ref:"nav"}),e("div",{staticClass:"main bg-wap"},[e("div",{staticClass:"content"},[t.isMobile?e("div",[e("router-link",{attrs:{to:"/mobile/user/deposit"}},[e("img",{attrs:{src:n("f6a2"),alt:""}})])],1):t._e(),t.isMobile?t._e():e("div",{staticClass:"d-link"},[e("a",{attrs:{href:"javascript:;"},on:{click:t.links}},[e("img",{attrs:{src:n("5db5"),alt:""}})]),e("a",{attrs:{href:"javascript:;"},on:{click:t.links}},[e("img",{attrs:{src:n("8296"),alt:""}})])]),t._m(0),t._m(1)])])],1)},e,!1,null,"23111556",null);d.options.__file="index.vue",i.default=d.exports},"255e":function(t,i,n){},"2e93":function(t,i,n){"use strict";var e=n("d9c2");n.n(e).a},3888:function(t,i,n){"use strict";var e=n("3bbe");n.n(e).a},"3bbe":function(t,i,n){},"5db5":function(t,i,n){t.exports=n.p+"static/img/fast-d.f69215a9.png"},"72ef":function(t,i,n){"use strict";var e=n("cebc"),s=(n("6762"),n("2fdb"),n("2f62")),o=n("510f"),a={mixins:[o.I,o.J,o.L],data:function(){return{ownMenuList:[{text:"登录账户",id:"login",show:"logOut"},{text:"注册账户",id:"register",show:"logOut"},{text:"安全退出",id:"logout",show:"isLogin"}]}},props:{isShow:{type:Boolean,default:!1},menuList:{type:Array,default:[]}},computed:Object(e.a)({filterList:function(){return this.isLogin?this.ownMenuList.concat(this.menuList).filter(function(t){return t.show.includes("isLogin")}):this.ownMenuList.concat(this.menuList).filter(function(t){return t.show.includes("logOut")})}},Object(s.b)(["isLogin"])),created:function(){},methods:{selectItem:function(t){this.closeMenu(),"logout"!==t.id?"login"!==t.id?"register"!==t.id?this._isHttpUrl(t.path)?window.location.href=t.path:this.$router.push(t.path):this.$router.push("/mobile/newregister"):this.openLoginDialog():this.logOut()},closeMenu:function(){this.$emit("closeMenu")},getIcon:function(t){return"iconfont icon-".concat(t.icon)},_isHttpUrl:function(t){return/^http/.test(t)}}},c=(n("fdfc"),n("2877")),r=Object(c.a)(a,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[t.isShow?n("div",{staticClass:"mask",on:{click:t.closeMenu}}):t._e(),n("transition",{attrs:{name:"slider-left"}},[t.isShow?n("div",{staticClass:"menu-wrapper"},[n("i",{staticClass:"iconfont icon-2guanbi icon-close",on:{click:t.closeMenu}}),n("div",{staticClass:"header"},[t.isLogin?n("div",[n("img",{attrs:{src:t.levelImage,alt:""}}),n("p",[t._v("会员账号："+t._s(t.userInfo.loginname))]),n("p",[t._v("会员等级："+t._s(t._f("level")(t.userInfo.level)))]),n("p",[t._v("会员余额："+t._s(t.userInfo.credit))])]):t._e(),t.isLogin?t._e():n("div",[n("p",{staticStyle:{padding:"20px 0"}},[t._v("尊敬的用户，您好，请先登录")])])]),n("div",{staticClass:"main"},[n("ul",t._l(t.filterList,function(i){return n("li",{on:{click:function(n){t.selectItem(i)}}},[i.icon?n("i",{class:t.getIcon(i)}):t._e(),n("span",[t._v(t._s(i.text))])])}))])]):t._e()])],1)},[],!1,null,"f7929e36",null);r.options.__file="menu.vue";var l=r.exports,u=n("8b55"),d=Object(u.h)()?"/mobile":"",v={mixins:[o.J,o.L,o.P],data:function(){return{headData:{title:"",leftIcon:"menu",rightIcon:"kefu2",logo:n("d6b8")},logo:n("d6b8"),menuList:[{text:"尊宝电影院",path:d+"/activity/movie",show:"isLogin&logOut"}],isMobilePlatform:Object(u.h)()}},computed:Object(e.a)({},Object(s.b)(["isLogin"])),created:function(){},methods:{_isHttpUrl:function(t){return/^http/.test(t)},openService:function(){window.open("https://chatai.zb251.com/chat/chatClient/chatbox.jsp?companyID=9043&configID=17&live800_domain=https://".concat(window.location.host,"&chatfrom=wap"))}},watch:{},components:{VMenu:l}},m=(n("2e93"),Object(c.a)(v,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[t.isMobilePlatform?t._e():n("div",{staticClass:"common-nav"},[n("div",{staticClass:"wrapper"},[n("router-link",{staticClass:"logo",attrs:{to:"/"}},[n("img",{attrs:{src:t.logo,alt:""}})]),n("div",{staticClass:"right-wrapper"},[n("div",{staticClass:"menu-list"},[t._l(t.menuList,function(i){return t._isHttpUrl(i.path)?n("a",{attrs:{href:i.path,target:"_blank"}},[t._v(t._s(i.text))]):t._e()}),t._l(t.menuList,function(i){return t._isHttpUrl(i.path)?t._e():n("router-link",{attrs:{to:{path:i.path}}},[t._v(t._s(i.text)+"\n          ")])}),t.isLogin?t._e():n("el-button",{attrs:{type:"warning"},on:{click:t.openLoginDialog}},[t._v("登录")]),t.isLogin?n("el-button",{attrs:{type:"warning"},on:{click:t.logOut}},[t._v("退出")]):t._e()],2)])],1)]),t.isMobilePlatform?n("div",{staticClass:"mobile-common-nav"},[n("v-header",{attrs:{data:t.headData},on:{rightIconClick:t.openService,leftIconClick:t.openMenu}})],1):t._e(),n("v-menu",{attrs:{isShow:t.isShow,menuList:t.menuList},on:{closeMenu:t.closeMenu}})],1)},[],!1,null,"4ff20f6d",null));m.options.__file="common-nav.vue",i.a=m.exports},8296:function(t,i,n){t.exports=n.p+"static/img/code-d.e16c64e1.png"},8579:function(t,i,n){},a64d:function(t,i,n){"use strict";var e=n("8579");n.n(e).a},b7f2:function(t,i){t.exports="data:image/png;base64,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"},c400:function(t,i,n){"use strict";var e={data:function(){return{}},computed:{},created:function(){},methods:{},watch:{},components:{}},s=(n("3888"),n("2877")),o=Object(s.a)(e,function(){return this.$createElement,this._self._c,this._m(0)},[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"common-footer"},[i("p",[this._v("尊宝国际持有菲律宾 PAGCOR 合法博彩执照")])])}],!1,null,"1343d1b9",null);o.options.__file="common-footer.vue",i.a=o.exports},d6b8:function(t,i,n){t.exports=n.p+"static/img/newlogo.9c12c89a.png"},d9c2:function(t,i,n){},f6a2:function(t,i,n){t.exports=n.p+"static/img/bgm.373a08bf.jpg"},fdfc:function(t,i,n){"use strict";var e=n("255e");n.n(e).a}}]);