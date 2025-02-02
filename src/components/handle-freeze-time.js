const handleFreezeTimer = (powerUps, setPowerUps, setIsTimerFrozen) => {
    if (powerUps['Freeze Timer'] > 0) {
        setPowerUps((prev) => ({ ...prev, 'Freeze Timer': prev['Freeze Timer'] - 1 }));
        setIsTimerFrozen(true);

        setTimeout(() => {
        setIsTimerFrozen(false); // Unfreeze the timer after 30 seconds
        }, 30000); // Freeze for 30 seconds
    }
};

export default handleFreezeTimer;