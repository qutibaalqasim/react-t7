import React from 'react'

export default function Appp() {
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
