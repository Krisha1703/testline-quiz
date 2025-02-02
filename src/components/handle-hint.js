const handleHint = (powerUps, setPowerUps, currentQuestion, setHint, setShowHint) => {
    if (powerUps['Hint'] > 0 ) {
        setPowerUps((prev) => ({ ...prev, 'Hint': prev['Hint'] - 1 }));
    
        const periodIndex = currentQuestion.detailed_solution.indexOf('.');
        let hintText = currentQuestion.detailed_solution;
    
        if (periodIndex !== -1) {
            hintText = currentQuestion.detailed_solution.slice(0, periodIndex + 1);
        }
    
        setHint(hintText);
        setShowHint(true);
    };
}

export default handleHint;