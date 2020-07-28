var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
  res.render('admin');
})

router.post('/',function(req,res){
  if(req.body.choice=="AddEmployee"){
    res.redirect('/Admin/AddEmployee');
  }
  else if(req.body.choice=="AllEmployeeList"){
    res.redirect('/Admin/AllEmployeeList');
  }
})

module.exports = router;
