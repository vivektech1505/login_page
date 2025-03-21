"use client"
import React, { useCallback, useState } from 'react'

const UseCallBackFunction = () => {
    const [name, setName] = useState("");

    const greeting = useCallback(()=>{
        if(name === ''){
            alert("Please enter your name");
            return;
        } else {
           alert("Hello, " + name);
           setName("")
        }
        
    },[name])

  return (
    <div className='mb-10 '>
      <h1 className='mb-10'>Use useCallBack function here for memoization</h1>
      <input type="text" 
      placeholder='Enter here your name'
      value={name}
      onChange={(e)=> setName(e.target.value)}
      className='border p-2 rounded w-32 focus:w-64'
      />
      <br /><br />
      <button className='cursor-pointer w-64 py-2 hover:bg-red-400 border rounded' onClick={()=>greeting()}>Click here to see the result</button>
    </div>
  )
}

export default UseCallBackFunction
