(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-75e835ac"],{"0751":function(t,a,e){"use strict";e.r(a);var s=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{attrs:{href:"/mobile/slots/ptasia?platform=REAL"}},[s("img",{attrs:{src:e("e74b"),alt:""}}),s("span",[t._v("真人")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{attrs:{href:"/mobile/slots/ptasia?platform=REAL"}},[s("img",{attrs:{src:e("e73d"),alt:""}}),s("span",[t._v("体育")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{attrs:{href:"/mobile/slots/ptasia?platform=REAL"}},[s("img",{attrs:{src:e("6bca"),alt:""}}),s("span",[t._v("电竞")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{attrs:{href:"/mobile/slots/ptasia?platform=FISH"}},[s("img",{attrs:{src:e("5449"),alt:""}}),s("span",[t._v("捕鱼")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{attrs:{href:"/mobile/slots/ptasia?platform=CARD"}},[s("img",{attrs:{src:e("0ab8"),alt:""}}),s("span",[t._v("棋牌")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{attrs:{href:"/mobile/slots/ptasia?platform=LOTTERY"}},[s("img",{attrs:{src:e("2fad"),alt:""}}),s("span",[t._v("彩票")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"new-bot"},[s("p",[t._v("尊宝国际持菲律宾 "),s("img",{attrs:{src:e("e3bc"),alt:""}}),t._v(" 合法牌照")]),s("p",[t._v("2015-2019版权所有")]),s("p",[t._v("尊宝国际侵权必究")])])}],n=e("cebc"),i=(e("365c"),e("f535")),o=e("b1d9"),r=e("957b"),c=e("8e32"),l=e("1dd9"),m=e("5419"),d=e("510f"),u=e("2f62"),p=e("8b55"),f={mixins:[d.P],data:function(){return{headData:{title:"",leftIcon:"menu",rightIcon:"kefu2",logo:e("d6b8"),download:!0},bannerList:[],isShowIndexAlert:!1}},computed:Object(n.a)({},Object(u.b)(["isLogin"])),created:function(){this._getBannerItems()},mounted:function(){this.isShowIndexAlert=!0},methods:{closeDownload:function(){this.headData.download=!1},openService:function(){window.open("https://chatai.zb251.com/chat/chatClient/chatbox.jsp?companyID=9043&configID=17&live800_domain=https://".concat(window.location.host,"&chatfrom=wap"))},_getBannerItems:function(){var t=this,a="/api/personal/carouselMapConfig/list";Object(p.a)(a,"POST",{position:"1",displaySide:"2"}).then(function(a){a.code===t.ERR_OK||t.ERR_OK_OTHER===a.code?a.data.length&&(t.bannerList=a.data.map(function(t){return t.src=t.imageUrl,t.href=t.jumpLink,t})):t.$message({type:"warning",message:a.message})})},close:function(){this.isShowIndexAlert=!1}},components:{VMenu:i.a,notice:o.a,btnGroup:r.a,indexGame:c.a,banner:l.a,idxAlert:m.a}},v=(e("849b"),e("2877")),h=Object(v.a)(f,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("v-header",{attrs:{data:t.headData},on:{closeDownload:t.closeDownload,rightIconClick:t.openService,leftIconClick:t.openMenu}}),s("div",{staticClass:"index-main",class:{paddingTop:t.headData.download}},[s("banner",{attrs:{bannerList:t.bannerList}}),s("div",{staticClass:"new-top-navs"},[s("router-link",{attrs:{to:"/mobile/slots/ptasia"}},[s("img",{attrs:{src:e("6b91"),alt:""}}),s("span",[t._v("老虎机")])]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5)],1),s("notice"),s("index-game"),s("div",{staticClass:"section"},[s("div",{staticClass:"topic"},[s("p",[t._v("\n          限时优惠\n          "),s("router-link",{attrs:{to:"/mobile/activity"}},[t._v("\n            更多 >\n          ")])],1),s("div",{staticClass:"wrap"},[s("div",{staticClass:"list"},[s("div",{staticClass:"item"},[s("router-link",{attrs:{to:"/mobile/activity?query=ckms"}},[s("img",{attrs:{src:e("d45f"),alt:""}})])],1),s("div",{staticClass:"item"},[s("router-link",{attrs:{to:"/mobile/activity?query=shoucun"}},[s("img",{attrs:{src:e("ebe3"),alt:""}})])],1),s("div",{staticClass:"item"},[s("router-link",{attrs:{to:"/mobile/activity?query=sign"}},[s("img",{attrs:{src:e("f07e"),alt:""}})])],1)])])])]),s("div",{staticClass:"section"},[s("div",{staticClass:"topic"},[s("p",[t._v("\n           客户端下载\n           "),s("router-link",{attrs:{to:"/mobile/game-down"}},[t._v("\n             更多 >\n           ")])],1),s("router-link",{attrs:{to:"/mobile/game-down"}},[s("img",{attrs:{src:e("d394"),alt:""}})])],1)]),t._m(6)],1),s("v-menu",{attrs:{isShow:t.isShow},on:{closeMenu:t.closeMenu}}),s("idx-alert",{attrs:{isShowIndexAlert:t.isShowIndexAlert},on:{close:t.close}})],1)},s,!1,null,"919ed002",null);h.options.__file="index1.vue",a.default=h.exports},"237a":function(t,a,e){},"849b":function(t,a,e){"use strict";var s=e("237a");e.n(s).a}}]);