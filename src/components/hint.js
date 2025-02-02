import React from 'react'

const Hint = ({hint}) => {
  return (
    <div className="my-4 p-2 text-secondary font-semibold bg-white shadow-md rounded-md">
        <strong>Hint:</strong> {hint}
    </div>
  )
}

export default Hint