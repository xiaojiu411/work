(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5664e8b7"],{"07b7":function(t,e,a){},"11ed":function(t,e,a){"use strict";var i=a("b5eb");a.n(i).a},"12aa":function(t,e,a){"use strict";var i=a("f60e");a.n(i).a},"294e":function(t,e,a){"use strict";a("c5f6");var i={data:function(){return{}},props:{list:{type:Array,default:[]},currentIdx:{type:Number,default:0},width:{type:String,default:"50%"}},computed:{styleObj:function(){return{width:this.width}}},created:function(){},methods:{selectTabItem:function(t,e){this.$emit("selectTabItem",t,e)}},watch:{},components:{}},s=(a("12aa"),a("2877")),n=Object(s.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab-card"},t._l(t.list,function(e,i){return a("span",{class:{active:i===t.currentIdx},style:t.styleObj,on:{click:function(a){t.selectTabItem(i,e)}}},[t._v(t._s(e.text))])}))},[],!1,null,"7086d9a0",null);n.options.__file="tab-card.vue",e.a=n.exports},3851:function(t,e,a){"use strict";var i=a("a640");a.n(i).a},"532a":function(t,e,a){},"6f3d":function(t,e,a){"use strict";var i=a("da7f");a.n(i).a},"71f5":function(t,e,a){"use strict";a("c5f6");var i={data:function(){return{}},props:{list:{type:Array,default:[]},currentIdx:{type:Number,default:0},primary:{type:String,default:""}},computed:{},created:function(){},methods:{select:function(t,e){this.$emit("selectTabItem",t,e)}},watch:{},components:{}},s=(a("8d83"),a("2877")),n=Object(s.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab-border"},t._l(t.list,function(e,i){return a("span",{class:{active:i===t.currentIdx,primary:t.primary},on:{click:function(a){t.select(i,e)}}},[t._v(t._s(e.text))])}))},[],!1,null,"4c20e01c",null);n.options.__file="tab-border.vue",e.a=n.exports},"73a7":function(t,e,a){"use strict";a("cadf"),a("551c"),a("097d");var i=a("817f"),s={mixins:[a("510f").A],data:function(){return{dialogWidth:.9*window.innerWidth}},components:{VDialog:i.a}},n=(a("3851"),a("2877")),c=Object(n.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"game-list"},t._l(t.filterList,function(e){return a("div",{staticClass:"item"},[a("div",{staticClass:"pic"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imageUrl,expression:"item.imageUrl"}],attrs:{alt:""}})]),a("div",{staticClass:"title"},[a("p",{staticClass:"zh-name"},[t._v(t._s(e.gameCName))]),a("p",{staticClass:"favorite"},["N"===e.collectFlag?a("span",{on:{click:function(a){t.addGameCollect(e)}}},[a("i",{staticClass:"iconfont icon-shoucang1"})]):t._e(),"Y"===e.collectFlag?a("span",{on:{click:function(a){t.deleteGameCollect(e)}}},[a("i",{staticClass:"iconfont icon-shoucang1 active"})]):t._e()])]),a("div",{staticClass:"bottom"},["1"!==e.gameStatus?a("span",{on:{click:function(a){t.playGameFun(e,0)}}},[t._v("进入游戏")]):t._e(),"2"!==e.gameStatus?a("span",{on:{click:function(a){t.playGameFun(e,1)}}},[t._v("试玩游戏")]):t._e()])])})),a("v-dialog",{attrs:{width:t.dialogWidth,isShow:t.isShowBtcGameDialog},on:{"on-close":t.closeDialog}},[a("div",{staticClass:"points-transform"},[a("div",{staticClass:"dialog-header"},[a("h3",[t._v("分数转换器")])]),a("div",{staticClass:"dialog-body center"},[a("div",{staticClass:"points"},[a("p",{staticClass:"balance"},[t._v(t._s(t.btcBalance)+" "+t._s(t.country)+" = "+t._s((1e3*t.btcBalance).toFixed(2)||0)+" 分")]),a("p",{staticStyle:{opacity:".8"}},[t._v("1BTC / 1ETH = 1000分")])]),a("div",[a("mt-button",{staticClass:"small-btn",attrs:{type:"danger",size:"small"},on:{click:function(e){t.playGameFun(t.currentItem,t.playMode)}}},[t._v("进入游戏\n          ")])],1)])])])],1)},[],!1,null,"968b6044",null);c.options.__file="game-list.vue",e.a=c.exports},"817f":function(t,e,a){"use strict";a("c5f6");var i={props:{isShow:{type:Boolean,default:!1},width:{type:Number,default:600},height:{type:Number,default:500}},data:function(){return{}},computed:{styleObj:function(){return{width:"".concat(this.width,"px"),"max-height":"".concat(this.height,"px"),margin:"-".concat(this.height/2,"px 0 0 -").concat(this.width/2,"px")}}},methods:{closeMyself:function(){this.$emit("on-close")}}},s=(a("6f3d"),a("2877")),n=Object(s.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"dialog-wrap"},[t.isShow?a("div",{staticClass:"dialog-cover",on:{click:t.closeMyself}}):t._e(),a("transition",{attrs:{name:"scale"}},[t.isShow?a("div",{staticClass:"dialog-content",style:t.styleObj},[a("p",{staticClass:"dialog-close",on:{click:t.closeMyself}},[t._v("×")]),t._t("default",[t._v("empty")])],2):t._e()])],1)])},[],!1,null,"1ab10b28",null);n.options.__file="dialog.vue",e.a=n.exports},8710:function(t,e,a){"use strict";var i=a("07b7");a.n(i).a},"8d83":function(t,e,a){"use strict";var i=a("532a");a.n(i).a},"9e8c":function(t,e,a){"use strict";var i=a("8b55"),s={data:function(){return{query:""}},props:{width:{type:String,default:"196px"}},computed:{styleObj:function(){return{width:this.width}}},created:function(){},methods:{search:function(){this.$emit("search",this.query)}},watch:{query:function(t){var e=this;Object(i.b)(function(){e.$emit("search",t)},200)()}},components:{}},n=(a("8710"),a("2877")),c=Object(n.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-box",style:t.styleObj},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text",placeholder:"请输入游戏名称"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),a("span",{staticClass:"search-btn",on:{click:t.search}},[a("i",{staticClass:"iconfont icon-sousuo"})])])},[],!1,null,"3b9cb5b3",null);c.options.__file="search-input.vue",e.a=c.exports},a640:function(t,e,a){},b1f2:function(t,e,a){"use strict";var i=a("e3ff");a.n(i).a},b5eb:function(t,e,a){},da7f:function(t,e,a){},df3a:function(t,e,a){"use strict";a("6762"),a("2fdb");var i=a("cebc"),s=(a("c5f6"),a("365c")),n=a("510f"),c=a("2f62"),o=a("294e"),l={mixins:[n.V,n.z],props:{isShow:{type:Boolean,default:!1},currentIdx:{type:Number,default:0},isShowTitleTab:{type:Boolean,default:!0},platformList:{type:Array,default:[]}},data:function(){return{bbinLogin:s.i,realList:[{text:"AG旗舰",api:s.V,reqData:{type:"h5",url:window.location.protocol+"//"+document.domain}},{text:"EBET",api:s.qb},{text:"AG真人",api:s.W},{text:"MG真人",api:s.Z},{text:"BBIN真人",api:s.i,reqData:{gameKind:"live",mode:"h5",gameCode:""}},{text:"VR彩票",api:s.Kc}],fishList:[{text:"AG捕鱼",api:s.U},{text:"千炮捕鱼",api:s.Vb,reqData:{gameCode:1051}},{text:"761捕鱼",api:s.o,reqData:{gameCode:"jcby"}},{text:"DT棋牌",api:s.m,reqData:{gameCode:"dezhou520",playMode:0}},{text:"棋乐游",api:s.o,reqData:{gameCode:""}},{text:"开元棋牌",api:s.Ob,reqData:{gameCode:""}}],sportsList:[{text:"沙巴体育",api:s.tc},{text:"IM体育",api:s.Mb},{text:"泛亚电竞",api:s.M}],list:[{text:"老虎机"},{text:"真人&彩票"},{text:"捕鱼&棋牌"},{text:"体育平台"}]}},computed:Object(i.a)({platform:function(){return window.location.href.includes("isFromApp")?"isFromApp":""}},Object(c.b)(["isLogin"])),created:function(){},methods:{closeMenu:function(){this.$emit("closeMenu")},selectTabItem:function(t){this.$emit("selectTabItem",t)}},components:{TabCard:o.a}},r=(a("11ed"),a("2877")),u=Object(r.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"game-menu-wrapper"},[t.isShow?a("div",{staticClass:"mask",on:{click:t.closeMenu}}):t._e(),a("transition",{attrs:{name:"slider-right"}},[t.isShow?a("div",{staticClass:"menu-wrapper"},[t.isShowTitleTab?a("div",{staticClass:"tab-header"},[a("tab-card",{attrs:{list:t.list,currentIdx:t.currentIdx},on:{selectTabItem:t.selectTabItem}})],1):t._e(),a("div",{staticClass:"tab-content"},[0===t.currentIdx?a("div",{staticClass:"filters"},[a("div",{staticClass:"common-type game-platform"},[a("h3",{staticClass:"tit red"},[t._v("游戏平台")]),a("div",{staticClass:"item-list"},[t._l(t.platformList,function(e){return a("router-link",{staticClass:"item",attrs:{to:{path:"/mobile/"+(t.isShowTitleTab?"slots":"btc-bet")+"/"+e.path+"?"+t.platform}}},[t._v("\n                "+t._s(e.text)+"\n              ")])}),t.isShowTitleTab?a("a",{staticClass:"item",attrs:{href:"javascript:;"},on:{click:function(e){t.playGame(t.bbinLogin,{gameKind:"game",gameCode:"",mode:"h5"})}}},[t._v("BBIN")]):t._e()],2)]),t._l(t.filterTypeList,function(e){return e.list[t.category]&&e.list[t.category].length?a("div",{staticClass:"common-type"},[a("h3",{staticClass:"tit red"},[t._v(t._s(e.title))]),a("div",{staticClass:"item-list"},t._l(e.list[t.category],function(i){return a("a",{staticClass:"item",class:{active:i.value===e.active},attrs:{href:"javascript:;"},on:{click:function(a){t.search(i,e)}}},[t._v("\n                "+t._s(i.name)+"\n              ")])}))]):t._e()})],2):t._e(),1===t.currentIdx?a("div",[a("div",{staticClass:"common-type"},[a("h3",{staticClass:"tit red"},[t._v("游戏平台")]),a("div",{staticClass:"item-list"},t._l(t.realList,function(e){return a("a",{staticClass:"item",attrs:{href:"javascript:;"},on:{click:function(a){t.playGame(e.api,e.reqData)}}},[t._v(t._s(e.text))])}))])]):t._e(),2===t.currentIdx?a("div",[a("div",{staticClass:"common-type"},[a("h3",{staticClass:"tit red"},[t._v("游戏平台")]),a("div",{staticClass:"item-list"},t._l(t.fishList,function(e){return a("a",{staticClass:"item",attrs:{href:"javascript:;"},on:{click:function(a){t.playGame(e.api,e.reqData)}}},[t._v(t._s(e.text))])}))])]):t._e(),3===t.currentIdx?a("div",[a("div",{staticClass:"common-type"},[a("h3",{staticClass:"tit red"},[t._v("游戏平台")]),a("div",{staticClass:"item-list"},t._l(t.sportsList,function(e){return a("a",{staticClass:"item",attrs:{href:"javascript:;"},on:{click:function(a){t.playGame(e.api,e.reqData)}}},[t._v(t._s(e.text))])}))])]):t._e()]),a("div",{staticClass:"bottom"},[a("span",{on:{click:t.reset}},[t._v("重置")]),a("span",{on:{click:t.closeMenu}},[t._v("完成")])])]):t._e()])],1)},[],!1,null,"4609b2c3",null);u.options.__file="game-menu.vue",e.a=u.exports},e3ff:function(t,e,a){},eaef:function(t,e,a){"use strict";var i={data:function(){return{}},props:{text:{type:String,default:"暂无搜索结果"}},computed:{},created:function(){},methods:{},watch:{},components:{}},s=(a("b1f2"),a("2877")),n=Object(s.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"no-result"},[a("div",[t._m(0),a("p",[t._v(t._s(t.text))])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("i",{staticClass:"iconfont icon-noresult"})])}],!1,null,"35e75a02",null);n.options.__file="no-result.vue",e.a=n.exports},f60e:function(t,e,a){}}]);