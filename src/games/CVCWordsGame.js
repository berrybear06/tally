import GameObject from '../GameObject';
import wordList from './WordList';

const CVCWordGame = (answerCount) => {
	const getRandomWord = () => {
		let randomInt = Math.floor(Math.random() * wordList.length);
		return wordList[randomInt];
	};
	
	const correctAnswer = getRandomWord();
	const question = GameObject({objText: correctAnswer, objImage: `assets/cvc/${correctAnswer}.png`});
	const answerList = [GameObject({objText: correctAnswer, objImage: `assets/cvc/${correctAnswer}.png`})];
	const prevAnswers = [correctAnswer];
	for (let k = 0; k < answerCount - 1; k++) {
		let incorrectAnswer;
		do {
			incorrectAnswer = getRandomWord();
		}
		while (prevAnswers.includes(incorrectAnswer));
		answerList.push(GameObject({objText: incorrectAnswer, objImage: `assets/cvc/${incorrectAnswer}.png`}));
		prevAnswers.push(incorrectAnswer);
	}
	
	return {
		question: question,
		answerList: answerList,
		correctAnswer: correctAnswer
	};
};

export default CVCWordGame;
