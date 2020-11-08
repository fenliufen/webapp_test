const db = require('../mysql/mysql');



var cookie_page = function authUser(req,res,next){
    //中间件, 所有的请求都要经过它, 我们在这来判断用户的登录情况
    if(req.session.user) {
        next();//用户已经登录情况下, 直接下一步
    }
    else {
        //需要通过cookie去生成session
        //1.获取cookie
        let auth_token = req.signedCookies['suweiqing'];//cookie-parser直接帮我解密了
        if (!auth_token) {
            next();//用户没有cookie的情况
        }
        else {
            //2.通过cookie生成session
            let user_id = auth_token;
            //数据库去找这个用户ID
            db.query('select * from suer where name='+user_id+'',[],function (result,fields){
                if (result.length==0) {
                    return res.end('没查到数据，用户没有登录');
                } else {
                    if (!result[0].name) {
                        next();
                    }
                    else {
                        //3.结束
                        req.session.user =result[0].name;
                        next();
                    }
                }
            })


        }
    }
}


module.exports=cookie_page