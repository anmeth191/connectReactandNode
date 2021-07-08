const express = require('express');
const getController = require('./controller/getController');
const app = express();
//this module allows to communicate our server side with the client side, thinking that the server side is an API
const cors = require('cors');

app.set('view engine' , 'ejs');

//app use the cors module and then set the methods you would like to use
app.use(cors({
methods: ['GET' , 'POST']  //in this case i only have used get and post but i can use put , delete and patch if needed 
}))

//  CORS The default configuration is the equivalent of:

// // {
// //   "origin": "*",
// //   "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
// //   "preflightContinue": false,
// //   "optionsSuccessStatus": 204
// // }

app.use(express.json())
getController(app);

app.listen(8080 , ()=>{ console.log('your server has started using por 8080')});