import React from 'react';

const AdditionButton = ({ value, correctAnswer, selectedAnswer, clickHandler }) => {
	// Determine button class based on selectedAnswer and correctness of value
	let buttonClass = 'btn btn-lg';
	if (selectedAnswer !== null) {
		buttonClass += value === correctAnswer ? ' btn-success' : ' btn-danger';
	} else {
		buttonClass += ' btn-primary';
	}

	return (
		<button className={buttonClass} onClick={() => clickHandler(value)}>
			{value}
		</button>
	);
};

export default AdditionButton;
