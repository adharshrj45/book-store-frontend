import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FaGoogle} from 'react-icons/fa'
import { useForm } from "react-hook-form";
import { useAuth } from '../context/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {
    const [message, setMessage] = useState('');
    const {registerUser,googleSignIn}=useAuth();
    const navigate=useNavigate();
        const { register, handleSubmit, watch, formState: { errors } } = useForm();
        const onSubmit = async(data) => {
            try {
             await registerUser(data.email,data.password); 
             Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "user registered successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate("/login");
             
            } catch (error) {
                setMessage("please provide valid email and password");
                console.log(error);
            }
        }
    
        const handleGoogleSignIn = async() => {
            try {
                await googleSignIn();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login Successful",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate("/");
             
            } catch (error) {
                alert("google sign in failed");
                console.log(error);
            }
        }   
  return (
    <div className='h-[calc(100vh-120px)] border flex justify-center items-center'>
      <div className='w-full max-w-sm mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-xl font-semibold mb-4'>Please Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4'>
                <label htmlFor="email" className='block text-gray-700 text-sm font-bold  mb-2'>Email</label>
                <input {...register("email", { required: true })} type="email" name="email" id='email' className='shadow appearance-none border rounded w-full px-3 py-2 leading-tight focus:outline-primary' placeholder='Email Address'/>
            </div>
            <div className='mb-4'>
                <label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
                <input {...register("password", { required: true })} type="password" name="password" id='password' className='shadow appearance-none border rounded w-full px-3 py-2 leading-tight focus:outline-primary' placeholder='Password'/>
            </div>
            {
                message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
            }
            <div className='mb-6'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'>Register</button>
            </div>
        </form>
        <p className='align-baseline font-medium text-sm mt-4'>have an account? Please<Link to="/login" className='text-blue-500 hover:text-blue-700'> Login</Link></p>
        {/* Google Sign IN */}
        <div className='mt-4'>
            <button onClick={handleGoogleSignIn} className='w-full bg-secondary flex flex-wrap items-center justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                <FaGoogle className='mr-3'/>
                Sign in with Google
            </button>
        </div>

        <p className='mt-5 text-xs text-center text-gray-500'>@2025 Book Store All rights reserved</p>
      </div>
    </div>
  )
}

export default Register
