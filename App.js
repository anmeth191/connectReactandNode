import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends React.Component {
  
    constructor(props){
      super(props);
    
      this.state = {
      requestClient:[]
      }


    }

 createRequest = async ()=>{

  const requestServer = await axios.get('http://127.0.0.1:8080/').then((response) =>{ 
    this.setState({requestClient:response.data.userData.user} , ()=>{ return this.state.requestClient});
  }).catch((error)=>{ console.log('There is a error trying to request the server')})
   
 }

 componentDidMount(){
   this.createRequest();
  }



  render(){
console.log(this.state.requestClient)

return(
    <div className="App">
     {   this.state.requestClient.map((element)=>{
       return(
         <div key={element.id}>
           <h1>{element.name}</h1>
         </div>
       )
     })

     }

    </div>
  );
}
}

export default App;
