import React from 'react';
import { BrowserRouter as Router, Route  , Routes } from 'react-router-dom';
import LoginComponent from './components/loginComponent';
import HomeComponent from './components/homeComponent';

function App() {
  return (
    <div className="App"> 
  <Router>
    <Routes>
      <Route  exact path="/" element={< HomeComponent />}   />
     <Route     path="/login" element={< LoginComponent /> }/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
