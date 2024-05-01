import React from 'react';
import './AnswerChoices.css';
import XMark from './assets/icons/x-mark.png';

const AnswerChoices = ({ answerList, correctAnswer, selectedAnswer, clickHandler }) => {
	return (
		<div className="d-flex justify-content-center mt-3 mx-auto text-center answer-choice-row">
			{answerList.map((answer, index) => (
				<div key={index} className="position-relative">
					<button
						className={`prompt-size-1 btn btn-lg mx-2 btn-primary ${
							selectedAnswer !== null 
							&& (answer === correctAnswer ? 'button-correct' : 'button-incorrect') 
							}`}
						onClick={() => clickHandler(answer)}
					>
						{answer}
					</button>
					
					{selectedAnswer !== null && answer !== correctAnswer && (
						<img
							src={XMark}
							alt="Incorrect"
							className="x-mark"
						/>
					)}
				</div>
			))}
		</div>
	);
};

export default AnswerChoices;
