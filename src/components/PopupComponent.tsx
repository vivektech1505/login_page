import React from 'react'

const PopupComponent = ({onclose} : {
  onclose: () => void
}) => {
  return (
    <div className='w-32 h-32 bg-red-500 text-xs text-white'>
      <h1>Hell popup hare</h1>
      <button onClick={onclose}></button>
    </div>
  )
}

export default PopupComponent

