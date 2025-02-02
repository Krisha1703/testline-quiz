import React from 'react'

const AnswerStreak = ({streakMessage}) => {
  return (
    <div className="text-center text-lg mb-2 font-bold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
        {streakMessage}
    </div>
  )
}

export default AnswerStreak