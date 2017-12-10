var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Hello World. 罗璇 张晓辉 家的网站");
});

module.exports = router;
