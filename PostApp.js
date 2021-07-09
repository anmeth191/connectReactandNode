// import React from 'react';
// import axios from 'axios';


// class PostApp extends React.Component{
//     constructor(props){
//         super(props);

//         this.state = {
//             username:'',
//             email:'',
//             password:''
//         }
//     }

// submitForm = (event)=>{
//  event.preventDefault();
 
// let [ username ] =  this.state.username;
// let [ email ] = this.state.email;
// let [ password ] = this.state.password;
//  this.postRequest(username , email , password);
// }

// postRequest = async (username , email , password)=>{
   

//     const options = { 
//         method:'POST', 
//         url:'http://127.0.0.1:8080/',  
// //headers:{'Content-Type':'application/json'},
//         data:{
//             id:7,
//             name:username,
//             emailUser:email,
//             passwordUser:password,
//             level:'USER',
//         }
//     }

//     const response = await axios(options).then( response =>{
//         console.log(response.data)
//     })



// }


// handleChange = (event)=>{
//     this.setState({[event.target.name]:[event.target.value]});
// }

// render() {
//     return (
//      <div>
//        <form onSubmit={ this.submitForm } method="POST">
//         <input type="text" name="username" onChange={this.handleChange} placeholder="username" value={this.state.username}/>
//         <input type="text" name="email"    onChange={this.handleChange} placeholder="email" value={this.state.email}/>
//         <input type="text" name="password" onChange={this.handleChange} placeholder="password" value={this.state.password}/>
//         <button type="submit">Submit</button>
//        </form>

//      </div>    
//     )
// }
// }

// export default PostApp;




/*Create a POST request using using axios and from the client side in react
to the nodejs server
*/


import React from 'react';
import axios from 'axios';


class PostApp extends React.Component{

 constructor(props){
     super(props);
 }

 submitHandler = (event)=>{
  event.preventDefault();
  const [ username ] = this.state.username;
  const [ email ] = this.state.email;
  const [ password ] = this.state.password;

  this.postNewUser( username , email , password);
 }


 postNewUser = async (username , email , password) =>{
    
 
const postUser = await axios({
    method:'POST', 
    url:'http://127.0.0.1:8080/',
    data:{
        id:1, 
         name:username ,
         emailUser: email , 
         passwordUser:password, 
         level:'USER',
    }
}).then( response =>{ console.log(response.data)})

 }


 changeHandler = (event)=>{

    this.setState({[event.target.name]:[event.target.value]} , ()=>{
        return this.state;
    })

 }

render(){
    return(
        <div>
            <form onSubmit={this.submitHandler}>
            <input type="text" name="username" placeholder="username" onChange={this.changeHandler}/>
            <input type="text" name="email" placeholder="email" onChange={this.changeHandler}/>
            <input type="text" name="password" placeholder="password" onChange={this.changeHandler}/>
            <button type="submit">Submit</button>
            </form>
            </div>
    )
}
}

export default PostApp;
