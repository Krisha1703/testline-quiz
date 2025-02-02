import React from 'react'

const PowerButtonsEnabled = ({onClick, text, children}) => {
  return (
    <button onClick={onClick} className="w-[10vw] p-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg">
        {children} {text}
   </button>
  )
}

export default PowerButtonsEnabled