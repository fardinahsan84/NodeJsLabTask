var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
  res.render('AddEmployee');
})

router.post('/',function(req,res){
  res.send('employee added')
})

module.exports = router;
