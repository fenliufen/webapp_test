(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9adb68ea"],{"951b":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"sign"}},[a("form",{staticClass:"biaodan"},[a("p",{staticClass:"account"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.myuser.user,expression:"myuser.user"}],attrs:{type:"text",name:"account",placeholder:"输入英文或者数字",id:"account"},domProps:{value:e.myuser.user},on:{input:function(t){t.target.composing||e.$set(e.myuser,"user",t.target.value)}}}),a("span",{staticClass:"txet"},[e._v("用户名必须是6—12位数字或者是英文字母！")])]),a("p",{staticClass:"password"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.myuser.password,expression:"myuser.password"}],attrs:{type:"password",name:"password",placeholder:"填写密码",id:"password"},domProps:{value:e.myuser.password},on:{input:function(t){t.target.composing||e.$set(e.myuser,"password",t.target.value)}}}),a("span",{staticClass:"txet"},[e._v("密码必须6-12位字母数字组合！")])]),a("p",{staticClass:"password1"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.myuser.phone,expression:"myuser.phone"}],attrs:{type:"text",name:"phone",placeholder:"确认密码",id:"password1"},domProps:{value:e.myuser.phone},on:{input:function(t){t.target.composing||e.$set(e.myuser,"phone",t.target.value)}}}),a("span",{staticClass:"txet"},[e._v("填写您的电话！")])]),a("p",{staticClass:"email"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.myuser.e_mail,expression:"myuser.e_mail"}],attrs:{type:"email",name:"email",placeholder:"填写邮箱地址",id:"email"},domProps:{value:e.myuser.e_mail},on:{input:function(t){t.target.composing||e.$set(e.myuser,"e_mail",t.target.value)}}}),a("span",{staticClass:"txet"},[e._v("填写完检查邮箱是否正确！")])]),a("p",{staticClass:"nickname"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.myuser.name,expression:"myuser.name"}],attrs:{type:"text",name:"nickname",placeholder:"填写昵称",id:"nickname"},domProps:{value:e.myuser.name},on:{input:function(t){t.target.composing||e.$set(e.myuser,"name",t.target.value)}}}),a("span",{staticClass:"txet"},[e._v("字母或者字符组成！")])]),a("input",{attrs:{type:"button",name:"register",id:"register",value:"注册"},on:{click:e.add}}),e._m(0)])])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{attrs:{href:"./login"}},[a("input",{attrs:{type:"button",name:"denglu",id:"denglu",value:"我有账号，我要登录"}})])}],r=a("bc3a"),o=a.n(r),i={name:"index",data:function(){return{myuser:{user:"",password:"",sex:"",phone:"",e_mail:"",name:"",portrait:""}}},methods:{add:function(){var e=this;o.a.post("http://localhost:3000/sign",e.myuser).then((function(e){return console.log(e.data),alert(e.data.msg)})).catch((function(e){console.log(e)}))}},mounted:function(){}},u=i,m=(a("c63e"),a("2877")),l=Object(m["a"])(u,s,n,!1,null,"3e3e5f1a",null);t["default"]=l.exports},b699:function(e,t,a){},c63e:function(e,t,a){"use strict";a("b699")}}]);
//# sourceMappingURL=chunk-9adb68ea.a508730d.js.map