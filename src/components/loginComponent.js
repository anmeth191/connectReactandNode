import React , { useState } from 'react';
import axios from 'axios';

function LoginComponent(){

const [username , setUsername ] = useState('');
const [password , setPassword ] = useState('');


function submitForm(event){
event.preventDefault();

validateForm( createRequest )


}


function createRequest(value){

    if(value){
       axios.get('http://127.0.0.1:8000/').then( response =>{ console.log(response)}).catch( error =>{ console.log(error)})
    }else{
        console.log('there is an error in the field i am not requesting')
    }
}

function validateForm( callbackFunction ){
if(username.length > 2 && password.length > 2){
    callbackFunction(true)
    console.log('sending the request......')
}else{
    callbackFunction(false)
    console.log('cancelling the request')
}//end of the else
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