(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-544b08f0"],{"141f":function(t,e,n){},"1d57":function(t,e,n){},2299:function(t,e,n){"use strict";var r=n("141f");n.n(r).a},"452b":function(t,e,n){"use strict";var r={data:function(){return{}},computed:{},created:function(){},methods:{},watch:{},components:{}},a=(n("7eaf"),n("2877")),i=Object(a.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"tab-wrapper"},[t._t("tab-wrapper")],2),n("div",{staticClass:"right-wrapper"},[t._t("right-wrapper")],2)])},[],!1,null,"15cd9485",null);i.options.__file="wrapper.vue",e.a=i.exports},"7eaf":function(t,e,n){"use strict";var r=n("cdce");n.n(r).a},ab82:function(t,e,n){"use strict";var r=n("1d57");n.n(r).a},b430:function(t,e,n){"use strict";n.r(e),n("6762"),n("2fdb");var r=n("cebc"),a=(n("e6e3"),n("9f02"),n("c263")),i=n.n(a),o=n("452b"),c=n("cc49"),s=n("2f62"),u=n("f6b5");n.n(u).a.use(i.a);var l="/agent-manage/",p={data:function(){return{rootRouter:"",menuList:[{text:"代理中心",router:l+"agent-center",icon:"zhaoshangdaili"},{text:"日结佣金",router:l+"day-commission",icon:"jinbi"},{text:"会员账务",router:l+"membership",icon:"qingdan"},{text:"额度记录",router:l+"quota",icon:"declare"},{text:"下线会员",router:l+"offline-members",icon:"zhaoshangdaili"},{text:"申请提款",router:l+"withdrawal",icon:"icon-test"},{text:"账户设置",router:l+"account-settings",icon:"shezhi"},{text:"站内信",router:l+"letter",icon:"youxiang"}]}},computed:Object(r.a)({},Object(s.b)(["isAgent"])),created:function(){this.isAgent||this.$router.push("/index")},methods:{},watch:{isAgent:function(t){!t&&window.location.href.includes("/agent-manage")&&this.$router.push("/index")}},components:{VWrapper:o.a,TabMenuRouter:c.a}},f=(n("ab82"),n("2877")),d=Object(f.a)(p,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"agent-manage-wrapper wrapper"},[e("div",{staticClass:"banner"}),e("v-wrapper",[e("div",{attrs:{slot:"tab-wrapper"},slot:"tab-wrapper"},[e("tab-menu-router",{attrs:{menuList:this.menuList}})],1),e("div",{attrs:{slot:"right-wrapper"},slot:"right-wrapper"},[e("div",{staticClass:"content-wrapper"},[e("keep-alive",[e("router-view")],1)],1)])])],1)},[],!1,null,"fea39d1e",null);d.options.__file="index.vue",e.default=d.exports},cc49:function(t,e,n){"use strict";var r={data:function(){return{}},props:{menuList:{type:Array,default:[]}},methods:{iconClass:function(t){return t.icon?"iconfont icon-".concat(t.icon):""},styleObj:function(t){if(t)return{background:t,color:"#fff"}}}},a=(n("2299"),n("2877")),i=Object(a.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab"},t._l(t.menuList,function(e){return n("router-link",{style:t.styleObj(e.backgroundColor),attrs:{to:{path:e.router}}},[n("i",{class:t.iconClass(e)}),t._v("\n    "+t._s(e.text)+"\n  ")])}))},[],!1,null,"b1d6c836",null);i.options.__file="tab-menu-router.vue",e.a=i.exports},cdce:function(t,e,n){}}]);