import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';
const Button = ({icon, bgColor, color, bgHoverColor, text, borderRadius, width}) => {
  const {setIsClicked, initialState} = useStateContext();
  
  return (
    <button
      type='button'
      onClick={() => setIsClicked(initialState)}
      style={{backgroundColor: bgColor, color, borderRadius}}
      className={`text-xl p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  )
}

export default Button
