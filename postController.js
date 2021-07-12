const UserData = require('../model/userData');

//receive the post request from the client in react 


module.exports = (app)=>{

app.post('/' , (request , response) =>{
    response.json({
        status:201,
        message:'Your post has been created',
        body: request.body
    })//end of the response 

    UserData.userData.user.push(request.body)
})//end of the post controller

}//end of the full module controller