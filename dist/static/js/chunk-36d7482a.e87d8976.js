(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-36d7482a"],{3833:function(t,a,e){"use strict";var n=e("a1c4");e.n(n).a},"6f3d":function(t,a,e){"use strict";var n=e("da7f");e.n(n).a},7569:function(t,a,e){"use strict";var n=e("a4b9");e.n(n).a},"817f":function(t,a,e){"use strict";e("c5f6");var n={props:{isShow:{type:Boolean,default:!1},width:{type:Number,default:600},height:{type:Number,default:500}},data:function(){return{}},computed:{styleObj:function(){return{width:"".concat(this.width,"px"),"max-height":"".concat(this.height,"px"),margin:"-".concat(this.height/2,"px 0 0 -").concat(this.width/2,"px")}}},methods:{closeMyself:function(){this.$emit("on-close")}}},i=(e("6f3d"),e("2877")),s=Object(i.a)(n,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"dialog-wrap"},[t.isShow?e("div",{staticClass:"dialog-cover",on:{click:t.closeMyself}}):t._e(),e("transition",{attrs:{name:"scale"}},[t.isShow?e("div",{staticClass:"dialog-content",style:t.styleObj},[e("p",{staticClass:"dialog-close",on:{click:t.closeMyself}},[t._v("×")]),t._t("default",[t._v("empty")])],2):t._e()])],1)])},[],!1,null,"1ab10b28",null);s.options.__file="dialog.vue",a.a=s.exports},a1c4:function(t,a,e){},a4b9:function(t,a,e){},c8f1:function(t,a,e){"use strict";e.r(a);var n=e("510f"),i=e("f019"),s=e("817f"),o={mixins:[n.q,n.gb],data:function(){return{width:.9*window.innerWidth}},components:{userCenterPagination:i.a,VDialog:s.a}},r=(e("3833"),e("2877")),c=Object(r.a)(o,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"deposit-send"},[e("v-header",{attrs:{data:t.headData},on:{leftIconClick:t.back,rightIconClick:t.openService}}),e("div",{staticClass:"content"},[e("user-center-pagination",{attrs:{headList:t.headList,pagination:t.pagination,apiFun:t.apiFun,paginationMark:t.config.paginationMark.rescueMoney,number:999},on:{getLosePromo:t.openGetLosePromoDialog,cancelLosePromo:t.cancelLosePromo}}),t._m(0),e("v-dialog",{attrs:{height:400,width:t.width,"is-show":t.isShowGetLosePromoDialog},on:{"on-close":function(a){t.closeDialog("isShowGetLosePromoDialog")}}},[e("div",[e("div",{staticClass:"dialog-header"},[e("h3",[t._v("选择老虎机平台")])]),e("div",{staticClass:"dialog-body"},[e("p",{staticClass:"red"},[t._v("请选择您喜欢的老虎机平台, 确定后我们不接受任何重新转至其他老虎机平台的申请")]),e("div",{staticClass:"options"},t._l(t.options,function(a){return e("span",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.platform,expression:"platform"}],attrs:{type:"radio",id:a.value},domProps:{value:a.value,checked:t._q(t.platform,a.value)},on:{change:function(e){t.platform=a.value}}}),e("label",{attrs:{for:a.value}},[t._v(t._s(a.text))])])})),e("p",{staticClass:"center"},[e("mt-button",{attrs:{size:"small",type:"danger"},on:{click:t.optLosePromo}},[t._v("确定")])],1)])])])],1)],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tips"},[a("h3",[this._v("\n        温馨提示：\n      ")]),a("p",[this._v("\n        救援金有效时间为60天（从派发当天开始计算），规定时间内未领取会自动取消。\n      ")])])}],!1,null,"713a83c1",null);c.options.__file="rescue-money.vue",a.default=c.exports},da7f:function(t,a,e){},f019:function(t,a,e){"use strict";e("28a5"),e("ac6a"),e("6762"),e("2fdb"),e("6b54"),e("c5f6");var n=e("41ea"),i=e("8b55"),s={data:function(){return{config:n.a,isMobile:Object(i.h)(),dataList:[],statics1:0,statics2:0,activeUsers:0,subUsers:0,currentPageTotal:0,currentPageBetTotal:0}},props:{headList:{type:Array,default:[]},pagination:{type:Object,default:{}},apiFun:{type:Function,default:function(){}},number:{type:Number,default:0},typeList:{type:Object,default:{}},timer:{type:Array,default:[]},paginationMark:{type:String,default:""},platform:{type:String,default:""},loginname:{type:String,default:""},proposalType:{type:String,default:""},tail:{type:String,default:""}},computed:{totalAmount:function(){return"总计："+this.statics1},currentPageTotalCalc:function(){return"当页总计："+this.currentPageTotal.toString().$toFixed(2)},isShowCurrentPageTotal:function(){var t=this.paginationMark,a=n.a.paginationMark;return[a.searchPtCommissions,a.searchagprofit,a.searchsubuserProposal,a.withdraw,a.vipBackwater].includes(t)}},created:function(){this._getPagination()},methods:{calcWidth:function(t){var a="auto";return this.isMobile&&(a="bettotal"===t||"amount"===t?180:110),a},getLosePromo:function(t){this.$emit("getLosePromo",t)},cancelLosePromo:function(t){this.$emit("cancelLosePromo",t)},_getPagination:function(){var t=this,a=this._getParams(),e=this.paginationMark,i=n.a.paginationMark.offlineMembers;this.apiFun(a).then(function(a){t.ERR_OK===a.code?e===i?(a.data.activeUsers&&(t.activeUsers=a.data.activeUsers),a.data.subUsers&&(t.subUsers=a.data.subUsers),a.data.statics1&&(t.statics1=a.data.page.statics1),t.pagination.pageContents=t._sortData(a.data.page.pageContents),t.pagination.totalRecords=a.data.page.totalRecords):(a.data.statics1&&(t.statics1=a.data.statics1),a.data.statics2&&(t.statics2=a.data.statics2),t.pagination.pageContents=t._sortData(a.data.pageContents),t.pagination.totalRecords=a.data.totalRecords):(t.$message({type:"warning",message:a.message}),t.pagination.pageContents=[])})},_getParams:function(){var t={pageIndex:this.pagination.pageIndex,size:this.pagination.size};this.timer&&this.timer.length&&(t.starttime=this.timer[0].format("yyyy-MM-dd hh:mm:ss"),t.endtime=this.timer[1].format("yyyy-MM-dd hh:mm:ss"));var a=this.paginationMark,e=n.a.paginationMark,i=e.searchagprofit,s=e.searchsubuserProposal,o=e.withdraw,r=e.vipBackwater,c=e.vipPromo;return a===i&&(t.loginname=this.loginname,t.platform=this.platform),a!==s&&a!==o&&a!==r&&a!==c||(t.proposalType=this.proposalType,t.loginname=this.loginname),a!==o&&a!==r&&a!==c||(t.tail=this.tail),t},handleSizeChange:function(t){this.pagination.size=t,this._getPagination()},handleCurrentChange:function(t){this.pagination.pageIndex=t,this._getPagination()},refresh:function(){this.pagination.pageIndex=1,this.pagination.size=10,this.pagination.pageContents=[],this._getPagination()},_sortData:function(t){var a=this;t.forEach(function(t,a){t.order=a+1,t.tempCreateTime&&(t.tempCreateTime=t.tempCreateTime.split(" ")[0])});var e=this.paginationMark,i=n.a.paginationMark,s=i.rescueMoney,o=i.searchPtCommissions,r=i.offlineMembers,c=i.searchagprofit;return i.searchsubuserProposal,i.withdraw,this.number!==this.typeList.cashinRecords&&this.number!==this.typeList.withdrawRecords||t.forEach(function(t){t.flag=function(t){switch(t){case 0:return"待审核";case 1:return"已审核";case 2:return"已执行";case-1:return"已取消"}return t}(t.flag)}),this.number===this.typeList.depositOrderRecord&&t.forEach(function(t){t.status=function(t){switch(t){case 0:return"待处理";case 1:return"成功";case 2:return"废弃订单"}return t}(t.status)}),e===s&&t.forEach(function(t){t.status=function(t){switch(t){case"0":return"未领取";case"1":case"2":return"已领取";case"3":return"已取消"}return t}(t.status)}),e===o&&t.forEach(function(t){t.platform=function(t){switch(t){case"slotmachine":return"老虎机佣金";case"liveall":return"其他佣金"}return t}(t.id.platform),t.agent=t.id.agent,t.createdate=new Date(t.id.createdate).format(),t.flag=function(t){switch(t){case 0:return"未派发";case 1:return"已派发"}return t}(t.flag)}),e===r&&t.forEach(function(t){t.flag=function(t){switch(t){case 0:return"启用";case 1:return"禁用"}return t}(t.flag)}),this.currentPageTotal=0,this.currentPageBetTotal=0,t.forEach(function(t){e===c&&(a.currentPageBetTotal+=t.bettotal),a.currentPageTotal+=t.amount}),this.isShowCurrentPageTotal&&this.currentPageTotal&&(t.push({amount:this.currentPageTotalCalc,bettotal:"当页总计："+this.currentPageBetTotal.toString().$toFixed(2)}),t.push({amount:this.totalAmount,bettotal:"总计："+this.statics2})),this.subUsers&&t.push({loginname:"会员总人数："+this.subUsers,flag:"当前活跃人数："+this.activeUsers}),t},arraySpanMethod:function(t){t.row,t.column;var a=t.rowIndex,e=t.columnIndex,n=this.pagination.pageContents.length;if(a===n-1||a===n-2)return 6===e?[1,2]:[1,1]}},watch:{apiFun:function(){this.refresh()}},components:{}},o=(e("7569"),e("2877")),r=Object(o.a)(s,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"table"},[e("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",border:"","span-method":t.arraySpanMethod,data:t.pagination.pageContents}},[t._l(t.headList,function(a){return e("el-table-column",{attrs:{width:t.calcWidth(a.prop),prop:a.prop,label:a.label}})}),t.paginationMark===t.config.paginationMark.rescueMoney?e("el-table-column",{attrs:{prop:"",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return["未领取"===a.row.status?e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.getLosePromo(a.row.pno)}}},[t._v("\n            领取\n          ")]):t._e()]}}])}):t._e()],2)],1),e("span",{staticClass:"split"}),t.isMobile?t._e():e("el-pagination",{staticClass:"center",attrs:{background:"","current-page":t.pagination.pageIndex,"page-sizes":[10,15,20],"page-size":t.pagination.size,layout:"total, sizes, prev, pager, next, jumper",total:t.pagination.totalRecords},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),t.isMobile?e("el-pagination",{staticClass:"center",attrs:{background:"",small:"","current-page":t.pagination.pageIndex,"page-size":t.pagination.size,"pager-count":5,layout:"prev, pager, next",total:t.pagination.totalRecords},on:{"current-change":t.handleCurrentChange}}):t._e()],1)},[],!1,null,"384b8eb2",null);r.options.__file="user-center-pagination.vue",a.a=r.exports}}]);