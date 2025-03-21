"use client"
import React from 'react'
import { useTheme } from '@/contexts/ThemeContext'

const ThemeToggle = () => {
    const {theme, toggleTheme} = useTheme();
  return (
    <div className='p-4 text-center bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText'>
        <p className='mb-4'>Current Theme : {theme}</p>
        <button className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800 cursor-pointer' onClick={()=>toggleTheme()}>Toggle Theme</button>
      
    </div>
  )
}

export default ThemeToggle
