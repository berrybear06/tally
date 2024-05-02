import React from 'react';
import Game from './Game';
import { Link } from 'react-router-dom';
import SubtractionGame from './games/SubtractionGame';

const Subtraction = () => {
	const flavorText = "Two-choices, single-digit problems.";
	return (
		<div>
			<Link to="/"><p className="text-center mt-3 home-link">Back to Home</p></Link>
			<h1 className="text-center mt-3 mb-4">Subtraction</h1>
			<Game questionGenerator={SubtractionGame} flavorText={flavorText} />
		</div>
	);
};

export default Subtraction;
