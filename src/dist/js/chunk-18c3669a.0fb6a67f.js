(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18c3669a"],{7402:function(t,e,s){},"9ed6":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"login"}},[s("div",{staticClass:"dome"},[t._m(0),s("div",{staticClass:"node2"},[s("span",{staticClass:"iconfont butt1"},[t._v("")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.myuser.user,expression:"myuser.user"}],attrs:{type:"text",placeholder:"请输入账号"},domProps:{value:t.myuser.user},on:{input:function(e){e.target.composing||t.$set(t.myuser,"user",e.target.value)}}}),s("span",{staticClass:"iconfont butt2"},[t._v("")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.myuser.password,expression:"myuser.password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.myuser.password},on:{input:function(e){e.target.composing||t.$set(t.myuser,"password",e.target.value)}}})]),s("div",{staticClass:"node3"},[t._m(1),s("button",{staticClass:"butt4",on:{click:t.login}},[t._v("登录")])])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"node1"},[s("h3",[t._v("登录")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"butt3",attrs:{href:"/sign"}},[s("span",[t._v("用户注册")])])}],r=s("bc3a"),o=s.n(r),i={name:"index",data:function(){return{myuser:{user:"",password:""}}},methods:{login:function(){var t=this;o.a.post("/login",t.myuser).then((function(e){return console.log(e.data),0==e.data.code?(sessionStorage.setItem("userinfo",JSON.stringify(t.myuser)),t.$router.push("/home"),alert(e.data.msg)):alert(e.data.msg)})).catch((function(t){console.log(t)}))}}},u=i,c=(s("adb6"),s("2877")),l=Object(c["a"])(u,a,n,!1,null,"04991d21",null);e["default"]=l.exports},adb6:function(t,e,s){"use strict";s("7402")}}]);
//# sourceMappingURL=chunk-18c3669a.0fb6a67f.js.map