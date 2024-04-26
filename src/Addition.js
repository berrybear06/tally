import React from 'react';
import Header from './Header';
import AdditionGame from './AdditionGame';

const Addition = () => {
	const headerName = "Addition";
	const headerDescription = "Two-choices, single-digit problems.";
	return (
		<div>
			<Header headerName={headerName} headerDescription={headerDescription} />
			<AdditionGame />
		</div>
	);
};

export default Addition;
