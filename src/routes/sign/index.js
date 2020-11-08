var express = require('express');
var router = express.Router();
var db = require("../mysql/mysql");
var Session = require('../session');


// 注册接口
router.post('/',function (req,res,next) {

    if (req.body=={}){
       return  res.send('user,password,sex,e_mail 字段不能为空，请检查填写情况')

    }

    else{
        var t=/^[A-Za-zd0-9]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
        var data={
            user: String(req.body.user),
            password:String(req.body.password),
            sex:req.body.sex=='男'?0:1,
            phone: String(req.body.phone),
            e_mail: String(req.body.e_mail),
            name: String(req.body.name),
            portrait:String(req.body.portrait)
        };
        console.log(data);

        if(data.user==null || data.user==="" || data.user==='undefined'){
            return  res.json({code:1, msg:'用户名不能为空'})

        }

        else if(data.password==null || data.password==="" || data.password==='undefined'){
            return  res.json({code:1, msg:'密码不能为空'})

        }

        else if(data.e_mail==null || data.e_mail==="" || data.e_mail==='undefined'){
            return  res.json({code:1, msg:'邮箱不能为空'})
        }

        else if(!t.test(data.e_mail)){
            return  res.json({code:1, msg:'邮箱格式不对'})
        }

        else {

            db.query('select * from user where user="'+data.user+'"',[],function (result,fields) {

                if (result.length>0){

                    return  res.json({code:1, msg:''+data.user+':用户已存在，请重新输入用户名'})

                }

                else{


                    var  addSql = 'INSERT INTO user (user,password,sex,phone,e_mail,name,portrait) VALUES(?,?,?,?,?,?,?)';  //新增用户sql
                    var  addSqlParams =[data.user,data.password,data.sex,data.phone,data.e_mail,data.name,data.portrait];

                    db.query(addSql,addSqlParams,function (result,fields) {
                        console.log(result);
                        return  res.json(
                            {code:0, msg:'新增成功'}
                        )
                    })

                }
            });


        }



    }


});


module.exports = router;