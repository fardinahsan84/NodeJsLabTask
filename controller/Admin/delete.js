var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
  res.render('delete');
})

router.post('/',function(req,res){
  res.send('Deleted')
})

module.exports = router;
