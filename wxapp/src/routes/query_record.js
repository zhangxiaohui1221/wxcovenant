var express = require('express');
var router = express.Router();
var redis = require("redis"),
    client = redis.createClient();

router.post('/queryRecords', function(req, resp, next) {
  console.log("userId" + req.body.userId);
  var msg = req.body.msg;
  var userId = req.body.userId;
  var userRecordsKey = "RECORD_" + userId;
  client.lrange(userRecordsKey, 0, 10, function(err, res){
    client.mget(res, function(err, res){
      resp.send({"records": res});
    });
  });
});

module.exports = router;

