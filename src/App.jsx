import React  from 'react'
import Home from './components/Home'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import LogIn from './components/LogIn'
import Register from './components/Register'
import Root from './assets/Root';
import Profile from './components/Profile'
import UserContextProvider from './components/context/User'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProtectedRouter, PublicRoute } from './components/ProtectedRouter'




export default function App() {

  const router = createBrowserRouter([
   {
    path:'/',
    element: <Root />,
    children:[
      {
        path: '/',
        element: 
        <ProtectedRouter>
          <Home />
        </ProtectedRouter>
      },
      {
        path: '/login',
        element: 
        <PublicRoute>

          <LogIn/>

        </PublicRoute>
        
      },
      {
        path: '/register',
        element:
       <PublicRoute>

         <Register />
       </PublicRoute>
        
        
      },
      {
        path: '/profile',
        element:
        <ProtectedRouter>
        <Profile />
        </ProtectedRouter>
      }
    ]
   }
   
  ]);

  return (
    <UserContextProvider>
      <div className="container">
      <RouterProvider router={router} />
      </div>
      <ToastContainer />
    </UserContextProvider>

  )
}
