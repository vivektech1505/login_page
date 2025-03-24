"use client"
import React, { FormEvent, useState } from 'react'
import { Eye, EyeOff } from 'lucide-react';


const FormValidation = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

   const handleNameChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);

    if(value.length < 4 || value.length >= 10){
        setNameError("Minimum 4 and maximum 10 characters are allowed.");
    } else {
        setNameError("")
    }
   }
   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(value)) {
        setEmailError("Please enter a valid email address.");
    } else {
        setEmailError("");
    }
};

const handlePasswordChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 4) {
        setPasswordError("Password must be at least 4 characters.");
    } else if (value.length > 10) {
        setPasswordError("Password must not exceed 10 characters.");
    } else {
        setPasswordError("");
    }

    if (confirmPassword && value !== confirmPassword) {
        setConfirmPasswordError("Passwords do not match.");
    } else if (confirmPassword) {
        setConfirmPasswordError("");
    }
};

const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);

     if (value !== password) {
        setConfirmPasswordError("Passwords do not match.");
    } else {
        setConfirmPasswordError("");
    }
};

    const handleSubmt = (e: FormEvent) => {
        e.preventDefault();
        setNameError("");
        setEmailError("");
        setPasswordError("");
        setConfirmPasswordError("");
    
        let isValid = true;

        if (!name.trim()) {
            setNameError("Name is required.");
            isValid = false;
        } 
    
        if (!email.trim()) {
            setEmailError("Email is required.");
            isValid = false;
        }

        if (!password.trim()) {
            setPasswordError("Password is required.");
            isValid = false;
        }

        if (!confirmPassword.trim()) {
            setConfirmPasswordError("Confirm Password is required.");
            isValid = false;
        }
    
        if (!isValid) return;
        
        alert(`Form submitted successfully:
            Name: ${name}
            Email: ${email}
            Password : ${password}
            Confirm Password: ${confirmPassword}`);
    
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };


  return (
    <div className='w-[70%]  mx-auto brounded border-2 flex justify-between items-center bg-violet-800'>
      <h1 className='mb-4 w-fit bg-amber-200 rounded p-3 ml-5 flex mx-auto text-red-800'>form validation using react hook</h1>
      <form onSubmit={(e)=>handleSubmt(e)} className='flex w-3/4 flex-col items-center space-y-4 mb-2'>
        <div className='flex flex-col items-center w-full'>
            <label className='mb-2 mt-5 items-center'>Name</label>
            <input type="text" 
            placeholder='Enter your name'
            className='rounded p-2 border w-1/2 items-center'
            onChange={(e)=> handleNameChange(e)}
            value={name}/>
            {nameError && <p className='text-red-600'>{nameError}</p>}
        </div>
        <div className='flex flex-col items-center w-full'>
            <label className='mb-2'>Email </label>
            <input type="email" 
            placeholder='Enter email id'
            className='rounded p-2 border w-1/2 items-center'
            onChange={(e)=>handleEmailChange(e)}
            value={email}/>
            {emailError && <p className='text-red-600'>{emailError}</p>}
        </div>
        <div className='flex relative flex-col items-center w-full'>
            <label className='mb-2'>Password</label>
            <input type={showPassword ? "text" : "password"} 
            placeholder='Enter your password'
            className='rounded p-2 border w-1/2 items-center'
            onChange={(e)=> handlePasswordChnage(e)}
            value={password}/>
         <button
          type='button'
          className='absolute right-44 top-11 cursor-pointer rounded'
          onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
            {passwordError && <p className='text-red-600'>{passwordError}</p>}
        </div>
        <div className='flex flex-col items-center relative w-full'>
            <label className='mb-2'>Confirm Password</label>
            <input type={showConfirmPassword ? "text" : "password"}
            placeholder='Enter confirm password' 
            className='rounded p-2 border w-1/2 items-center'
            onChange={(e)=>handleConfirmPasswordChange(e)}
            value={confirmPassword}/>
            <button type='button' className='absolute right-44 top-11 cursor-pointer rounded'
            onClick={()=> setShowConfirmPassword((prev => !prev))}>
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20}/>}
            </button>
            {confirmPasswordError && <p className='text-red-600'>{confirmPasswordError}</p>}
        </div>
      <button className='w-fit h-8 rounded px-10 mt-5 mb-5 bg-amber-50 text-black cursor-pointer hover:bg-amber-400 hover:text-white' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormValidation
