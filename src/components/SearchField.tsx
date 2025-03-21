"use client"
import React, { useEffect, useMemo, useRef, useState } from 'react'
import PopupComponent from './PopupComponent';


const SearchField = () => {
    const [search, setSearch] = useState("");
    const [popup, setPopup] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const users = ["Vivek", "sumit", "Aakesh", "piyush", "debendu", "Abhishek", "ajay"];
    const inputRef = useRef<HTMLInputElement>(null)

    const filterData = useMemo(()=>{
        return users.filter((users)=> users.toLowerCase().includes(search.toLowerCase()))
    }, [users, search])

    useEffect(() => {
        if (users && inputRef.current) {
          inputRef.current.focus();
        }
      }, [users]);

      const handleToggle = () => {
        setPopup((prev) => !prev);
      }
      
  return (
    <div className='mt-10'>
      <h1>Search the data here</h1>
      <input type="text"
      ref={inputRef} 
      placeholder='Search data here'
      value={search}
      onChange={(e)=> setSearch(e.target.value)}
      />
      <ul>
      {search && filterData?.length === 0 ? (
        <li>Data is not available here</li>
      ) : (
        filterData?.map((users, index)=>{
            return <li key={index}>{users}</li>
        })
      )}

      </ul>
      <button onClick={handleToggle}>Click here to open popup</button>
      {popup && <PopupComponent onclose = {handleToggle}/>}
    </div>
  )
}

export default SearchField



// usememo => its is use for momoization the data and its not update unless and untill the dipendency will not change if the dependency will change then it will update 
// if the dependency will change then it will update the hole data
// usememo is use for memoization
