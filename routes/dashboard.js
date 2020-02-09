var express = require('express');
var router = express.Router();
const dashboard = require('../model/dashboard');

router.post('/store',function(req,res){
  post.store(req,body, function(err,result){
    res.redirect('/dashboard');
  });
});

module.exports = router;

/* sampai sini aja. */
router.get('/', function (req, res) {
  res.render('dashboard/dashboard');
});