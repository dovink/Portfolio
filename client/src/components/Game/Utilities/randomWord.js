import { WORDS } from "../Consts/Words";


export const randomWord = () => {
    const correctWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    return correctWord;
};