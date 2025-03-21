"use client"
import React, { useEffect, useRef, useState } from 'react'

const InputField = () => {
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(()=>{
        if(inputRef.current) {
            inputRef.current.focus();
        }
    },[])
    
  return (
    <div className='flex flex-col justify-between items-center mt-10'>
      <input type="text"
      placeholder='Enter text here'
      value={inputValue}
      onChange={(e)=> setInputValue(e.target.value)}
      ref={inputRef}
      />
      <br /><br />
      <p>You are Typed : <strong>{inputValue}</strong></p>
    </div>
  )
}

export default InputField
