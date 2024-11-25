import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import LogIn from './components/LogIn'
import Register from './components/Register'
import { useNavigate } from 'react-router-dom'

export default function App() {

  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(localStorage.getItem('userToken')? true : false);
  const [userData, setUserData] = useState({});

  function handleLogOut(){
    localStorage.removeItem('userToken');
    setIsLogin(false);
    setUserData({});
    navigate('/login');
  }

  return (
    <>
    <Navbar isLogin = {isLogin} handleLogOut={handleLogOut} userData={userData} />
    <Routes>
      <Route path='/' element ={<Home />}> </Route>
      <Route path='/login' element ={<LogIn setIsLogin={setIsLogin} setUserData={setUserData}/>}> </Route>
      <Route path='/register' element ={<Register />}> </Route>
      <Route path='/*' element ={<h2>page not found</h2>}> </Route>
    </Routes>

    </>
    
  )
}
