(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-01f471bf"],{"263b":function(t,e,a){"use strict";a.r(e);var i={mixins:[a("510f").fb],data:function(){return{headData:{title:"会员注册",leftIcon:"arrowr",rightIcon:"kefu2"},list:[]}},computed:{},created:function(){this.list=[{label:"账号",inputData:"loginName",placeholder:"请输入6-11个字母加数字",inputType:"text"},{label:"密码",inputData:"password",placeholder:"6-16位数字或英文字母",inputType:"password"},{label:"确认密码",inputData:"rePwd",placeholder:"两次密码请保持一致",inputType:"password"},{label:"手机号",inputData:"phone",placeholder:"请输入手机号",inputType:"text"},{label:"邮箱(非必填项)",inputData:"email",placeholder:"找回密码时使用",inputType:"text"},{label:"QQ(非必填项)",inputData:"qq",placeholder:"6-16位数字或英文字母",inputType:"text"}]},methods:{back:function(){this.$router.back()},openService:function(){window.open("https://chatai.zb251.com/chat/chatClient/chatbox.jsp?companyID=9043&configID=17&live800_domain=https://".concat(window.location.host,"&chatfrom=wap"))}},watch:{},components:{}},r=(a("42aa"),a("2877")),n=Object(r.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"register"},[a("v-header",{attrs:{data:t.headData},on:{leftIconClick:t.back,rightIconClick:t.openService}}),a("div",{staticClass:"content"},[t._l(t.list,function(e,i){return a("div",{staticClass:"mobile-input-group"},[a("label",[a("span",{staticClass:"red"},[t._v("*")]),t._v(t._s(e.label)+"\n      ")]),"checkbox"===e.inputType?a("input",{directives:[{name:"model",rawName:"v-model",value:t.registerData[e.inputData],expression:"registerData[item.inputData]"}],attrs:{placeholder:e.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.registerData[e.inputData])?-1<t._i(t.registerData[e.inputData],null):t.registerData[e.inputData]},on:{change:function(a){var i=t.registerData[e.inputData],r=a.target,n=!!r.checked;if(Array.isArray(i)){var s=t._i(i,null);r.checked?s<0&&t.$set(t.registerData,e.inputData,i.concat([null])):-1<s&&t.$set(t.registerData,e.inputData,i.slice(0,s).concat(i.slice(s+1)))}else t.$set(t.registerData,e.inputData,n)}}}):"radio"===e.inputType?a("input",{directives:[{name:"model",rawName:"v-model",value:t.registerData[e.inputData],expression:"registerData[item.inputData]"}],attrs:{placeholder:e.placeholder,type:"radio"},domProps:{checked:t._q(t.registerData[e.inputData],null)},on:{change:function(a){t.$set(t.registerData,e.inputData,null)}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:t.registerData[e.inputData],expression:"registerData[item.inputData]"}],attrs:{placeholder:e.placeholder,type:e.inputType},domProps:{value:t.registerData[e.inputData]},on:{input:function(a){a.target.composing||t.$set(t.registerData,e.inputData,a.target.value)}}})])}),a("div",{staticClass:"mobile-input-group"},[t._m(0),a("div",{staticClass:"code"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.registerData.validateCode,expression:"registerData.validateCode"}],attrs:{placeholder:"输入正确的验证码",type:"text"},domProps:{value:t.registerData.validateCode},on:{input:function(e){e.target.composing||t.$set(t.registerData,"validateCode",e.target.value)}}}),a("img",{attrs:{src:t.validateCodeForIndex,alt:""},on:{click:t.changeCode}})])]),a("mt-button",{attrs:{size:"large",type:"danger"},on:{click:t.submitRegister}},[t._v("立即注册")])],2)],1)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[a("span",{staticClass:"red"},[t._v("*")]),t._v("验证码\n      ")])}],!1,null,"e36a8d5e",null);n.options.__file="register.vue",e.default=n.exports},"2fd7":function(t,e,a){},"42aa":function(t,e,a){"use strict";var i=a("2fd7");a.n(i).a}}]);