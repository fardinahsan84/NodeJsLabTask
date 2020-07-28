var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
  res.render('AllEmployeeList');
})

router.post('/',function(req,res){
  if(req.body.choice=="update"){
    res.redirect('/Admin/update');
  }
  else if(req.body.choice=="delete"){
    res.redirect('/Admin/delete');
  }
})

module.exports = router;
