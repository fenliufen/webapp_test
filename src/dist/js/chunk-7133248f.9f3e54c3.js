(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7133248f"],{5220:function(e,t,a){"use strict";a("d266")},"951b":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"sign"}},[a("form",{staticClass:"biaodan"},[a("p",{staticClass:"account"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.myuser.user,expression:"myuser.user"}],attrs:{type:"text",name:"account",placeholder:"输入英文或者数字(必填)",id:"account"},domProps:{value:e.myuser.user},on:{input:function(t){t.target.composing||e.$set(e.myuser,"user",t.target.value)}}})]),a("p",{staticClass:"password"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.myuser.password,expression:"myuser.password"}],attrs:{type:"password",name:"password",placeholder:"填写密码(必填)",id:"password"},domProps:{value:e.myuser.password},on:{input:function(t){t.target.composing||e.$set(e.myuser,"password",t.target.value)}}})]),a("p",{staticClass:"password1"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.myuser.phone,expression:"myuser.phone"}],attrs:{type:"text",name:"phone",placeholder:"请输入电话号码(选填)",id:"password1"},domProps:{value:e.myuser.phone},on:{input:function(t){t.target.composing||e.$set(e.myuser,"phone",t.target.value)}}})]),a("p",{staticClass:"email"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.myuser.e_mail,expression:"myuser.e_mail"}],attrs:{type:"email",name:"email",placeholder:"填写邮箱地址(必填)",id:"email"},domProps:{value:e.myuser.e_mail},on:{input:function(t){t.target.composing||e.$set(e.myuser,"e_mail",t.target.value)}}})]),a("p",{staticClass:"nickname"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.myuser.name,expression:"myuser.name"}],attrs:{type:"text",name:"nickname",placeholder:"填写昵称(选填)",id:"nickname"},domProps:{value:e.myuser.name},on:{input:function(t){t.target.composing||e.$set(e.myuser,"name",t.target.value)}}})]),a("input",{attrs:{type:"button",name:"register",id:"register",value:"注册"},on:{click:e.add}}),e._m(0)])])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{attrs:{href:"./login"}},[a("input",{attrs:{type:"button",name:"denglu",id:"denglu",value:"我有账号，我要登录"}})])}],r=a("bc3a"),o=a.n(r),i={name:"index",data:function(){return{myuser:{user:"",password:"",sex:"",phone:"",e_mail:"",name:"",portrait:""}}},methods:{add:function(){var e=this;o.a.post("http://localhost:3000/sign",e.myuser).then((function(e){return console.log(e.data),alert(e.data.msg)})).catch((function(e){console.log(e)}))}},mounted:function(){}},u=i,m=(a("5220"),a("2877")),l=Object(m["a"])(u,s,n,!1,null,"0cbda79d",null);t["default"]=l.exports},d266:function(e,t,a){}}]);
//# sourceMappingURL=chunk-7133248f.9f3e54c3.js.map