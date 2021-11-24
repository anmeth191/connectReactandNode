import React , { useState } from 'react';
import axios from 'axios';

function LoginComponent(){

const [username , setUsername ] = useState('');
const [password , setPassword ] = useState('');


function submitForm(event){
event.preventDefault();


 checkFields(createRequest)


}


function createRequest(value){

if(value){
axios.get('http://127.0.0.1:8000/login').then( response =>{  console.log( response.data.message)}).catch( error =>{ console.log( error )})
}else{

console.log('this request has not been created')    
}

}

function checkFields(callback){
    if(username.length > 3 ){
     callback(true)   
    }else{
      callback(false)
    }

}


return(
    <div>

     <form onSubmit={ submitForm }>
         <h1>Login form</h1>
            <div>
           <label value={ username } htmlFor="username">Username: </label>
           <input type="text" id="username" onChange={(event)=>{     
               setUsername(event.target.value);
           }}/>
           </div>

           <div>
           <label htmlFor="username">Password: </label>
           <input value={ password }  type="text" id="password" onChange={(event)=>{
                       setPassword(event.target.value)
           }}/>
           </div>

           <div>
           <button type="submit">Login</button>
           </div>
         </form>  
    </div>
)



}


export default LoginComponent;