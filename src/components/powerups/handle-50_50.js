const handle50_50 = (setPowerUps, currentOptions, setCurrentOptions) => {
    if (!currentOptions || currentOptions.length === 0) {
        console.log("Current options: ", currentOptions);
        return; 
    }
    
    setPowerUps((prev) => ({ ...prev, '50/50': prev['50/50'] - 1 }));
    
    const incorrectIndices = currentOptions
        .map((option, idx) => {
        if (!option.is_correct && !option.hidden) return idx;
        return null;
        })
        .filter((idx) => idx !== null);

    console.log("Incorrect options: ", incorrectIndices);

    if (incorrectIndices.length < 2) {
        return;
    }

    const indicesToHide = [];
    while (indicesToHide.length < 2) {
        const randomIndex = incorrectIndices[Math.floor(Math.random() * incorrectIndices.length)];
        if (!indicesToHide.includes(randomIndex)) {
        indicesToHide.push(randomIndex);
        }
    }
    console.log("Incorrect options to hide: ", indicesToHide);

    const updatedOptions = currentOptions.filter((option, idx) => {
        if (indicesToHide.includes(idx)) {
        return false;
        }
        return true;
    });
    console.log("Updated options to display: ", updatedOptions);
    setCurrentOptions(updatedOptions);
};

export default handle50_50;