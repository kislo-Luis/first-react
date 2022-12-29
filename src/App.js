import React from 'react';
import NavBar from './components/navigation/NavBar';


import { Route,Router,Routes,Link } from 'react-router-dom';
import Home from './components/pages/Home';
import { Outlet } from 'react-router-dom';


function App() {

  return (

    <div >
     

    

          <NavBar/>
          <div><Outlet /></div>



        
     
     
    </div>
  );
}

export default App;














