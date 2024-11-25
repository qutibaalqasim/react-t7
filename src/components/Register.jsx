import axios from 'axios';

import { useFormik } from 'formik'
import React from 'react'

export default function Register() {


    const formik = useFormik({
        initialValues:{
            userName:'',
            email:'',
            password:'',
        },onSubmit: registerUser
    });

   async function registerUser(){

     const {data}  =  await axios.post('https://ecommerce-node4.onrender.com/auth/signup',formik.values);
     console.log(data);
    }
  return (
    <div>
        <h1 className='text-success text-center mt-4'>Register Form </h1>

        <form onSubmit={formik.handleSubmit} className='container mt-4 '>
            
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" name='userName' onChange={formik.handleChange} value={formik.userName} placeholder="" />
                <label htmlFor="floatingInput">userName</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" name='email' onChange={formik.handleChange} value={formik.email} placeholder="" />
                <label htmlFor="floatingInput">userEmail</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingInput" name='password' onChange={formik.handleChange} value={formik.password} placeholder="" />
                <label htmlFor="floatingInput">userPassword</label>
            </div>

            <button type="submit" className="btn btn-outline-success">Register</button>
        </form>
    </div>
  )
}
