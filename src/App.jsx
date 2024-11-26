import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import LogIn from './components/LogIn'
import Register from './components/Register'
import { jwtDecode } from "jwt-decode";
import Root from './assets/Root';
import Profile from './components/Profile'
import UserContextProvider from './components/context/User'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function App() {

  const router = createBrowserRouter([
   {
    path:'/',
    element: <Root />,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: 
        
        <LogIn/>
        
      },
      {
        path: '/register',
        element:
       
            <Register />
        
        
      },
      {
        path: '/profile',
        element: <Profile />
      }
    ]
   }
   
  ]);

  return (
    <UserContextProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </UserContextProvider>

  )
}
