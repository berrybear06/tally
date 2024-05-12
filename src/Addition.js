import React, { useEffect } from 'react';
import Game from './Game';
import { Link } from 'react-router-dom';
import AdditionGame from './games/AdditionGame';

const Addition = () => {
	useEffect(() => {
		document.title = "Addition";
	}, []);
	
	const flavorText = "Two-choices, single-digit problems.";
	return (
		<div>
			<Link to="/"><p className="text-center mt-3 home-link">Back to Home</p></Link>
			<h1 className="text-center mt-3">Addition</h1>
			<Game questionGenerator={AdditionGame} flavorText={flavorText} />
		</div>
	);
};

export default Addition;
