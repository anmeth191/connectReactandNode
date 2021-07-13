const UserData = require('../model/userData');

//receive the post request from the client in react 


module.exports = (app)=>{

app.post('/' , authUser,(request , response) =>{
    response.json({
        status:201,
        message:'Your post has been created',
        body: request.body
    })//end of the response 

})//end of the post controller

}//end of the full module controller


function authUser(request , response , next){

const emailSent  = request.body.emailUser;

     const verifyEmail = UserData.userData.user.find( element =>{    
        return element.emailUser === emailSent
     })

     if(verifyEmail === undefined){
        UserData.userData.user.push(request.body)
        next();
     }else{
         response.send('user exist already')
     }


}

