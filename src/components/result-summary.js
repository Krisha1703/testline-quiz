import Link from "next/link";
const ResultSummaryModal = ({ 
    isOpen, 
    onClose, 
    points, 
    coins, 
    mistakeCount, 
    longestStreak, 
    currentStreak,
    finalScorePercentage,
    unansweredCount,
    onClick
  }) => {
    if (!isOpen) return null; 

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-lg p-8 w-[90%] md:w-[60%] lg:w-[40%]">
          {/* Modal Header with Close Icon */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-4">
                 🎉 Quiz Result Summary 🎉
            </h2>
            <span 
              onClick={onClose} 
              className="text-3xl cursor-pointer text-gray-700 hover:text-primary"
            >
              &times;
            </span>
          </div>
  
          {/* Result Content */}
          <div className="flex flex-col justify-between  text-center text-gray-700 space-y-6">
          <p className="text-2xl font-semibold text-primary">Final Score: {finalScorePercentage}%</p>
            <p>✅ <strong>Score:</strong> {points} points</p>
            <p>💰 <strong>Coins Earned:</strong> {coins}</p>
            <p>❌ <strong>Mistakes:</strong> {mistakeCount}</p>
            <p>🔥 <strong>Longest Streak:</strong> {longestStreak}</p>
            <p>⚡ <strong>Current Streak:</strong> {currentStreak}</p>
            <p>❓ <strong>Unanswered Questions:</strong> {unansweredCount}</p>
          </div>
  
          {/* Action Buttons */}
          <div className="flex md:flex-row flex-col  md:space-y-0 space-y-4 justify-between mt-6">
            <Link href={"/molecular"}>
                <button
                    onClick={onClick}
                    className="md:w-[10vw] w-full bg-gradient-to-l from-secondary to-primary text-white py-2 rounded-lg font-semibold"
                >
                    Retry
                </button>
            </Link>

            <Link href={"/"}>
                <button
                    className="md:w-[10vw] w-full bg-gradient-to-l from-secondary to-primary text-white py-2 rounded-lg font-semibold"
                >
                    Home
                </button>
            </Link>

            <Link href={"/"}>
                <button
                    className="md:w-[10vw] w-full bg-gradient-to-l from-secondary to-primary text-white py-2 rounded-lg font-semibold"
                >
                    Next Quiz
                </button>
            </Link>

          </div>

        </div>
      </div>
    );
  };
  
  export default ResultSummaryModal;
  