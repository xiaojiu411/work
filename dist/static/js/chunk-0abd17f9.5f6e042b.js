(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0abd17f9"],{"12aa":function(e,t,a){"use strict";var s=a("f60e");a.n(s).a},"236a":function(e,t,a){"use strict";var s=a("5e44");a.n(s).a},"294e":function(e,t,a){"use strict";a("c5f6");var s={data:function(){return{}},props:{list:{type:Array,default:[]},currentIdx:{type:Number,default:0},width:{type:String,default:"50%"}},computed:{styleObj:function(){return{width:this.width}}},created:function(){},methods:{selectTabItem:function(e,t){this.$emit("selectTabItem",e,t)}},watch:{},components:{}},n=(a("12aa"),a("2877")),i=Object(n.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tab-card"},e._l(e.list,function(t,s){return a("span",{class:{active:s===e.currentIdx},style:e.styleObj,on:{click:function(a){e.selectTabItem(s,t)}}},[e._v(e._s(t.text))])}))},[],!1,null,"7086d9a0",null);i.options.__file="tab-card.vue",t.a=i.exports},"39fd":function(e,t,a){"use strict";a.r(t),a("e6e3"),a("9f02");var s=a("c263"),n=a.n(s),i=(a("cadf"),a("551c"),a("097d"),a("817f")),o=a("294e"),r=a("71f5"),l=a("510f"),d=a("f6b5");a.n(d).a.use(n.a);var c={mixins:[l.q,l.i,l.Q],data:function(){return{}},computed:{},methods:{},watch:{},components:{tabCard:o.a,tabBorder:r.a,VDialog:i.a}},u=(a("236a"),a("2877")),p=Object(u.a)(c,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"account-settings"},[a("v-header",{attrs:{data:e.headData},on:{leftIconClick:e.back,rightIconClick:e.openService}}),a("div",{staticClass:"content"},[a("div",{staticClass:"tab-border-wrapper"},[a("tab-border",{attrs:{list:e.tabTitleList,currentIdx:e.currentIdx},on:{selectTabItem:e.selectItem}})],1),0==e.currentIdx?a("div",[e.userInfo.accountName?a("div",{staticClass:"mobile-input-group"},[a("label",{staticClass:"label"},[e._v("真实姓名：")]),a("div",{staticClass:"i-disabled"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.accountName,expression:"userInfo.accountName"}],attrs:{type:"hidden"},domProps:{value:e.userInfo.accountName},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"accountName",t.target.value)}}}),e._v("\n          "+e._s(e.formatStr(e.userInfo.accountName,1,0,2))+"\n        ")])]):e._e(),e.userInfo.accountName?e._e():a("div",{staticClass:"mobile-input-group"},[a("label",{staticClass:"label"},[e._v("\n          真实姓名：\n          "),a("mt-button",{attrs:{type:"primary",size:"small"},on:{click:e.goTobindName}},[e._v("点击绑定")])],1)]),a("div",{staticClass:"mobile-input-group"},[a("label",{staticClass:"label"},[e._v("注册邮箱：")]),e.userInfo.email?a("div",{staticClass:"i-disabled"},[e._v("\n          "+e._s(e.formatStr(e.userInfo.email,4,8,5))+"\n        ")]):e._e(),e.userInfo.email?e._e():a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.baseInfo.email,expression:"baseInfo.email"}],attrs:{type:"text"},domProps:{value:e.baseInfo.email},on:{input:function(t){t.target.composing||e.$set(e.baseInfo,"email",t.target.value)}}})])]),e.userInfo.phone?[a("div",{staticClass:"mobile-input-group"},[a("label",{staticClass:"label"},[e._v("手机号码：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userInfo.phone,expression:"userInfo.phone"}],attrs:{type:"hidden"},domProps:{value:e.userInfo.phone},on:{input:function(t){t.target.composing||e.$set(e.userInfo,"phone",t.target.value)}}}),a("span",{staticClass:"i-disabled"},[e._v(e._s(e.formatStr(e.userInfo.phone,3,4,4)))]),e.isPhoneBindCheck?e._e():a("span",{staticClass:"isPhoneBindCheck red",on:{click:e._isShowPhoneOrEmail}},[a("i",{staticClass:"iconfont icon-2guanbi"}),e._v("\n                  验证后可用手机登录\n                ")]),e.isPhoneBindCheck?a("span",[a("i",{staticClass:"iconfont icon-ziyuan"}),e._v("\n                  已验证可用手机登录\n                ")]):e._e()])]:e._e(),e.userInfo.phone?e._e():[a("div",{staticClass:"mobile-input-group"},[a("span",{staticClass:"label"},[e._v("手机号码")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.baseInfo.phone,expression:"baseInfo.phone"}],attrs:{type:"text"},domProps:{value:e.baseInfo.phone},on:{input:function(t){t.target.composing||e.$set(e.baseInfo,"phone",t.target.value)}}})])]),a("div",{staticClass:"mobile-input-group"},[a("span",{staticClass:"label"},[e._v("短信验证码")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.baseInfo.smsCode,expression:"baseInfo.smsCode"}],attrs:{type:"text",maxlength:"4"},domProps:{value:e.baseInfo.smsCode},on:{input:function(t){t.target.composing||e.$set(e.baseInfo,"smsCode",t.target.value)}}}),a("mt-button",{directives:[{name:"show",rawName:"v-show",value:e.setPhoneValidate.codeShow,expression:"setPhoneValidate.codeShow"}],staticClass:"small-btn",attrs:{size:"small",type:"primary"},on:{click:e.bindGetCodes}},[e._v("获取验证码")]),a("mt-button",{directives:[{name:"show",rawName:"v-show",value:!e.setPhoneValidate.codeShow,expression:"!setPhoneValidate.codeShow"}],staticClass:"small-btn discode",attrs:{size:"small",type:"primary"}},[e._v(e._s(e.setPhoneValidate.count)+"s后重新获取")])],1)])],e.userInfo.birthdayStr?a("div",{staticClass:"mobile-input-group"},[a("label",{staticClass:"label"},[e._v("生日："+e._s(e.userInfo.birthdayStr))])]):e._e(),e.userInfo.birthday?e._e():a("div",{staticClass:"mobile-input-group"},[a("label",{staticClass:"label"},[e._v("生日：")]),a("div",[a("el-date-picker",{staticStyle:{width:"100%",height:"40px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.baseInfo.birthday,callback:function(t){e.$set(e.baseInfo,"birthday",t)},expression:"baseInfo.birthday"}})],1)]),a("div",{staticClass:"mobile-input-group"},[a("label",{staticClass:"label"},[e._v("QQ号码：")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.baseInfo.qq,expression:"baseInfo.qq"}],attrs:{type:"text",placeholder:"（非必填项）"},domProps:{value:e.baseInfo.qq},on:{input:function(t){t.target.composing||e.$set(e.baseInfo,"qq",t.target.value)}}})])]),a("div",{staticClass:"mobile-input-group"},[a("label",{staticClass:"label"},[e._v("用户昵称：")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.baseInfo.aliasName,expression:"baseInfo.aliasName"}],attrs:{type:"text",placeholder:"（非必填项）"},domProps:{value:e.baseInfo.aliasName},on:{input:function(t){t.target.composing||e.$set(e.baseInfo,"aliasName",t.target.value)}}})])]),a("div",{staticClass:"mobile-input-group"},[a("label",{staticClass:"label"},[e._v("微信：")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.baseInfo.microchannel,expression:"baseInfo.microchannel"}],attrs:{type:"text",placeholder:"（非必填项）"},domProps:{value:e.baseInfo.microchannel},on:{input:function(t){t.target.composing||e.$set(e.baseInfo,"microchannel",t.target.value)}}})])]),a("div",{staticClass:"mobile-input-group"},[a("label",{staticClass:"label"}),a("div",[a("mt-button",{attrs:{size:"large",type:"danger"},on:{click:e.changeInfo}},[e._v("提交")])],1)])],2):e._e(),1==e.currentIdx?a("div",[e.userInfo.user_remark?e._e():[a("div",{staticClass:"mobile-input-group"},[a("span",{staticClass:"label"},[e._v("原密码")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.pwd.oldPwd,expression:"pwd.oldPwd"}],attrs:{type:"password"},domProps:{value:e.pwd.oldPwd},on:{input:function(t){t.target.composing||e.$set(e.pwd,"oldPwd",t.target.value)}}})])]),a("div",{staticClass:"mobile-input-group"},[a("span",{staticClass:"label"},[e._v("新密码")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.pwd.newPwd,expression:"pwd.newPwd"}],attrs:{type:"password"},domProps:{value:e.pwd.newPwd},on:{input:function(t){t.target.composing||e.$set(e.pwd,"newPwd",t.target.value)}}})])]),a("div",{staticClass:"mobile-input-group"},[a("span",{staticClass:"label"},[e._v("确认新密码")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.pwd.rePwd,expression:"pwd.rePwd"}],attrs:{type:"password"},domProps:{value:e.pwd.rePwd},on:{input:function(t){t.target.composing||e.$set(e.pwd,"rePwd",t.target.value)}}})])]),a("div",{staticClass:"mobile-input-group"},[a("span",{staticClass:"label"}),a("div",[a("mt-button",{attrs:{size:"large",type:"danger"},on:{click:e.changePwd}},[e._v("提交")])],1)]),e._m(0)],e.userInfo.user_remark?[a("div",{staticClass:"mobile-input-group"},[a("span",{staticClass:"label"},[e._v("设置登录密码")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.setpwd.new_password,expression:"setpwd.new_password"}],attrs:{type:"password"},domProps:{value:e.setpwd.new_password},on:{input:function(t){t.target.composing||e.$set(e.setpwd,"new_password",t.target.value)}}})])]),a("div",{staticClass:"mobile-input-group"},[a("span",{staticClass:"label"}),a("div",[a("mt-button",{attrs:{size:"large",type:"danger"},on:{click:e.setPwd}},[e._v("提交")])],1)])]:e._e()],2):e._e(),2==e.currentIdx?a("div",[a("div",{staticClass:"mobile-input-group"},[a("span",{staticClass:"label"},[e._v("卡/折号")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.bankCard.bankno,expression:"bankCard.bankno"}],attrs:{type:"text"},domProps:{value:e.bankCard.bankno},on:{change:e.getBankInfo,input:function(t){t.target.composing||e.$set(e.bankCard,"bankno",t.target.value)}}})])]),a("div",{staticClass:"mobile-input-group"},[a("span",{staticClass:"label"},[e._v("银行名称")]),a("div",[a("input",{attrs:{readonly:"",disabled:"",type:"text"},domProps:{value:e.bankCard.bankname}})])]),a("div",{staticClass:"mobile-input-group"},[a("span",{staticClass:"label"},[e._v("登录密码")]),a("div",["checkbox"===e.inputType?a("input",{directives:[{name:"model",rawName:"v-model",value:e.bankCard.password,expression:"bankCard.password"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.bankCard.password)?-1<e._i(e.bankCard.password,null):e.bankCard.password},on:{change:function(t){var a=e.bankCard.password,s=t.target,n=!!s.checked;if(Array.isArray(a)){var i=e._i(a,null);s.checked?i<0&&e.$set(e.bankCard,"password",a.concat([null])):-1<i&&e.$set(e.bankCard,"password",a.slice(0,i).concat(a.slice(i+1)))}else e.$set(e.bankCard,"password",n)}}}):"radio"===e.inputType?a("input",{directives:[{name:"model",rawName:"v-model",value:e.bankCard.password,expression:"bankCard.password"}],attrs:{type:"radio"},domProps:{checked:e._q(e.bankCard.password,null)},on:{change:function(t){e.$set(e.bankCard,"password",null)}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:e.bankCard.password,expression:"bankCard.password"}],attrs:{type:e.inputType},domProps:{value:e.bankCard.password},on:{input:function(t){t.target.composing||e.$set(e.bankCard,"password",t.target.value)}}})])]),a("div",{staticClass:"mobile-input-group"},[a("span",{staticClass:"label"},[e._v("姓名")]),a("div",[e.userInfo.accountName?a("input",{directives:[{name:"model",rawName:"v-model",value:e.bankCard.xinMing,expression:"bankCard.xinMing"}],attrs:{readonly:"",disabled:"",type:"text"},domProps:{value:e.bankCard.xinMing},on:{input:function(t){t.target.composing||e.$set(e.bankCard,"xinMing",t.target.value)}}}):e._e(),e.userInfo.accountName?e._e():a("input",{directives:[{name:"model",rawName:"v-model",value:e.bankCard.xinMing,expression:"bankCard.xinMing"}],attrs:{type:"text"},domProps:{value:e.bankCard.xinMing},on:{input:function(t){t.target.composing||e.$set(e.bankCard,"xinMing",t.target.value)}}})])]),a("div",{staticClass:"mobile-input-group"},[a("mt-button",{attrs:{size:"large",type:"danger"},on:{click:e.mainbandingBankno}},[e._v("提交")])],1),e._m(1)]):e._e(),a("v-dialog",{attrs:{"is-show":e.isShowPhoneOrEmail,width:"320"},on:{"on-close":function(t){e.closeDialog("isShowPhoneOrEmail")}}},[a("div",{staticClass:"dialog-header"},[a("h3",[e._v("验证手机号码")])]),a("div",{staticClass:"dialog-body"},[a("div",{staticClass:"mobile-input-group"},[a("p",[e._v("输入您收到的验证码，完成验证")])]),a("div",{staticClass:"mobile-input-group phonecode"},[a("p",[a("label",[e._v("输入验证码：")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.bindPhoneAccData.smsCode,expression:"bindPhoneAccData.smsCode"}],attrs:{type:"text",maxlength:"4"},domProps:{value:e.bindPhoneAccData.smsCode},on:{input:function(t){t.target.composing||e.$set(e.bindPhoneAccData,"smsCode",t.target.value)}}}),a("span",{directives:[{name:"show",rawName:"v-show",value:e.bindPhoneValidate.codeShow,expression:"bindPhoneValidate.codeShow"}],staticClass:"v-code buttons",on:{click:e.bindGetCode}},[e._v("获取验证码")]),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.bindPhoneValidate.codeShow,expression:"!bindPhoneValidate.codeShow"}],staticClass:"discode"},[e._v(e._s(e.bindPhoneValidate.count)+"s后重新获取")])]),a("div",{staticClass:"mobile-input-group"},[a("label"),a("el-button",{staticClass:"buttons",attrs:{type:"primary"},on:{click:e.submitbindAccByphone}},[e._v("提交验证")])],1)])])],1)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tips"},[t("h3",[this._v("\n            温馨提示：\n          ")]),t("p",[this._v("\n            1. 修改密码请注意大小写。\n          ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tips"},[a("h3",[e._v("温馨提示")]),a("p",[a("span",{staticClass:"red"},[e._v(" 1. 请认真填写真实姓名，如有乱填写造成无法出款，尊宝概不负责。")]),a("br"),e._v("2. 绑定银行卡/折号，可以免去您重复输入卡/折号的繁琐步骤。\n\n          "),a("br"),e._v("3. 如有疑问请直接联系在线客服。\n        ")])])}],!1,null,"2eaa35eb",null);p.options.__file="account-settings1.vue",t.default=p.exports},"532a":function(e,t,a){},"5e44":function(e,t,a){},"6f3d":function(e,t,a){"use strict";var s=a("da7f");a.n(s).a},"71f5":function(e,t,a){"use strict";a("c5f6");var s={data:function(){return{}},props:{list:{type:Array,default:[]},currentIdx:{type:Number,default:0},primary:{type:String,default:""}},computed:{},created:function(){},methods:{select:function(e,t){this.$emit("selectTabItem",e,t)}},watch:{},components:{}},n=(a("8d83"),a("2877")),i=Object(n.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tab-border"},e._l(e.list,function(t,s){return a("span",{class:{active:s===e.currentIdx,primary:e.primary},on:{click:function(a){e.select(s,t)}}},[e._v(e._s(t.text))])}))},[],!1,null,"4c20e01c",null);i.options.__file="tab-border.vue",t.a=i.exports},"817f":function(e,t,a){"use strict";a("c5f6");var s={props:{isShow:{type:Boolean,default:!1},width:{type:Number,default:600},height:{type:Number,default:500}},data:function(){return{}},computed:{styleObj:function(){return{width:"".concat(this.width,"px"),"max-height":"".concat(this.height,"px"),margin:"-".concat(this.height/2,"px 0 0 -").concat(this.width/2,"px")}}},methods:{closeMyself:function(){this.$emit("on-close")}}},n=(a("6f3d"),a("2877")),i=Object(n.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"dialog-wrap"},[e.isShow?a("div",{staticClass:"dialog-cover",on:{click:e.closeMyself}}):e._e(),a("transition",{attrs:{name:"scale"}},[e.isShow?a("div",{staticClass:"dialog-content",style:e.styleObj},[a("p",{staticClass:"dialog-close",on:{click:e.closeMyself}},[e._v("×")]),e._t("default",[e._v("empty")])],2):e._e()])],1)])},[],!1,null,"1ab10b28",null);i.options.__file="dialog.vue",t.a=i.exports},"8d83":function(e,t,a){"use strict";var s=a("532a");a.n(s).a},da7f:function(e,t,a){},f60e:function(e,t,a){}}]);