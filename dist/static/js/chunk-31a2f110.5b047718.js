(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-31a2f110"],{6134:function(e,t,a){"use strict";var s=a("fa19");a.n(s).a},fa19:function(e,t,a){},fb48:function(e,t,a){"use strict";a.r(t),a("7f7f"),a("7514"),a("c5f6");var s=a("510f"),i=a("c15b"),n=a("365c"),r=a("f6b5"),o=a.n(r),c=a("bcdf"),d=a.n(c),l=a("51761"),h=a.n(l);o.a.use(d.a,{region:h.a,vueVersion:2});var p={mixins:[s.D],data:function(){return{fixbug:!1,headData:{title:"新建地址",leftIcon:"arrowr",rightIcon:"kefu2"},region:{province:"",city:"",district:""},address:"",name:"",phone:"",flag:!1,state:1,addressItem:{}}},computed:{queryId:function(){return Number(this.$route.query.id)}},created:function(){this.setAddrInfo()},methods:{setAddrInfo:function(){var e=this;this.fixbug=!1,setTimeout(function(){e.fixbug=!0});var t=this.queryId;if(t){this.addressItem=this.addrList.find(function(e){return e.id===t});var a=this.addressItem,s=a.province,i=a.city,n=a.district,r=a.flag,o=a.name,c=a.phone,d=a.address;this.region={province:s,city:i,district:n},this.address=d,this.name=o,this.phone=c,this.flag=1===r,this.state=3,this.headData.title="编辑地址"}else this.state=1,this.headData.title="新建地址",this.addressItem={},this.region={},this.address="",this.name="",this.phone="",this.flag=""},back:function(){this.$router.back()},openService:function(){window.open("https://chatai.zb251.com/chat/chatClient/chatbox.jsp?companyID=9043&configID=17&live800_domain=https://".concat(window.location.host,"&chatfrom=wap"))},saveAddr:function(){var e=this,t=this.region,a=t.province,s=t.city,r=t.district,o=a+s+r,c=this.address,d=this.flag?1:0,l=this.name,h=this.phone,p=this.state,u={state:p,id:"",province:a,city:s,district:r,area:o,address:c,flag:d,name:l,phone:h};3===p&&(u.id=this.addressItem.id),l?i.a.phoneReg.test(h)?a&&s&&r&&c?Object(n.Lb)(u).then(function(t){e.ERR_OK===t.code?(e.$message({type:"success",message:t.data}),e._handleAddress(),e.$router.back()):e.$message({type:"warning",message:t.message})}):this.$message({type:"warning",message:"请完善地址信息"}):this.$message({type:"warning",message:"手机格式有误"}):this.$message({type:"warning",message:"请填写收款人姓名"})},change:function(e){this.region=e}},watch:{},components:{}},u=(a("6134"),a("2877")),f=Object(u.a)(p,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"edit-address"},[a("v-header",{attrs:{data:e.headData},on:{leftIconClick:e.back,rightIconClick:e.openService}}),a("div",{staticClass:"content"},[a("div",{staticClass:"list"},[a("div",{staticClass:"item"},[a("label",{attrs:{for:"name"}},[e._v("收货人：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{id:"name",placeholder:"请输入收货人姓名",type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),a("div",{staticClass:"item"},[a("label",{attrs:{for:"phone"}},[e._v("手机号码：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{id:"phone",placeholder:"请输入收货人姓名",type:"text"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),a("div",{staticClass:"item"},[a("label",[e._v("所选地区：")]),e.fixbug?a("region-picker",{attrs:{province:e.region.province,city:e.region.city,district:e.region.district},on:{onchange:e.change}}):e._e()],1),a("div",{staticClass:"item"},[a("label",{attrs:{for:"address"}},[e._v("详细地址：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],attrs:{id:"address",placeholder:"请输入收货人姓名",type:"text"},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}})]),a("div",{staticClass:"flag"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.flag,expression:"flag"}],attrs:{id:"flag",placeholder:"请输入收货人姓名",type:"checkbox"},domProps:{checked:Array.isArray(e.flag)?-1<e._i(e.flag,null):e.flag},on:{change:function(t){var a=e.flag,s=t.target,i=!!s.checked;if(Array.isArray(a)){var n=e._i(a,null);s.checked?n<0&&(e.flag=a.concat([null])):-1<n&&(e.flag=a.slice(0,n).concat(a.slice(n+1)))}else e.flag=i}}}),a("label",{attrs:{for:"flag"}},[e._v("设为默认地址")])]),a("div",{staticClass:"btn-wrapper"},[a("mt-button",{attrs:{size:"small",type:"danger"},on:{click:e.saveAddr}},[e._v("保存")])],1)])])],1)},[],!1,null,null,null);f.options.__file="edit-address.vue",t.default=f.exports}}]);