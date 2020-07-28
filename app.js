var express =         require('express');
var bodyParser =      require('body-parser');
var login =           require('./controller/login');
var admin =           require('./controller/admin');
var employee=         require('./controller/employee');
var addEmployee =     require('./controller/Admin/AddEmployee');
var allEmployeeList = require('./controller/Admin/AllEmployeeList');
var update          = require('./controller/Admin/update');
var dlt             = require('./controller/Admin/delete');
var myProfile       = require('./controller/Employee/MyProfile');
var updateProfile   = require('./controller/Employee/UpdateProfile');
var app =         express();

app.set('view engine', 'ejs');

//middleware
app.use(bodyParser());
app.use('/login',login);
app.use('/admin',admin);
app.use('/employee',employee);
app.use('/Admin/AddEmployee',addEmployee);
app.use('/Admin/AllEmployeeList',allEmployeeList);
app.use('/Admin/update/1',update);
app.use('/Admin/delete/1',dlt);
app.use('/Employee/MyProfile',myProfile);
app.use('/Employee/UpdateProfile',updateProfile);


app.listen(58822,function(){
  console.log('express http server started at ....58822');
})
