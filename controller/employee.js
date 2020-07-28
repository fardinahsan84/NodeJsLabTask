var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
  res.render('employee');
})

router.post('/',function(req,res){
  if(req.body.choice=="MyProfile"){
    res.redirect('/Employee/MyProfile');
  }
  else if(req.body.choice=="UpdateProfile"){
    res.redirect('/Employee/UpdateProfile');
  }
})

module.exports = router;
