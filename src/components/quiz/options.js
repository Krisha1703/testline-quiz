
const Options = ({currentOptions, selectedOption, isAnswerCorrect, handleOptionClickWrapper}) => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 py-2">
        {currentOptions?.map((option, index) => (
        <button
            key={index}
            disabled={selectedOption}
            onClick={() => handleOptionClickWrapper(option)}
            className={` 
            ${selectedOption 
                ? (isAnswerCorrect && selectedOption === option 
                ? "bg-green-500 text-white"  
                : !isAnswerCorrect && selectedOption === option 
                ? "bg-red-500 text-white"   
                : "bg-white"                
                ) 
                : "bg-white"}  
            ${selectedOption 
                ? 'cursor-not-allowed' 
                : 'hover:bg-gradient-to-r from-primary to-secondary hover:text-white hover:border-transparent transition-all duration-300'} 
            md:w-[30vw] w-[50vw] py-2 md:py-3 text-gray-800 font-semibold md:text-lg text-sm rounded-lg shadow-md border-2 border-gray-300
            `}
        >
            {option.description}
        </button>
        ))}
    </div>
  )
}

export default Options