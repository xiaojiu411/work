(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-874d10a2"],{"2d7b":function(e,a,t){"use strict";t.r(a);var s=t("510f"),o=t("817f"),n=(t("41ea"),t("c15b"),{mixins:[s.R,s.q],data:function(){return{logo:t("d6b8"),phones:!1,uesers:!1}},computed:{},created:function(){},methods:{},watch:{},components:{VDialog:o.a}}),i=(t("90b6"),t("2877")),c=Object(i.a)(n,function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"login-wrapper"},[t("v-header",{attrs:{data:e.headData},on:{leftIconClick:e.back,rightIconClick:e.openService}}),t("div",{staticClass:"content"},[t("p",{staticClass:"center"},[t("img",{staticClass:"logo",attrs:{src:e.logo,alt:""}})]),t("div",{staticClass:"content"},[t("div",{staticClass:"input-group"},[t("i",{staticClass:"iconfont icon-zhanghu"}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.lgData.namePhone,expression:"lgData.namePhone"}],attrs:{placeholder:"请输入用户名或手机号",type:"text"},domProps:{value:e.lgData.namePhone},on:{keyup:e.keystatus,input:function(a){a.target.composing||e.$set(e.lgData,"namePhone",a.target.value)}}})]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.uesers,expression:"uesers"}],staticClass:"input-group"},[t("i",{staticClass:"iconfont icon-mima"}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.lgData.passWord,expression:"lgData.passWord"}],attrs:{placeholder:"请输入密码",type:"password"},domProps:{value:e.lgData.passWord},on:{input:function(a){a.target.composing||e.$set(e.lgData,"passWord",a.target.value)}}})]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.phones,expression:"phones"}],staticClass:"input-group phonecode"},[t("i",{staticClass:"iconfont icon-anquan"}),"checkbox"==(e.isPassword?"password":"text")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneLoginData.smsCode,expression:"phoneLoginData.smsCode"}],attrs:{placeholder:"验证码或密码",type:"checkbox"},domProps:{checked:Array.isArray(e.phoneLoginData.smsCode)?-1<e._i(e.phoneLoginData.smsCode,null):e.phoneLoginData.smsCode},on:{change:function(a){var t=e.phoneLoginData.smsCode,s=a.target,o=!!s.checked;if(Array.isArray(t)){var n=e._i(t,null);s.checked?n<0&&e.$set(e.phoneLoginData,"smsCode",t.concat([null])):-1<n&&e.$set(e.phoneLoginData,"smsCode",t.slice(0,n).concat(t.slice(n+1)))}else e.$set(e.phoneLoginData,"smsCode",o)}}}):"radio"==(e.isPassword?"password":"text")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneLoginData.smsCode,expression:"phoneLoginData.smsCode"}],attrs:{placeholder:"验证码或密码",type:"radio"},domProps:{checked:e._q(e.phoneLoginData.smsCode,null)},on:{change:function(a){e.$set(e.phoneLoginData,"smsCode",null)}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneLoginData.smsCode,expression:"phoneLoginData.smsCode"}],attrs:{placeholder:"验证码或密码",type:e.isPassword?"password":"text"},domProps:{value:e.phoneLoginData.smsCode},on:{input:function(a){a.target.composing||e.$set(e.phoneLoginData,"smsCode",a.target.value)}}}),t("i",{class:{"iconfont eye":!0,"icon-yanjing1":e.isPassword,"icon-yanjing":!e.isPassword},on:{click:function(a){e.isPassword=!e.isPassword}}}),t("span",{directives:[{name:"show",rawName:"v-show",value:e.lgValidate.codeShow,expression:"lgValidate.codeShow"}],on:{click:function(a){e.lgGetCode(e.lgData.namePhone)}}},[e._v("获取验证码")]),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.lgValidate.codeShow,expression:"!lgValidate.codeShow"}],staticClass:"discode"},[e._v(e._s(e.lgValidate.count)+"s后重新获取")])]),t("div",{staticClass:"input-group"},[t("button",{on:{click:e.submitNewLogin}},[e._v("登录")])]),t("p",{staticClass:"tip"},[t("router-link",{staticClass:"link",attrs:{to:"/mobile/help-self/forget-pwd"}},[e._v("忘记密码")]),t("span",[e._v("|")]),t("router-link",{staticClass:"link",attrs:{to:"/mobile/newregister"}},[e._v("免费注册")])],1)])]),t("v-dialog",{attrs:{"is-show":e.isShowbindAccountByphone,width:"320"},on:{"on-close":function(a){e.closeDialog("isShowbindAccountByphone")}}},[t("div",{staticClass:"dialog-header"},[t("h3",[e._v("账号绑定")])]),t("div",{staticClass:"dialog-body"},[t("div",{staticClass:"input-group"},[t("p",[e._v("如果您已有账号，请依照以下提示，输入完整的账号，完成验证并绑定。")])]),t("div",{staticClass:"input-group"},[t("p",[e._v("账号提示："),t("span",{staticClass:"red"},[e._v(e._s(e.isShowbindAccountName))])])]),t("div",[t("p",[t("label",[e._v("输入完整账号：")])]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.bindAccData.loginname,expression:"bindAccData.loginname"}],attrs:{type:"text"},domProps:{value:e.bindAccData.loginname},on:{input:function(a){a.target.composing||e.$set(e.bindAccData,"loginname",a.target.value)}}})]),t("div",{staticClass:"phonecode"},[t("p",[t("label",[e._v("输入验证码：")])]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.bindAccData.smsCode,expression:"bindAccData.smsCode"}],attrs:{type:"text",maxlength:"4"},domProps:{value:e.bindAccData.smsCode},on:{input:function(a){a.target.composing||e.$set(e.bindAccData,"smsCode",a.target.value)}}}),t("span",{directives:[{name:"show",rawName:"v-show",value:e.bindValidate.codeShow,expression:"bindValidate.codeShow"}],staticClass:"v-code buttons",on:{click:function(a){e.bindgetCode(e.isShowbindAccountByphoneNumber)}}},[e._v("获取验证码")]),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.bindValidate.codeShow,expression:"!bindValidate.codeShow"}],staticClass:"discode"},[e._v(e._s(e.bindValidate.count)+"s后重新获取")])]),t("div",{staticClass:"input-group"},[t("br"),t("br"),t("el-button",{staticClass:"buttons",attrs:{type:"primary"},on:{click:function(a){e.submitbindAccountByphone(e.isShowbindAccountByphoneNumber)}}},[e._v("绑定")])],1),t("p",[e._v("温馨提示：验证成功之后，请使用原本的账号或者手机号进行登录")])])])],1)},[],!1,null,"f760d52c",null);c.options.__file="newlogin.vue",a.default=c.exports},"6f3d":function(e,a,t){"use strict";var s=t("da7f");t.n(s).a},7234:function(e,a,t){},"817f":function(e,a,t){"use strict";t("c5f6");var s={props:{isShow:{type:Boolean,default:!1},width:{type:Number,default:600},height:{type:Number,default:500}},data:function(){return{}},computed:{styleObj:function(){return{width:"".concat(this.width,"px"),"max-height":"".concat(this.height,"px"),margin:"-".concat(this.height/2,"px 0 0 -").concat(this.width/2,"px")}}},methods:{closeMyself:function(){this.$emit("on-close")}}},o=(t("6f3d"),t("2877")),n=Object(o.a)(s,function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"dialog-wrap"},[e.isShow?t("div",{staticClass:"dialog-cover",on:{click:e.closeMyself}}):e._e(),t("transition",{attrs:{name:"scale"}},[e.isShow?t("div",{staticClass:"dialog-content",style:e.styleObj},[t("p",{staticClass:"dialog-close",on:{click:e.closeMyself}},[e._v("×")]),e._t("default",[e._v("empty")])],2):e._e()])],1)])},[],!1,null,"1ab10b28",null);n.options.__file="dialog.vue",a.a=n.exports},"90b6":function(e,a,t){"use strict";var s=t("7234");t.n(s).a},d6b8:function(e,a,t){e.exports=t.p+"static/img/newlogo.9c12c89a.png"},da7f:function(e,a,t){}}]);