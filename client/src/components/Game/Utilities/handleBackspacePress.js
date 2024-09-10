export const handleBackspacePress = (currentGuess, setCurrentGuess) => {
    setCurrentGuess(currentGuess.slice(0, -1));
};