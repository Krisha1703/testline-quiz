import { motion } from "framer-motion";
import formatTime from "@/components/timer"; 
import handleOptionClick from "@/components/handle-option-click"; 
import Hint from "@/components/hint"; 
import NextButton from "@/components/next-button";
import handleNextQuestion from "@/components/handle-next";
import { useState, useEffect } from "react";
import Solution from "./solution";
import renderExplanationContent from "./render-explanation";
import Options from "./options";
import ResultSummaryModal from "./result-summary";

const QuizContainer = ({ 
    timeLeft, 
    coins,
    points,
    mistakeCount,
    currentQuestionIndex, 
    setCurrentQuestionIndex,
    currentQuestion, 
    currentOptions, 
    setPoints, 
    setCoins, 
    streakCount, 
    setStreakCount, 
    setStreakMessage, 
    setSelectedOption, 
    selectedOption, 
    isAnswerCorrect, 
    setIsAnswerCorrect, 
    showHint, 
    hint,
    longestStreak,
    setLongestStreak,
    quizData,
    showSummary,
    setShowSummary,
    setMistakeCount,
    setTimeLeft,
    setUnansweredCount,
    setFinalScorePercentage,
    finalScorePercentage,
    unansweredCount
  }) => {

    const [showExplanation, setShowExplanation] = useState(false);
    const [showReadingMaterial, setShowReadingMaterial] = useState(false);
    const [showPracticeMaterial, setShowPracticeMaterial] = useState(false);
   

    const handleToggleExplanation = () => setShowExplanation((prev) => !prev);
    const handleToggleReadingMaterial = () => setShowReadingMaterial((prev) => !prev);
    const handleTogglePracticeMaterial = () => setShowPracticeMaterial((prev) => !prev);

    const renderHTMLContent = (htmlContent) => {
        return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
    };

    const handleQuizSubmit = () => {
        setShowSummary(true); // Show the summary modal
      };
    
      const handleCloseSummary = () => {
        setShowSummary(false); // Close modal
      };
   
     

      const stateHandlers = {
        setSelectedOption,
        setIsAnswerCorrect,
        setStreakCount,
        setStreakMessage,
        setLongestStreak,
        setPoints,
        setCoins,
        setUnansweredCount,
        finalScorePercentage,
        setFinalScorePercentage,
        setMistakeCount,
        setShowSummary,
        quizData,
        unansweredCount,
        streakCount,
        longestStreak,
        mistakeCount,
        setUnansweredCount,
        setFinalScorePercentage,
        finalScorePercentage,
        unansweredCount
    };

    const handleOptionClickWrapper = (option) => {
        handleOptionClick(option, stateHandlers);
    };

  // Check if quiz failed
  useEffect(() => {
    if (mistakeCount >= 9 || finalScorePercentage < 0) {
      setShowSummary(true);
    }
  }, [mistakeCount], [finalScorePercentage]);

  const handleRestart = () => {
    setSelectedOption(null); 
    setIsAnswerCorrect(null); 
    setCurrentQuestionIndex(0);
    setMistakeCount(0);
    setCoins(0);
    setPoints(0);
    setStreakCount(0);
    setStreakMessage("");
    setShowSummary(false);
    setTimeLeft(900);
  }

  
    return (
      <div className="w-3/4 mx-auto relative p-[4px] rounded-lg bg-gradient-to-r from-primary to-secondary">
        <motion.div className="bg-white h-full cursor-pointer rounded-lg shadow-md p-4 flex justify-center items-center flex-col">
          
          {/* Timer */}
          <button className="absolute -top-5 p-2 px-8 font-semibold text-md text-white bg-gradient-to-r from-primary to-secondary rounded-lg">
            {formatTime(timeLeft)}
          </button>
  
          {/* Current Question */}
          <h1 className="md:text-xl text-md font-bold my-4">Q{currentQuestionIndex + 1} {currentQuestion?.description}</h1>
  
          {/* Options */}
         <Options currentOptions={currentOptions} selectedOption={selectedOption} isAnswerCorrect={isAnswerCorrect} handleOptionClickWrapper={handleOptionClickWrapper}/>
  
          {/* Hint */}
          {showHint && (
            <Hint hint={hint} />
          )}
  
          {selectedOption && (
          <div className="mt-5">
            {/* Explanation Section */}
            <Solution onClick={handleToggleExplanation} text={"Explanation"} />
                {showExplanation && currentQuestion?.detailed_solution && (
                    <div className="p-4 bg-white mt-2 rounded-md shadow-md">
                        {renderExplanationContent(currentQuestion?.detailed_solution)}
                    </div>
                )}


            {/* Reading Material Section */}
            <div className="mt-4">
                <Solution onClick={handleToggleReadingMaterial} text={"Reading Material"} />
                {showReadingMaterial && (
                    <div className="p-4 bg-white mt-2 rounded-md shadow-md">
                        {currentQuestion.reading_material && currentQuestion.reading_material.content_sections && currentQuestion.reading_material.content_sections.length > 0 ? (
                            currentQuestion.reading_material.content_sections.map((section, index) => (
                                <div key={index} className="mb-4">
                                    {renderHTMLContent(section)}
                                </div>
                            ))
                            ) : (
                            <p className="text-gray-600">No reading material available.</p>
                        )}
                    </div>
                )}
            </div>

            {/* Practice Material Section */}
            <div className="mt-4">
                <Solution onClick={handleTogglePracticeMaterial} text={"Practice Material"} />
                {showPracticeMaterial && (
                    <div className="p-4 bg-white mt-2 rounded-md shadow-md">
                        {currentQuestion.reading_material && currentQuestion.reading_material.practice_material && currentQuestion.reading_material.practice_material.content && currentQuestion.reading_material.practice_material.content.length > 0 ? (
                            currentQuestion.reading_material.practice_material.content.map((section, index) => (
                                <div key={index} className="mb-4">
                                    {renderHTMLContent(section)}
                                </div>
                            ))
                            ) : (
                            <p className="text-gray-600">No practice material available.</p>
                        )}
                    </div>
                )}
            </div>
  
            {currentQuestionIndex < quizData?.questions?.length && (
                <NextButton 
                    handleNextQuestion={() => handleNextQuestion(selectedOption, setSelectedOption, setIsAnswerCorrect, setCurrentQuestionIndex)} 
                    selectedOption={selectedOption} 
                    currentQuestionIndex={currentQuestionIndex}
                    totalQuestions={quizData.questions.length}
                    onClick={handleQuizSubmit} 
                />
            )}
            
          </div>
        )}
        {/* Quiz Summary Modal */}
        <ResultSummaryModal
            isOpen={showSummary}
            onClose={handleCloseSummary}
            points={points}
            coins={coins}
            mistakeCount={mistakeCount}
            currentStreak={streakCount}
            longestStreak={longestStreak}
            finalScorePercentage={finalScorePercentage}
            onClick={handleRestart}
            unansweredCount={unansweredCount}
        />
        </motion.div>
      </div>
    );
  };
  
  export default QuizContainer;
  