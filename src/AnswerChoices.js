import React from 'react';
import './AnswerChoices.css';

const AnswerChoices = ({ answerList, correctAnswer, selectedAnswer, clickHandler }) => {
	return (
		<div className="d-flex justify-content-center mt-3 mx-auto text-center answer-choice-row">
			{answerList.map((answer, index) => (
				<button
					key={index}
					className={`prompt-size-1 btn btn-lg mx-2 ${selectedAnswer !== null ? (answer === correctAnswer ? 'btn-success' : 'btn-danger') : 'btn-primary'}`}
					onClick={() => clickHandler(answer)}
				>
					{answer}
				</button>
			))}
		</div>
	);
};

export default AnswerChoices;
