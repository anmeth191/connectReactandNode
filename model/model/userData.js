/*


Model Resources
user
course


turn them into plural as good practice:
users -> /home/users
courses -> /home/courses


define my resorces models

user model:
userId (UNIQUE IDENTIFIER)
name
emailUser
passwordUser
level
idCourse /this is my resource association in order to join both models


course model
idCourse (UNIQUE IDENTIFIER)
name
location 
date

*/

 

const  userData = {
   
   /*User id is the unique id for each user
    name:is the username in register,
    emailUser: user's email ,
    passwordUser: user's password,
    level: level whith the user's access
   */
    user:[
        {userId:1, name:'Bacon' , emailUser:'bacon@gmail.com' , passwordUser:'1234' , level:'user', idCourse:1},
        {userId:2, name:'Mushy' , emailUser:'mushy@gmail.com' , passwordUser:'1234' , level:'user', idCourse:1},
        {userId:3, name:'Pepper' , emailUser:'pepper@gmail.com' , passwordUser:'1234' , level:'user', idCourse:3},
        {userId:4, name:'Tortilla' , emailUser:'tortilla@gmail.com' , passwordUser:'1234' , level:'user', idCourse:2},
        {userId:5, name:'Loki' ,  emailUser:'loki@gmail.com' , passwordUser:'1234' , level:'admin', idCourse: 4},
        {userId:6, name:'Rocky' ,  emailUser:'rocky@gmail.com' , passwordUser:'1234' , level:'admin', idCourse:3}
        ],


        /**/
      
        course:[
            {idCourse:1 , name:'PHP' , location:'Udemy' , date:'01/01/2021'},
            {idCourse:2 , name:'CSS' , location:'PluralSight' , date:'01/01/2021'},
            {idCourse:3 , name:'JavaScript' , location:'Udemy' , date:'01/01/2021'},
            {idCourse:4 , name:'NodeJs' , location:'Coursera' , date:'01/01/2021'},
            
        ]
        
    
        //end of the array
}//end of the users

module.exports = { userData }