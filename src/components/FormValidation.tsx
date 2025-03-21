"use client"
import React, { FormEvent, useState } from 'react'

const FormValidation = () => {
    const handleSubmt = (e : FormEvent) => {
        e.preventDefault();
        if(!name.trim()) {
            setNameError("name is required");
            return;
        }
        if(!email){
            setEmailError("email is required");
            return;
        }
        if(!password){
            setPasswordError("Password is required");
            return;
        }
        if(password.length < 4) {
            setPasswordError("Password must be at least 4 characters");
            return;
        }
        if(password.length > 10) {
            setPasswordError("Password maximum 10 characters");
            return;
        }
        if(!confirmPassword){
            setConfirmPasswordError("Confirm Password is required");
        }
        if(password !== confirmPassword) {
            alert("Password and confirm password are not same");
            return;
        }
        
        console.log("Name : ", name);
        console.log("Email : ", email);
        console.log("Password : ",password)
        console.log("Confirm Password : ", confirmPassword);

        alert(`Form submitted successfully:
            Name: ${name}
            Email: ${email}
            Password: ${password}
            Confirm Password: ${confirmPassword}`);

        setName("")
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setNameError("");
        setEmailError("");
        setPasswordError("");
        setConfirmPasswordError("");
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [ confirmPassword, setConfirmPassword] = useState("")
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    

  return (
    <div className='w-[70%] mx-auto mt-2 brounded border-2 flex justify-between items-center bg-violet-400'>
      <h1 className='mb-4 w-fit bg-amber-200 rounded p-3 flex mx-auto text-red-800'>form validation using raect hook</h1>
      <form onSubmit={(e)=>handleSubmt(e)} className='flex w-1/2 flex-col items-center space-y-4 mb-2'>
        <div className='flex flex-col items-center'>
            <label className='mb-2'>Name</label>
            <input type="text" 
            placeholder='Enter your name'
            className='rounded p-2 border items-center'
            onChange={(e)=>setName(e.target.value)}
            value={name}/>
            {nameError && <p className='text-red-600'>{nameError}</p>}
        </div>
        <div className='flex flex-col items-center'>
            <label mb-2>Email </label>
            <input type="email" 
            placeholder='Enter here email id'
            className='rounded p-2 border items-center'
            onChange={(e)=> setEmail(e.target.value)}
            value={email}/>
            {emailError && <p className='text-red-600'>{emailError}</p>}
        </div>
        <div className='flex flex-col items-center'>
            <label className='mb-2'>Password</label>
            <input type="password" 
            placeholder='Enter your password here'
            className='rounded p-2 border items-center'
            onChange={(e)=> setPassword(e.target.value)}
            value={password}/>
            {passwordError && <p className='text-red-600'>{passwordError}</p>}
        </div>
        <div className='flex flex-col items-center'>
            <label className='mb-2'>Conform Password</label>
            <input type="password"
            placeholder='Enter your confirm password here' 
            className='rounded p-2 border items-center'
            onChange={(e)=>setConfirmPassword(e.target.value)}
            value={confirmPassword}/>
            {confirmPasswordError && <p className='text-red-600'>{confirmPasswordError}</p>}
        </div>
      <button className='w-fit h-8 rounded px-1 bg-amber-50 text-black cursor-pointer hover:bg-amber-400 hover:text-white'  type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormValidation
