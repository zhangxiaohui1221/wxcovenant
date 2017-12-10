var express = require('express');
var router = express.Router();
var redis = require("redis"),
    client = redis.createClient();

  var userId = "od88Q0ZnFZCqxVbqxNnzJP9rY0lk";
  var userRecordsKey = "RECORD_" + userId;
  console.log("userKey->" + userRecordsKey);
  var keys = [];
  client.lrange(userRecordsKey, 0, 10, function(err, res){
    console.log("KES->" + res);
    client.mget(res, function(err, res){
      console.log("VALUE->" + res);
    });
  });
