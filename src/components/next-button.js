const NextButton = ({ handleNextQuestion, selectedOption, currentQuestionIndex, totalQuestions, onClick }) => {
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1; // Check if it's the last question

  return (
    <button
      onClick={() => (isLastQuestion ? onClick() : handleNextQuestion())} // Trigger modal or go to next question
      disabled={!selectedOption} // Disable button if no option is selected
      className={`p-2 md:ml-[55vw] md:w-[10vw] w-full my-4 
        ${selectedOption ? "opacity-100 cursor-pointer" : "opacity-50 cursor-not-allowed"} 
        font-semibold text-md text-white bg-gradient-to-r from-primary to-secondary rounded-lg`}
    >
      {isLastQuestion ? "Submit" : "Next"} {/* Change the text if it's the last question */}
    </button>
  );
};

export default NextButton;
