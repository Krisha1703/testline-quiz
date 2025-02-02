//Goes to the next question
const handleNextQuestion = (selectedOption, setSelectedOption, setIsAnswerCorrect, setCurrentQuestionIndex) => {
    if (!selectedOption) return;
    setSelectedOption(null);
    setIsAnswerCorrect(null);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
};

export default handleNextQuestion;