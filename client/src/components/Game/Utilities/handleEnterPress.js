import { WORDS } from "../Consts/Words";


export const handleEnterPress = (guesses, setGuesses, currentGuess, setCurrentGuess, correctWord, setIsOver, turn, setTurn, setShowEndScreen, setIsCorrect, triggerError) => {
    if (currentGuess.length !== 5) {
        triggerError("Word must contain 5 letters")
        return;
    }
    if (!WORDS.includes(currentGuess)) {
        triggerError("Word must exist")
        return;
    }
    setTurn((prev) => prev + 1);

    const newGuesses = [...guesses];
    newGuesses[guesses.findIndex((val) => val == null)] = currentGuess;
    setGuesses(newGuesses);
    setCurrentGuess("");

    if (currentGuess === correctWord) {
        setIsOver(true);
        setIsCorrect(true);
        setShowEndScreen(true);
        return;
    }

    if (turn === 5) {
        setShowEndScreen(true);
        setIsCorrect(false);
        return;
    }
};