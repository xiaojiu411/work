(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2e08ea69"],{"0df1":function(t,e,n){"use strict";n.r(e);var a=n("365c"),i={data:function(){return{headData:{title:"公告",leftIcon:"arrowr"},currentIdx:-1,pagination:{records:[],pageIndex:1,total:0,pageSize:5}}},computed:{},created:function(){this._getNotice()},methods:{back:function(){this.$router.go(-1)},toggleSlider:function(t){this.currentIdx!==t?this.currentIdx=t:this.currentIdx=-1},handleCurrentChange:function(t){this.pagination.pageIndex=t,this._getNotice()},_getNotice:function(){var t=this;Object(a.zb)({pageIndex:this.pagination.pageIndex,pageSize:this.pagination.pageSize}).then(function(e){t.ERR_OK===e.code&&(t.pagination=e.data)})}},watch:{},components:{}},c=(n("6fc2"),n("2877")),o=Object(c.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notice"},[n("v-header",{attrs:{data:t.headData},on:{leftIconClick:t.back}}),n("ul",{staticClass:"news-list"},t._l(t.pagination.records,function(e,a){return n("li",{class:{active:a===t.currentIdx},on:{click:function(e){t.toggleSlider(a)}}},[n("div",{staticClass:"tit"},[n("p",[t._v("\n          "+t._s(e.title)+"\n        ")]),n("p",[n("span",{staticClass:"opacity"},[t._v(t._s(e.time||(new Date).format()))]),n("i",{staticClass:"iconfont icon-arrow"})])]),n("transition",{attrs:{name:"slide-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:a===t.currentIdx,expression:"idx === currentIdx"}],ref:"",refInFor:!0,staticClass:"sub"},[t._v("\n          "+t._s(e.content)+"\n        ")])])],1)})),n("el-pagination",{staticClass:"center",attrs:{small:"",background:"","current-page":t.pagination.pageIndex,"page-size":t.pagination.pageSize,"pager-count":5,layout:"prev, pager, next",total:t.pagination.total},on:{"current-change":t.handleCurrentChange}})],1)},[],!1,null,"553459ea",null);o.options.__file="notice-page.vue",e.default=o.exports},4200:function(t,e,n){},"6fc2":function(t,e,n){"use strict";var a=n("4200");n.n(a).a}}]);