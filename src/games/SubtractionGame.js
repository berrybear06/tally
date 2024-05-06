import GameObject from '../GameObject';

const SubtractionGame = (answerCount) => {
	// Function to generate a random integer between min and max (inclusive)
	const getRandomInt = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	// Generate question
	const addend = getRandomInt(0, 9);
	const result = getRandomInt(0, 9);
	let num1, num2;
	if (addend < result) {
		// proper order
		num1 = result;
		num2 = addend;
	} else {
		// reverse order
		num1 = addend;
		num2 = result;
	}
	
	const correctAnswer = num1 - num2;
	const answerList = [GameObject({objText: correctAnswer})];
	const prevAnswers = [correctAnswer];
	for (let k = 0; k < answerCount - 1; k++) {
		let incorrectAnswer = getRandomInt(0, 9);
		while (prevAnswers.includes(incorrectAnswer)) {
			incorrectAnswer = getRandomInt(0, 9);
		}
		answerList.push(GameObject({objText: incorrectAnswer}));
		prevAnswers.push(incorrectAnswer);
	}
	
	return {
		question: GameObject({objText: `${num1} - ${num2} =`}),
		answerList: answerList,
		correctAnswer: correctAnswer
	};
};

export default SubtractionGame;
