const express = require("express")
const app = express();
const bodyParser = require("body-parser");
var debug = require('debug')('my-application');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.post("/login",function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    if(username === 'zhenling' && password === '321'){
        res.send({
            code:200,
            msg:"登陆成功",
            username:"zhenling",
            token:"W3ER33TRHE435TERTG45edE"
        })
    }else{
        res.send({
            code:500,
            msg:"登陆失败"
        })
    }
})

app.listen(3000,function(){
    console.log(3000);
})