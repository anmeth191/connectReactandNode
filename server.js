const express = require('express');
const app = express();
const session = require('express-session');
const cors = require('cors')




app.use(session({
    //this is the key that i will use to access to my session
    secret:"session key",
    //this means that for every request to the server we want to create a new sesssion even if is the same user 
    //or broser
    resave:false,
    saveUninitialized:false

}))

const checkCors = app.use((request , response , next) =>{
     
   request.header('Access-Control-Allow-Origin' , '*');
   next();

})


app.get('/' , checkCors , (request , response ) =>{
    console.log(request.session);

 //   request.session.isAuth = true;
    response.send('<h1>Hello from the server</h1>');
})


app.listen(8000 , ()=>{
    console.log('server running');
})