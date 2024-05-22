import React, { useState } from 'react';
import AnswerChoices from './AnswerChoices';
import './Game.css';

const Game = ({ questionGenerator, flavorText, showToggle }) => {
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
	const [toggle, setToggle] = useState(false);
	
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
	
	const toggleDisplay = () => {
		setToggle(toggle ? false : true);
	}
	
	return (
		<div className="container d-flex flex-column text-center">
			{/* Start button */}
			{!gameStarted &&
				(<div>
					{flavorText && (<p>{flavorText}</p>)}
					<button onClick={startGame}>Start</button>
				</div>)
			}
			
			{gameStarted && (
				<div className={`position-relative ${question.answerList[0].objImage ? "adjust-height-image" : "adjust-height-text"}`}>
					{/* Toggle button */}
					{showToggle && (
						<button id="btn-toggle" className="btn position-absolute mx-2" onClick={toggleDisplay}>
							Toggle Displays
						</button>
					)}
					{/* Question */}
					{question.question.objImage && toggle &&
						<img src={require(`./${question.question.objImage}`)} alt="Question" className="q-img" />
					}
					{question.question.objText && !toggle &&
						<h2 className="prompt-size-1 text-center">{question.question.objText}</h2>
					}
					
					{/* Buttons */}
					<AnswerChoices
						answerList={question.answerList}
						correctAnswer={question.correctAnswer}
						selectedAnswer={selectedAnswer}
						clickHandler={handleButtonClick}
						toggleDisplay={toggle}
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
