import React from 'react';
import Header from './Header';
import Game from './Game';
import AdditionGame from './games/AdditionGame';

const Addition = () => {
	const flavorText = "Two-choices, single-digit problems.";
	return (
		<div>
			<h1 class="text-center mt-5 mb-4">Addition</h1>
			<Game questionGenerator={AdditionGame} flavorText="Two-choices, single-digit problems." />
		</div>
	);
};

export default Addition;
