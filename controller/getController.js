const userData = require('../model/userData');


module.exports = (app)=>{

    app.get('/' , (request , response) =>{
        response.send(userData);
    })
}