var express = require('express');
var router = express.Router();
var db = require("../mysql/mysql");
var Session = require('../session');


router.post('/', function(req, res, next) {

    var sedata = new Session();
    sedata.session(function(session){
        if(req.session.userName){  //判断session 状态，如果有效，则返回主页，否则转到登录页面
            console.log(req.session.userName+'用户已经登录');
            return   res.redirect('/home');
            // return res.json({'code':0,'msg':'认证成功，接下来就可以访问数据了'})
        }

        else{
            console.log(req.session.userName);
            return res.json({'code':1,'msg':'你还没有登录'})
        }


    });

});




module.exports = router;
