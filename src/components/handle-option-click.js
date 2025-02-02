// OptionHandler.js
const handleOptionClick = (option, stateHandlers) => {
    const {
        setSelectedOption,
        setIsAnswerCorrect,
        setStreakCount,
        setStreakMessage,
        setLongestStreak,
        setPoints,
        setCoins,
        setUnansweredCount,
        setFinalScorePercentage,
        setMistakeCount,
        setShowSummary,
        finalScorePercentage,
        setQuizFailed,
        streakCount,
        longestStreak,
        correctCount,
        mistakeCount,
        quizData,
        unansweredCount
    } = stateHandlers;

    setSelectedOption(option);
    const isCorrect = option.is_correct;
    setIsAnswerCorrect(isCorrect);
    console.log("old unansweredCount : ", unansweredCount);
    setUnansweredCount((prevCount) => prevCount - 1);
    console.log("new unansweredCount : ", unansweredCount);

    if (isCorrect) {
        const newStreak = streakCount + 1;
        setStreakCount(newStreak);
        setStreakMessage(`${newStreak} in a row!`);

        setLongestStreak((prevLongest) => Math.max(prevLongest, newStreak));
        setPoints((prevPoints) => prevPoints + 4 + newStreak);
        setCoins((prevCoins) => prevCoins + 1);
       
        setFinalScorePercentage((prevScore) => prevScore + 10);
        console.log("finalScorePercentage : ", finalScorePercentage);
    } else {
        setMistakeCount((prevCount) => prevCount + 1);
        setPoints((prevPoints) => prevPoints - 1);

        if (mistakeCount + 1 >= quizData.max_mistake_count) {
            setShowSummary(true);
            setQuizFailed(true);
        }
        console.log("mistakeCount : ", mistakeCount);
        setStreakMessage(streakCount >= 2 ? "Oh no, your answer streak is lost!" : "");
        setStreakCount(0);
    }

};

export default handleOptionClick;
