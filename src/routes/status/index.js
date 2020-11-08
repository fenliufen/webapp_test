var express = require('express');
var router = express.Router();
var Session = require('../session');

// 获取登录页面
router.get('/', function(req, res, next) {
    var sedata = new Session();
    sedata.session(function(session){
        if(req.session.userName){
            console.log(req.session.userName);
            res.redirect('/login');
        }
        else{

           return   res.redirect('/login');
        }
    });

});


module.exports = router;
