(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-75b6be1a"],{8080:function(a,t,e){"use strict";var i=e("911f");e.n(i).a},"911f":function(a,t,e){},ff2e:function(a,t,e){"use strict";e.r(t);var i=e("510f"),s={mixins:[i.q,i.e,i.i],components:{},watch:{isShowCommonMaskPage:function(a){this.setContentHeight(a)}}},n=(e("8080"),e("2877")),r=Object(n.a)(s,function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"withdrawal"},[e("v-header",{attrs:{data:a.headData},on:{leftIconClick:a.back,rightIconClick:a.openService}}),e("div",{staticClass:"content"},[e("div",{staticClass:"options"},[e("div",{staticClass:"mobile-input-group"},[e("span",{staticClass:"label"},[a._v("密码：")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.withdrawalData.password,expression:"withdrawalData.password"}],attrs:{type:"password"},domProps:{value:a.withdrawalData.password},on:{input:function(t){t.target.composing||a.$set(a.withdrawalData,"password",t.target.value)}}})])]),e("div",{staticClass:"mobile-input-group"},[e("span",{staticClass:"label"},[a._v("银行名称：")]),e("div",[e("select",{directives:[{name:"model",rawName:"v-model",value:a.withdrawalData.bank,expression:"withdrawalData.bank"}],on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.$set(a.withdrawalData,"bank",t.target.multiple?e:e[0])}}},[e("option",{attrs:{value:""}},[a._v("请选择银行")]),a._l(a.bankList,function(t){return e("option",{domProps:{value:t.bankname}},[a._v(a._s(t.bankname))])})],2)]),e("div",{staticClass:"btn-group"},[e("mt-button",{staticClass:"small-btn",attrs:{size:"small",type:"primary"},on:{click:a.bindBankCard}},[a._v("绑定银行卡")]),e("mt-button",{staticClass:"small-btn",attrs:{size:"small",type:"primary"},on:{click:a.unBindBank}},[a._v("解绑银行卡")])],1)]),e("div",{staticClass:"mobile-input-group"},[e("span",{staticClass:"label"},[a._v("卡/折号")]),e("div",[e("input",{attrs:{readonly:"",disabled:"",type:"text"},domProps:{value:a.formatStr(a.withdrawalData.accountNo,4,4,6)}})])]),e("div",{staticClass:"mobile-input-group"},[e("span",{staticClass:"label"},[a._v("提款类型")]),e("div",[e("select",{directives:[{name:"model",rawName:"v-model",value:a.withdrawalData.tkType,expression:"withdrawalData.tkType"}],on:{change:function(t){var e=Array.prototype.filter.call(t.target.options,function(a){return a.selected}).map(function(a){return"_value"in a?a._value:a.value});a.$set(a.withdrawalData,"tkType",t.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"slotmachine"}},[a._v("老虎机")]),e("option",{attrs:{value:"liveall"}},[a._v("其他")])])])]),e("div",{staticClass:"mobile-input-group"},[e("span",{staticClass:"label"},[a._v("提款金额")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.withdrawalData.amount,expression:"withdrawalData.amount"}],attrs:{type:"text"},domProps:{value:a.withdrawalData.amount},on:{focus:a.agentWithdrawpz,input:function(t){t.target.composing||a.$set(a.withdrawalData,"amount",t.target.value)}}})])]),e("div",{staticClass:"mobile-input-group"},[e("span",{staticClass:"label"}),e("div",[e("p",{staticClass:"red"},[a._v(a._s(a.tipText))])])]),e("div",{staticClass:"mobile-input-group"},[e("label",{staticClass:"isAgree",attrs:{for:"isAgree"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.isAgree,expression:"isAgree"}],staticStyle:{width:"auto"},attrs:{id:"isAgree",type:"checkbox"},domProps:{checked:Array.isArray(a.isAgree)?-1<a._i(a.isAgree,null):a.isAgree},on:{change:function(t){var e=a.isAgree,i=t.target,s=!!i.checked;if(Array.isArray(e)){var n=a._i(e,null);i.checked?n<0&&(a.isAgree=e.concat([null])):-1<n&&(a.isAgree=e.slice(0,n).concat(e.slice(n+1)))}else a.isAgree=s}}}),e("span",[a._v("我已读过《提款须知》，并已清楚了解其规则。")])])]),e("div",[e("mt-button",{attrs:{size:"large",type:"danger"},on:{click:a.withdrawal}},[a._v("提交")])],1)]),e("transition",{attrs:{name:"slider-right"}},[a.isShowCommonMaskPage?e("div",{staticClass:"bind-bank-card-wrapper common-mask-page"},[e("v-header",{attrs:{data:a.maskPageHeadData},on:{leftIconClick:a.closeMaskPage}}),e("div",{staticClass:"bind-bank-card"},[e("div",{staticClass:"mobile-input-group"},[e("label",{attrs:{for:""}},[a._v("卡/折号")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.bankCard.bankno,expression:"bankCard.bankno"}],attrs:{type:"text"},domProps:{value:a.bankCard.bankno},on:{change:a.getBankInfo,input:function(t){t.target.composing||a.$set(a.bankCard,"bankno",t.target.value)}}})])]),e("div",{staticClass:"mobile-input-group"},[e("label",{attrs:{for:""}},[a._v("银行账户")]),e("div",[e("input",{attrs:{readonly:"",disabled:"",type:"text"},domProps:{value:a.bankCard.bankname}})])]),e("div",{staticClass:"mobile-input-group"},[e("label",{attrs:{for:""}},[a._v("登录密码")]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.bankCard.password,expression:"bankCard.password"}],attrs:{type:"password"},domProps:{value:a.bankCard.password},on:{input:function(t){t.target.composing||a.$set(a.bankCard,"password",t.target.value)}}})])]),e("div",{staticClass:"mobile-input-group"},[e("label",{attrs:{for:""}},[a._v("姓名")]),e("div",[a.userInfo.accountName?e("input",{directives:[{name:"model",rawName:"v-model",value:a.bankCard.xinMing,expression:"bankCard.xinMing"}],attrs:{readonly:"",disabled:"",type:"text"},domProps:{value:a.bankCard.xinMing},on:{input:function(t){t.target.composing||a.$set(a.bankCard,"xinMing",t.target.value)}}}):a._e(),a.userInfo.accountName?a._e():e("input",{directives:[{name:"model",rawName:"v-model",value:a.bankCard.xinMing,expression:"bankCard.xinMing"}],attrs:{type:"text"},domProps:{value:a.bankCard.xinMing},on:{input:function(t){t.target.composing||a.$set(a.bankCard,"xinMing",t.target.value)}}})])]),e("div",{staticClass:"btn-group"},[e("mt-button",{attrs:{size:"large",type:"danger"},on:{click:a.mainbandingBankno}},[a._v("提交")]),e("mt-button",{attrs:{size:"large"},on:{click:function(t){a.isShowCommonMaskPage=!1}}},[a._v("返回")])],1),e("div",{staticClass:"tips"},[e("h3",[a._v("温馨提示")]),e("p",[e("span",{staticClass:"red"},[a._v(" 1. 请认真填写真实姓名，如有乱填写造成无法出款，尊宝概不负责。")]),e("br"),a._v("2. 绑定银行卡/折号，可以免去您重复输入卡/折号的繁琐步骤。\n\n              "),e("br"),a._v("3. 如有疑问请直接联系在线客服。\n            ")])])])],1):a._e()])],1)],1)},[],!1,null,"61e62a3e",null);r.options.__file="withdrawal.vue",t.default=r.exports}}]);