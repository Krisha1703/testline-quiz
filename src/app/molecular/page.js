"use client";

//Importing components
import Navbar from "@/components/navbar";
import ProgressBar from "@/components/progress-bar";
import AnswerStreak from "@/components/answer-streak";
import QuizContainer from "@/components/quiz-container";
import Header from "@/components/header";
import DisplayPowerButtons from "@/components/display-power-buttons";

//Importing functions
import handle50_50 from "@/components/handle-50_50";
import handleSkip from "@/components/handle-skip";
import handleHint from "@/components/handle-hint";
import handleFreezeTimer from "@/components/handle-freeze-time";

//Importing other react libraries
import useQuizStore from "@/app/store/useQuizStore";
import { useState, useEffect } from "react";


const MolecularQuiz = () => {
    //Getting quiz data
    const { quizData, loading, error, shuffleQuestions } = useQuizStore();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentOptions, setCurrentOptions] = useState([]);
    const currentQuestion = quizData.questions[currentQuestionIndex];

    //Hint for current question
    const [hint, setHint] = useState("");
    const [showHint, setShowHint] = useState(false);

    //Timer
    const [timeLeft, setTimeLeft] = useState(900);
    const [isTimerFrozen, setIsTimerFrozen] = useState(false);

    //Quiz scoring
    const [points, setPoints] = useState(0);
    const [coins, setCoins] = useState(0);
    const [mistakeCount, setMistakeCount] = useState(0);
    const [streakCount, setStreakCount] = useState(0);
    const [longestStreak, setLongestStreak] = useState(0); 
    const [streakMessage, setStreakMessage] = useState("");
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
    const [unansweredCount, setUnansweredCount] = useState(10);
    const [finalScorePercentage, setFinalScorePercentage] = useState(0);

    //Selected option and powerups
    const [selectedOption, setSelectedOption] = useState(null); 
    const [powerUps, setPowerUps] = useState({
      '50/50': 0,  
      'Skip': 0,   
      'Hint': 0,    
      'Freeze Timer': 0, 
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    //Quiz Progress and result
    const totalQuestions = quizData?.questions?.length || 1;
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100; 
    const [showSummary, setShowSummary] = useState(false);

    //Check whether the quiz data from api is loaded correctly
    //if (loading) return <p>Loading...</p>;
    //if (error) return <p>Error: {error}</p>;

    //Initialies current options for the current question
    useEffect(() => {
      if (quizData?.questions?.length > currentQuestionIndex) {
          const options = quizData.questions[currentQuestionIndex].options || [];
          setCurrentOptions(options);
          console.log("Initialized currentOptions:", options);
        }
      }, [quizData, currentQuestionIndex]);
    
    //Handles modal toggling for power up modal
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    //Handles timer for the quiz
    useEffect(() => {
      if (timeLeft === 0 || isTimerFrozen) {
        setShowSummary(true);
        return;
      } 

      const timerInterval = setInterval(() => {
        setTimeLeft((prevTime) => Math.max(prevTime - 1, 0));
      }, 1000);

      return () => clearInterval(timerInterval); 
    }, [timeLeft, isTimerFrozen]);

    const handleRestart = () => {
      setSelectedOption(null); 
      setIsAnswerCorrect(null); 
      setCurrentQuestionIndex(0);
      setMistakeCount(0);
      setCoins(0);
      setPoints(0);
      setUnansweredCount(10);
      setFinalScorePercentage(0);
      setStreakCount(0);
      setStreakMessage("");
      setShowSummary(false);
      setTimeLeft(900);
      setIsModalOpen(false);
      shuffleQuestions();
    }

    return (
        <div className="w-full">
            <Navbar />

            <Header 
                toggleModal={toggleModal} 
                coins={coins} 
                setCoins={setCoins} 
                setPowerUps={setPowerUps} 
                handleRestart={handleRestart}
                shuffleQuestions={shuffleQuestions} 
                points={points}
                isModalOpen={isModalOpen}
            />
            
             {/* Display Power Buttons After Purchasing it */}
            <DisplayPowerButtons 
                handle50_50={() => handle50_50(setPowerUps, currentOptions, setCurrentOptions)} 
                handleSkip={() => handleSkip(setSelectedOption, setIsAnswerCorrect, setCurrentQuestionIndex, setPowerUps)} 
                handleHint={() => handleHint(powerUps, setPowerUps, currentQuestion, setHint, setShowHint)} 
                handleFreezeTimer={() => handleFreezeTimer(powerUps, setPowerUps, setIsTimerFrozen)}
                powerUps={powerUps}
            />

             {/* Answer Streak Message*/}
            {streakMessage && (
               <AnswerStreak streakMessage={streakMessage} />
            )}

            {/* Progress Bar */}
            <ProgressBar progress={progress} />


            {/* Quiz Container */}
            <QuizContainer 
              timeLeft={timeLeft}
              currentQuestionIndex={currentQuestionIndex}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
              currentQuestion={currentQuestion}
              currentOptions={currentOptions}
              coins={coins}
              points={points}
              setPoints={setPoints}
              setCoins={setCoins}
              streakCount={streakCount}
              setStreakCount={setStreakCount}
              setStreakMessage={setStreakMessage}
              setSelectedOption={setSelectedOption}
              selectedOption={selectedOption}
              isAnswerCorrect={isAnswerCorrect}
              setIsAnswerCorrect={setIsAnswerCorrect}
              showHint={showHint}
              hint={hint}
              quizData={quizData}
              mistakeCount={mistakeCount}
              longestStreak={longestStreak}
              setLongestStreak={setLongestStreak}
              showSummary={showSummary}
              setShowSummary={setShowSummary}
              finalScorePercentage={finalScorePercentage}
              setFinalScorePercentage={setFinalScorePercentage}
              setUnansweredCount={setUnansweredCount}
              unansweredCount={unansweredCount}
              setMistakeCount={setMistakeCount}
              setTimeLeft={setTimeLeft}
            />
            
        </div>
    );
};

export default MolecularQuiz;
