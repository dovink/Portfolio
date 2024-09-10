export const handleLetterPress = (key, currentGuess, setCurrentGuess, triggerError) => {
    const isLetter = /^[a-zA-Z]$/.test(key);

    if (!isLetter) {
        triggerError("Please use only letters from the alphabet")
        return;
    }

    if (currentGuess.length >= 5) {
        triggerError("Word can not be longer than 5 letters")
        return;
    }
    setCurrentGuess(currentGuess + key.toLowerCase());
};