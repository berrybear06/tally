import React, { useState } from 'react';
import AnswerChoices from './AnswerChoices';
import './Game.css';

const Game = ({ questionGenerator, flavorText }) => {
	// Function to shuffle array
	const shuffle = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	};
	
	// State variables
	const [question, setQuestion] = useState(null);
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [questionsAttempted, setQuestionsAttempted] = useState(0);
	const [questionsCorrect, setQuestionsCorrect] = useState(0);
	const [showNextButton, setShowNextButton] = useState(false);
	const [gameStarted, setGameStarted] = useState(false);
	const [streak, setStreak] = useState(0);
	
	const handleButtonClick = (answer) => {
		if (selectedAnswer === null) {
			setSelectedAnswer(answer);
			setShowNextButton(true);
			
			// Update counters
			setQuestionsAttempted(questionsAttempted + 1);
			if (answer === question.correctAnswer) {
				setQuestionsCorrect(questionsCorrect + 1);
				setStreak(streak + 1);
			} else {
				setStreak(0);
			}
		}
	};
	
	const startGame = () => {
		console.log("game started")
		setGameStarted(true);
		setQuestionsCorrect(0);
		setQuestionsAttempted(0);
		nextQuestion();
	};
	
	const nextQuestion = () => {
		// Call question generator to generate problem
		const newQuestion = questionGenerator(streak >= 3 ? 3 : 2)
		shuffle(newQuestion.answerList);
		setQuestion(newQuestion);
		
		// Reset other states
		setSelectedAnswer(null);
		setShowNextButton(false);
	}
	
	return (
		<div className="container d-flex flex-column justify-content-between">
			{flavorText && !gameStarted && (
				<p className="text-center">{flavorText}</p>
			)}
			{/* Start button */}
			{!gameStarted &&
				(<div className="text-center">
					<button onClick={startGame}>Start</button>
				</div>)
			}
			
			{gameStarted && (
				<div>
					{/* Addition problem */}
					<h2 className="prompt-size-1 text-center">{question.question}</h2>
					
					{/* Buttons */}
					<AnswerChoices
						answerList={question.answerList}
						correctAnswer={question.correctAnswer}
						selectedAnswer={selectedAnswer}
						clickHandler={handleButtonClick}
					/>
					
					{/* Next question button */}
					{showNextButton && (
							<button onClick={nextQuestion} className="mt-3">Next Question</button>
					)}
				</div>
			)}
			
			{/* Display counters */}
			{questionsAttempted !== 0 && (
			<div className="mt-3 text-center">
				<p>Accuracy: {Math.round(100*questionsCorrect/questionsAttempted)}% ({questionsCorrect}/{questionsAttempted})</p>
			</div>
			)}
		</div>
	);
}

export default Game;
