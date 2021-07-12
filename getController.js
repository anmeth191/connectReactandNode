const userData = require('../model/userData');

// do the get request from the home 
module.exports = (app)=>{
   //get the response when the server goes to / 
 
    app.get('/' , (request , response) =>{
        response.json({
            status:200,
            messageSuccess:'Your get request has been processed',
            users: userData.userData.user 
        })
     })
 

//get the response for an specific user
app.get('/users' , (request , response) =>{
   const queryValue = request.query;
   
   let { id } = queryValue;
 /*find for the user sent in the request.query and return it in the response of the server*/
   const userReturn = userData.userData.user.find((element) =>{
       return element.userId === parseInt(id)
   })

//send the response to the client 
    response.json({
        //send the status
        status:200,
        //a message of success
        message:'Your request to user details has been completed',
        //the data that is going to be rendered in the component in react in this case the client is looking for user
        user: userReturn
    })
})

}






//THE CLIENT IS GOING TO DO THE GET REQUEST IN REACT IN THE COMPONENT APP 
/*AND IS GOING TO RECEIVE THIS JSON USERS AND DISPLAY IT IN 127.0.0.1:3000*/