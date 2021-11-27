const express = require('express');
const app = express();
const session = require('express-session');
const cors = require('cors')
const bodyParser = require('body-parser');



app.use(session({
    //this is the key that i will use to access to my session
    secret:"session key",
    //this means that for every request to the server we want to create a new sesssion even if is the same user 
    //or broser
    resave:false,
    saveUninitialized:false

}))

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.json());

//create the access to cors from the client the origin is http://127.0.0.1:3000


//  app.use((request, response , next)=>{
//     response.header('Access-Control-Allow-Origin','*');
//     next();
// })
// app.use(cors({
//     origin:["http://127.0.0.1:3000"],
//     methods:["GET","POST"],
//     credentials:false,
//     optionsSuccessStatus:200

// }))
app.use((request , response , next) =>{
    response.header('Access-Control-Allow-Origin' , '*');
    next();
})

app.get('/',(request , response ) =>{
    response.send('Hello user')
})


app.get('/login',(request , response) =>{
    response.json({
        message:'Hello from the login component'
    })
})


app.post('/login' , ( request , response ) =>{

    const {name , pass } = request.body;

  console.log(request)
  if(name === "angel"){
  response.json({
      message:"hello"
  })
}else{
      console.log("no hay nada")
  }


})

app.listen(8000 , ()=>{
    console.log('server running');
})