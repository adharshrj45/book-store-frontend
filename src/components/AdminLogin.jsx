import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import axios from "axios";
import Swal from 'sweetalert2';
import getBaseUrl from '../utils/getBaseUrl';

const AdminLogin = () => {
    const [message, setMessage] = useState('');
    const navigate=useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async(data) => {
        console.log(data);
      try {
        const response = await axios.post(`${getBaseUrl()}/api/auth/admin`,data,{
            headers:{
                "Content-Type":"application/json"
            }
        })
        const auth=response.data;
        if(auth.token){
            localStorage.setItem('token',auth.token);
            setTimeout(() => {
                localStorage.removeItem('token');
                alert("Token has been expired!, Please login again");
                navigate("/")
            },3600*1000)
        }

        alert("Login successful");
        navigate("/dashboard");
        // Swal.fire({
        //             position: "center",
        //             icon: "success",
        //             title: "Login successfull",
        //             showConfirmButton: false,
        //             timer: 1500
        //           });
        // navigate("/");
      
      } catch (error) {
        setMessage("please provide valid email and password");
        console.log(error);
      }
    }
  return (
    <div className='h-screen border flex justify-center items-center'>
      <div className='w-full max-w-sm mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-xl font-semibold mb-4'>Admin Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4'>
                <label htmlFor="username" className='block text-gray-700 text-sm font-bold  mb-2'>Username</label>
                <input {...register("username", { required: true })} type="text" name="username" id='email' className='shadow appearance-none border rounded w-full px-3 py-2 leading-tight focus:outline-primary' placeholder='Email Address'/>
            </div>
            <div className='mb-4'>
                <label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
                <input {...register("password", { required: true })} type="password" name="password" id='password' className='shadow appearance-none border rounded w-full px-3 py-2 leading-tight focus:outline-primary' placeholder='Password'/>
            </div>
            {
                message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
            }
            <div className='w-full'>
                <button className='bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'>Login</button>
            </div>
        </form>
        

        <p className='mt-5 text-xs text-center text-gray-500'>@2025 Book Store All rights reserved</p>
      </div>
    </div>
  )
}

export default AdminLogin
