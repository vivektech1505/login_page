"use client"
import React, { useCallback, useMemo, useState } from 'react'

const UseMemoAndUseCallbackFunction = () => {
    const [serach, setSerach] = useState("")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const users = ["vivek", "kumar", "pal", "amar singh", "jyoti panday", "sumit kumar singh"];

    // const handleSearch = useCallback ((e : React.ChangeEvent<HTMLInputElement>) => {
    //    setSerach(e.target.value)
    // },[])
    
    const handleSearch = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
        setSerach(e.target.value)
    },[])
    

    const filterData = useMemo(()=> {
        return users.filter((users)=> users.toLowerCase().includes(serach.toLowerCase()))
    }, [serach, users])

    
  return (
    <div className='mt-10 mb-10'>
      <h1>Here i used UsecallBack and useMemo</h1>
      <input type="text"
      placeholder='enter here your data'
      value={serach}
    //   onChange={(e) => setSerach(e.target.value)}
    onChange={handleSearch}
      />
      <br /><br />
      <ul>
        {filterData.length === 0 ? (
            <li>No Data Found</li>
        ) : (
            filterData.map((user, index) => {
                return (
                    <li key={index}>{user}</li>
                )
            })
        )}
      </ul>
    </div>
  )
}

export default UseMemoAndUseCallbackFunction
