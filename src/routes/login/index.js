var express = require('express');
var router = express.Router();
var db = require("../mysql/mysql");
var Session = require('../session');


// 获取登录页面
router.get('/', function(req, res, next) {
    res.redirect('/login');
});


// 用户登录
router.post('/', function(req, res, next) {
    var sedata = new Session();
       var name=req.body.user;
       var password =req.body.password;

       if (name==null|| name==undefined|| name==''){

           return res.json({code:1,msg:"账号必填"})
       }

    if (password==null|| password==undefined|| password==''){

        return res.json({code:1,msg:"密码必填"})
    }



    sedata.session(function(session) {
        var sql='SELECT * FROM user  WHERE  user="'+name+'" AND password="'+password+'"';
        db.query(sql,[],function (result,fields) {
            if(result.length>0){
                console.log(result);
                req.session.userName= req.body.user;
                res.json({code:0,msg:'登录成功'})

            }else{
                res.json({code:1,msg:'登录失败,请检查账号密码是否正确'})
            }
        })


    });

});




module.exports = router;
