var express = require('express');
var app = express();
var path = require('path');
var session = require('express-session');
var bodyparser = require('body-parser');
var cookieParser=require("cookie-parser");
var fs=require('fs');
var history = require('connect-history-api-fallback');


var login = require('./routes/login');
var status = require('./routes/status');
var logout = require('./routes/logout');
var sign =require('./routes/sign');
var home=require('./routes/home');

// 是否允许前端跨域

// app.use((req,res,next)=>{
//     res.header({
//         'Access-Control-Allow-Credentials': true,
//         'Access-Control-Allow-Origin': req.headers.origin || '*',
//         'Access-Control-Allow-Headers': 'Content-Type',
//         'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
//         'Content-Type': 'application/json; charset=utf-8'
//     });
//     if (req.method === "OPTIONS"){
//         res.sendStatus(200);
//     }else{
//         next();
//     }
// });





// 这句代码需要放在express.static上面
app.use(history());
app.use(express.static(path.resolve(__dirname, './dist')));   // 设置静态项目访问路径)
app.use(bodyparser.json()); // 使用bodyparder中间件，
app.use(bodyparser.urlencoded({ extended: false}));
app.use(cookieParser());//这里要加()



// 使用 session 中间件
app.use(session({
    secret :'spflinux', // 对session id 相关的cookie 进行签名
    name:'adminapp',
    resave : true,
    saveUninitialized: false, // 是否保存未初始化的会话
    cookie : {
        maxAge : 24*60*60*1000 , // 设置 session 的有效时间，单位毫秒
    },

}));




app.use('/home',home);
app.use('/login',login); // 获取登录页面
app.use('/',status);// 判断用户状态接口
app.use('/logout',logout);// 退出接口
app.use('/sign',sign);//注册接口



app.listen(3000);
