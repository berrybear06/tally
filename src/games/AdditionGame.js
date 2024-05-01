const AdditionGenerator = () => {
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
		num1 = addend;
		num2 = result - addend;
	} else {
		// reverse order
		num1 = result;
		num2 = addend - result;
	}
	
	const correctAnswer = num1 + num2;
	
	let incorrectAnswer = getRandomInt(0, 9);
	while (incorrectAnswer === correctAnswer) {
		incorrectAnswer = getRandomInt(0, 9);
	}
	
	const answerList = [];
	if (getRandomInt(0, 1) === 1) {
		answerList.push(correctAnswer, incorrectAnswer);
	} else {
		answerList.push(incorrectAnswer, correctAnswer);
	}
	
	return {
		question: `${num1} + ${num2} =`,
		answerList: answerList,
		correctAnswer: correctAnswer
	};
};

export default AdditionGenerator;
