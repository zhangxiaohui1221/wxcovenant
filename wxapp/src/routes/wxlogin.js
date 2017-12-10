var express = require('express');
var router = express.Router();
var url = require("url");
var https = require("https");
var redis = require("redis"),
    client = redis.createClient();

/* GET home page. */
router.get('/wxlogin', function(req, res, next) {
  console.error(url.parse(req.url, true).query.code);
  var code = url.parse(req.url, true).query.code;
  var wxurl = "https://api.weixin.qq.com/sns/jscode2session?appid=wxe1976fab69ff57c2&secret=1a20b0a41943386de1482ac31cb8a297&js_code="+code+"&grant_type=authorization_code";
  https.get(wxurl, function(wxres){
    console.error("WX-IN");
    wxres.on('data', (d)=>{
        var openid = JSON.parse(d).openid;
        res.send(JSON.parse(d).openid);
    });
  });
});

module.exports = router;
