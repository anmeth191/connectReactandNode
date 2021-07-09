// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios';
// import PostApp from './PostApp';


// class App extends React.Component {
  
//     constructor(props){
//       super(props);
    
//       this.state = {
//       requestClient:[]
//       }


//     }

//  createRequest = async ()=>{

//   const requestServer = await axios.get('http://127.0.0.1:8080/').then((response) =>{ 
//     this.setState({requestClient:response.data.userData.user} , ()=>{ return this.state.requestClient});
//   }).catch((error)=>{ console.log('There is a error trying to request the server')})
   
//  }

//  componentDidMount(){
//    this.createRequest();
//   }

//   render(){

// return(
//     <div className="App">
//      {   this.state.requestClient.map((element)=>{
//        return(
//          <div key={element.id}>
//            <h1>{element.name}</h1>
//          </div>
//        )
//      })

//      }

// <PostApp />
//     </div>
//   );
// }
// }

// export default App;


import React from 'react';
import axios from 'axios';
import './App.css';
import PostApp from './PostApp';


 class App extends React.Component{
     constructor(props){
         super(props);

         this.state = {
             users:[]
         }
     }
 
 
getServerRequest = async ()=>{
//create the get request using axios to our local server in node js
/*the get the response and and go to the data and find the users array
and assing it in the state users , if there is an error then use the catch
this was made using asyn await to resolve the promise then */
const getRequest = await axios.get('http://127.0.0.1:8080/').then( response =>{
    this.setState({users:response.data.users} , ()=>{ return this.state.users})
}).catch((error) =>{ console.log(error)})

return getRequest;

}

componentDidMount(){
    this.getServerRequest();
}

 render(){
     /* use map to render the state of the users that are coming from
     the server side using nodejs*/
     return( 
         <div className="App">
            <h1>Users</h1>
          {this.state.users.map( user =>{
              return(
                  <div key={user.id}>
                      <h2>{user.name}</h2>
                      <h2>{user.emailUser}</h2>
                      </div>
              )
          })}
          <PostApp />
         </div>
     )
 }
 }

 export default App;

