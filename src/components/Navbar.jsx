import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from './context/User';

export default function Navbar() {
  const {isLogin,userData, setIsLogin, setUserData} = useContext(UserContext);
  
   const navigate = useNavigate();

  function handleLogOut(){
    localStorage.removeItem('userToken');
    setIsLogin(false);
    setUserData({});
    navigate('/login');
  };
  
  return (
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">Auth App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
      <ul className="navbar-nav">

        {
          isLogin? <>
          
        <li className="nav-item">
          <Link className="nav-link" to={'/profile'}>Welcome {userData.userName} </Link>
        </li>

        <li className="nav-item">
          <a className="nav-link " onClick={handleLogOut}>Logout</a>
        </li>
          </>
          :
          <>
          <li className="nav-item">
          <Link className="nav-link" to={'/login'}>Login</Link>
          </li>

          <li className="nav-item">
          <Link className="nav-link" to={'/register'}>Register</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to={'/'}>Home</Link>
        </li>
          </>

        }
        
       
        
      </ul>
    </div>
  </div>
</nav>

  )
}
