import axios from 'axios';
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react'
import * as yup from 'yup';
import { jwtDecode } from "jwt-decode";
import { UserContext } from './context/User';
import { Bounce, toast, Zoom } from 'react-toastify';


export default function LogIn() {

  const {setUserData, setIsLogin}  = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState('');
 

    const navigate = useNavigate();

    const schema = yup.object({
        email: yup.string().email().required().min(5).max(20),
        password: yup.string().required().min(8).max(20),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async () => {
          try{
            const {data} = await axios.post('https://ecommerce-node4.onrender.com/auth/signin',formik.values);
            console.log(data);
            if(data.message == 'success'){
             localStorage.setItem('userToken',data.token);
             setIsLogin(true);
             const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NDQ5Nzk3MWYxOTA2NTZmN2UyNDcxZCIsInVzZXJOYW1lIjoicXVpdGJhIiwicm9sZSI6IlVzZXIiLCJzdGF0dXMiOiJBY3RpdmUiLCJpYXQiOjE3MzI1NTYyNTN9.jlcXN4HSuBA8KU1XMkBF5_CQNk7O3QhA7b75dPiz4fY";
             const decoded = jwtDecode(token);
             setUserData(decoded);
             toast('welcome qutiba have a great day!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
              });
             navigate('/');
            }
          }catch (error){
            toast.error(error.response.data.message, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Zoom,
              });
            setErrorMessage();
          }
         
            
           
        },
        validationSchema: schema
    });

    
  return (
    <div>
        <h1 className='text-center text-success'>Login</h1>
      {
        errorMessage?<div className='alert alert-danger'>
        {errorMessage}
</div>: null
      }  
       

        <form onSubmit={formik.handleSubmit} className='container'>
      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" onBlur={formik.handleBlur} name='email' value={formik.email} onChange={formik.handleChange} placeholder="" />
        <label htmlFor="floatingInput">UserEmail</label>
        {formik.touched.email && formik.errors.email ? <div className='alert alert-danger'>{formik.errors.email}</div>   :null}
    </div>

    <div className="form-floating mb-3">
        <input type="password" className="form-control" id="floatingInput" onBlur={formik.handleBlur} name='password' value={formik.password} onChange={formik.handleChange} placeholder="" />
        <label htmlFor="floatingInput">UserPassword</label>
        {formik.touched.password && formik.errors.password ? <div className='alert alert-danger'>{formik.errors.password}</div>   :null}
    </div>

       <button type='submit' className='btn btn-outline-success'>submit</button>

        </form>
    </div>
  )
}
