var CryptoJS = require("crypto-js");//replace thie with script tag in browser env
var axios=require('axios');

//encrypt
// var rawStr = "hello world!";
// var wordArray = CryptoJS.enc.Utf8.parse(rawStr);
// var base64 = CryptoJS.enc.Base64.stringify(wordArray);
// console.log('encrypted:', base64);
//
// //decrypt
// var parsedWordArray = CryptoJS.enc.Base64.parse(base64);
// var parsedStr = parsedWordArray.toString(CryptoJS.enc.Utf8);
// console.log("parsed:",parsedStr);


var data={
    user:'liuxiaofwewewen333g',
    password:'1607187254',
    sex:'',
    phone:'13058420123',
    e_mail:'1607187254@qq.com',
    name:'刘小峰',
    portrait:''
};

axios.post('http://localhost:3000/sign',data)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        
		
		console.log(error);
    })；