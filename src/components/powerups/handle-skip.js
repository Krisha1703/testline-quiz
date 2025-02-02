const handleSkip = (setSelectedOption, setIsAnswerCorrect, setCurrentQuestionIndex, setPowerUps) => {
    setSelectedOption(null); 
    setIsAnswerCorrect(null); 
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1); 
    setPowerUps((prev) => ({ ...prev, 'Skip': prev['Skip'] - 1 })); 
};

export default handleSkip;
