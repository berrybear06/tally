import React from 'react';
import Header from './Header';
import Game from './Game';
import AdditionGame from './games/AdditionGame';

const Addition = () => {
	const headerName = "Addition";
	const headerDescription = "Two-choices, single-digit problems.";
	return (
		<div>
			<Header headerName={headerName} headerDescription={headerDescription} />
			<Game questionGenerator={AdditionGame} />
		</div>
	);
};

export default Addition;
