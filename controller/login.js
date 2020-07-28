var express = require('express');
var router = express.Router();
//var admin =  require('./controller/admin');

router.get('/',function(req,res){
  res.render('login');
})

router.post('/',function(req,res){
  if(req.body.username=="admin" && req.body.password=="admin"){
      res.redirect('/admin');
  }
  else if(req.body.username=="emp" && req.body.password=="emp"){
    res.redirect('/employee');
  }
  else{
    res.send('invalid username/password');
  }
})

module.exports = router;
