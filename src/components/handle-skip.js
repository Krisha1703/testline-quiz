const handleSkip = (setSelectedOption, setIsAnswerCorrect, setCurrentQuestionIndex, setPowerUps) => {
    setSelectedOption(null); // Reset selected option
    setIsAnswerCorrect(null); // Reset the answer correctness state
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1); // Move to the next question
    setPowerUps((prev) => ({ ...prev, 'Skip': prev['Skip'] - 1 })); // Decrease Skip power-up count
};

export default handleSkip;
