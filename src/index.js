import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Profile from './components/pages/Profile';


 const router = createBrowserRouter(
    [
        {

    path:'/',
    element:<App/>,
    children:[ {
        path:'perfil',
        element:<Profile />
        }
    ]

   
    
    },




])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    
    
    <  RouterProvider router={router} /> 
  
);




