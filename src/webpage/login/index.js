const db = require('../mysql/mysql');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('cookie-session');


var login = express.Router();





// 生成cookie
login.use(cookieParser())
function auth_gen_session(user, res){
    let auth_user =user.user;
    res.cookie('suweiqing', auth_user, {
        path: '/',
        signed: false,//对cookie密码进行加密的话, 需要使用到cookieParser
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000
    })
}



//登录
login.get('/',function(req, res) {
    var _user = req.query;
    var name = _user.user;
    var password = _user.password;

    if (password ==undefined || password=='' || password==null){

        return res.json({code:'1',msg:'密码不能为空'})
    }

    else if (name ==undefined || name=='' || name==null){

        return  res.json({code:'1',msg:'账号不能为空'})
    }
    else{

        var sql='SELECT * FROM user  WHERE  user='+name+' AND password='+password+'';

        db.query(sql,[],function (result,fields){

            console.log(result)

            if (result.length==0){

               return   res.json({code:1,
                    msg:'登录失败，账号不存在或者账号密码不对'})
            }

            else {
                req.session.user = result[0];
                auth_gen_session(result[0], res);
                console.log(req.session.user)
                return res.redirect('/admin')  //设置标头，也就是跳转路由
            }

        })

    }


})






module.exports = login;