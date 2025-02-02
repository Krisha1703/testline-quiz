import React from 'react'

const Solution = ({onClick, text}) => {
  return (
    <button
        className="w-full flex justify-between text-left text-white font-semibold bg-gradient-to-r from-primary to-secondary p-2 px-6 rounded-md"
        onClick={onClick}
    >
        <span>{text}</span>
        <span>&#43;</span>
    </button>

  )
}

export default Solution;