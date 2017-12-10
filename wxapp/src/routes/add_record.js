var express = require('express');
var router = express.Router();
var redis = require("redis"),
    client = redis.createClient();
var uuid = require("uuid");

router.put('/addRecord', function(req, res, next) {
  console.log("userId" + req.body.userId);
  console.log("msg" + req.body.msg);
  var msg = req.body.msg;
  var userId = req.body.userId;
  var userRecordsKey = "RECORD_" + userId;
  var key = uuid.v1();
  console.log("UUID-KEY:" + key);
  var multi = client.multi();
  multi.lpush(userRecordsKey, key);
  multi.set(key, msg);
  multi.exec(function (err, replies) {});
  
  res.send("add record OK");
});

module.exports = router;

