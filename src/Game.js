import React, { useState } from 'react';
import AnswerChoices from './AnswerChoices';
import './Game.css';

const Game = ({ questionGenerator }) => {
	// State variables
	const [question, setQuestion] = useState(null);
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [questionsAttempted, setQuestionsAttempted] = useState(0);
	const [questionsCorrect, setQuestionsCorrect] = useState(0);
	const [showNextButton, setShowNextButton] = useState(false);
	const [gameStarted, setGameStarted] = useState(false);
	
	const handleButtonClick = (answer) => {
		if (selectedAnswer === null) {
			setSelectedAnswer(answer);
			setShowNextButton(true);
			
			// Update counters
			setQuestionsAttempted(questionsAttempted + 1);
			if (answer === question.correctAnswer) {
				setQuestionsCorrect(questionsCorrect + 1);
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
		const newQuestion = questionGenerator();
		setQuestion(newQuestion);
		
		// Reset other states
		setSelectedAnswer(null);
		setShowNextButton(false);
	}
	
	return (
		<div className="container d-flex flex-column justify-content-between">
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
						<div className="text-center mt-3">
							<button onClick={nextQuestion}>Next Question</button>
						</div>
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
