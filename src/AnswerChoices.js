import React from 'react';
import './AnswerChoices.css';
import XMark from './assets/icons/x-mark.png';

const AnswerChoices = ({ answerList, correctAnswer, selectedAnswer, clickHandler, toggleDisplay }) => {
	// Not toggled: images default, text when answered
	// Toggled: text default, images when answered
	const displayImage = !toggleDisplay || selectedAnswer !== null;
	const displayText = toggleDisplay || selectedAnswer !== null;
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
								{displayImage && 
									<img src={require(`./${answerObject.objImage}`)} alt={`Answer choice ${index+1}`} className="" />
								}
								{displayText &&
									<p className="prompt-size-2 m-0">{answerObject.objText}</p>
								}
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
