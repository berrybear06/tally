import React from 'react';
import './AnswerChoices.css';
import XMark from './assets/icons/x-mark.png';

const AnswerChoices = ({ answerList, correctAnswer, selectedAnswer, clickHandler }) => {
	return (
		<div className="d-flex justify-content-center mt-3 mx-auto text-center answer-choice-row">
			{answerList.map((answerObject, index) => (
				<div key={index} className="position-relative">
					<button
						className={
							`btn btn-lg mx-2 ${answerObject.objImage !== undefined ? 'btn-image' : 'btn-primary'} ${
							selectedAnswer !== null ? (answerObject.objText === correctAnswer ? 'button-correct' : 'button-incorrect') : ''
							}`
						}
						onClick={() => clickHandler(answerObject.objText)}
					>
						{answerObject.objImage ? (
							<div>
								<img src={require(`./${answerObject.objImage}`)} alt={`Answer choice ${index+1}`} className="" />
								{(selectedAnswer !== null && <p className="prompt-size-2 m-0">{answerObject.objText}</p>)}
							</div>
						) : (
							<p className="prompt-size-1">{answerObject.objText}</p>
						)}
						
					</button>
					
					{selectedAnswer !== null && answerObject.objText !== correctAnswer && (
						<img src={XMark} alt="Incorrect" className="x-mark" />
					)}
				</div>
			))}
		</div>
	);
};

export default AnswerChoices;
