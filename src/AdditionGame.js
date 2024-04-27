import React, { useState, useEffect } from 'react';
import AnswerChoices from './AnswerChoices';
import './Game.css';

const AdditionActivity = () => {
	// State variables
	const [num1, setNum1] = useState(null);
	const [num2, setNum2] = useState(null);
	
	const [correctAnswer, setCorrectAnswer] = useState(null);
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [questionsAttempted, setQuestionsAttempted] = useState(0);
	const [questionsCorrect, setQuestionsCorrect] = useState(0);
	const [showNextButton, setShowNextButton] = useState(false);
	
	const [answer1, setAnswer1] = useState(null);
	const [answer2, setAnswer2] = useState(null);
	
	// useEffect ensures that dependencies num1, num2, correctAnswer are up-to-date
	useEffect(() => {
		if (num1 !== null) {
			setCorrectAnswer(num1+num2);
			
			var incorrectAnswer = getRandomInt(0, 9);
			while (incorrectAnswer === correctAnswer) {
				incorrectAnswer = getRandomInt(0, 9);
			}
			
			if (getRandomInt(0, 1) === 1) {
				setAnswer1(correctAnswer);
				setAnswer2(incorrectAnswer);
			} else {
				setAnswer1(incorrectAnswer);
				setAnswer2(correctAnswer);
			}
		}
	}, [num1, num2, correctAnswer]);
	
	// Function to generate a random integer between min and max (inclusive)
	const getRandomInt = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	// Function to start the activity
	const startActivity = () => {
		var addend = getRandomInt(0, 9);
		var result = getRandomInt(0, 9);
		if (addend < result) {
			// proper order
			setNum1(addend);
			setNum2(result-addend);
		} else {
			// reverse order
			setNum1(result);
			setNum2(addend-result)
		}
		setSelectedAnswer(null);
		setShowNextButton(false);
	};

	// Function to handle button click
	const handleButtonClick = (answer) => {
		if (selectedAnswer === null) {
			setSelectedAnswer(answer);
			setShowNextButton(true);

			// Update counters
			setQuestionsAttempted(questionsAttempted + 1);
			if (answer === correctAnswer) {
				setQuestionsCorrect(questionsCorrect + 1);
			}
		}
	};

	// Function to reset activity
	const resetActivity = () => {
		startActivity();
	};

	return (
		<div className="container d-flex flex-column justify-content-between">
			{/* Start button */}
			{num1 === null &&
				(<div className="text-center">
					<button onClick={startActivity}>Start</button>
				</div>)
			}
			
			{num1 !== null && (
				<div>
					{/* Addition problem */}
					<h2 className="prompt-size-1 text-center">{num1} + {num2} =</h2>
					
					{/* Buttons */}
					<AnswerChoices
						answerList={[answer1, answer2]}
						correctAnswer={correctAnswer}
						selectedAnswer={selectedAnswer}
						clickHandler={handleButtonClick}
					/>
					
					{/* Next question button */}
					{showNextButton && (
						<div className="text-center mt-3">
							<button onClick={resetActivity}>Next Question</button>
						</div>
					)}
				</div>
			)}

			{/* Display counters */}
			{ questionsAttempted !== 0 && (
			<div className="mt-3 text-center">
				<p>Accuracy: {Math.round(100*questionsCorrect/questionsAttempted)}% ({questionsCorrect}/{questionsAttempted})</p>
			</div>
			)}
		</div>
	);
};

export default AdditionActivity;
