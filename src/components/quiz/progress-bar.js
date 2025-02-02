import React from 'react'

const ProgressBar = ({progress}) => {
  return (
    <div className="w-3/4 mx-auto bg-gray-300 rounded-full h-4 mb-8">
        <div
            className="bg-gradient-to-r from-primary to-secondary h-4 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
        ></div>
    </div>
  )
}

export default ProgressBar