import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/pages/Home';


 const router = createBrowserRouter(
    [
        {

    path:'/',
    element:<App/>,
    children:[ {
        path:'perfil',
        element:<Home />
        }
    ]

   
    
    },




])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    
    
    <  RouterProvider router={router} /> 
  
);




