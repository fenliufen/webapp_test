(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b356a0c"],{"8b88":function(t,s,e){"use strict";e("91ab")},"91ab":function(t,s,e){},"9ed6":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"login"}},[e("div",{staticClass:"dome"},[t._m(0),e("div",{staticClass:"node2"},[e("span",{staticClass:"iconfont butt1"},[t._v("")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.myuser.user,expression:"myuser.user"}],attrs:{type:"text"},domProps:{value:t.myuser.user},on:{input:function(s){s.target.composing||t.$set(t.myuser,"user",s.target.value)}}}),e("span",{staticClass:"iconfont butt2"},[t._v("")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.myuser.password,expression:"myuser.password"}],attrs:{type:"password"},domProps:{value:t.myuser.password},on:{input:function(s){s.target.composing||t.$set(t.myuser,"password",s.target.value)}}})]),e("div",{staticClass:"node3"},[t._m(1),e("button",{staticClass:"butt4",on:{click:t.login}},[t._v("登录")])])])])},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"node1"},[e("h3",[t._v("登录")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"butt3",attrs:{href:"/sign"}},[e("span",[t._v("用户注册")])])}],o=e("bc3a"),r=e.n(o),i={name:"index",data:function(){return{myuser:{user:"",password:""}}},methods:{login:function(){var t=this;r.a.post("http://localhost:3000/login",t.myuser).then((function(t){return console.log(t.data),0==t.data.code?(window.location="./home",alert(t.data.msg)):alert(t.data.msg)})).catch((function(t){console.log(t)}))}}},u=i,c=(e("8b88"),e("2877")),l=Object(c["a"])(u,a,n,!1,null,"2c71bc86",null);s["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2b356a0c.2d0612b7.js.map