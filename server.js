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
   response.header("Access-Control-Allow-Origin" , "http://localhost:3000");
   next();

})



app.get('/', (request , response ) =>{
    response.send('Hello user')
})


app.get('/login' , (request , response) =>{
    

    response.json({
        message:'Hello from the login component'
    })
})

app.listen(8000 , ()=>{
    console.log('server running');
})