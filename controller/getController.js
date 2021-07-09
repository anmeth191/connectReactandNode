const userData = require('../model/userData');

// do the get request from the home 
module.exports = (app)=>{
   //get the response when the server goes to / 
    app.get('/' , (request , response)=>{
         //send a response in json format to the client  
        response.json({
            success:'Your request has been succesful', //send a message
            users: userData.userData.user //send the information coming from the model UserData
        })//end of the reponse 
    })//end of the get
}

//THE CLIENT IS GOING TO DO THE GET REQUEST IN REACT IN THE COMPONENT APP 
/*AND IS GOING TO RECEIVE THIS JSON USERS AND DISPLAY IT IN 127.0.0.1:3000*/