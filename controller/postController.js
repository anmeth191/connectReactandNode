 const bodyParser = require("body-parser")
const urlenCodedParser = bodyParser.urlencoded({extended:false});
// module.exports = (app)=>{
//     app.use(bodyParser.json());


//     app.post('/',urlenCodedParser , (request , response) =>{
//      response.json({
//          status:'success',
//          message:'You have made a successful request'
//      })
//      console.log(request.body)
//     })

// }

const userData = require('../model/userData');


module.exports = (app) =>{
app.post('/' , urlenCodedParser , (request , response)=>{
const user  = userData.userData.user;
user.push(request.body);   
    response.json({
        success:'your post has been completed',
        user : [...user]
    })


})


}